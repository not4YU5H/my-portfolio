"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogPosts } from "@/lib/data/blog";

export function BlogSection() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="TRANSMISSION_LOG // FIELD_NOTES"
          title="FIELD_JOURNAL"
          accentWord="JOURNAL"
          subtitle="Thoughts on building, breaking, and everything in between."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 glow-primary-hover h-full"
              >
                <div className="p-6 md:p-8 space-y-4 flex flex-col h-full">
                  {/* Category + Date */}
                  <div className="flex items-center justify-between">
                    <span className="font-headline text-[10px] tracking-[0.3em] text-primary-container/60">
                      {post.category}
                    </span>
                    <span className="font-headline text-[10px] tracking-widest text-secondary/40">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }).toUpperCase().replace(/ /g, "_")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-headline text-base md:text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-body text-sm text-secondary leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-outline-variant/10">
                    <div className="flex items-center gap-2 text-secondary/40">
                      <Clock className="w-3 h-3" />
                      <span className="font-headline text-[10px] tracking-widest">
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-secondary/30 group-hover:text-primary-container transition-colors">
                      <span className="font-headline text-[10px] tracking-widest">
                        READ
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
