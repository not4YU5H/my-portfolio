export interface TimelineEntry {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "work" | "achievement";
  tags?: string[];
}

export const timelineEntries: TimelineEntry[] = [
  {
    year: "2025",
    title: "Full-Stack Developer",
    organization: "Freelance & Open Source",
    description:
      "Building production-grade web applications, AI agents, and open-source tools. Shipped 5+ projects across fullstack, game dev, and cybersecurity domains.",
    type: "work",
    tags: ["NEXT.JS", "REACT", "AI", "PYTHON"],
  },
  {
    year: "2024",
    title: "B.Tech Computer Science",
    organization: "KIIT University, Bhubaneswar",
    description:
      "Graduated with a focus on software engineering, data structures, and artificial intelligence. Actively participated in hackathons and coding competitions.",
    type: "education",
    tags: ["CS", "DSA", "AI/ML"],
  },
  {
    year: "2023",
    title: "Published: Reckless Racer",
    organization: "Indus Appstore",
    description:
      "Designed and published an arcade racing game on the Indus Appstore using Unity Engine. Achieved a 5.0 rating with optimized 60 FPS performance on low-end devices.",
    type: "achievement",
    tags: ["UNITY", "C#", "GAME DEV"],
  },
  {
    year: "2022",
    title: "Open Source Contributions",
    organization: "GitHub Community",
    description:
      "Started contributing to open-source projects and building personal developer tools. Began exploring full-stack development with React and Node.js.",
    type: "work",
    tags: ["REACT", "NODE.JS", "OPEN SOURCE"],
  },
];
