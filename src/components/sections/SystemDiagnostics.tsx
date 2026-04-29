"use client";

import { motion } from "framer-motion";
import { Activity, FileText } from "lucide-react";
import { experimentLogs } from "@/lib/data/skills";

export function SystemDiagnostics() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Diagnostics Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-surface-container-low p-8 space-y-6 ghost-border"
          >
            <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 text-primary-container" />
              <h3 className="font-headline text-sm font-bold tracking-widest text-on-surface">
                Life_Stats
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "CODE_OUTPUT", value: 85, color: "bg-primary-container" },
                { label: "FITNESS_LEVEL", value: 78, color: "bg-primary" },
                { label: "SPORTS_ACTIVITY", value: 91, color: "bg-green-400" },
                { label: "ADVENTURE_METER", value: 72, color: "bg-secondary" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, width: "0%" }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline text-[10px] tracking-widest text-secondary/60">
                      {stat.label}
                    </span>
                    <span className="font-headline text-[10px] tracking-widest text-secondary/40">
                      {stat.value}%
                    </span>
                  </div>
                  <div className="h-1 bg-surface-container-highest">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 + 0.5 }}
                      className={`h-full ${stat.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experiment Log */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-surface-container-low p-8 space-y-6 ghost-border"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-primary-container" />
              <h3 className="font-headline text-sm font-bold tracking-widest text-on-surface">
                Activity_Log
              </h3>
            </div>
            <div className="space-y-4">
              {experimentLogs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 bg-primary-container/60 flex-shrink-0" />
                  <p className="font-body text-sm text-secondary leading-relaxed">
                    {log}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="pt-4">
              <span className="font-headline text-[9px] tracking-[0.3em] text-secondary/30">
                LAST_UPDATED: 29_APR_2025 // 18:00:00 UTC
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
