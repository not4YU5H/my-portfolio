"use client";

import { motion } from "framer-motion";
import { Terminal, Gamepad2, Dumbbell, Trophy } from "lucide-react";
import { fieldsOfStudy } from "@/lib/data/skills";

const iconMap = {
  Terminal,
  Gamepad2,
  Dumbbell,
  Trophy,
} as const;

export function FieldsOfStudy() {
  return (
    <section id="fields" className="py-24 md:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-headline text-[10px] tracking-[0.3em] text-primary/60 block mb-3">
            WHAT_DRIVES_ME
          </span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-on-surface">
            Current{" "}
            <span className="text-primary-container">Obsessions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fieldsOfStudy.map((field, i) => {
            const Icon = iconMap[field.icon];
            return (
              <motion.div
                key={field.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-surface-container p-6 space-y-4 hover:bg-surface-container-high transition-colors glow-primary-hover"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-surface-container-highest group-hover:bg-primary-container/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary/60 group-hover:text-primary-container transition-colors" />
                  </div>
                  <h3 className="font-headline text-sm font-bold tracking-widest text-on-surface">
                    {field.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-secondary leading-relaxed">
                  {field.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
