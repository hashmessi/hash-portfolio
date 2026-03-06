"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "85%",    label: "User dropout rate addressed", accent: "#CC3322" },
  { value: "<500ms", label: "First token SSE latency",     accent: "#C4631E" },
  { value: "90%",    label: "Cost reduction via routing",  accent: "#CC3322" },
  { value: "3",      label: "AI models integrated",        accent: "#C4631E" },
];

const features = [
  { id: "01", title: "AI WORKOUT GEN",  desc: "Dynamic plans via GPT-4o per user biometrics and goals.", accent: "#CC3322" },
  { id: "02", title: "AI DIET PLANNER", desc: "Region-aware nutrition with caloric targets.",               accent: "#C4631E" },
  { id: "03", title: "REAL-TIME CHAT",  desc: "SSE streaming assistant — first token < 500ms.",            accent: "#DAA520" },
  { id: "04", title: "MODEL ROUTING",   desc: "Smart fallback: OpenAI → DeepSeek → Offline.",              accent: "#CC3322" },
  { id: "05", title: "PROGRESS TRACK",  desc: "Goal streaks, workout logs, adaptive milestones.",           accent: "#C4631E" },
  { id: "06", title: "SUPABASE AUTH",   desc: "Row-level security and persistent auth sessions.",           accent: "#DAA520" },
];

const techStack = ["React 19", "FastAPI", "Supabase", "GPT-4o", "DeepSeek", "TypeScript", "TailwindCSS", "SSE"];

const terminalContent = {
  header: "FITBRIDGE AI v1.0",
  user: "hashvanth@fitbridge.io",
  status: 82,
  checks: [
    { label: "WORKOUT PLAN GENERATED", status: "✓" },
    { label: "DIET PLAN OPTIMIZED", status: "✓" },
    { label: "AI CHAT READY", status: "✓" },
  ],
  metrics: [
    { label: "CALORIES", value: "2,340 kcal/day" },
    { label: "SESSIONS", value: "4x per week" },
    { label: "PROGRESS", value: "+12% this week" },
  ]
};

