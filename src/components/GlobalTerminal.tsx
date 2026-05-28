"use client";

import { useEffect, useState } from "react";
import { Terminal as TerminalComponent } from "@/components/Terminal";

export function GlobalTerminal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Allow the backtick key to open/close terminal, unless focusing on an input or textarea
      if (e.key === "`") {
        if (
          document.activeElement?.tagName === "INPUT" ||
          document.activeElement?.tagName === "TEXTAREA"
        ) {
          return;
        }
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return <TerminalComponent isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
