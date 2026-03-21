"use client";

import { motion } from "framer-motion";

interface MetricsDisplayProps {
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export function MetricsDisplay({ metrics }: MetricsDisplayProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="bg-surface-container-low p-6 md:p-8 text-center glow-primary"
        >
          <span className="font-headline text-[10px] tracking-[0.3em] text-primary/50 block mb-3">
            {metric.label}
          </span>
          <span className="font-headline text-4xl md:text-5xl font-bold text-primary-container block">
            {metric.value}
          </span>
          <span className="font-body text-xs text-secondary/60 mt-2 block">
            {metric.description}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
