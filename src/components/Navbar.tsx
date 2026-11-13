"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { ThemeToggle } from "@/components/core/ThemeToggle";
import { TactileButton } from "@/components/core/TactileButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Signature", href: "#signature-work", index: "01" },
  { name: "Applied AI", href: "#applied-ai", index: "02" },
  { name: "Manifesto", href: "#manifesto", index: "03" },
  { name: "Contact", href: "#contact", index: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-200">
      <div
        className={cn(
          "max-w-6xl mx-auto rounded-2xl transition-all duration-200 border-2 border-line-bold bg-surface/90 backdrop-blur-md px-4 sm:px-6 py-3 flex items-center justify-between",
          scrolled ? "shadow-tactile" : "shadow-tactile-sm"
        )}
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 group select-none"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-8 h-8 rounded-lg bg-accent/10 border-2 border-accent flex items-center justify-center text-accent">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-text group-hover:text-accent transition-colors">
              Hashvanth M U
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-2">
              Trust Layer for AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-text-2 hover:text-text hover:bg-surface-subtle transition-all duration-150 flex items-center gap-1.5"
            >
              <span className="text-accent/80 font-bold">{link.index}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle + Contact CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <TactileButton
            size="sm"
            variant="primary"
            href="#contact"
            onClick={(e) => handleLinkClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact")}
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Get in touch
          </TactileButton>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-9 h-9 rounded-xl border-2 border-line-bold bg-surface flex items-center justify-center text-text shadow-tactile-sm active:translate-y-0.5 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 p-5 rounded-2xl border-2 border-line-bold bg-surface shadow-tactile animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-mono text-text hover:bg-surface-subtle border border-transparent hover:border-line flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-accent font-bold">{link.index}</span>
              </a>
            ))}
            <div className="pt-3 border-t border-line mt-2">
              <TactileButton
                variant="primary"
                size="md"
                className="w-full justify-center"
                href="#contact"
                onClick={(e) => handleLinkClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact")}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Get in touch
              </TactileButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
