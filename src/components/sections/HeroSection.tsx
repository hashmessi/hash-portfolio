"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const bootLines = [
  "HASHVANTH OS v2.4.1 // LOADING...",
  "INITIALIZING NEURAL SUBSYSTEMS...",
  "AI ENGINE ONLINE ............. [OK]",
  "DESIGN CORE LOADED ........... [OK]",
  "FULL-STACK RUNTIME ACTIVE .... [OK]",
  "GENAI PIPELINE READY ......... [OK]",
  "SYSTEM ONLINE. READY.",
];

const stats = [
  { label: "PROJECTS SHIPPED", value: "5+" },
  { label: "AI INTEGRATIONS" ,value: "2" },
  { label: "STACK DEPTH", value: "FULL" },
];

function BootSequence() {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setLines((prev) => [...prev, bootLines[idx]]);
      idx++;
      if (idx >= bootLines.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 600);
      }
    }, 220);
    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <motion.div
      className="absolute inset-0 z-50 bg-[#0A0705] flex flex-col justify-center items-start px-8 md:px-16 font-terminal"
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="monitor-frame w-full max-w-2xl mx-auto">
        <div className="terminal-titlebar">
          <div className="terminal-dot bg-[#CC3322]" />
          <div className="terminal-dot bg-[#C9961A]" />
          <div className="terminal-dot bg-[#7A3B1E]" />
          <span className="ml-3 text-[#A88B62] text-xs font-pixel uppercase tracking-widest">HASHVANTH_SYSTEM.exe</span>
        </div>
        <div className="monitor-screen min-h-[220px] p-4">
          {lines.map((line, i) => (
            <div key={i} className="flex items-center gap-2 mb-1">
              <span className="text-[#C9961A] text-xs">{">"}</span>
              <span
                className="text-retro-beige text-sm uppercase tracking-widest"
                style={{ animationDelay: `${i * 0.22}s` }}
              >
                {line}
              </span>
            </div>
          ))}
          {lines.length > 0 && lines.length < bootLines.length && (
            <span className="text-[#CC3322] animate-pulse">█</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);
  const floatY1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const floatY2 = useTransform(scrollY, [0, 1000], [0, 90]);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), bootLines.length * 220 + 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden bg-retro-black">
      <BootSequence />

      {/* Warm ambient — no neon, only warm tones */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full bg-retro-red/[0.07] blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-retro-orange/[0.06] blur-[160px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full warm-glow-gold opacity-30 pointer-events-none" />

      {/* Background pattern — warm grid */}
      <div className="absolute inset-0 bg-grid-warm opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-halftone-warm pointer-events-none" />

      {/* CRT film overlay */}
      <div className="absolute inset-0 film-grain pointer-events-none z-10" />
      <div className="absolute inset-0 crt-scanlines crt-vignette pointer-events-none z-10" />

      {/* Vintage decorative elements — CSS only, no images */}
      {/* Floating rotated square — top right */}
      <motion.div
        style={{ y: floatY1 }}
        className="absolute top-24 right-24 animate-float z-0"
      >
        <div
          className="w-20 h-20 border-[3px] border-dashed border-retro-red/40 rotate-12"
          style={{ boxShadow: "8px 8px 0 rgba(204,51,34,0.12)" }}
        />
      </motion.div>

      {/* Orange block — floating diamond */}
      <motion.div
        style={{ y: floatY2 }}
        className="absolute top-44 right-52 animate-float-delay z-0"
      >
        <div className="w-10 h-10 bg-retro-orange/70 rotate-45" style={{ boxShadow: "4px 4px 0 var(--color-retro-border)" }} />
      </motion.div>

      {/* Pixel dots */}
      <div className="absolute top-1/3 right-36 w-4 h-4 bg-retro-red border-2 border-retro-border animate-pulse z-0 shadow-retro-sm" />
      <div className="absolute top-1/2 left-[62%] w-3 h-3 bg-retro-gold-bright border-2 border-retro-border animate-pulse z-0 shadow-retro-sm" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-retro-red border-2 border-retro-border animate-pulse z-0 shadow-retro-sm" style={{ animationDelay: "3s" }} />
      
      {/* Large decorative grid corner marks */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-retro-border z-0" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-retro-border z-0" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-retro-border z-0" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-retro-border z-0" />

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 flex-1 flex flex-col justify-end p-8 md:p-16 lg:p-24"
      >
        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: booted ? 1 : 0, x: booted ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-4 h-4 bg-retro-red border-2 border-retro-border animate-pulse shadow-retro-sm" />
          <span className="font-terminal text-2xl uppercase tracking-widest font-bold text-retro-red text-retro-shadow-red retro-cursor">
            SYSTEM ONLINE
          </span>
          <div className="h-0.5 flex-1 bg-linear-to-r from-retro-red/60 to-transparent ml-4" />
        </motion.div>

        {/* Headline — massive retro */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: booted ? 1 : 0, y: booted ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[min(11vw,7.5rem)] leading-[1.05] font-pixel uppercase mb-6 relative"
        >
          <span
            className="block text-retro-beige"
            style={{ textShadow: "5px 5px 0 var(--color-retro-shadow), 10px 10px 0 rgba(204, 51, 34, 0.35)" }}
          >
            HASHVANTH M U
          </span>
          <span
            className="block text-retro-red mt-3"
            style={{ textShadow: "5px 5px 0 var(--color-retro-shadow), 10px 10px 0 rgba(196, 99, 30, 0.35)" }}
          >
            AI PRODUCT DESIGNER
          </span>
        </motion.h1>

        {/* Sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: booted ? 1 : 0, y: booted ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col md:flex-row gap-8 items-start md:items-end"
        >
          {/* Description card — terminal style */}
          <div className="gumroad-card w-full lg:max-w-xl shadow-retro-lg tape-effect">
            <div className="terminal-titlebar bg-retro-border/20">
              <div className="terminal-dot bg-retro-red" />
              <div className="terminal-dot bg-retro-gold" />
              <div className="terminal-dot bg-retro-orange" />
              <span className="ml-2 font-pixel text-[8px] uppercase tracking-widest text-retro-black/50">ABOUT.sys</span>
            </div>
            <div className="p-8">
              <p className="font-terminal text-2xl uppercase font-bold leading-tight text-retro-black mb-6">
                Building intelligent digital products with AI, design, and code.
              </p>
              <div className="space-y-2">
                {["AI-INTEGRATED PRODUCT SYSTEMS", "MODERN FRONTEND ARCHITECTURE", "HUMAN-CENTERED PRODUCT DESIGN", "SCALABLE WEB APPLICATIONS"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-retro-red font-pixel text-[8px]">▶</span>
                    <span className="font-terminal text-sm text-retro-black/70 font-bold tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: stats + CTA */}
          <div className="flex flex-col gap-6 ml-auto w-full lg:w-auto">
            {/* Mini stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="gumroad-card px-4 py-4 text-center shadow-retro-md! border-4!"
                >
                  <div className="font-pixel text-xl text-retro-red mb-1 drop-shadow-sm">{s.value}</div>
                  <div className="font-terminal text-[10px] uppercase font-bold tracking-widest text-retro-black leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="gumroad-card px-5 py-3 flex items-center gap-3 shadow-retro-md! border-4!">
                <div className="w-2.5 h-2.5 bg-retro-red animate-pulse" />
                <span className="font-pixel text-[10px] uppercase tracking-widest text-retro-black font-bold">
                  CHENNAI, INDIA
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#projects"
                  className="btn-retro px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-bold"
                >
                  VIEW WORKS
                </a>
                <a
                  href="https://hashvanth-m-u-resume.tiiny.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-retro px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-bold bg-retro-beige! text-retro-black! border-retro-black!"
                >
                  RESUME
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 gradient-fade-bottom z-10 pointer-events-none" />
    </section>
  );
}
