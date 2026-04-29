"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { timelineEntries } from "@/lib/data/experience";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const typeIcons = {
  education: GraduationCap,
  work: Briefcase,
  achievement: Award,
};

const typeColors = {
  education: "bg-primary-container",
  work: "bg-green-400",
  achievement: "bg-primary",
};

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 md:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="DEPLOYMENT_LOG // FIELD_RECORD"
          title="DEPLOYMENT_LOG"
          accentWord="LOG"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant/20 md:-translate-x-px" />

          <div className="space-y-12">
            {timelineEntries.map((entry, i) => {
              const Icon = typeIcons[entry.type];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-8 h-8 flex items-center justify-center ${typeColors[entry.type]}/20 border border-outline-variant/20`}
                    >
                      <Icon className="w-4 h-4 text-primary-container" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-surface-container p-6 ghost-border hover:bg-surface-container-high transition-colors glow-primary-hover">
                      <span className="font-headline text-[10px] tracking-[0.3em] text-primary-container block mb-2">
                        {entry.year}
                      </span>
                      <h3 className="font-headline text-base md:text-lg font-bold text-on-surface mb-1">
                        {entry.title}
                      </h3>
                      <span className="font-headline text-[10px] tracking-widest text-secondary/50 block mb-3">
                        {entry.organization}
                      </span>
                      <p className="font-body text-sm text-secondary leading-relaxed mb-4">
                        {entry.description}
                      </p>
                      {entry.tags && (
                        <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-headline text-[9px] tracking-widest text-primary/60 bg-surface-container-highest px-2 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
