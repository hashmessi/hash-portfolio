"use client";

import { ArrowUp, Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import { MonoBadge } from "@/components/core/MonoBadge";
import { TactileButton } from "@/components/core/TactileButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t-2 border-line-bold bg-surface py-16 px-6 lg:px-12 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-line">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent flex items-center justify-center text-accent">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="font-sans font-bold text-lg text-text">Hashvanth M U</span>
            </div>
            <p className="text-sm text-text-2 max-w-md">
              Building the trust layer for autonomous AI: deterministic runtime guardrails, payment gates, and governed data operations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <MonoBadge variant="allow" dot>
              SYSTEMS GOVERNED
            </MonoBadge>
            <TactileButton
              variant="secondary"
              size="sm"
              onClick={scrollToTop}
              icon={<ArrowUp className="w-3.5 h-3.5" />}
              aria-label="Back to top"
            >
              Back to top
            </TactileButton>
          </div>
        </div>

        {/* Middle row: links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-2">
              Signature Systems
            </span>
            <a href="#signature-work" className="text-text hover:text-accent transition-colors font-mono text-xs">
              01. TrustPulse
            </a>
            <a href="#signature-work" className="text-text hover:text-accent transition-colors font-mono text-xs">
              02. ChainBreak
            </a>
            <a href="#signature-work" className="text-text hover:text-accent transition-colors font-mono text-xs">
              03. PromiseLoop
            </a>
            <a href="#signature-work" className="text-text hover:text-accent transition-colors font-mono text-xs">
              04. Warden-MCP
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-2">
              Applied & Builds
            </span>
            <a href="#applied-ai" className="text-text hover:text-accent transition-colors font-mono text-xs">
              05. Maruthuva TSL
            </a>
            <a href="#applied-ai" className="text-text hover:text-accent transition-colors font-mono text-xs">
              06. SmartAttend (Rust)
            </a>
            <a href="#applied-ai" className="text-text hover:text-accent transition-colors font-mono text-xs">
              07. Puma-X
            </a>
            <a href="#more-builds" className="text-text hover:text-accent transition-colors font-mono text-xs">
              08. DealClose · FitBridge
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-2">
              Connect
            </span>
            <a
              href="https://github.com/hashmessi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hashvanth-m-u-29470725a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:hashvanth2104@gmail.com"
              className="text-text hover:text-accent transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-2">
              Philosophy
            </span>
            <p className="text-xs text-text-2 leading-relaxed">
              &quot;Models suggest. Code decides. Every action is auditable.&quot;
            </p>
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-2">
          <span>
            © 2026 Hashvanth M U · Built with Next.js &amp; Lenis · Trust Layer Architecture
          </span>
          <span className="text-[11px]">
            WCAG 2.1 AA Compliant · Deterministic Execution
          </span>
        </div>
      </div>
    </footer>
  );
}
