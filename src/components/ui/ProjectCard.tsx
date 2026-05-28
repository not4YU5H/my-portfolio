"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 glow-primary-hover"
      >
        <div className="p-6 md:p-8 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <span className="font-headline text-[10px] tracking-[0.3em] text-primary/40">
                {project.sector}
              </span>
              <h3 className="font-headline text-lg md:text-xl font-bold text-on-surface mt-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight className="w-5 h-5 text-secondary/30 group-hover:text-primary-container transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          {/* Description */}
          <p className="font-body text-sm text-secondary leading-relaxed">
            {project.description}
          </p>

          {/* Meta + Links */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4">
              <span className="font-headline text-[10px] tracking-widest text-secondary/40">
                {project.deploymentDate}
              </span>
              <span className="font-headline text-[10px] tracking-widest text-green-400/60">
                {project.objectiveStatus}
              </span>
            </div>
            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.liveUrl!, "_blank");
                  }}
                  className="font-headline text-[10px] tracking-widest text-primary hover:text-primary-container transition-colors flex items-center gap-1"
                >
                  [LIVE_DEMO <ArrowUpRight className="w-3 h-3" />]
                </button>
              )}
              {project.repoUrl && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.repoUrl!, "_blank");
                  }}
                  className="font-headline text-[10px] tracking-widest text-secondary hover:text-on-surface transition-colors flex items-center gap-1"
                >
                  [REPO_ACCESS <Github className="w-3 h-3" />]
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
