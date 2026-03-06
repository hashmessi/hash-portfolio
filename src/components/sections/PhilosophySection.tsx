"use client";

import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

export default function PhilosophySection() {
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
      { threshold: 0.2 }
    );
    const items = sectionRef.current?.querySelectorAll(".reveal-hidden") ?? [];
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative bg-[#0D0B08] py-32 overflow-hidden flex items-center justify-center min-h-[70vh]"
    >
      {/* Vintage warm decorative background */}
      <div className="absolute inset-0 bg-halftone-warm opacity-30 pointer-events-none" />
      <div className="absolute inset-0 retro-stripe-bg opacity-20 pointer-events-none" />

      {/* Warm glows — no neon */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CC3322]/[0.06] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C4631E]/[0.06] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-40 mix-blend-overlay pointer-events-none" />

      {/* Decorative corner marks */}
      <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-[#3A2212]" />
      <div className="absolute top-10 right-10 w-16 h-16 border-r-2 border-t-2 border-[#3A2212]" />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-l-2 border-b-2 border-[#3A2212]" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-[#3A2212]" />

      {/* Central content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}
          <div className="inline-flex items-center justify-center gap-4 mb-12 reveal-hidden">
            <div className="h-0.5 w-16 border-t-2 border-dashed border-[#CC3322]" />
            <span className="font-pixel text-[10px] uppercase font-bold tracking-[0.2em] text-[#C4631E]">
              OPERATING PRINCIPLE
            </span>
            <div className="h-0.5 w-16 border-t-2 border-dashed border-[#CC3322]" />
          </div>

          {/* Blockquote */}
          <blockquote className="relative reveal-hidden" style={{ transitionDelay: "0.15s" }}>
            {/* Big quote marks */}
            <Quote
              className="absolute -top-10 -left-6 md:-left-12 w-16 h-16 rotate-180"
              style={{ color: "rgba(204,51,34,0.18)" }}
              strokeWidth={1}
            />

            {/* The quote text */}
            <p
              className="text-2xl md:text-5xl font-terminal uppercase leading-tight text-retro-beige mb-16 relative z-10"
              style={{ textShadow: "4px 4px 0 var(--color-retro-shadow)" }}
            >
              &quot;I believe strong digital products combine:{" "}
              <span className="text-retro-red" style={{ textShadow: "4px 4px 0 var(--color-retro-shadow)" }}>CLARITY</span>,{" "}
              <span className="text-retro-orange" style={{ textShadow: "4px 4px 0 var(--color-retro-shadow)" }}>USABILITY</span>, and{" "}
              <span className="text-retro-gold" style={{ textShadow: "4px 4px 0 var(--color-retro-shadow)" }}>INTELLIGENT SYSTEMS</span>.&quot;
            </p>

            <Quote
              className="absolute -bottom-10 -right-6 md:-right-12 w-16 h-16"
              style={{ color: "rgba(204,51,34,0.18)" }}
              strokeWidth={1}
            />
          </blockquote>

          {/* Process Flow */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-24 reveal-hidden" style={{ transitionDelay: "0.2s" }}>
            {["RESEARCH", "DESIGN", "PROTOTYPE", "BUILD", "ITERATE"].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-retro-border-bold flex items-center justify-center font-pixel text-xl text-retro-red mb-4 bg-retro-beige shadow-retro-sm font-bold rotate-1">
                  {i + 1}
                </div>
                <span className="font-pixel text-[10px] tracking-widest text-retro-beige/80 font-bold">{step}</span>
              </div>
            ))}
          </div>

          {/* Attribution */}
          <div className="flex flex-col items-center justify-center space-y-2 reveal-hidden" style={{ transitionDelay: "0.3s" }}>
            <div className="w-16 h-px bg-retro-red mb-4" />
            <div className="gumroad-card px-8 py-6 flex flex-col items-center shadow-retro-lg! border-4! tape-effect">
              <div className="bg-retro-black/90 px-3 py-1 mb-4">
                <span className="font-pixel text-[8px] uppercase tracking-widest text-retro-beige">CORE_PRINCIPLE.sys</span>
              </div>
              <h3 className="font-pixel text-lg uppercase tracking-tight text-retro-black font-extrabold mb-1">
                OPTIMIZING FOR HUMAN EXPERIENCE
              </h3>
              <p className="font-terminal text-xl uppercase tracking-wider text-retro-black/60 font-bold">
                Accelerating product cycles with intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
