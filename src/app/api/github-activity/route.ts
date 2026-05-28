import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/users/not4YU5H/events/public?per_page=15", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const events = await response.json();

    const allowedTypes = ["PushEvent", "CreateEvent", "ReleaseEvent", "WatchEvent", "PullRequestEvent"];
    const meaningfulEvents = events.filter((e: { type: string }) => allowedTypes.includes(e.type));

    const formattedLogs: string[] = [];

    for (const event of meaningfulEvents) {
      if (formattedLogs.length >= 4) break; // Limit to 4 live logs

      const repoName = event.repo.name.replace("not4YU5H/", "");

      switch (event.type) {
        case "PushEvent":
          const commitCount = event.payload.commits?.length || 1;
          formattedLogs.push(`Pushed ${commitCount} commit(s) to ${repoName}`);
          break;
        case "CreateEvent":
          const refType = event.payload.ref_type;
          const refName = event.payload.ref;
          if (refType === "repository") {
            formattedLogs.push(`Created repository ${repoName}`);
          } else {
            formattedLogs.push(`Created ${refType} '${refName}' in ${repoName}`);
          }
          break;
        case "ReleaseEvent":
          const tagName = event.payload.release?.tag_name || "a release";
          formattedLogs.push(`Released ${tagName} on ${repoName}`);
          break;
        case "WatchEvent":
          formattedLogs.push(`Starred repository ${repoName}`);
          break;
        case "PullRequestEvent":
           if (event.payload.action === "opened") {
               formattedLogs.push(`Opened pull request in ${repoName}`);
           } else if (event.payload.action === "closed" && event.payload.pull_request?.merged) {
               formattedLogs.push(`Merged pull request in ${repoName}`);
           }
           break;
        default:
          break;
      }
    }

    return NextResponse.json({ logs: formattedLogs });
  } catch (error) {
    console.error("Failed to fetch GitHub activity:", error);
    return NextResponse.json({ logs: [] }, { status: 500 });
  }
}