export default function FitBridgeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll(".reveal-hidden, .reveal-hidden-left, .reveal-hidden-right") ?? [];
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="fitbridge"
      ref={sectionRef}
      className="relative bg-retro-black overflow-hidden py-28 md:py-36"
    >
      {/* Warm ambient glows — NO neon */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-retro-red/6 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-retro-orange/6 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-50 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-halftone-warm opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-20">

        {/* Section label */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-end">
          <div className="reveal-hidden">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-4 h-4 bg-retro-red border-2 border-retro-border-bold shadow-retro-sm" />
              <span className="font-pixel text-[10px] font-bold uppercase tracking-[0.2em] text-retro-red">
                FLAGSHIP_PRODUCT.sys
              </span>
            </div>
            <h2
              className="text-5xl md:text-7xl font-pixel uppercase tracking-tighter leading-[1.1] text-retro-beige"
              style={{ textShadow: "4px 4px 0 var(--color-retro-shadow), 8px 8px 0 rgba(204, 51, 34, 0.3)" }}
            >
              FIT<br/>BRIDGE
            </h2>
          </div>
          
          <div className="reveal-hidden lg:text-right">
            <blockquote className="font-terminal text-2xl uppercase font-bold italic text-retro-red max-w-md ml-auto border-r-8 border-r-retro-red pr-6 py-2">
              &quot;85% of people quit fitness programs within 6 weeks due to lack of personalization.&quot;
            </blockquote>
          </div>
        </div>

        {/* Hero block — CSS visual + info */}
        <div className="gumroad-card overflow-hidden mb-16 reveal-hidden p-0!">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Visual side — CSS-only terminal dashboard */}
            <div className="relative min-h-[380px] lg:min-h-[460px] overflow-hidden bg-retro-black border-r-4 border-retro-border-bold">
              {/* CRT screen glow */}
              <div className="absolute inset-0 bg-retro-red/5 pointer-events-none" />
              <div className="absolute inset-0 crt-scanlines pointer-events-none z-10" />

              {/* Floating label */}
              <div className="absolute top-6 left-6 flex items-center gap-2 z-20">
                <div className="sticker-accent rotate-3! shadow-retro-sm">
                  LIVE_SYSTEM_ACTIVE
                </div>
              </div>

              {/* Terminal Box visualization */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8">
                <div className="w-full max-w-[340px] font-terminal border-2 border-retro-gold/80 p-0 text-retro-gold select-none font-bold">
                  {/* Top line with corners */}
                  <div className="flex justify-between -mt-[14px] -mx-2 px-1">
                    <span className="bg-retro-black">┌</span>
                    <span className="flex-1 border-t-2 border-retro-gold/80 mt-3.5 mx-1"></span>
                    <span className="bg-retro-black">┐</span>
                  </div>

                  <div className="px-4 py-2">
                    <div className="flex justify-between border-b-2 border-retro-gold/60 pb-2 mb-3">
                      <span>{terminalContent.header}</span>
                      <span>|</span>
                    </div>

                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between">
                        <span>USER: {terminalContent.user}</span>
                        <span>|</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>STATUS:</span>
                        <div className="flex-1 flex bg-retro-gold/20 h-4 border border-retro-gold/40">
                          <div className="bg-retro-gold h-full" style={{ width: `${terminalContent.status}%` }}></div>
                          <div className="bg-retro-gold/30 h-full flex-1 opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)' }}></div>
                        </div>
                        <span> {terminalContent.status}%</span>
                        <span className="ml-2">|</span>
                      </div>
                    </div>

                    <div className="space-y-1 mb-4 text-sm">
                      {terminalContent.checks.map((check, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span>{check.label}</span>
                          <span className="flex items-center gap-4">
                            <span>{check.status}</span>
                            <span>|</span>
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1 mt-4 pt-4 border-t-2 border-retro-gold/40">
                      {terminalContent.metrics.map((metric, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span>{metric.label}: {metric.value}</span>
                          <span>|</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom line with corners */}
                  <div className="flex justify-between -mb-[14px] -mx-2 px-1">
                    <span className="bg-retro-black">└</span>
                    <span className="flex-1 border-b-2 border-retro-gold/80 mb-3.5 mx-1"></span>
                    <span className="bg-retro-black">┘</span>
                  </div>

                  {/* Blinking cursor below */}
                  <div className="mt-8 flex items-center gap-2 pl-4">
                    <span className="text-retro-red">{">"}</span>
                    <span className="text-retro-gold retro-cursor">█</span>
                  </div>
                </div>
              </div>

              {/* Scan line overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-retro-black to-transparent z-10" />
            </div>

            {/* Info side */}
            <div className="p-10 lg:p-14 flex flex-col justify-between relative bg-retro-beige">
              <div>
                <span className="font-pixel text-[10px] uppercase text-retro-red mb-4 block tracking-widest font-bold">PROJECT_ARCHITECTURE</span>
                <p className="font-terminal text-3xl uppercase leading-tight text-retro-black font-extrabold mb-8">
                  AI-Powered Personalized Fitness Companion — intelligent workout & diet plans, SSE chat.
                </p>
                
                <div className="mb-8 space-y-3">
                  <p className="font-pixel text-[10px] uppercase text-retro-red mb-4 font-bold">CORE_DELIVERABLES:</p>
                  {[
                    "FULL PRODUCT ARCHITECTURE & SYSTEM DESIGN",
                    "AI SYSTEM INTEGRATION (GPT-4O + DEEPSEEK)",
                    "REACT COMPONENT SYSTEM & UI ARCHITECTURE",
                    "FASTAPI ASYNC BACKEND & SSE STREAMING"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-retro-red border border-retro-border-bold" />
                      <span className="font-terminal text-base text-retro-black uppercase tracking-wide font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://github.com/hashmessi/fitbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-retro px-8 py-5 text-sm uppercase tracking-widest mt-6"
              >
                OPEN_SOURCE_REPO
                <ArrowUpRight className="ml-3 w-5 h-5" strokeWidth={4} />
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className="gumroad-card p-8 text-center group reveal-hidden shadow-retro-md! border-4!"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="text-4xl md:text-5xl font-pixel tabular-nums mb-4 font-bold"
                style={{ color: s.accent }}
              >
                {s.value}
              </div>
              <div className="font-terminal text-lg uppercase tracking-wider text-retro-black/60 leading-tight font-bold">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.id}
              className="gumroad-card p-8 group reveal-hidden shadow-retro-md! border-4! tape-effect"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-pixel text-xl font-bold"
                  style={{ color: f.accent }}
                >
                  {f.id}
                </span>
                <div className="h-1 flex-1 border-t-4 border-retro-border-bold/20 group-hover:border-retro-red/50 transition-colors" />
              </div>
              <h3
                className="font-pixel text-sm uppercase tracking-tight mb-4 leading-loose font-bold"
                style={{ color: f.accent }}
              >
                {f.title}
              </h3>
              <p className="font-terminal text-xl uppercase leading-relaxed text-retro-black font-bold">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stack footer */}
        <div className="mt-10 flex flex-wrap gap-3 justify-center reveal-hidden">
          {techStack.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 font-pixel text-[10px] uppercase tracking-widest
                bg-retro-surface border-2 border-retro-border text-retro-cream-dim
                hover:text-retro-red hover:border-retro-red hover:-translate-y-0.5
                transition-all cursor-default shadow-retro-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
