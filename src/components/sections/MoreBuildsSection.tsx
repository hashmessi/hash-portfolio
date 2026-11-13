"use client";

import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { TactileCard } from "@/components/core/TactileCard";
import { TactileButton } from "@/components/core/TactileButton";
import { MonoBadge } from "@/components/core/MonoBadge";

export default function MoreBuildsSection() {
  const moreProjects = PROJECTS.filter((p) => p.tier === "more");

  return (
    <section id="more-builds" className="py-20 md:py-28 px-6 lg:px-12 max-w-6xl mx-auto border-t border-line">
      {/* Section Header */}
      <div className="flex flex-col gap-4 mb-14">
        <div className="flex items-center gap-2">
          <MonoBadge variant="neutral">
            MORE BUILDS
          </MonoBadge>
          <span className="font-mono text-xs text-text-2 tracking-widest uppercase">
            // 08 — 09
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-text">
          Automation, personalization and full-stack delivery.
        </h2>
        <p className="text-sm sm:text-base text-text-2 max-w-2xl leading-relaxed">
          These are smaller products that show range across automation, personalization and full-stack delivery.
        </p>
      </div>

      {/* 2-up List Rows / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {moreProjects.map((project) => (
          <TactileCard
            key={project.id}
            className="flex flex-col justify-between gap-6 p-6 md:p-8 group"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-xs text-accent px-2 py-0.5 rounded border border-line-bold bg-surface-subtle">
                  {project.id}
                </span>
                {project.result && (
                  <span className="font-mono text-[11px] font-bold text-text-2 bg-surface-subtle px-2 py-0.5 rounded border border-line">
                    {project.result}
                  </span>
                )}
              </div>

              <Link
                href={`/work/${project.slug}`}
                className="text-xl font-bold font-sans tracking-tight text-text hover:text-accent transition-colors flex items-center justify-between"
              >
                <span>{project.name}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
              <p className="text-xs sm:text-sm text-text-2 font-medium">
                {project.oneLiner}
              </p>

              <p className="text-xs text-text-2 leading-relaxed pt-2 border-t border-line">
                {project.whatIBuilt}
              </p>

              {project.keyDecision && (
                <div className="p-3 rounded-lg bg-surface-subtle border-l-2 border-accent text-[11px] text-text">
                  <strong>Key decision:</strong> {project.keyDecision}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 pt-3 border-t border-line">
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

              <div className="flex items-center gap-2 pt-1">
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
              </div>
            </div>
          </TactileCard>
        ))}
      </div>
    </section>
  );
}
