"use client";

import { useEffect, useRef } from "react";
import { Mail, ArrowUpRight, Github, Linkedin } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    value: "hashmessi",
    href: "https://github.com/hashmessi",
    icon: Github,
    accent: "#CC3322",
  },
  {
    label: "LinkedIn",
    value: "hashvanth-m-u",
    href: "https://www.linkedin.com/in/hashvanth-m-u-b60bb7381/",
    icon: Linkedin,
    accent: "#C4631E",
  },
  {
    label: "Email",
    value: "hashvanthh21",
    href: "mailto:hashvanthh21@gmail.com",
    icon: Mail,
    accent: "#DAA520",
  },
];

export default function ContactSection() {
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
      id="contact"
      ref={sectionRef}
      className="relative bg-[#0A0705] overflow-hidden py-32 border-t-2 border-dashed border-[#3A2212]"
    >
      {/* Background */}
      <div className="absolute inset-0 film-grain opacity-50 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-halftone-warm opacity-40 pointer-events-none" />
      <div className="absolute inset-0 retro-stripe-bg opacity-20 pointer-events-none" />

      {/* Warm glows — NO neon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CC3322]/[0.06] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C4631E]/[0.05] blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 crt-vignette pointer-events-none z-10" />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-[#3A2212] z-0" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-[#3A2212] z-0" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-[#3A2212] z-0" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-[#3A2212] z-0" />

      {/* Floating pixel elements */}
      <div className="absolute top-20 left-24 w-14 h-14 border-2 border-dashed border-[#CC3322]/25 rotate-6 animate-float z-0" />
      <div className="absolute bottom-24 right-24 w-10 h-10 bg-[#C4631E]/15 animate-float-delay z-0" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#F2E0B6]/30 animate-warm-pulse z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 bg-[#CC3322]/50 animate-warm-pulse z-0" style={{ animationDelay: "2s" }} />

      <div className="flex-1 flex flex-col justify-center items-center text-center p-8 md:p-16 relative z-20">

        {/* Status badge */}
        <div className="inline-flex items-center gap-3 mb-8 reveal-hidden">
          <div className="w-3 h-3 bg-[#CC3322] border-2 border-[#3A2212] animate-pulse" style={{ boxShadow: "2px 2px 0 #3A2212" }} />
          <span className="font-pixel text-[10px] uppercase font-bold tracking-[0.2em] text-[#CC3322] text-retro-shadow-red">
            AVAILABILITY: OPEN
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-5xl md:text-7xl lg:text-8xl font-pixel uppercase tracking-tighter leading-none mb-8 text-[#F2E0B6] reveal-hidden"
          style={{ textShadow: "4px 4px 0 #3A2212, 10px 10px 0 rgba(204, 51, 34, 0.3)", transitionDelay: "0.1s" }}
        >
          LET&apos;S WORK<br />
          <span className="text-[#CC3322]" style={{ textShadow: "4px 4px 0 #3A2212, 10px 10px 0 rgba(196, 99, 30, 0.3)" }}>
            TOGETHER
          </span>
        </h2>

        <div className="max-w-xl mx-auto mb-12 reveal-hidden" style={{ transitionDelay: "0.2s" }}>
          <p className="font-terminal text-xl uppercase tracking-wider text-retro-beige/60 font-bold leading-relaxed mb-6">
            Developing high-impact digital systems. Open for full-stack, design, and AI experimentation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["SYSTEM_CORE", "AI_LOGIC", "VINTAGE_UI"].map((item, i) => (
              <div key={i} className="sticker-accent !px-4 !py-2 !text-[10px] shadow-retro-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="reveal-hidden" style={{ transitionDelay: "0.3s" }}>
          <a
            href="mailto:hashvanthh21@gmail.com"
            className="btn-retro px-10 py-6 text-sm flex items-center gap-4 group"
          >
            <span>SEND_TRANSMISSION.sys</span>
            <ArrowUpRight
              className="w-5 h-5 group-hover:rotate-45 transition-transform"
              strokeWidth={4}
            />
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="gumroad-card p-6 flex flex-col items-center gap-4 group transition-all duration-300 reveal-hidden !shadow-retro-md hover:!shadow-retro-lg tape-effect"
              style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
            >
              <div
                className="w-12 h-12 border-4 flex items-center justify-center transition-all bg-retro-beige"
                style={{
                  borderColor: "var(--color-retro-border-bold)",
                  color: s.accent,
                  boxShadow: `3px 3px 0 rgba(0,0,0,1)`,
                }}
              >
                <s.icon className="w-6 h-6" strokeWidth={3} />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-pixel text-[9px] uppercase tracking-[0.2em] text-retro-black/40 mb-1 font-bold">
                  {s.label}
                </span>
                <span
                  className="font-terminal text-lg uppercase font-extrabold text-retro-black"
                >
                  {s.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
