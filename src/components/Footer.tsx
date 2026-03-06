import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-retro-black overflow-hidden">

      {/* Marquee */}
      <div className="border-y-2 border-dashed border-retro-border bg-retro-surface py-3 overflow-hidden relative" aria-hidden="true" tabIndex={-1}>
        <div className="absolute inset-0 retro-stripe-bg" />
        <div className="flex animate-marquee whitespace-nowrap relative z-10">
          {Array(10).fill("HASHVANTH M U — AI PRODUCT ENGINEER — ").map((item, i) => (
            <span key={i} className="mx-6 text-sm font-terminal tracking-[0.2em] uppercase text-retro-red-bright text-retro-shadow-red">
              {item} ✦
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-dashed divide-retro-border">

          {/* Brand */}
          <div className="p-12 md:p-14">
            <h2 className="text-4xl md:text-5xl font-pixel uppercase tracking-tighter mb-6 leading-none text-retro-red-bright"
              style={{ textShadow: "4px 4px 0 var(--color-retro-border), 8px 8px 0 rgba(232, 69, 69, 0.2)" }}>
              HASH
            </h2>
            <p className="font-terminal text-lg uppercase tracking-wider max-w-xs mb-8 text-retro-cream-dim">
              Intelligent AI systems worldwide.
            </p>
            <div className="gumroad-card inline-flex px-4 py-2 text-retro-orange font-terminal text-sm font-bold uppercase shadow-retro-sm">
              <span className="retro-cursor">STATUS: ONLINE</span>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="p-12 md:p-14 flex flex-col gap-6">
            <h3 className="font-pixel text-xs font-bold uppercase tracking-widest text-retro-orange">
              NAVIGATION
            </h3>
            <ul className="space-y-4 font-terminal text-xl uppercase">
              {[
                { label: "Story", href: "#story" },
                { label: "FitBridge", href: "#fitbridge" },
                { label: "Works", href: "#projects" },
                { label: "Systems", href: "#skills" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href}
                    className="text-retro-cream-dim hover:text-retro-red transition-colors relative inline-block group">
                    {item.label}
                    <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-retro-red transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="p-12 md:p-14 flex flex-col gap-6">
            <h3 className="font-pixel text-xs font-bold uppercase tracking-widest text-retro-orange">
              CONNECT
            </h3>
            <ul className="space-y-5 font-terminal text-xl uppercase">
              <li>
                <a href="https://github.com/hashmessi" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-retro-cream-dim hover:text-retro-red transition-colors">
                  <Github className="w-5 h-5" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hashvanth-m-u-b60bb7381/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-retro-cream-dim hover:text-retro-orange transition-colors">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:hashvanthh21@gmail.com"
                  className="flex items-center gap-3 text-retro-cream-dim hover:text-retro-gold-bright transition-colors">
                  <Mail className="w-5 h-5" /> Email
                </a>
              </li>
            </ul>
            <div className="mt-auto text-sm font-terminal uppercase text-retro-cream-dim/60">
              © {new Date().getFullYear()} ALL RIGHTS RESERVED
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
