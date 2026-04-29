"use client";

import { Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary-container" />
              <span className="font-headline font-bold text-sm tracking-widest text-on-surface">
                AYUSH<span className="text-primary-container">//JAIN</span>
              </span>
            </div>
            <p className="font-body text-xs text-secondary/60 leading-relaxed">
              CS grad. Builder. YOLO enthusiast.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-headline text-[10px] tracking-[0.3em] text-secondary/40">
              SYSTEM_NAV
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "INTEL", id: "hero" },
                { label: "ARCHIVE", id: "projects" },
                { label: "LAB", id: "about" },
                { label: "JOURNAL", id: "blog" },
                { label: "UPLINK", id: "contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const el = document.getElementById(link.id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.href = `/#${link.id}`;
                    }
                  }}
                  className="text-left font-headline text-xs tracking-widest text-secondary/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="space-y-3">
            <h4 className="font-headline text-[10px] tracking-[0.3em] text-secondary/40">
              SYSTEM_STATUS
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400" />
                <span className="font-headline text-[10px] tracking-widest text-secondary/60">
                  ALL_SYSTEMS_NOMINAL
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-container" />
                <span className="font-headline text-[10px] tracking-widest text-secondary/60">
                  ENCRYPTION_ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-outline-variant/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-headline text-[10px] tracking-[0.2em] text-secondary/40">
              ©{currentYear} AYUSH_JAIN // ALL_RIGHTS_RESERVED
            </p>
            <div className="flex items-center gap-4">
              <span className="font-headline text-[10px] tracking-widest text-secondary/30">
                V5.0.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
