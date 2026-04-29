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
  githubUrl?: string;
  liveUrl?: string;
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
    slug: "mood-buster",
    title: "MOOD_BUSTER",
    description:
      "Intelligent mood-tracking and sentiment analysis platform designed to recognize emotional patterns and provide actionable well-being insights.",
    sector: "DATA_ANALYTICS_02",
    deploymentDate: "10_DEC_2024",
    objectiveStatus: "COMPLETE",
    refId: "AJ-002-BRAVO",
    missionBrief:
      "Mental health tracking often relies on tedious manual entry. The mission was to build an intelligent platform that organically captures daily sentiment and visualizes long-term emotional trajectories.",
    primaryChallenge:
      "Building a secure, private backend that accurately processes human sentiment from text input without compromising user data sovereignty.",
    solutionMandate:
      "Develop a React-based frontend with a Python backend integrating NLP models for text analysis, storing encrypted logs in a secure database.",
    engineeringLog:
      "Implemented a Natural Language Processing pipeline to analyze daily journal entries. Built an interactive calendar heatmap on the frontend to visualize mood fluctuations over time.",
    interfaceArchitecture:
      "A minimalist, distraction-free journaling interface paired with an analytics dashboard showing sentiment trends, emotional triggers, and historical heatmaps.",
    codeSnippet: `// SENTIMENT_ANALYSIS_CLASSIFIER
const analyzeMood = async (entry: string) => {
  const response = await fetch('/api/v1/sentiment', {
    method: 'POST',
    body: JSON.stringify({ text: entry }),
    headers: { 'Content-Type': 'application/json' }
  });
  
  const classification = await response.json();
  if (classification.score < 0.3) {
    triggerInterventionProtocol(classification.indicators);
  }
  return classification.dominantEmotion;
};`,
    metrics: [
      {
        label: "ANALYSIS_SPEED",
        value: "140ms",
        description: "Inference latency",
      },
      {
        label: "ACCURACY",
        value: "92%",
        description: "Sentiment precision",
      },
      {
        label: "UPTIME",
        value: "99.9%",
        description: "API availability",
      },
    ],
  },
  {
    slug: "reckless-racer",
    title: "RECKLESS_RACER",
    description:
      "Fast-paced arcade racing game published on Indus Appstore. Players navigate logic-defying zig-zag neon mazes with split-second reflexes.",
    sector: "GAME_DEV_03",
    deploymentDate: "05_NOV_2023",
    objectiveStatus: "COMPLETE",
    refId: "AJ-003-CHARLIE",
    missionBrief:
      "Mobile stores are flooded with hyper-casual clones. The mission was to build an adrenaline-pumping, reflex-testing racer with pulsing neon aesthetics and a killer lo-fi soundtrack.",
    primaryChallenge:
      "Tuning the physics and input latency to ensure the car responds perfectly to split-second swipe gestures, preventing unfair wipeouts at high speeds.",
    solutionMandate:
      "Developed using the Unity Engine (C#). Implemented a custom kinematic vehicle controller optimized for mobile touch inputs and procedural level generation.",
    engineeringLog:
      "Built a dynamic difficulty scaler that tightens corners and increases speed based on the player's current combo streak. Optimized draw calls to maintain a flawless 60 FPS on low-end Android devices.",
    interfaceArchitecture:
      "A distraction-free, high-contrast neon UI tracking score, coin collection, and combo multipliers globally synced to leaderboards.",
    codeSnippet: `// VEHICLE_KINEMATICS
void FixedUpdate() {
    float moveHorizontal = dynamicJoystick.Horizontal;
    Vector3 movement = new Vector3(moveHorizontal, 0.0f, baseSpeed);
    
    rb.velocity = movement * accelerationMultiplier;

    if (isDrifting) {
        ApplyDriftPhysics();
        comboMeter += Time.fixedDeltaTime * 2.5f;
        TriggerNeonPulseEffect();
    }
}`,
    metrics: [
      {
        label: "RATING",
        value: "5.0",
        description: "Indus Appstore",
      },
      {
        label: "TARGET_FPS",
        value: "60",
        description: "Smooth mobile render",
      },
      {
        label: "ENGINE",
        value: "C#",
        description: "Unity Engine",
      },
    ],
  },
  {
    slug: "fitness-agent",
    title: "FITNESS_AGENT",
    description:
      "Autonomous AI agent for personalized workout generation, dynamic progression tracking, and adaptive training plans using LLM reasoning.",
    sector: "AI_OPS_04",
    deploymentDate: "15_FEB_2025",
    objectiveStatus: "COMPLETE",
    refId: "AJ-004-AGENT",
    missionBrief:
      "Static workout apps fail to adapt to unpredictable human progress and fatigue levels. The mission was to build an intelligent agent that algorithms adjust routines in real-time.",
    primaryChallenge:
      "Designing a system prompt and tool schema that allows the LLM to understand progressive overload, biomechanics, and user fatigue without hallucinating dangerous volume.",
    solutionMandate:
      "Implement a LangChain-based agent architecture with specialized tools for workout generation, RPE (Rate of Perceived Exertion) analysis, and volume tracking.",
    engineeringLog:
      "Integrated OpenAI's GPT-4 for reasoning, connected to a vector database containing kinesiology and powerlifting methodologies. The agent recalibrates the plan after every logged session.",
    interfaceArchitecture:
      "A chat-based interface where the user logs their workout naturally, and the agent parses the data to update the internal SQLite database.",
    codeSnippet: `// AGENT_ROUTINE_GEN
const agent = new FitnessAgent({
  model: "gpt-4-turbo",
  tools: [WorkoutGenerator, RPETracker]
});

const plan = await agent.execute({
  goal: "hypertrophy",
  equipment: ["dumbbells", "pull-up bar"],
  fatigueLevel: "moderate"
});

db.updateTrainingMatrix(plan);`,
    metrics: [
      {
        label: "AI_LATENCY",
        value: "<1.2s",
        description: "Reasoning time",
      },
      {
        label: "KNOWLEDGE_DB",
        value: "10k+",
        description: "Training vectors",
      },
      {
        label: "ADAPTABILITY",
        value: "HIGH",
        description: "Real-time updates",
      },
    ],
  },
  {
    slug: "privyshare",
    title: "PRIVY_SHARE",
    description:
      "Secure, end-to-end encrypted file sharing and text drop platform. Designed for zero-knowledge data transfer with auto-expiring links.",
    sector: "CYBER_SEC_05",
    deploymentDate: "12_MAR_2025",
    objectiveStatus: "COMPLETE",
    refId: "AJ-005-ECHO",
    missionBrief:
      "Sharing sensitive data over traditional messaging apps leaves traces on corporate servers. The objective was to build a zero-knowledge drop zone where files and text self-destruct after viewing.",
    primaryChallenge:
      "Implementing robust client-side encryption (AES-GCM) so the server never sees the raw payload, while keeping the user experience frictionless with shareable links.",
    solutionMandate:
      "Develop a Next.js web interface with Web Crypto API for client-side encryption. Use a fast backend (Redis/Supabase) to store encrypted blobs and handle TTL expirations.",
    engineeringLog:
      "The encryption key is appended to the URL hash fragment (which is never sent to the server). The server only receives the encrypted payload and salt. Once the TTL expires, the blob is permanently purged.",
    interfaceArchitecture:
      "A brutalist, high-contrast UI focused on a single drop zone. Generates one-time viewing links and provides real-time progress indicators during the cryptographic process.",
    codeSnippet: `// CLIENT_SIDE_ENCRYPTION
const encryptPayload = async (data: string) => {
  const enc = new TextEncoder();
  const key = await generateKey();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(data)
  );
  return { ciphertext, exportedKey: await exportKeyUrl(key) };
};`,
    metrics: [
      {
        label: "ENCRYPTION",
        value: "AES-256",
        description: "Client-side crypto",
      },
      {
        label: "TTL_SUPPORT",
        value: "YES",
        description: "Auto-destruct",
      },
      {
        label: "PAYLOAD",
        value: "<100MB",
        description: "Blob size limit",
      },
    ],
  },
];
