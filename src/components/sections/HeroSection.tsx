"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { TacticalGrid } from "@/components/ui/TacticalGrid";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <TacticalGrid />

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-container/20 to-transparent animate-scan-line" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-headline text-[10px] tracking-[0.4em] text-primary/50">
                AYUSH_JAIN // FULL_STACK_DEVELOPER
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9]"
            >
              BUILD.
              <br />
              BREAK.{" "}
              <span className="text-primary-container">REPEAT.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-body text-base md:text-lg text-secondary max-w-xl leading-relaxed"
            >
              CS grad. I code, I game, I lift, I ride. <br></br>
              Believer in YOLO — life&apos;s too short to not try everything.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
            </motion.div>
          </div>

          {/* Side Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Profile Image */}
            <div className="flex flex-col items-center gap-4">
              <div
                className="circle-cutout relative w-48 h-48 md:w-56 md:h-56 overflow-hidden border-2 border-primary-container/30 glow-red flex items-center justify-center bg-surface-container-low"
              >
                <Image
                  src="/ayush.png"
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
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
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
