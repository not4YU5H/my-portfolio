"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ui/ThemeProvider";

export function GenerativeArt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const isDark = theme === "dark";
      const gridSize = 12;
      const cols = Math.ceil(w / gridSize);
      const rows = Math.ceil(h / gridSize);

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const x = col * gridSize;
          const y = row * gridSize;

          // Flowing wave pattern
          const wave1 = Math.sin(col * 0.15 + time * 0.02) * Math.cos(row * 0.1 + time * 0.015);
          const wave2 = Math.sin((col + row) * 0.08 + time * 0.01);
          const wave3 = Math.cos(col * 0.05 - time * 0.008) * Math.sin(row * 0.12 + time * 0.025);

          const combined = (wave1 + wave2 + wave3) / 3;
          const normalized = (combined + 1) / 2; // 0 to 1

          if (normalized > 0.3) {
            const size = normalized * 6;
            const alpha = (normalized - 0.3) * 1.8;

            if (isDark) {
              // Red-orange spectrum in dark mode
              const r = Math.floor(255 * normalized);
              const g = Math.floor(85 * normalized * 0.6);
              const b = Math.floor(64 * normalized * 0.4);
              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.85})`;
            } else {
              // Deeper reds in light mode
              const r = Math.floor(192 * normalized);
              const g = Math.floor(20 * normalized);
              const b = Math.floor(10 * normalized);
              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`;
            }

            ctx.fillRect(x, y, size, size);
          }
        }
      }

      // Draw some connecting lines for structure
      ctx.strokeStyle = isDark ? "rgba(255, 85, 64, 0.12)" : "rgba(192, 1, 0, 0.08)";
      ctx.lineWidth = 0.8;

      for (let i = 0; i < 5; i++) {
        const yOffset = h * (0.2 + i * 0.15) + Math.sin(time * 0.01 + i) * 15;
        ctx.beginPath();
        ctx.moveTo(0, yOffset);

        for (let x = 0; x < w; x += 10) {
          const y = yOffset + Math.sin(x * 0.02 + time * 0.015 + i * 0.5) * 20;
          ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      time++;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animationId = requestAnimationFrame(animate);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <div className="relative w-full h-48 bg-surface-container-lowest overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/30 via-transparent to-surface-container-lowest/20 pointer-events-none" />
    </div>
  );
}
