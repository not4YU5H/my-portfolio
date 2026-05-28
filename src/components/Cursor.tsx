"use client";

import { useEffect, useState } from "react";

export function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering an interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, input, textarea");
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className={isHovering ? "hover" : ""}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        // We use absolute inline transforms to bypass Framer Motion overhead for 60fps tracking
      }}
    />
  );
}
