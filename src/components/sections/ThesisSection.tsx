"use client";

import { motion } from "framer-motion";
import { THESIS_CONTENT } from "@/data/projects";
import { MonoBadge } from "@/components/core/MonoBadge";

export default function ThesisSection() {
  return (
    <section className="relative py-24 md:py-36 px-6 lg:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-y border-line bg-surface/50">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 relative z-10">
        <MonoBadge variant="allow" dot>
          THE CORE THESIS
        </MonoBadge>

        <div className="flex flex-col gap-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl md:text-5xl font-mono text-text-2 tracking-tight"
          >
            {THESIS_CONTENT.lineA}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold font-sans tracking-tight text-text leading-tight"
          >
            Now it takes actions. <br />
            <span className="text-accent underline decoration-line-bold decoration-2">
              Who decides what&apos;s allowed?
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="p-4 sm:p-6 rounded-2xl border-2 border-line-bold bg-surface shadow-tactile max-w-2xl mt-4"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
              The Architecture Answer
            </span>
          </div>
          <p className="font-sans text-xl sm:text-2xl font-bold text-text mb-2">
            &quot;Models can suggest, but code decides.&quot;
          </p>
          <p className="font-sans text-xs sm:text-sm text-text-2 leading-relaxed">
            {THESIS_CONTENT.subtext}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

