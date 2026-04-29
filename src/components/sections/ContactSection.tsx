"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { GenerativeArt } from "@/components/ui/GenerativeArt";
import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  {
    protocol: "PROTOCOL::GITHUB",
    coords: "40.7128° N, 74.0060° W",
    icon: Github,
    href: "https://github.com/not4YU5H",
    label: "terminal",
  },
  {
    protocol: "PROTOCOL::LINKEDIN",
    coords: "34.0522° N, 118.2437° W",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ayushjain001",
    label: "link",
  },
  {
    protocol: "PROTOCOL::INSTAGRAM",
    coords: "51.5074° N, 0.1278° W",
    icon: Instagram,
    href: "https://www.instagram.com/mr.ayush.jain",
    label: "visual_feed",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="SECURE_CHANNEL // UPLINK_ESTABLISHED"
          title="SECURE_CHANNEL"
          accentWord="CHANNEL"
          subtitle="Let's connect — whether it's about code, sports, or just crazy ideas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Data Nodes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-headline text-sm font-bold tracking-widest text-on-surface flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 animate-pulse" />
              DATA_NODES
            </h3>

            <div className="space-y-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.protocol}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="group flex items-center gap-4 bg-surface-container p-5 ghost-border hover:bg-surface-container-high transition-all glow-primary-hover"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-surface-container-highest group-hover:bg-primary-container/10 transition-colors">
                    <link.icon className="w-5 h-5 text-secondary/60 group-hover:text-primary-container transition-colors" />
                  </div>
                  <div className="flex-1">
                    <span className="font-headline text-xs tracking-widest text-on-surface block">
                      {link.protocol}
                    </span>
                    <span className="font-headline text-[10px] tracking-widest text-secondary/40">
                      {link.coords}
                    </span>
                  </div>
                  <span className="font-headline text-[10px] tracking-widest text-primary/40 group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Generative Art Node */}
            <div className="mt-8 bg-surface-container ghost-border overflow-hidden">
              <div className="flex items-center gap-2 px-6 pt-4 pb-2">
                <div className="w-2 h-2 bg-primary-container animate-pulse" />
                <span className="font-headline text-[10px] tracking-[0.3em] text-secondary/40">
                  VISUAL_NODE_ACTIVE
                </span>
              </div>
              <GenerativeArt />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
