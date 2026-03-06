"use client";

import { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
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
      id="education"
      ref={sectionRef}
      className="relative bg-retro-black overflow-hidden py-28 md:py-36 border-t-2 border-dashed border-retro-border"
    >
      <div className="absolute inset-0 bg-halftone-warm opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-warm opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20 reveal-hidden">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-4 h-4 bg-retro-red border-2 border-retro-border-bold shadow-retro-sm" />
            <span className="font-pixel text-[10px] font-bold uppercase tracking-[0.2em] text-retro-red">
              ACADEMIC_RECORD.exe
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-pixel uppercase tracking-tighter leading-[1.2] text-retro-beige font-extrabold"
            style={{ textShadow: "4px 4px 0 var(--color-retro-shadow), 8px 8px 0 rgba(204, 51, 34, 0.3)" }}
          >
            EDUCATION &<br/>
            <span className="text-retro-red" style={{ textShadow: "4px 4px 0 var(--color-retro-shadow)" }}>LEARNING</span>
          </h2>
        </div>

        <div className="max-w-4xl">
          <div className="gumroad-card p-0! reveal-hidden transition-all duration-300 hover:-translate-y-1 shadow-retro-lg! tape-effect">
            <div className="bg-retro-black/90 px-6 py-2 border-b-4 border-retro-border-bold flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-retro-red mr-2" />
              <div className="w-2.5 h-2.5 rounded-full bg-retro-orange mr-2" />
              <span className="ml-3 font-pixel text-[8px] uppercase tracking-widest text-retro-beige/60 font-bold">DEGREE_VERIFICATION.sys</span>
            </div>
            
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-10 bg-retro-beige">
              <div className="flex flex-col items-center justify-start py-2">
                <div className="w-24 h-24 border-4 border-retro-border-bold flex items-center justify-center text-retro-black mb-4 bg-retro-white shadow-[4px_4px_0_rgba(0,0,0,1)]">
                  <GraduationCap size={48} strokeWidth={2.5} />
                </div>
                <div className="sticker-accent px-3! py-1! text-[10px]! mt-2 shadow-retro-sm">
                  2025-29
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-pixel text-2xl uppercase text-retro-black mb-2 leading-tight font-extrabold tracking-tight">B.Tech Information Technology</h3>
                  <p className="font-terminal text-2xl uppercase tracking-wider text-retro-black/60 font-bold">Easwari Engineering College</p>
                </div>
                
                <div className="h-1 w-full bg-retro-border-bold/10" />
                
                <div className="space-y-6">
                  <p className="font-pixel text-[10px] uppercase text-retro-red tracking-[0.2em] font-bold">CURRENT_FOCUS.exe :</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      "AI Product Systems",
                      "Full-Stack Engineering",
                      "Frontend Architecture",
                      "Human-Computer Interaction"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-retro-black border-2 border-retro-border-bold rotate-45 shadow-retro-sm" />
                        <span className="font-terminal text-xl text-retro-black uppercase tracking-wide font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-retro-black/90 border-t-4 border-retro-border-bold py-4 px-10">
              <span className="font-terminal text-xs uppercase tracking-[0.3em] text-retro-beige/40 w-full text-right block font-bold italic">
                STATUS: ENROLLED // OPTIMIZED_LEARNING_ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
