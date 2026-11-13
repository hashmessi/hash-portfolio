"use client";

import Link from "next/link";
import { ExternalLink, Github, Zap, HeartPulse, Camera, Footprints, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { TactileCard } from "@/components/core/TactileCard";
import { TactileButton } from "@/components/core/TactileButton";
import { MonoBadge } from "@/components/core/MonoBadge";

export default function AppliedAISection() {
  const appliedProjects = PROJECTS.filter((p) => p.tier === "applied");

  const icons = {
    "05": <HeartPulse className="w-5 h-5 text-accent" />,
    "06": <Camera className="w-5 h-5 text-award" />,
    "07": <Footprints className="w-5 h-5 text-accent" />,
  };

  return (
    <section id="applied-ai" className="py-20 md:py-32 px-6 lg:px-12 max-w-6xl mx-auto border-t border-line">
      {/* Section Header */}
      <div className="flex flex-col gap-4 mb-16 md:mb-20">
        <div className="flex items-center gap-2">
          <MonoBadge variant="default">
            APPLIED AI
          </MonoBadge>
          <span className="font-mono text-xs text-text-2 tracking-widest uppercase">
            // 05 — 07
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-text">
          Models in front of real people.
        </h2>
        <p className="text-base sm:text-lg text-text-2 max-w-2xl leading-relaxed">
          These projects take models off the benchmark page and put them in front of real people: patients, classrooms and shoppers.
        </p>
      </div>

      {/* Grid of 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {appliedProjects.map((project) => (
          <TactileCard
            key={project.id}
            className="flex flex-col justify-between gap-6 p-6 md:p-8 group"
          >
            <div className="flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs text-text-2 px-2 py-0.5 rounded border border-line-bold bg-surface-subtle">
                    {project.id}
                  </span>
                  {icons[project.id as keyof typeof icons]}
                </div>
                {project.metric && (
                  <span className="font-mono text-[11px] font-bold text-award bg-award/10 border border-award px-2 py-0.5 rounded">
                    {project.metric.value}
                  </span>
                )}
              </div>

              {/* Title & One-liner */}
              <div>
                <Link
                  href={`/work/${project.slug}`}
                  className="text-xl font-bold font-sans tracking-tight text-text hover:text-accent transition-colors flex items-center justify-between"
                >
                  <span>{project.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
                <p className="text-xs sm:text-sm text-text-2 mt-1 leading-relaxed">
                  {project.oneLiner}
                </p>
              </div>

              {/* What I Built */}
              <div className="text-xs text-text-2 leading-relaxed pt-2 border-t border-line">
                <span className="font-mono text-[10px] uppercase font-bold text-text block mb-1">
                  What I Built
                </span>
                <p>{project.whatIBuilt}</p>
              </div>

              {/* Outcomes */}
              <ul className="flex flex-col gap-1.5 pt-1">
                {project.outcomes.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-text-2">
                    <span className="text-accent font-bold">↳</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Scope note / Key decision */}
              {project.scopeNote && (
                <div className="p-3 rounded-lg bg-surface-subtle border border-line text-[11px] text-text-2 italic">
                  <strong>Scope note:</strong> {project.scopeNote}
                </div>
              )}
              {project.keyDecision && (
                <div className="p-3 rounded-lg bg-surface-subtle border-l-2 border-accent text-[11px] text-text">
                  <strong>Key decision:</strong> {project.keyDecision}
                </div>
              )}
            </div>

            {/* Footer: Stack & Links */}
            <div className="flex flex-col gap-4 pt-4 border-t border-line">
              <div className="flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 py-0.5 rounded text-[10px] font-mono border border-line-bold bg-surface-subtle text-text-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <TactileButton
                  size="sm"
                  variant="primary"
                  href={`/work/${project.slug}`}
                  className="flex-1 justify-center"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Deep dive
                </TactileButton>

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
              </div>
            </div>
          </TactileCard>
        ))}
      </div>
    </section>
  );
}
