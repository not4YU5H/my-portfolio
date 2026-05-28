"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Terminal({ isOpen, onClose }: TerminalProps) {
  const [history, setHistory] = useState<string[]>([
    "Welcome to AYUSH_OS v5.0.0",
    "Type 'help' for a list of commands.",
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    setHistory((prev) => [...prev, `> ${trimmedCmd}`]);
    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    const lowerCmd = trimmedCmd.toLowerCase();

    if (lowerCmd === "help") {
      setHistory((prev) => [
        ...prev,
        "Available commands:",
        "  help         - Lists all available commands",
        "  ls projects  - Lists all 5 projects with one-line descriptions",
        "  cat about.txt- Prints the bio from the LAB section",
        "  stack        - Prints the full tech stack list",
        "  contact      - Prints email/GitHub/LinkedIn links and closes after 1.5s",
        "  hire ayush   - Initiates hire sequence",
        "  clear        - Clears terminal history",
        "  exit         - Closes the terminal",
      ]);
    } else if (lowerCmd === "ls projects") {
      setHistory((prev) => [
        ...prev,
        "AI_TOOLS_DIRECTORY - Full-stack autonomous AI tools directory",
        "MOOD_BUSTER        - Intelligent mood-tracking and sentiment analysis",
        "RECKLESS_RACER     - Fast-paced arcade racing game on Indus Appstore",
        "FITNESS_AGENT      - Autonomous AI agent for personalized workouts",
        "PRIVY_SHARE        - Secure, end-to-end encrypted file sharing",
      ]);
    } else if (lowerCmd === "cat about.txt") {
      setHistory((prev) => [
        ...prev,
        "AYUSH JAIN",
        "B.Tech Computer Science graduate from KIIT University, Bhubaneswar.",
        "Originally from Cuttack, Odisha. I'm a firm believer in YOLO —",
        "I try everything, from building full-stack apps to hitting PRs at",
        "the gym, from competitive gaming sessions to weekend cricket matches.",
      ]);
    } else if (lowerCmd === "stack") {
      setHistory((prev) => [
        ...prev,
        "DEVELOPMENT: JAVA, REACT / NEXT.JS, PYTHON, TAILWIND CSS",
        "BACKEND: NODE.JS / EXPRESS, SUPABASE / FIREBASE, REST APIs, SQL / NoSQL",
        "TOOLS & INFRA: GEN AI, GITHUB, DOCKER, CLOUD COMPUTING",
      ]);
    } else if (lowerCmd === "contact") {
      setHistory((prev) => [
        ...prev,
        "EMAIL: your@email.com", // Adjust if real email is known
        "GITHUB: https://github.com/not4YU5H",
        "LINKEDIN: https://www.linkedin.com/in/ayushjain001",
        "Closing terminal in 1.5s...",
      ]);
      setTimeout(() => {
        onClose();
      }, 1500);
    } else if (lowerCmd === "hire ayush") {
      setHistory((prev) => [
        ...prev,
        "INITIATING_HIRE_SEQUENCE... scrolling to #contact",
      ]);
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          const contactEl = document.getElementById("contact");
          if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
          else window.location.href = "/#contact";
        }, 300);
      }, 1000);
    } else if (lowerCmd === "clear") {
      setHistory([]);
    } else if (lowerCmd === "exit") {
      onClose();
    } else {
      setHistory((prev) => [...prev, `COMMAND_NOT_FOUND: try 'help'`]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex =
          historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[nextIndex]);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            className="w-full max-w-3xl bg-surface-container-lowest border border-primary/30 shadow-2xl overflow-hidden rounded-md flex flex-col h-[60vh] max-h-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-primary/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose} />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="font-headline text-xs tracking-widest text-secondary/60">
                guest@ayush_os:~
              </span>
              <button
                onClick={onClose}
                className="text-secondary/40 hover:text-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div
              className="flex-1 p-4 overflow-y-auto font-mono text-sm md:text-base text-green-400 bg-black/90 space-y-2 cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap break-words">
                  {line}
                </div>
              ))}
              <div className="flex items-center">
                <span className="mr-2 text-primary">guest@ayush_os:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none border-none text-green-400 font-mono focus:ring-0 p-0 m-0"
                  spellCheck={false}
                  autoComplete="off"
                  autoFocus
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
