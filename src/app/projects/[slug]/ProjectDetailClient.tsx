"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { TacticalGrid } from "@/components/ui/TacticalGrid";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { MetricsDisplay } from "@/components/ui/MetricsDisplay";
import type { Project } from "@/lib/data/projects";

export function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <TacticalGrid />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-headline text-xs tracking-widest text-secondary/60 hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              RETURN_TO_ARCHIVE
            </Link>
          </motion.div>

          {/* Meta Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <span className="font-headline text-[10px] tracking-[0.3em] bg-surface-container-high px-3 py-1 text-secondary/60">
              {project.sector}
            </span>
            <span className="font-headline text-[10px] tracking-[0.3em] bg-surface-container-high px-3 py-1 text-green-400/60">
              {project.objectiveStatus}
            </span>
            <span className="font-headline text-[10px] tracking-[0.3em] bg-surface-container-high px-3 py-1 text-secondary/40">
              {project.deploymentDate}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter"
          >
            PROJECT_DEEP_DIVE:
            <br />
            <span className="text-primary-container">{project.title}</span>
          </motion.h1>

          {/* Project Links */}
          {(project.githubUrl || project.liveUrl) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 ghost-border px-6 py-2.5 font-headline text-xs tracking-widest text-secondary hover:text-primary hover:bg-surface-container-high transition-all"
                >
                  <Github className="w-4 h-4" />
                  VIEW_SOURCE
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-container px-6 py-2.5 font-headline text-xs tracking-widest text-on-primary-container hover:shadow-[0_0_16px_rgba(255,85,64,0.3)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  LIVE_DEMO
                </a>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Mission Brief */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-8"
          >
            <div>
              <span className="font-headline text-[10px] tracking-[0.3em] text-primary/60 block mb-2">
                MISSION_BRIEF
              </span>
              <span className="font-headline text-[10px] tracking-widest text-secondary/40 block mb-4">
                REF_ID: {project.refId}
              </span>
              <p className="font-body text-base md:text-lg text-secondary leading-relaxed">
                {project.missionBrief}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-headline text-sm font-bold tracking-widest text-on-surface mb-2">
                  Primary Challenge
                </h3>
                <p className="font-body text-sm text-secondary leading-relaxed">
                  {project.primaryChallenge}
                </p>
              </div>
              <div>
                <h3 className="font-headline text-sm font-bold tracking-widest text-on-surface mb-2">
                  Solution Mandate
                </h3>
                <p className="font-body text-sm text-secondary leading-relaxed">
                  {project.solutionMandate}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tactical Report */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-headline text-[10px] tracking-[0.3em] text-primary/60 block mb-3">
              TACTICAL_REPORT
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-on-surface">
              ENGINEERING_LOG_<span className="text-primary-container">V04</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-sm md:text-base text-secondary leading-relaxed max-w-3xl"
          >
            {project.engineeringLog}
          </motion.p>

          {/* Code Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CodeBlock code={project.codeSnippet} />
          </motion.div>

          {/* Interface Architecture Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-l-2 border-primary-container/40 pl-6 py-2"
          >
            <span className="font-headline text-[10px] tracking-[0.3em] text-primary/60 block mb-2">
              INTERFACE_ARCHITECTURE
            </span>
            <p className="font-body text-base md:text-lg text-secondary/80 italic leading-relaxed">
              &quot;{project.interfaceArchitecture}&quot;
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Outcome Metrics */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-headline text-[10px] tracking-[0.3em] text-primary/60 block mb-3">
              OUTCOME_METRICS
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-on-surface">
              Performance{" "}
              <span className="text-primary-container">Report</span>
            </h2>
          </motion.div>

          <MetricsDisplay metrics={project.metrics} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-headline text-xl md:text-2xl font-bold text-on-surface"
          >
            Ready to deploy the next evolution?
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary-container px-8 py-3 font-headline text-sm tracking-widest text-on-primary-container hover:shadow-[0_0_16px_rgba(255,85,64,0.3)] transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              OPEN_UPLINK
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 ghost-border px-8 py-3 font-headline text-sm tracking-widest text-primary hover:bg-surface-container-high transition-all"
            >
              RETURN_TO_ARCHIVE
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
