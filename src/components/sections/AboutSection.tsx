"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechInventoryGrid } from "@/components/ui/TechInventoryGrid";
import { Fingerprint, Bike } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="ABOUT_ME // WHO_IS_THIS_GUY"
          title="THE LAB"
          accentWord="LAB"
        />

        <div className="space-y-16">
          {/* Identity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-surface-container-low p-8 space-y-6 ghost-border"
            >
              <div className="flex items-center gap-3">
                <Fingerprint className="w-4 h-4 text-primary-container" />
                <h3 className="font-headline text-sm font-bold tracking-widest">
                  IDENTITY
                </h3>
              </div>
              <div className="space-y-4">
                <h4 className="font-headline text-2xl md:text-3xl font-bold text-on-surface">
                  AYUSH{" "}
                  <span className="text-primary-container">JAIN</span>
                </h4>
                <p className="font-body text-sm text-secondary leading-relaxed">
                  B.Tech Computer Science graduate from KIIT University, Bhubaneswar.
                  Originally from Cuttack, Odisha. I&apos;m a firm believer in YOLO —
                  I try everything, from building full-stack apps to hitting PRs at
                  the gym, from competitive gaming sessions to weekend cricket matches.
                </p>
                <p className="font-body text-sm text-secondary leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me on the football field,
                  at the badminton court, in the boxing ring, doing calisthenics,
                  or on a long bike ride clearing my head.
                </p>
              </div>
            </motion.div>

            {/* Interests & Lifestyle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-surface-container-low p-8 space-y-6 ghost-border"
            >
              <div className="flex items-center gap-3">
                <Bike className="w-4 h-4 text-primary-container" />
                <h3 className="font-headline text-sm font-bold tracking-widest">
                  BEYOND_CODE
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "MUSIC // CHILL",
                    items: ["Indie", "Hip-hop", "Heavy Metal"],
                  },
                  {
                    title: "FITNESS // DISCIPLINE",
                    items: ["Gym", "Boxing", "Calisthenics"],
                  },
                  {
                    title: "SPORTS // COMPETITION",
                    items: ["Football", "Cricket", "Badminton"],
                  },
                  {
                    title: "LIFESTYLE // ADVENTURE",
                    items: ["Bike Riding", "Gaming", "Exploring New Things"],
                  },
                ].map((group, i) => (
                  <div key={i} className="space-y-2">
                    <h5 className="font-headline text-xs tracking-widest text-primary/70">
                      {group.title}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="font-headline text-[10px] tracking-widest text-secondary/70 bg-surface-container-highest px-3 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tech Inventory */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-tight text-on-surface">
                TECH_<span className="text-primary-container">STACK</span>
              </h3>
            </motion.div>
            <TechInventoryGrid />
          </div>

          {/* Manifesto */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-12 text-center"
          >
            <p className="font-headline text-lg md:text-2xl font-bold tracking-widest text-secondary/40 uppercase">
              You only live once.
              <br />
              <span className="text-primary-container">
                Make it count.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
