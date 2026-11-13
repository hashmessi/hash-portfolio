"use client";

import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight, Trophy, Shield, ArrowRight } from "lucide-react";
import { PROJECTS, THESIS_CONTENT } from "@/data/projects";
import { TactileCard } from "@/components/core/TactileCard";
import { TactileButton } from "@/components/core/TactileButton";
import { MonoBadge } from "@/components/core/MonoBadge";
import { TrustDial } from "@/components/visuals/TrustDial";
import { FirewallGate } from "@/components/visuals/FirewallGate";
import { PromiseSeal } from "@/components/visuals/PromiseSeal";
import { BlastRadius } from "@/components/visuals/BlastRadius";

export default function SignatureSection() {
  const signatureProjects = PROJECTS.filter((p) => p.tier === "signature");

  const renderVisual = (visualType?: string) => {
    switch (visualType) {
      case "trust-dial":
        return <TrustDial />;
      case "action-gate":
        return <FirewallGate />;
      case "promise-seal":
        return <PromiseSeal />;
      case "blast-radius":
        return <BlastRadius />;
      default:
        return null;
    }
  };

  return (
    <section id="signature-work" className="py-20 md:py-32 px-6 lg:px-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col gap-4 mb-16 md:mb-24">
        <div className="flex items-center gap-2">
          <MonoBadge variant="allow" dot>
            SIGNATURE WORK
          </MonoBadge>
          <span className="font-mono text-xs text-text-2 tracking-widest uppercase">
            // 01 — 04
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight text-text">
          The trust layer for autonomous AI.
        </h2>
        <p className="text-base sm:text-lg text-text-2 max-w-2xl leading-relaxed">
          {THESIS_CONTENT.subtext}
        </p>
      </div>

      {/* Signature Projects Stack */}
      <div className="flex flex-col gap-14 md:gap-20">
        {signatureProjects.map((project) => (
          <TactileCard
            key={project.id}
            className="p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 relative overflow-hidden group"
          >
            {/* Left Content Column */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Header: Award + Number */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs text-accent px-2 py-0.5 rounded border border-line-bold bg-surface-subtle">
                    {project.id}
                  </span>
                  {project.award && (
                    <MonoBadge variant="award">
                      {project.award}
                    </MonoBadge>
                  )}
                </div>
              </div>

              {/* Title & One-liner */}
              <div className="flex flex-col gap-2">
                <Link
                  href={`/work/${project.slug}`}
                  className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-text hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>{project.name}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
                <p className="text-base text-text-2 font-medium">
                  {project.oneLiner}
                </p>
              </div>

              {/* Problem & Built */}
              <div className="flex flex-col gap-3 text-sm text-text-2 leading-relaxed">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text block mb-1">
                    The Problem
                  </span>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text block mb-1">
                    What I Built
                  </span>
                  <p>{project.whatIBuilt}</p>
                </div>
              </div>

              {/* Outcomes Bullet List */}
              <div className="flex flex-col gap-2 pt-2 border-t border-line">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text">
                  Key Outcomes
                </span>
                <ul className="flex flex-col gap-2">
                  {project.outcomes.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-text-2">
                      <span className="text-accent font-bold mt-0.5">↳</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Decision Pull-Quote */}
              {project.keyDecision && (
                <div className="p-4 rounded-xl border-l-4 border-accent bg-surface-subtle border-y border-r border-line">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent block mb-1">
                    Key Decision
                  </span>
                  <p className="text-xs sm:text-sm font-sans italic text-text">
                    &quot;{project.keyDecision}&quot;
                  </p>
                </div>
              )}

              {/* Extension (e.g. ChainBreak-Web3) */}
              {project.extension && (
                <div className="p-4 rounded-xl border-2 border-dashed border-line-bold bg-surface flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-text">
                      Extension: {project.extension.name}
                    </span>
                    {project.extension.github && (
                      <a
                        href={project.extension.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-accent hover:underline flex items-center gap-1 font-semibold"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-text-2">
                    {project.extension.description}
                  </p>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono border border-line-bold bg-surface text-text-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links / CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-line">
                <TactileButton
                  size="sm"
                  variant="primary"
                  href={`/work/${project.slug}`}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Case study
                </TactileButton>

                {project.links.demo && (
                  <TactileButton
                    size="sm"
                    variant="secondary"
                    href={project.links.demo}
                    external
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Live demo
                  </TactileButton>
                )}
                {project.links.github && (
                  <TactileButton
                    size="sm"
                    variant="secondary"
                    href={project.links.github}
                    external
                    icon={<Github className="w-3.5 h-3.5" />}
                  >
                    GitHub
                  </TactileButton>
                )}
                {project.links.video && (
                  <TactileButton
                    size="sm"
                    variant="secondary"
                    href={project.links.video}
                    external
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Watch video
                  </TactileButton>
                )}
              </div>
            </div>

            {/* Right Visual Interactive State Machine */}
            <div className="lg:w-[420px] xl:w-[460px] shrink-0 flex flex-col justify-center">
              {renderVisual(project.visual)}
            </div>
          </TactileCard>
        ))}
      </div>
    </section>
  );
}
