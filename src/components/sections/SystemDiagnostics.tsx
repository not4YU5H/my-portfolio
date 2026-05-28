"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { experimentLogs } from "@/lib/data/skills";
import { useEffect, useState } from "react";

export function SystemDiagnostics() {
  const [liveLogs, setLiveLogs] = useState<string[]>([]);

  useEffect(() => {
    async function fetchGitHubActivity() {
      try {
        const res = await fetch("https://api.github.com/users/not4YU5H/events/public?per_page=10", {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        });
        if (res.ok) {
          const events = await res.json();
          const allowedTypes = ["PushEvent", "CreateEvent", "ReleaseEvent"];
          const meaningfulEvents = events.filter((e: { type: string }) => allowedTypes.includes(e.type));

          const formattedLogs: string[] = [];

          for (const event of meaningfulEvents) {
            if (formattedLogs.length >= 5) break;

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
                  formattedLogs.push(`Created new repository: ${repoName}`);
                } else if (refType === "branch") {
                  formattedLogs.push(`Created branch '${refName}' in ${repoName}`);
                }
                break;
              case "ReleaseEvent":
                const tagName = event.payload.release?.tag_name || "a release";
                formattedLogs.push(`Released ${tagName} on ${repoName}`);
                break;
            }
          }
          setLiveLogs(formattedLogs);
        }
      } catch (error) {
        // Silently fail and fallback to static logs
        console.error("Error fetching github activity client-side:", error);
      }
    }
    fetchGitHubActivity();
  }, []);

  // Show only 1-2 pinned hardcoded entries + live events
  // Assuming experimentLogs[0] is the AI Tools directory string
  const pinnedLogs = [experimentLogs[0]];
  const allLogs = [...pinnedLogs, ...liveLogs];

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Experiment Log */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-surface-container-low p-8 space-y-6 ghost-border"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-primary-container" />
              <h3 className="font-headline text-sm font-bold tracking-widest text-on-surface">
                Activity_Log
              </h3>
            </div>
            <div className="space-y-4">
              {allLogs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 bg-primary-container/60 flex-shrink-0" />
                  <p className="font-body text-sm text-secondary leading-relaxed">
                    {log}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
