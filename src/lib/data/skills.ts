export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "DEVELOPMENT",
    items: ["JAVA", "REACT / NEXT.JS", "PYTHON", "TAILWIND CSS"],
  },
  {
    title: "BACKEND",
    items: ["NODE.JS / EXPRESS", "SUPABASE / FIREBASE", "REST APIs", "SQL / NoSQL"],
  },
  {
    title: "TOOLS & INFRA",
    items: ["GEN AI", "GITHUB", "DOCKER", "CLOUD COMPUTING"],
  },
  {
    title: "INTERESTS",
    items: ["GAME DEVELOPMENT", "AI / ML", "PHOTOGRAPHY", "CYBERSECURITY"],
  },
];

export const fieldsOfStudy = [
  {
    title: "Code",
    description: "Full-stack development — from pixel-perfect UIs to scalable backend systems.",
    icon: "Terminal" as const,
  },
  {
    title: "Gaming",
    description: "Competitive gamer and aspiring game dev. From FPS lobbies to voxel engines.",
    icon: "Gamepad2" as const,
  },
  {
    title: "Fitness",
    description: "Gym, boxing, calisthenics — disciplined body, disciplined code.",
    icon: "Dumbbell" as const,
  },
  {
    title: "Sports",
    description: "Football, cricket, badminton — team player on and off the field.",
    icon: "Trophy" as const,
  },
];

export const experimentLogs = [
  "Shipped AI Tools Directory — 500+ tools auto-indexed and published.",
  "Exploring voxel engine architecture. Greedy meshing is surprisingly satisfying.",
];
