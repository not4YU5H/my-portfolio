export interface Project {
  slug: string;
  title: string;
  description: string;
  sector: string;
  deploymentDate: string;
  objectiveStatus: string;
  refId: string;
  missionBrief: string;
  primaryChallenge: string;
  solutionMandate: string;
  engineeringLog: string;
  interfaceArchitecture: string;
  codeSnippet: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "ai-tools-directory",
    title: "AI_TOOLS_DIRECTORY",
    description:
      "Full-stack autonomous AI tools directory with auto-discovery, content generation, and SEO-optimized publishing.",
    sector: "FULLSTACK_WEB",
    deploymentDate: "13_MAR_2025",
    objectiveStatus: "ACTIVE",
    refId: "AJ-001-ALPHA",
    missionBrief:
      "The AI landscape lacked a curated, auto-updating directory of tools. The objective was to build a platform that autonomously discovers, categorizes, and publishes AI tool listings with rich generated content and SEO optimization.",
    primaryChallenge:
      "Automating the discovery pipeline while maintaining content quality and ensuring each generated page meets modern SEO standards without manual intervention.",
    solutionMandate:
      "Architect a Next.js + Supabase stack with Gemini API integration for content generation, automated cron-based discovery, and server-side rendering for SEO.",
    engineeringLog:
      "Implemented a full data pipeline from tool discovery to page generation. Used Supabase for backend, Gemini for content, and Next.js App Router for SSR. Dark mode UI with admin auth.",
    interfaceArchitecture:
      "A directory-style UI with filterable categories, search, and individually generated tool pages — each with auto-generated descriptions, use cases, and comparisons.",
    codeSnippet: `// AUTO_DISCOVERY_PIPELINE
const tools = await discoverNewTools();
const content = await gemini.generate({
  prompt: buildToolProfile(tool),
  format: 'structured'
});
await supabase.from('tools').insert(content);`,
    metrics: [
      {
        label: "TOOLS_INDEXED",
        value: "500+",
        description: "Auto-discovered and published",
      },
      {
        label: "SEO_SCORE",
        value: "95+",
        description: "Lighthouse performance",
      },
      {
        label: "BUILD_TIME",
        value: "<3s",
        description: "Incremental page generation",
      },
    ],
  },
  {
    slug: "portfolio-hud",
    title: "PORTFOLIO_HUD_V4",
    description:
      "Tactical HUD-themed personal portfolio with brutalist design, Framer Motion animations, and dynamic project routes.",
    sector: "FRONTEND_SYS",
    deploymentDate: "21_MAR_2025",
    objectiveStatus: "COMPLETE",
    refId: "AJ-002-BRAVO",
    missionBrief:
      "Standard portfolio templates lack personality and technical depth. The mission was to design a portfolio that reflects a builder's mindset — immersive, tactical, and data-driven.",
    primaryChallenge:
      "Translating a Stitch design prototype into pixel-accurate, responsive Next.js code while maintaining the brutalist HUD aesthetic across all breakpoints.",
    solutionMandate:
      "Convert the Stitch design system into Tailwind CSS v4 theme tokens, build reusable section components, and implement dynamic project detail routes with static generation.",
    engineeringLog:
      "Built a complete design token system mapping Stitch's tonal hierarchy to Tailwind v4 @theme directives. Implemented glassmorphism navbar, tactical grid overlays, and scroll-triggered animations.",
    interfaceArchitecture:
      "A single-page app with smooth scroll sections (Hero, Archive, Lab, Uplink) and dynamically generated project deep-dive pages with metrics and code snippets.",
    codeSnippet: `// TACTICAL_GRID_OVERLAY
.tactical-grid {
  background-image:
    linear-gradient(rgba(223,226,235,0.03) 1px,
      transparent 1px),
    linear-gradient(90deg,
      rgba(223,226,235,0.03) 1px,
      transparent 1px);
  background-size: 24px 24px;
}`,
    metrics: [
      {
        label: "LIGHTHOUSE",
        value: "98",
        description: "Performance score",
      },
      {
        label: "SECTIONS",
        value: "6",
        description: "Animated page sections",
      },
      {
        label: "LOAD_TIME",
        value: "<1s",
        description: "First contentful paint",
      },
    ],
  },
  {
    slug: "game-engine-prototype",
    title: "VOXEL_ENGINE_X",
    description:
      "Custom voxel-based game engine prototype with real-time chunk rendering and procedural terrain generation.",
    sector: "GAME_DEV_03",
    deploymentDate: "10_DEC_2024",
    objectiveStatus: "IN_PROGRESS",
    refId: "AJ-003-CHARLIE",
    missionBrief:
      "Exploring game engine architecture from scratch — building a voxel renderer with chunk-based world loading, procedural generation, and basic physics as a passion project.",
    primaryChallenge:
      "Achieving smooth 60fps rendering with dynamically loaded voxel chunks while implementing greedy meshing and frustum culling for performance.",
    solutionMandate:
      "Build a WebGL/Three.js based voxel engine with worker-thread chunk generation, greedy mesh optimization, and a custom ECS (Entity Component System).",
    engineeringLog:
      "Implemented octree-based spatial partitioning for collision detection. Chunk generation runs on Web Workers to avoid main-thread blocking. Procedural noise generates diverse biomes.",
    interfaceArchitecture:
      "First-person camera with WASD controls, block placement/destruction, and a debug HUD showing FPS, chunk count, and memory usage.",
    codeSnippet: `// CHUNK_GENERATOR
const worker = new Worker('./chunkGen.js');
worker.postMessage({
  x: chunkX, z: chunkZ,
  seed: worldSeed
});
worker.onmessage = (e) => {
  scene.add(buildMesh(e.data));
};`,
    metrics: [
      {
        label: "RENDER_FPS",
        value: "60+",
        description: "Stable frame rate",
      },
      {
        label: "CHUNK_SIZE",
        value: "16³",
        description: "Voxels per chunk",
      },
      {
        label: "RENDER_DIST",
        value: "12",
        description: "Chunks visible radius",
      },
    ],
  },
  {
    slug: "fitness-tracker-cli",
    title: "FIT_CLI",
    description:
      "Terminal-based fitness tracker for logging workouts, tracking PRs, and visualizing progress — built for gym rats who love the terminal.",
    sector: "TOOLS_04",
    deploymentDate: "15_JAN_2025",
    objectiveStatus: "COMPLETE",
    refId: "AJ-004-DELTA",
    missionBrief:
      "Fitness apps are bloated with ads and unnecessary features. The mission was to build a minimal, fast, terminal-based workout logger that respects the user's time and data.",
    primaryChallenge:
      "Designing an intuitive TUI that makes logging sets, reps, and weights as fast as possible while providing meaningful analytics and progress tracking.",
    solutionMandate:
      "Build a Rust-based CLI with SQLite storage, rich TUI for data visualization, and export capabilities for workout history.",
    engineeringLog:
      "Used the ratatui crate for terminal UI, serde for config management, and SQLite for persistent storage. Added ASCII chart rendering for progress visualization.",
    interfaceArchitecture:
      "A multi-tab TUI with workout logging, exercise library, PR board, and weekly/monthly progress charts — all navigable via keyboard shortcuts.",
    codeSnippet: `// WORKOUT_LOG
let set = WorkoutSet {
  exercise: "Bench Press",
  weight: 80.0,
  reps: 8,
  timestamp: Utc::now(),
};
db.insert_set(&set)?;
println!("✓ Logged: {}kg x{}", set.weight, set.reps);`,
    metrics: [
      {
        label: "BOOT_TIME",
        value: "<20ms",
        description: "Instant launch",
      },
      {
        label: "STORAGE",
        value: "<1MB",
        description: "SQLite database size",
      },
      {
        label: "EXERCISES",
        value: "50+",
        description: "Built-in library",
      },
    ],
  },
  {
    slug: "cricket-score-bot",
    title: "CRICKET_LIVE_BOT",
    description:
      "Real-time cricket score bot for Discord/Telegram with live ball-by-ball updates, match alerts, and stats.",
    sector: "AUTOMATION_05",
    deploymentDate: "08_FEB_2025",
    objectiveStatus: "COMPLETE",
    refId: "AJ-005-ECHO",
    missionBrief:
      "Following live cricket across multiple sources is fragmented. The objective was a single bot that delivers ball-by-ball updates, key match events, and player stats directly to group chats.",
    primaryChallenge:
      "Scraping live score data reliably with minimal latency while formatting updates for readability across different messaging platforms.",
    solutionMandate:
      "Build a Node.js bot with WebSocket connections to live score APIs, event-driven architecture for match state changes, and platform-agnostic message formatting.",
    engineeringLog:
      "Implemented a pub/sub model for match subscriptions. Each match runs as an independent event loop with configurable update frequency and smart deduplication.",
    interfaceArchitecture:
      "Slash commands for subscribing to matches, setting alert preferences, and querying player/team statistics. Rich embeds for wickets, milestones, and match summaries.",
    codeSnippet: `// MATCH_SUBSCRIPTION
bot.on('/subscribe', async (ctx) => {
  const match = await api.getLiveMatch(ctx.args);
  subscriptions.add(ctx.chatId, match.id);
  ctx.reply(\`🏏 Subscribed: \${match.title}\`);
  startLiveUpdates(match.id, ctx.chatId);
});`,
    metrics: [
      {
        label: "LATENCY",
        value: "<5s",
        description: "Score update delay",
      },
      {
        label: "MATCHES",
        value: "10+",
        description: "Concurrent tracking",
      },
      {
        label: "UPTIME",
        value: "99.5%",
        description: "Bot availability",
      },
    ],
  },
];
