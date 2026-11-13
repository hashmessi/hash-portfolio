"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, Trophy, Shield, Zap } from "lucide-react";
import { HERO_CONTENT } from "@/data/projects";
import { TactileButton } from "@/components/core/TactileButton";
import { MonoBadge } from "@/components/core/MonoBadge";

export default function HeroSection() {
  const iconMap = {
    trophy: <Trophy className="w-3.5 h-3.5 text-award" />,
    shield: <Shield className="w-3.5 h-3.5 text-accent" />,
    zap: <Zap className="w-3.5 h-3.5 text-award" />,
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 lg:px-12 py-16 md:py-24 text-center overflow-hidden">
      {/* Subtle background ambient grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(41,151,255,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(41,151,255,0.12),rgba(0,0,0,0))] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 relative z-10">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <MonoBadge variant="allow" dot dotColor="bg-accent">
            {HERO_CONTENT.eyebrow}
          </MonoBadge>
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight text-text leading-[1.05]"
        >
          I build the trust layer for{" "}
          <span className="text-accent underline decoration-line-bold decoration-wavy decoration-2 underline-offset-8">
            autonomous AI.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-text-2 max-w-2xl font-sans leading-relaxed"
        >
          {HERO_CONTENT.subhead}
        </motion.p>

        {/* Proof Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2.5 pt-2"
        >
          {HERO_CONTENT.proofStrip.map((item) => (
            <div
              key={item.label}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-line-bold bg-surface shadow-tactile-sm text-xs font-mono text-text"
            >
              {iconMap[item.icon as keyof typeof iconMap]}
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Buttons / CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <TactileButton
            size="lg"
            variant="primary"
            href="#signature-work"
            icon={<ArrowDown className="w-4 h-4" />}
          >
            View selected work
          </TactileButton>

          <TactileButton
            size="lg"
            variant="secondary"
            href="https://github.com/hashmessi"
            external
            icon={<Github className="w-4 h-4" />}
          >
            GitHub
          </TactileButton>

          <TactileButton
            size="lg"
            variant="secondary"
            href="#contact"
            icon={<Mail className="w-4 h-4" />}
          >
            Contact
          </TactileButton>
        </motion.div>
      </div>

      {/* Subtle scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-text-2 opacity-60">
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-6 bg-line-bold animate-pulse" />
      </div>
    </section>
  );
}
