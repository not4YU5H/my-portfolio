export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "voxel-engine-greedy-meshing",
    title: "Voxel Engines from Scratch — What Greedy Meshing Taught Me About Optimization",
    excerpt:
      "A deep dive into building a voxel renderer — chunk management, naive vs greedy meshing, and why this rabbit hole is the most satisfying optimization puzzle in game dev.",
    date: "2025-05-05",
    readTime: "8 min",
    category: "GAME_DEV",
    tags: ["GAME DEV", "VOXELS", "OPTIMIZATION"],
    content: `## The Minecraft Illusion

Voxel engines seem simple at first glance. It's just blocks, right? How hard can it be? But building a Minecraft-style engine from scratch is a masterclass in optimization and data structures. It's deceptively complex.

## Naive Rendering vs The Real World

If you render every single face of every single block in a 32x32x32 chunk, your GPU will cry. That's over 196,000 faces per chunk. **Naive rendering** works for a tiny demo, but the moment you expand the view distance, frame rates plummet. It's slow because you're telling the GPU to draw thousands of faces that players can't even see (e.g., blocks buried underground or touching other blocks).

## Greedy Meshing to the Rescue

**Greedy meshing** solves this by merging coplanar adjacent faces into single, larger quads. Instead of drawing 100 individual grass block top-faces, greedy meshing combines them into one large rectangle.

### The Tradeoff

The algorithm is more complex to implement and adds overhead when a chunk is updated (since the mesh must be recalculated), but the reduction in draw calls and vertex count is astronomical.

## Chunk Management & Data Structures

You can't load the entire world at once. You need spatial data structures. The world is divided into chunks, which are dynamically loaded and unloaded based on player position. Managing chunk borders, avoiding memory leaks, and multithreading the mesh generation are massive engineering challenges.

## The Takeaway

Building a voxel engine taught me to think in systems. It forces you to respect CPU cache lines, understand the true cost of an object, and appreciate how early optimization decisions shape the entire architecture.`,
  },
  {
    slug: "building-sage-budgeting-app",
    title: "Building Sage — Why Your Budget App Doesn't Know You're Stressed",
    excerpt:
      "Most finance apps track numbers. Sage tracks context. Here's the architecture behind mood-tagged transactions, behavioral budgeting, and why Clean Architecture was the right call for a complex Android app.",
    date: "2025-04-20",
    readTime: "7 min",
    category: "ENGINEERING",
    tags: ["ANDROID", "ARCHITECTURE", "FINTECH"],
    content: `## The Context Problem

You spent $40 on takeout. Traditional budgeting apps log a -$40 entry under "Food & Dining". What they don't capture is *why*. You ordered takeout because you were exhausted after a terrible 4-hour meeting.

Numbers without context don't change behavior. **Sage tracks context.**

## The Solution: Behavioral Budgeting

By implementing mood-tagged transactions and contextual logging, Sage bridges the gap between finance and psychology. When logging an expense, you tag the emotional state or context that triggered it. Over time, patterns emerge.

## Architectural Decisions

For an Android app handling sensitive financial data, offline persistence, and complex data relations, MVC wasn't going to cut it.

I opted for **Clean Architecture** with feature-based packaging. Separating the domain layer from the presentation and data layers ensured that UI changes didn't break core budgeting logic, making testing robust and future feature additions painless.

## The Three-Layer System

Sage abandons arbitrary categories in favor of a psychological approach:
1. **Needs:** Non-negotiable survival expenses.
2. **Wants:** Planned discretionary spending.
3. **Impulses:** Unplanned emotional spending.

Categorizing expenses this way immediately shifts how you view your spending habits.

## The Goal Vault & Subscription Graveyard

We also implemented visual psychological tricks:
- **The Goal Vault:** Visualizing saving goals as locked vaults that fill over time.
- **The Subscription Graveyard:** A dedicated view showing exactly how much forgotten subscriptions are bleeding from your account annually.`,
  },
  {
    slug: "building-autonomous-ai-agents",
    title: "Autonomous Pipelines — Building AI Agents That Actually Ship",
    excerpt:
      "The gap between an AI demo and production AI is enormous. Here's what I learned building the Fitness Agent and AI Tools Directory — orchestrating LLMs, handling failure states, and shipping agents that run without supervision.",
    date: "2025-03-28",
    readTime: "9 min",
    category: "AI",
    tags: ["LLM", "AGENTS", "PIPELINES"],
    content: `## Chatbots vs Agents

There is a fundamental difference between an AI chatbot and an AI agent. A chatbot converses. An agent executes a task, uses tools, evaluates its own output, and iterates until the objective is complete.

## LLM Reasoning Loops

Building the **Fitness Agent** taught me how to construct reasoning loops. The agent receives a fitness goal, retrieves relevant biomechanical vectors from a database, and generates a workout. Crucially, it then *evaluates* its own plan against fatigue metrics before presenting it.

## The Discovery Pipeline

For the **AI Tools Directory**, the pipeline had to be entirely hands-off:
1. **Cron Job:** Triggers discovery scrapers.
2. **Gemini API:** Processes raw scraped data into structured, SEO-friendly markdown.
3. **Supabase Insert:** Saves the validated data.
4. **SSR Generation:** Next.js rebuilds the static pages incrementally.

## Handling Failure Modes

What happens when the LLM hallucinates or returns invalid JSON? In production, you can't just throw an error.
- **Structured Outputs:** Forcing the LLM to adhere to strict JSON schemas.
- **Retry Logic:** If validation fails, the error is fed back into the LLM as a prompt correction.
- **Fallbacks:** Defaulting to safe values if the LLM enters an infinite reasoning loop.

## Autonomy Needs Guardrails

"Autonomous" does not mean "unmonitored." Implementing robust logging, alerts for failed pipeline runs, and strict rate-limiting guardrails is the only way to ensure your agents don't silently rack up massive API bills or corrupt your database.`,
  },
  {
    slug: "building-ai-tools-directory",
    title: "How I Built an AI Tools Directory That Indexes Itself",
    excerpt:
      "The story behind architecting a full-stack platform that autonomously discovers, categorizes, and publishes AI tool listings — without me lifting a finger.",
    date: "2025-03-15",
    readTime: "8 min",
    category: "ENGINEERING",
    tags: ["NEXT.JS", "AI", "SUPABASE", "AUTOMATION"],
    content: `## The Problem

The AI landscape is exploding. New tools launch every single day, and keeping up manually is a losing battle. I wanted a directory that could **discover tools on its own**, generate rich content for each listing, and publish SEO-optimized pages — all autonomously.

## The Architecture

I built this on three pillars:

1. **Discovery Engine** — A cron-based pipeline that scrapes curated sources (Product Hunt, GitHub trending, Twitter/X mentions) for new AI tools.
2. **Content Generation** — Each discovered tool gets fed into Google's Gemini API to generate a structured profile: description, use cases, comparisons, and pros/cons.
3. **Publishing Pipeline** — The generated content is stored in Supabase, and Next.js Server Components render each tool page with full SSR for SEO.

## Key Technical Decisions

### Why Supabase over a traditional database?

Supabase gave me three things for free:
- **Row-level security** — Admin auth without building a custom auth system
- **Real-time subscriptions** — Live dashboard updates when new tools are indexed
- **Edge functions** — Serverless cron jobs for the discovery pipeline

### Why Next.js App Router?

The App Router's server components are perfect for SEO-heavy sites. Each tool page is rendered on the server, meaning search engines see fully hydrated HTML. Combined with \`generateStaticParams\`, I get the best of both worlds: static generation at build time, with incremental regeneration for new pages.

## The Discovery Pipeline

\`\`\`typescript
// Simplified discovery flow
const discoverNewTools = async () => {
  const sources = await fetchFromSources(['producthunt', 'github', 'twitter']);
  const deduplicated = removeDuplicates(sources, existingTools);
  
  for (const tool of deduplicated) {
    const profile = await gemini.generate({
      prompt: buildToolProfile(tool),
      format: 'structured'
    });
    
    await supabase.from('tools').insert({
      ...profile,
      discovered_at: new Date(),
      status: 'review'
    });
  }
};
\`\`\`

## Results

After two months of running autonomously:
- **500+ tools** indexed and published
- **95+ Lighthouse score** across all pages
- **<3s build time** for incremental page generation
- **Zero manual intervention** needed for the core pipeline

## What I'd Do Differently

If I were starting over, I'd use a vector database (like Pinecone) for semantic deduplication instead of string matching. There are edge cases where the same tool appears under slightly different names from different sources.

I'd also invest more time in a proper admin dashboard. Right now the "review" workflow is just a Supabase table view. A proper UI with batch approve/reject would save time.

## Takeaway

Building systems that scale without you is addictive. Once you taste the dopamine of waking up to 20 new auto-published pages, you'll never want to do manual content creation again.`,
  },
  {
    slug: "zero-knowledge-file-sharing",
    title: "Building Zero-Knowledge File Sharing with Web Crypto API",
    excerpt:
      "A deep dive into client-side encryption, URL hash fragments, and why your server should never see the data it stores.",
    date: "2025-03-01",
    readTime: "6 min",
    category: "SECURITY",
    tags: ["ENCRYPTION", "WEB CRYPTO", "NEXT.JS", "PRIVACY"],
    content: `## The Core Principle

Here's the thing about most "encrypted" file sharing services — they encrypt your data **on the server**. Which means the server has your encryption key. Which means anyone with server access (hackers, employees, law enforcement) can decrypt your files.

True zero-knowledge means: **the server never sees the key, and it never sees the plaintext data.**

## How I Achieved It

The trick is surprisingly simple, and it relies on a feature of URLs that most developers don't think about: the **hash fragment**.

### The URL Hash Secret

When you visit \`https://example.com/share/abc123#mySecretKey\`, your browser sends a request to the server for \`/share/abc123\`. The \`#mySecretKey\` part? **It never leaves the browser.** It's not sent in the HTTP request. It's not logged by the server. It's purely client-side.

This is the foundation of the entire system:
1. Generate an AES-256-GCM key on the client
2. Encrypt the file/text with that key
3. Upload the ciphertext to the server
4. Append the key to the URL hash fragment
5. Share the full URL with the recipient

### The Encryption Flow

\`\`\`typescript
const encryptPayload = async (data: string) => {
  const enc = new TextEncoder();
  const key = await crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );
  
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(data)
  );
  
  // Export key as base64url for the hash fragment
  const exportedKey = await crypto.subtle.exportKey("raw", key);
  const keyB64 = btoa(String.fromCharCode(...new Uint8Array(exportedKey)));
  
  return { ciphertext, iv, keyB64 };
};
\`\`\`

## Self-Destructing Links

To make links auto-expire, I use Redis with TTL (Time-To-Live):

- When a ciphertext blob is stored, it gets a TTL of 24 hours (or user-specified)
- When the TTL expires, Redis automatically deletes the blob
- The URL becomes a dead link — no data remains anywhere

## The UX Challenge

The hardest part wasn't the crypto — it was making it feel effortless. Users shouldn't need to understand encryption to use the tool. The flow is:

1. Paste text or drop a file
2. Click "Create Link"  
3. Share the generated link
4. Recipient opens the link → data decrypts in their browser

No accounts. No passwords. No setup.

## Takeaway

The Web Crypto API is incredibly powerful and criminally underused. If you're building anything that handles sensitive data, consider moving encryption to the client. Your server doesn't need to know.`,
  },
  {
    slug: "from-code-to-calisthenics",
    title: "Progressive Overload is Just Recursion for Muscles",
    excerpt:
      "What two years of consistent training taught me about coding, discipline, and why the best debugging tool is a pull-up bar.",
    date: "2025-02-10",
    readTime: "5 min",
    category: "LIFESTYLE",
    tags: ["FITNESS", "PRODUCTIVITY", "DISCIPLINE"],
    content: `## The Parallels Are Absurd

I started taking fitness seriously about two years ago. What surprised me wasn't the physical transformation — it was how much the principles overlap with programming.

## Progressive Overload = Iteration

In the gym, progressive overload means gradually increasing the weight, reps, or intensity over time. You don't jump from benching 40kg to 100kg overnight. You add 2.5kg each week. You trust the process.

In code, it's the same. You don't go from console.log to distributed systems overnight. You learn one thing, build on it, learn the next thing. Each project is a little heavier than the last.

## Consistency > Intensity

I've seen people go hard for two weeks and burn out. In the gym AND in coding. The person who shows up 5 days a week at 70% intensity will always beat the person who goes 100% for 3 days and then disappears for a month.

My coding schedule mirrors my gym schedule:
- **Monday-Friday**: Show up. Write code. Even if it's just 30 minutes.
- **Weekends**: Active recovery. Read docs, watch talks, tinker with side projects.

## Rest Days Are Not Optional

This is the one lesson that took me the longest to learn. Muscles grow during rest, not during the workout. Similarly, some of my best coding insights come when I'm NOT coding.

A long bike ride to Puri (100km, wind therapy > any debugger) has solved more bugs than hours of staring at VS Code.

## The Mind-Muscle Connection

In lifting, there's a concept called the "mind-muscle connection" — actively focusing on the specific muscle you're targeting. It sounds woo-woo, but it works.

The coding equivalent? **Deep work.** Phone off. Notifications off. Single tab open. When you truly focus on one problem for an uninterrupted hour, you accomplish more than in a scattered 4-hour session.

## My Current Split

For the curious:
- **Monday**: Chest + Triceps
- **Tuesday**: Back + Biceps  
- **Wednesday**: Legs + Core
- **Thursday**: Shoulders + Arms
- **Friday**: Full body + Calisthenics
- **Weekend**: Sports (cricket, football, badminton)

## Takeaway

Discipline is discipline. It doesn't matter if you're adding plates to the bar or features to a codebase. Show up, do the work, trust the process, and rest when you need to.

You only live once. Might as well be strong AND write clean code.`,
  },
];
