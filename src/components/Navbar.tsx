"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "01. STORY",     href: "#story" },
  { name: "02. FITBRIDGE", href: "#fitbridge" },
  { name: "03. SKILLS",    href: "#skills" },
  { name: "04. WORKS",     href: "#projects" },
  { name: "05. EDU",       href: "#education" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 150);
  });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const elem = document.getElementById(href.replace("#", ""));
    if (elem) window.scrollTo({ top: elem.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-150%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
      >
        <div className="bg-retro-beige border-retro-bold shadow-retro-md h-[72px] flex items-center justify-between px-6 md:px-10">
          
          {/* Brand */}
          <Link
            href="/"
            className="font-pixel text-xl uppercase text-retro-black relative group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            HASH
            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-retro-red group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2 text-xs font-pixel uppercase tracking-tight 
                  text-retro-black hover:text-retro-red
                  transition-colors"
              >
                {link.name.split(". ")[1]}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="btn-retro ml-4 px-6 py-2 text-[10px]"
            >
              HIRE_ME
            </a>
          </nav>

          {/* Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-retro-black"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} strokeWidth={4} /> : <Menu size={28} strokeWidth={4} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-[#0A0705]/96 backdrop-blur-md flex flex-col pt-24 pb-8 md:hidden"
          >
            <div className="absolute inset-0 bg-halftone-warm opacity-40 pointer-events-none" />
            <div className="flex flex-col px-8 relative z-10 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="py-5 text-xl font-pixel uppercase
                    text-retro-beige font-extrabold
                    border-b-4 border-retro-border-bold/30
                    hover:text-retro-red hover:border-retro-red
                    transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="btn-retro mt-10 py-6 text-center text-lg font-pixel uppercase shadow-retro-lg! tape-effect"
              >
                CONNECT_NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
