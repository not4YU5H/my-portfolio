"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const lines = code.split("\n");
  // Detect language from first comment if not provided
  const detectedLang = language || detectLanguage(code);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-surface-container-lowest ghost-border overflow-hidden group">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-primary-container/40" />
            <div className="w-2.5 h-2.5 bg-secondary/20" />
            <div className="w-2.5 h-2.5 bg-secondary/20" />
          </div>
          <span className="font-headline text-[9px] tracking-[0.3em] text-secondary/40 uppercase">
            {detectedLang}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 font-headline text-[9px] tracking-widest text-secondary/40 hover:text-primary transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-green-400" />
              <span className="text-green-400">COPIED</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              COPY
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-xs md:text-sm leading-relaxed">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="inline-block w-8 text-right mr-4 text-secondary/25 select-none flex-shrink-0 text-xs">
                {i + 1}
              </span>
              <code className="text-secondary/80">
                {highlightLine(line)}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

function detectLanguage(code: string): string {
  if (code.includes("async") || code.includes("const ") || code.includes("=>")) return "typescript";
  if (code.includes("void ") || code.includes("float ") || code.includes("Vector3")) return "c-sharp";
  if (code.includes("def ") || code.includes("import ")) return "python";
  return "code";
}

function highlightLine(line: string): React.ReactNode {
  // Simple syntax highlighting without external deps
  const parts: React.ReactNode[] = [];
  let remaining = line;
  let key = 0;

  // Comment detection
  if (remaining.trimStart().startsWith("//")) {
    return <span key={key} className="text-primary/40 italic">{line}</span>;
  }

  // Process keywords and strings
  const patterns: [RegExp, string][] = [
    [/\b(const|let|var|function|return|if|else|new|await|async|void|float|class|import|from|export)\b/g, "text-primary/70 font-semibold"],
    [/\b(true|false|null|undefined|this)\b/g, "text-green-400/70"],
    [/(["'`])(?:(?=(\\?))\2.)*?\1/g, "text-primary-container/80"],
    [/\b(\d+\.?\d*)\b/g, "text-primary-container/60"],
  ];

  // Simple approach: highlight first match of each pattern type
  let processed = false;
  for (const [pattern, className] of patterns) {
    if (processed) break;
    const regex = new RegExp(pattern);
    const match = regex.exec(remaining);
    if (match) {
      processed = true;
      const before = remaining.slice(0, match.index);
      const matched = match[0];
      const after = remaining.slice(match.index + matched.length);

      parts.push(<span key={key++}>{before}</span>);
      parts.push(<span key={key++} className={className}>{matched}</span>);

      // Recursively highlight the rest
      if (after) {
        parts.push(<span key={key++}>{highlightLine(after)}</span>);
      }
      return <>{parts}</>;
    }
  }

  return <span>{line}</span>;
}
