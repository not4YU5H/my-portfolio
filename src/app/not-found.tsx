"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { TacticalGrid } from "@/components/ui/TacticalGrid";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <TacticalGrid />

      <div className="relative text-center space-y-8 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <ShieldAlert className="w-16 h-16 text-primary-container/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="font-headline text-[10px] tracking-[0.4em] text-primary/40 block mb-4">
            ERROR_CODE: 404 // SIGNAL_LOST
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-bold text-on-surface tracking-tighter">
            SIGNAL
            <br />
            <span className="text-primary-container">LOST</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-body text-sm text-secondary/60 max-w-md mx-auto"
        >
          The requested transmission could not be located.
          <br />
          The target may have been moved, deleted, or never existed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-container px-8 py-3 font-headline text-sm tracking-widest text-on-primary-container hover:shadow-[0_0_16px_rgba(255,85,64,0.3)] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            RETURN_TO_BASE
          </Link>
        </motion.div>

        {/* Glitch decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0, 0.2, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          className="font-headline text-[10px] tracking-[0.3em] text-primary-container/20"
        >
          ████████████ CHECKSUM_FAILED ████████████
        </motion.div>
      </div>
    </div>
  );
}
