"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { experimentLogs } from "@/lib/data/skills";

export function SystemDiagnostics() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Experiment Log */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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
