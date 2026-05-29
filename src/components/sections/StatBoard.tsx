"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const stats = [
  {
    label: "PROJECTS_SHIPPED",
    value: "7+",
    subtext: "Full-stack · Games · AI Agents",
  },
  {
    label: "ACTIVE_SINCE",
    value: "2022",
    subtext: "First commit to first client",
  },
  {
    label: "STACK_RANGE",
    value: "8+ TECH",
    subtext: "Web · Mobile · Game Dev · AI",
  },
  {
    label: "EDUCATION",
    value: "B.TECH CS",
    subtext: "KIIT University · 2024",
  },
  {
    label: "GAME_PUBLISHED",
    value: "5.0 ★",
    subtext: "Reckless Racer · Indus Appstore",
  },
  {
    label: "CURRENT_FOCUS",
    value: "SAGE",
    subtext: "Android · AI · Behavioral UX",
  },
];

export function StatBoard() {
  return (
    <section id="stats" className="py-24 md:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="FIELD_RECORD // AT_A_GLANCE"
          title="FIELD_RECORD"
          accentWord="RECORD"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-surface-container p-8 ghost-border hover:bg-surface-container-high transition-colors glow-primary-hover flex flex-col justify-center text-center space-y-3"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-secondary/50 block">
                {stat.label}
              </span>
              <span className="font-mono text-4xl md:text-5xl font-bold text-primary block leading-none">
                {stat.value}
              </span>
              <span className="font-mono text-[0.75rem] uppercase tracking-widest text-secondary/40 block">
                {stat.subtext}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
