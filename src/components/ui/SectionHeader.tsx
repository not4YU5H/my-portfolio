"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  accentWord?: string;
  subtitle?: string;
}

export function SectionHeader({
  label,
  title,
  accentWord,
  subtitle,
}: SectionHeaderProps) {
  const renderTitle = () => {
    if (!accentWord) return title;
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="text-primary-container">{accentWord}</span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      <span className="font-headline text-[10px] tracking-[0.3em] text-primary/60 block mb-3">
        {label}
      </span>
      <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-on-surface">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 font-body text-sm md:text-base text-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
