"use client";

import { useEffect, useRef } from "react";
import { TerminalSquare, Database, Workflow, LayoutTemplate } from "lucide-react";

const marqueeItems = [
  "SYS.REACT", "SYS.NEXT", "SYS.PYTHON", "SYS.FASTAPI", "LIB.SUPABASE",
  "LLM.OPENAI", "SYS.LANGCHAIN", "UI.TAILWIND", "LIB.FRAMER", "LIB.GSAP",
  "SYS.DOCKER", "SYS.VERCEL", "DB.POSTGRES", "VCS.GIT",
];

// Warm palette only — no neon, no purple, no teal
const categories = [
  {
    id: "01", name: "AI SYSTEMS",
    icon: <TerminalSquare className="w-5 h-5" />,
    skills: ["OPENAI & CLAUDE APIS", "PROMPT ENGINEERING", "MULTI-AGENT SYSTEMS", "VECTOR DATABASES"],
    accent: "#CC3322",
    badge: "CORE_AI",
  },
  {
    id: "02", name: "FULL STACK",
    icon: <Database className="w-5 h-5" />,
    skills: ["REACT & NEXT.JS", "PYTHON FASTAPI", "TYPESCRIPT", "REST & SSE"],
    accent: "#C4631E",
    badge: "CORE_WEB",
  },
  {
    id: "03", name: "SYSTEM DESIGN",
    icon: <Workflow className="w-5 h-5" />,
    skills: ["POSTGRESQL", "API ARCHITECTURE", "SCALABILITY PATTERNS", "PERFORMANCE"],
    accent: "#DAA520",
    badge: "INFRA",
  },
  {
    id: "04", name: "FRONTEND UI",
    icon: <LayoutTemplate className="w-5 h-5" />,
    skills: ["TAILWIND CSS", "FRAMER MOTION", "WEBGL / THREE.JS", "MICRO-INTERACTIONS"],
    accent: "#C9961A",
    badge: "UI_SYS",
  },
];

export default function SkillsSection() {
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
    const items = sectionRef.current?.querySelectorAll(".reveal-hidden") ?? [];
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-retro-black py-28 overflow-hidden z-10 border-y-2 border-dashed border-retro-border"
    >
      {/* Decorative */}
      <div className="absolute inset-0 film-grain opacity-50 z-0 pointer-events-none" />
      <div className="absolute inset-0 retro-stripe-bg opacity-30 z-0 pointer-events-none" />

      {/* Warm ambients */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#CC3322]/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C4631E]/[0.04] blur-[100px] pointer-events-none" />

      {/* Arcade marquee — top */}
      <div
        className="absolute top-0 left-0 w-full flex overflow-hidden border-b-2 border-dashed border-retro-border bg-retro-surface py-2.5 z-10"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8 font-pixel text-xs uppercase tracking-widest text-retro-red text-retro-shadow-red">
                {item}
              </span>
              <div
                className="w-2 h-2 bg-retro-orange rotate-45 shadow-retro-sm"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="py-28 md:py-36 relative mt-10">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          {/* Header */}
          <div className="mb-20 text-center reveal-hidden">
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-4 h-4 bg-retro-red border-2 border-retro-border-bold shadow-retro-sm rotate-3" />
              <span className="font-pixel text-[10px] uppercase font-bold tracking-[0.2em] text-retro-red">
                CAPABILITY_MATRIX.sys
              </span>
              <div className="w-4 h-4 bg-retro-red border-2 border-retro-border-bold shadow-retro-sm -rotate-3" />
            </div>
            <h2
              className="text-4xl md:text-6xl font-pixel uppercase tracking-tighter text-retro-beige font-extrabold"
              style={{ textShadow: "4px 4px 0 var(--color-retro-shadow), 10px 10px 0 rgba(204, 51, 34, 0.3)" }}
            >
              CORE{" "}
              <span className="text-retro-red" style={{ textShadow: "4px 4px 0 var(--color-retro-shadow)" }}>
                SYSTEMS
              </span>
            </h2>
          </div>

          {/* Skill grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categories.map((cat, i) => (
              <div
                key={cat.id}
                className="gumroad-card p-0! group overflow-hidden reveal-hidden shadow-retro-md! hover:shadow-retro-lg! tape-effect"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Terminal header */}
                <div className="bg-retro-black/90 p-4 border-b-4 border-retro-border-bold flex items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-retro-red mr-2" />
                  <div
                    className="ml-3 p-1.5 border-2 border-retro-border-bold bg-retro-beige text-retro-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
                  >
                    {cat.icon}
                  </div>
                  <h3 className="ml-4 font-pixel text-xs uppercase tracking-tight text-retro-beige font-bold">
                    {cat.name}
                  </h3>
                  <span
                    className="ml-auto sticker-accent px-2! py-0.5! text-[7px]! shadow-retro-sm border-2!"
                  >
                    {cat.badge}
                  </span>
                </div>

                {/* Skills body */}
                <div className="space-y-4 p-8 bg-retro-beige">
                  {cat.skills.map((skill, j) => (
                    <div key={j} className="flex items-center gap-4 group/item">
                      <div
                        className="w-2 h-2 bg-retro-black rotate-45 group-hover/item:bg-retro-red transition-colors shadow-[1px_1px_0_rgba(0,0,0,0.2)]"
                      />
                      <span className="font-terminal text-xl uppercase tracking-wider text-retro-black/70 group-hover/item:text-retro-black transition-colors font-bold">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools Footer */}
          <div className="mt-20 border-t-4 border-retro-border-bold/10 pt-16 relative z-10 reveal-hidden">
            <p className="text-center font-pixel text-[10px] uppercase tracking-[0.3em] text-retro-red mb-10 font-bold">
              -- ADDITIONAL_INFRASTRUCTURE --
            </p>
            <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
              {["Docker", "GitHub Actions", "Vercel", "Linux", "Figma", "HTML", "CSS", "TypeScript", "GraphQL"].map((tool, i) => (
                <div
                  key={tool}
                  className="sticker-accent px-6! py-3! text-sm! shadow-retro-sm hover:-translate-y-1 transition-transform"
                  style={{ transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)` }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
