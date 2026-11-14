"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const HOME_LINKS = [
  { label: "Work", href: "/#signature-work" },
  { label: "Thesis", href: "/#thesis" },
  { label: "About", href: "/#manifesto" },
  { label: "Contact", href: "/#contact" },
];
const DETAIL_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#signature-work" },
  { label: "Contact", href: "#contact" },
];

/** design.md "Floating index": a compact outlined island near the window bottom, never a full-width bar. */
export function FloatingIndex() {
  const isHome = usePathname() === "/";
  const links = isHome ? HOME_LINKS : DETAIL_LINKS;
  const [active, setActive] = useState<string | null>(null);

  // Highlight the section currently crossing the middle of the viewport (homepage only).
  useEffect(() => {
    if (!isHome) return;
    const sections = HOME_LINKS.map((l) => document.getElementById(l.href.split("#")[1])).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.split("#")[1];
    if (!id || (!isHome && !href.startsWith("#"))) return;
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Site"
      className="fixed left-1/2 -translate-x-1/2 bottom-[max(16px,env(safe-area-inset-bottom))] sm:bottom-[max(45px,env(safe-area-inset-bottom))] z-50 flex bg-paper text-ink border border-ink rounded-media p-[6px] sm:p-s1"
    >
      {links.map((link) => {
        const id = link.href.split("#")[1];
        const isActive = isHome && id === active;
        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={(e) => onClick(e, link.href)}
            aria-current={isActive ? "location" : undefined}
            className={cn(
              "type-small inline-flex items-center min-h-11 px-3 sm:px-s2 rounded-[6px] transition-colors duration-200 ease-editorial hover:bg-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
              isActive && "bg-green"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
export default FloatingIndex;
