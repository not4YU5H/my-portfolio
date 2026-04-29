"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { TacticalGrid } from "@/components/ui/TacticalGrid";
import type { BlogPost } from "@/lib/data/blog";

export function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <TacticalGrid />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 font-headline text-xs tracking-widest text-secondary/60 hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              RETURN_TO_JOURNAL
            </Link>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span className="font-headline text-[10px] tracking-[0.3em] bg-surface-container-high px-3 py-1 text-primary-container/70">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-secondary/40">
              <Clock className="w-3 h-3" />
              <span className="font-headline text-[10px] tracking-widest">
                {post.readTime}
              </span>
            </div>
            <span className="font-headline text-[10px] tracking-widest text-secondary/40">
              {new Date(post.date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }).toUpperCase()}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-on-surface mb-6"
          >
            {post.title}
          </motion.h1>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 font-headline text-[9px] tracking-widest text-primary/50 bg-surface-container-highest px-2 py-0.5"
              >
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose-tactical"
          >
            <BlogContent content={post.content} />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-headline text-lg md:text-xl font-bold tracking-widest text-secondary/40 uppercase"
          >
            END_TRANSMISSION
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 ghost-border px-8 py-3 font-headline text-sm tracking-widest text-primary hover:bg-surface-container-high transition-all"
            >
              MORE_ENTRIES
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary-container px-8 py-3 font-headline text-sm tracking-widest text-on-primary-container hover:shadow-[0_0_16px_rgba(255,85,64,0.3)] transition-all"
            >
              OPEN_UPLINK
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple markdown-to-JSX renderer (no external deps)
function BlogContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.trimStart().startsWith("```")) {
      const lang = line.trim().replace("```", "");
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trimStart().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <div key={elements.length} className="my-6 bg-surface-container-lowest ghost-border overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low border-b border-outline-variant/10">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-primary-container/40" />
              <div className="w-2 h-2 bg-secondary/20" />
              <div className="w-2 h-2 bg-secondary/20" />
            </div>
            {lang && (
              <span className="font-headline text-[9px] tracking-[0.3em] text-secondary/40 uppercase">
                {lang}
              </span>
            )}
          </div>
          <pre className="p-4 overflow-x-auto">
            <code className="font-mono text-xs md:text-sm leading-relaxed text-secondary/80">
              {codeLines.join("\n")}
            </code>
          </pre>
        </div>
      );
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={elements.length}
          className="font-headline text-xl md:text-2xl font-bold text-on-surface mt-12 mb-4 tracking-tight"
        >
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={elements.length}
          className="font-headline text-base md:text-lg font-bold text-on-surface mt-8 mb-3 tracking-tight"
        >
          {line.replace("### ", "")}
        </h3>
      );
      i++;
      continue;
    }

    // List items
    if (line.trimStart().startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trimStart().startsWith("- ")) {
        listItems.push(lines[i].trimStart().replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={elements.length} className="my-4 space-y-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 font-body text-sm text-secondary leading-relaxed">
              <span className="w-1.5 h-1.5 bg-primary-container/60 flex-shrink-0 mt-1.5" />
              <span>{formatInlineCode(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line.trimStart())) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trimStart())) {
        listItems.push(lines[i].trimStart().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={elements.length} className="my-4 space-y-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 font-body text-sm text-secondary leading-relaxed">
              <span className="font-headline text-[10px] tracking-widest text-primary-container/60 mt-0.5 flex-shrink-0">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span>{formatInlineCode(item)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p
        key={elements.length}
        className="font-body text-sm md:text-base text-secondary leading-relaxed my-4"
      >
        {formatInlineCode(line)}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}

function formatInlineCode(text: string): React.ReactNode {
  // Handle **bold**, `code`, and regular text
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-on-surface">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="font-mono text-xs bg-surface-container-highest px-1.5 py-0.5 text-primary/80"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}
