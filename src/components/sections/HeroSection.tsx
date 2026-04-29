"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, MapPin, Download } from "lucide-react";
import { TacticalGrid } from "@/components/ui/TacticalGrid";
import { ParticleField } from "@/components/ui/ParticleField";
import { TypewriterText } from "@/components/ui/TypewriterText";
import ayushProfilePic from "../../../public/ayush.png";

export function HeroSection() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <TacticalGrid />
      <ParticleField />

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-container/20 to-transparent animate-scan-line" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Boot sequence typewriter */}
            <div className="h-6">
              <TypewriterText
                text="AYUSH_JAIN // FULL_STACK_DEVELOPER"
                className="font-headline text-[10px] tracking-[0.4em] text-primary/50"
                delay={300}
                speed={30}
                onComplete={() => setBootComplete(true)}
              />
            </div>

            {/* Main headline — reveals after boot */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={bootComplete ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9]"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={bootComplete ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                BUILD.
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={bootComplete ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                BREAK.{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={bootComplete ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                className="text-primary-container"
              >
                REPEAT.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={bootComplete ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="font-body text-base md:text-lg text-secondary max-w-xl leading-relaxed"
            >
              CS grad. I code, I game, I lift, I ride. <br></br>
              Believer in YOLO — life&apos;s too short to not try everything.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={bootComplete ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary-container px-8 py-3 font-headline text-sm tracking-widest text-on-primary-container hover:shadow-[0_0_16px_rgba(255,85,64,0.3)] transition-all"
              >
                VIEW MY WORK
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 ghost-border px-8 py-3 font-headline text-sm tracking-widest text-primary hover:bg-surface-container-high transition-all"
              >
                GET IN TOUCH
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 ghost-border px-6 py-3 font-headline text-sm tracking-widest text-secondary hover:text-primary hover:bg-surface-container-high transition-all"
              >
                <Download className="w-4 h-4" />
                DOSSIER
              </a>
            </motion.div>
          </div>

          {/* Side Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={bootComplete ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Profile Image */}
            <div className="flex flex-col items-center gap-4">
              <div
                className="circle-cutout relative w-48 h-48 md:w-56 md:h-56 overflow-hidden border-2 border-primary-container/30 glow-red flex items-center justify-center bg-surface-container-low"
              >
                <Image
                  src={ayushProfilePic}
                  alt="Ayush Jain"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <span className="font-headline text-[10px] tracking-[0.3em] text-secondary/40">
                OPERATOR_VISUAL
              </span>
            </div>

            {/* Location */}
            <div className="bg-surface-container-low p-6 space-y-4 ghost-border">
              <span className="font-headline text-[10px] tracking-[0.3em] text-secondary/40">
                LOCATION_DATA
              </span>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-secondary/60">
                  <MapPin className="w-3 h-3 text-primary-container" />
                  <span className="font-headline text-xs tracking-widest">
                    PUNE, MAHARASHTRA
                  </span>
                </div>
                <div className="flex items-center gap-2 text-secondary/60">
                  <MapPin className="w-3 h-3 text-primary-container" />
                  <span className="font-headline text-xs tracking-widest">
                    BHUBANESHWAR, ODISHA
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={bootComplete ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#fields"
            className="flex flex-col items-center gap-2 text-secondary/30 hover:text-primary transition-colors"
          >
            <span className="font-headline text-[8px] tracking-[0.4em]">
              SCROLL
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
