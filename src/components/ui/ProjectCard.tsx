"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
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
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.githubUrl, "_blank");
                  }}
                  className="w-7 h-7 flex items-center justify-center text-secondary/40 hover:text-primary-container hover:bg-surface-container-highest transition-all cursor-pointer"
                  aria-label="View source code"
                >
                  <Github className="w-3.5 h-3.5" />
                </span>
              )}
              {project.liveUrl && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.liveUrl, "_blank");
                  }}
                  className="w-7 h-7 flex items-center justify-center text-secondary/40 hover:text-primary-container hover:bg-surface-container-highest transition-all cursor-pointer"
                  aria-label="View live demo"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
