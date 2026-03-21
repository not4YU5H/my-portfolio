"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    callsign: "",
    frequency: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
      setStatus("success");
      setFormData({ callsign: "", frequency: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6 max-w-xl"
    >
      <div>
        <label
          htmlFor="callsign"
          className="font-headline text-[10px] tracking-[0.3em] text-secondary/60 block mb-2"
        >
          CALLSIGN_ID
        </label>
        <input
          id="callsign"
          name="callsign"
          type="text"
          required
          value={formData.callsign}
          onChange={(e) =>
            setFormData({ ...formData, callsign: e.target.value })
          }
          className="w-full bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 font-body text-sm text-on-surface placeholder:text-secondary/30 focus:border-primary focus:outline-none focus:shadow-[0_0_8px_rgba(255,180,168,0.15)] transition-all"
          placeholder="Enter your name…"
        />
      </div>

      <div>
        <label
          htmlFor="frequency"
          className="font-headline text-[10px] tracking-[0.3em] text-secondary/60 block mb-2"
        >
          COMM_FREQUENCY
        </label>
        <input
          id="frequency"
          name="frequency"
          type="email"
          required
          value={formData.frequency}
          onChange={(e) =>
            setFormData({ ...formData, frequency: e.target.value })
          }
          className="w-full bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 font-body text-sm text-on-surface placeholder:text-secondary/30 focus:border-primary focus:outline-none focus:shadow-[0_0_8px_rgba(255,180,168,0.15)] transition-all"
          placeholder="Enter your email…"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-headline text-[10px] tracking-[0.3em] text-secondary/60 block mb-2"
        >
          TRANSMISSION
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 font-body text-sm text-on-surface placeholder:text-secondary/30 focus:border-primary focus:outline-none focus:shadow-[0_0_8px_rgba(255,180,168,0.15)] transition-all resize-none"
          placeholder="Enter your message…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="group inline-flex items-center gap-3 bg-primary-container px-8 py-3 font-headline text-sm tracking-widest text-on-primary-container hover:shadow-[0_0_16px_rgba(255,85,64,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" && (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            TRANSMITTING...
          </>
        )}
        {status === "success" && (
          <>
            <CheckCircle className="w-4 h-4" />
            TRANSMITTED
          </>
        )}
        {status === "error" && (
          <>
            <AlertCircle className="w-4 h-4" />
            FAILED - RETRY
          </>
        )}
        {status === "idle" && (
          <>
            <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            TRANSMIT
          </>
        )}
      </button>
    </motion.form>
  );
}
