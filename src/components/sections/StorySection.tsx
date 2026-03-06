"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "1",
    title: "FRONTEND ARCHITECTURE",
    desc: "Built foundational frontend systems with React and strictly typed component architectures. Learned the importance of design systems.",
    accent: "#CC3322",
    icon: "[ FE ]",
  },
  {
    year: "'2",
    title: "BACKEND INFRASTRUCTURE",
    desc: "Moved across the stack. Engineered end-to-end systems using Python/FastAPI, Supabase, and PostgreSQL.",
    accent: "#C4631E",
    icon: "[ BE ]",
  },
  {
    year: "'3",
    title: "APPLIED AI ENGINEERING",
    desc: "Bridging SaaS with Generative AI — abstracting raw LLM logic into seamless, high-performance user experiences.",
    accent: "#DAA520",
    icon: "[ AI ]",
  },
];

export default function StorySection() {
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
      { threshold: 0.15 }
    );

    const items = sectionRef.current?.querySelectorAll(".reveal-hidden") ?? [];
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative bg-retro-black py-28 md:py-36 overflow-hidden"
    >
      {/* Warm background patterns */}
      <div className="absolute inset-0 bg-halftone-warm opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-warm pointer-events-none" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#CC3322]/25 to-transparent transform -translate-x-1/2 hidden md:block" />

      {/* Warm ambient */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#CC3322]/[0.05] blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="mb-24 text-center">
          <div 
            className="inline-flex items-center gap-4 mb-6 reveal-hidden"
            style={{ transitionDelay: "0s" }}
          >
            <div className="h-0.5 w-16 border-t-2 border-dashed border-retro-red" />
            <span className="font-pixel text-[10px] uppercase font-bold tracking-[0.2em] text-retro-orange">
              SYSTEM PROFILE
            </span>
            <div className="h-0.5 w-16 border-t-2 border-dashed border-retro-red" />
          </div>
          <h2
            className="text-4xl md:text-6xl font-pixel uppercase tracking-tighter text-retro-beige mb-10 reveal-hidden"
            style={{ 
              textShadow: "4px 4px 0 var(--color-retro-shadow), 8px 8px 0 rgba(204, 51, 34, 0.3)",
              transitionDelay: "0.1s"
            }}
          >
            ABOUT{" "}
            <span
              className="text-retro-red"
              style={{ textShadow: "4px 4px 0 var(--color-retro-shadow)" }}
            >
              ME
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div 
              className="vintage-card p-8 text-left border-l-4 border-l-retro-red reveal-hidden"
              style={{ transitionDelay: "0.2s" }}
            >
              <p className="font-terminal text-2xl uppercase leading-relaxed text-retro-cream">
                I&apos;m a designer who codes and an engineer who designs. My goal is to bridge the gap between complex AI capabilities and intuitive human experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className="terminal-window reveal-hidden"
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="terminal-titlebar">
                  <span className="font-pixel text-[8px] uppercase tracking-widest text-retro-cream-dim">EXPLORING.log</span>
                </div>
                <div className="p-6 text-left space-y-3">
                  <p className="font-terminal text-lg text-retro-cream-faint uppercase tracking-wider mb-2">Currently exploring:</p>
                  {[
                    "Agentic AI Workflows",
                    "Next-Gen UI Paradigms",
                    "Modern Content Engines",
                    "Embedded Systems Design"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-retro-red font-pixel text-[8px] animate-pulse">■</span>
                      <span className="font-terminal text-base text-retro-beige tracking-wide uppercase">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div 
                className="terminal-window reveal-hidden"
                style={{ transitionDelay: "0.35s" }}
              >
                <div className="terminal-titlebar">
                  <span className="font-pixel text-[8px] uppercase tracking-widest text-retro-cream-dim">JOURNEY.sys</span>
                </div>
                <div className="p-6 text-left">
                  <p className="font-terminal text-lg text-retro-cream-faint uppercase tracking-wider mb-4 leading-relaxed">
                    Evolving from building static components to architecting autonomous AI-driven systems.
                  </p>
                  <div className="h-0.5 w-full bg-linear-to-r from-retro-red to-transparent opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline (Journey Header) */}
        <div className="mb-16 text-center reveal-hidden">
             <span className="font-pixel text-[10px] uppercase font-bold tracking-[0.2em] text-retro-cream-faint">
              MILESTONES
            </span>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-retro-red/40 via-retro-orange/30 to-transparent -translate-x-px md:-translate-x-px hidden sm:block" />

          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot — center */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center z-10"
                >
                  <div
                    className="w-5 h-5 border-2 border-retro-border bg-retro-black"
                    style={{ boxShadow: `0 0 0 3px ${item.accent}40, 3px 3px 0 #3A2212` }}
                  >
                    <div className="w-full h-full" style={{ backgroundColor: item.accent, opacity: 0.9 }} />
                  </div>
                </motion.div>

                {/* Year badge — floats near center */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="hidden md:flex md:w-1/2 justify-center items-center"
                >
                  <div
                    className="font-pixel text-5xl md:text-6xl font-bold"
                    style={{ color: `${item.accent}60`, textShadow: `4px 4px 0 #3A2212` }}
                  >
                    {item.year}
                  </div>
                </motion.div>

                {/* Card Wrapper Container */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  className={`relative md:w-1/2 w-full ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                >
                  <div className="gumroad-card p-0 group overflow-hidden shadow-retro-md! border-4!">
                    {/* Terminal header */}
                    <div className="bg-retro-black/95 p-3 flex items-center gap-3 border-b-4 border-retro-border-bold">
                      <div className="terminal-dot w-3 h-3 border-2 border-retro-border-bold" style={{ backgroundColor: item.accent }} />
                      <span className="font-pixel text-[8px] uppercase tracking-widest text-retro-beige/80">
                        {item.icon}
                      </span>
                      <span className="ml-auto font-pixel text-[8px] text-retro-beige/40 uppercase tracking-widest font-bold">
                        TIMESTAMP_{item.year}
                      </span>
                    </div>

                    <div className="p-7">
                      <h3
                        className="font-pixel text-base uppercase tracking-tight mb-4 leading-relaxed"
                        style={{ color: item.accent }}
                      >
                        {item.title}
                      </h3>
                      <p className="font-terminal text-xl uppercase leading-relaxed text-retro-black font-bold">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Sticker tag placed precisely on the outer edge of the wrapper */}
                  <div className={`absolute -top-1 z-20 hidden lg:block ${
                    i % 2 === 0 
                      ? "-right-10 rotate-6" 
                      : "-left-12 -rotate-6"
                  }`}>
                    <div className="sticker-accent px-4! py-1! text-[8px] shadow-retro-sm">
                      QUAL_DATA
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-24 text-center reveal-hidden">
          <div className="inline-flex items-center gap-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#CC3322]/40" />
            <span className="font-pixel text-[9px] uppercase tracking-[0.2em] text-retro-cream-faint">ARCHIVE COMPLETE</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#CC3322]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
