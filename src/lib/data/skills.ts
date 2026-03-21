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
  "Hit a new bench press PR at the gym. Progressive overload is just recursion for muscles.",
  "Weekend cricket match — scored 45 off 30 balls. Not bad for a programmer.",
  "Exploring voxel engine architecture. Greedy meshing is surprisingly satisfying.",
  "Long ride to Puri on the bike. 100km in 2 hours. Wind therapy > any debugger.",
];
