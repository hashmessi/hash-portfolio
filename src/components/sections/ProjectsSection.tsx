"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Github, Building2 } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "FITBRIDGE AI",
    category: "Flagship Product",
    description: "Personalized fitness platform with AI workout/diet generation and real-time SSE coach chat.",
    tags: ["REACT", "FASTAPI", "SUPABASE", "GPT-4O"],
    link: "#fitbridge",
    accent: "#CC3322",
  },
  {
    id: "02",
    title: "ZENVIO",
    category: "Full Stack App",
    description: "Comprehensive contact management system with secure authentication and responsive dashboard.",
    tags: ["DJANGO", "POSTGRESQL", "BOOTSTRAP", "PYTHON"],
    github: "https://github.com/hashmessi",
    accent: "#C4631E",
  },
  {
    id: "03",
    title: "AGENTIC SYSTEM BUILDER",
    category: "AI Agent System",
    description: "Autonomous multi-agent system that iteratively researches, designs, and scaffolds full-stack web applications.",
    tags: ["NEXT.JS", "TYPESCRIPT", "LANGGRAPH", "LLM AGENTS"],
    github: "https://github.com/hashmessi",
    buildingMode: true,
    accent: "#DAA520",
  },
];

// Unique pixel art–style decorative header per project
const projectScreens: Record<string, string[]> = {
  "01": [
    " ┌─[FITBRIDGE AI]────────────┐",
    " │ SYSTEM: OPTIMIZED         │",
    " │ USER: HASHVANTH           │",
    " │ MODEL: GPT-4O ACTIVE      │",
    " │ STATUS: 100% READY        │",
    " └───────────────────────────┘",
  ],
  "02": [
    " ┌─[ZENVIO CRM]──────────────┐",
    " │ CONTACTS: 1,240 LOADED    │",
    " │ AUTH: SECURE [JWT]        │",
    " │ DB: POSTGRESQL            │",
    " │ STATUS: STABLE            │",
    " └───────────────────────────┘",
  ],
  "03": [
    " ┌─[AGENT BUILDER]───────────┐",
    " │ AGENTS: 3 SPAWNED         │",
    " │ TASK: SCAFFOLDING APP...  │",
    " │ FILES: 12 GENERATED       │",
    " │ STATUS: BUILDING...       │",
    " └───────────────────────────┘",
  ],
};

export default function ProjectsSection() {
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
      id="projects"
      ref={sectionRef}
      className="relative bg-[#0A0705] overflow-hidden py-28 md:py-36"
    >
      {/* Warm ambient — NO neon */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#CC3322]/[0.05] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#C4631E]/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-halftone-warm opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="mb-20 reveal-hidden">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-4 h-4 bg-retro-red border-2 border-retro-border-bold shadow-retro-sm" />
            <span className="font-pixel text-[10px] font-bold uppercase tracking-[0.2em] text-retro-red">
              SELECTED_WORKS.exe
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-pixel uppercase tracking-tighter leading-[1.2] text-retro-beige"
            style={{ textShadow: "4px 4px 0 var(--color-retro-shadow), 8px 8px 0 rgba(204, 51, 34, 0.3)" }}
          >
            FEATURED<br/>
            <span className="text-retro-red" style={{ textShadow: "4px 4px 0 var(--color-retro-shadow), 8px 8px 0 rgba(196, 99, 30, 0.3)" }}>
              PROJECTS
            </span>
          </h2>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div
              key={p.id}
              className="gumroad-card flex flex-col group transition-all duration-300 reveal-hidden !p-0 tape-effect"
              style={{
                transitionDelay: `${idx * 0.15}s`,
              }}
            >
              {/* Visual header — CSS terminal art */}
              <div className="relative overflow-hidden border-b-4 border-retro-border-bold bg-retro-black p-0">
                {/* CRT effect */}
                <div className="absolute inset-0 crt-scanlines pointer-events-none z-10" />
                <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-retro-red/10 to-transparent z-10" />

                {/* ASCII project screen */}
                <div className="p-6 pt-10 pb-6">
                  <pre
                    className="font-terminal text-sm leading-relaxed select-none font-bold"
                    style={{ color: p.accent }}
                  >
                    {(projectScreens[p.id] ?? []).join("\n")}
                  </pre>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className="sticker-accent !rotate-3 shadow-retro-sm !px-3 !py-1 text-[8px]"
                  >
                    {p.category}
                  </span>
                </div>

                {/* Large number */}
                <span
                  className="absolute bottom-2 left-6 text-6xl font-pixel leading-none select-none z-20 opacity-20 font-bold"
                  style={{ color: p.accent }}
                >
                  {p.id}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col bg-retro-beige">
                <h3
                  className="text-xl font-pixel uppercase tracking-tighter mb-4 leading-normal font-bold text-retro-black"
                >
                  {p.title}
                </h3>
                <p className="font-terminal text-lg uppercase leading-relaxed text-retro-black/70 mb-8 flex-1 font-bold">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-pixel uppercase tracking-widest
                        border-2 border-retro-border-bold text-retro-black font-bold
                        bg-retro-border-bold/5 cursor-default shadow-[2px_2px_0_rgba(0,0,0,0.1)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-6 border-t-2 border-retro-border-bold/20">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-retro p-4 !bg-retro-black !text-retro-beige border-none flex items-center gap-2 ${p.buildingMode ? "!px-5" : ""}`}
                    >
                      {p.buildingMode ? (
                        <>
                          <Building2 className="w-5 h-5 shrink-0" />
                          <span className="font-pixel text-[8px] uppercase tracking-widest animate-pulse">
                            BUILDING...
                          </span>
                        </>
                      ) : (
                        <Github className="w-5 h-5" />
                      )}
                    </a>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      className="btn-retro flex-1 px-5 py-4 text-[10px] uppercase tracking-widest"
                    >
                      LAUNCH_SITE <ArrowUpRight className="ml-2 w-4 h-4" strokeWidth={4} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
