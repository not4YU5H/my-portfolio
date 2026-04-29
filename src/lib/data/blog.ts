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
