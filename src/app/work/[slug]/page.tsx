import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Trophy, ShieldCheck, Cpu } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { TactileCard } from "@/components/core/TactileCard";
import { TactileButton } from "@/components/core/TactileButton";
import { MonoBadge } from "@/components/core/MonoBadge";
import { TrustDial } from "@/components/visuals/TrustDial";
import { FirewallGate } from "@/components/visuals/FirewallGate";
import { PromiseSeal } from "@/components/visuals/PromiseSeal";
import { BlastRadius } from "@/components/visuals/BlastRadius";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

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
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-20 flex flex-col gap-16">
      {/* Back button */}
      <div>
        <TactileButton
          size="sm"
          variant="secondary"
          href="/#signature-work"
          icon={<ArrowLeft className="w-3.5 h-3.5" />}
          iconPosition="left"
        >
          Back to all work
        </TactileButton>
      </div>

      {/* Hero Header */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono font-bold text-xs text-accent px-2.5 py-1 rounded-md border border-line-bold bg-surface-subtle">
            PROJECT {project.id} // {project.tier.toUpperCase()}
          </span>
          {project.award && (
            <MonoBadge variant="award">
              {project.award}
            </MonoBadge>
          )}
          {project.metric && (
            <MonoBadge variant="allow">
              {project.metric.label}: {project.metric.value}
            </MonoBadge>
          )}
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-sans tracking-tight text-text leading-tight">
          {project.name}
        </h1>

        <p className="text-xl sm:text-2xl text-text-2 font-medium max-w-3xl leading-relaxed">
          {project.oneLiner}
        </p>

        {/* Action links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.links.demo && (
            <TactileButton
              size="md"
              variant="primary"
              href={project.links.demo}
              external
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Launch live production demo
            </TactileButton>
          )}
          {project.links.github && (
            <TactileButton
              size="md"
              variant="secondary"
              href={project.links.github}
              external
              icon={<Github className="w-4 h-4" />}
            >
              View source on GitHub
            </TactileButton>
          )}
        </div>
      </div>

      {/* Interactive Visual State Machine (if signature project) */}
      {project.visual && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-text-2">
              Interactive System State Machine
            </span>
          </div>
          <div className="max-w-2xl">
            {renderVisual(project.visual)}
          </div>
        </div>
      )}

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-line">
        <TactileCard className="p-6 md:p-8 flex flex-col gap-4">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-block">
            01. The Problem Space
          </span>
          <p className="text-sm sm:text-base text-text-2 leading-relaxed">
            {project.problem}
          </p>
        </TactileCard>

        <TactileCard className="p-6 md:p-8 flex flex-col gap-4">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
            02. What I Engineered
          </span>
          <p className="text-sm sm:text-base text-text-2 leading-relaxed">
            {project.whatIBuilt}
          </p>
        </TactileCard>
      </div>

      {/* Key Decision Pull-Quote */}
      {project.keyDecision && (
        <div className="p-6 sm:p-8 rounded-2xl border-l-4 border-accent border-y-2 border-r-2 border-line-bold bg-surface shadow-tactile flex flex-col gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
            Core Architectural Decision
          </span>
          <p className="text-lg sm:text-2xl font-bold font-sans text-text italic leading-snug">
            &quot;{project.keyDecision}&quot;
          </p>
          <span className="font-mono text-[11px] text-text-2">
            Enforced by deterministic code, never LLM probability.
          </span>
        </div>
      )}

      {/* Extension section if present */}
      {project.extension && (
        <TactileCard className="p-6 md:p-8 flex flex-col gap-3 border-dashed">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-text">
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
          <p className="text-sm text-text-2 leading-relaxed">
            {project.extension.description}
          </p>
        </TactileCard>
      )}

      {/* Outcomes & Verifiable Evidence */}
      <div className="flex flex-col gap-4 pt-6 border-t border-line">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-text">
          Outcomes &amp; Verifiable Capabilities
        </span>
        <div className="grid grid-cols-1 gap-3">
          {project.outcomes.map((bullet, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-line bg-surface-subtle flex items-start gap-3 text-sm text-text"
            >
              <span className="font-mono font-bold text-accent text-xs mt-0.5">
                [0{idx + 1}]
              </span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Matrix */}
      <div className="flex flex-col gap-3 pt-6 border-t border-line">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-text">
          Engineered With
        </span>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg text-xs font-mono font-semibold border-2 border-line-bold bg-surface shadow-tactile-sm text-text"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Next Project Footer Card */}
      <div className="pt-12 border-t-2 border-line-bold">
        <Link
          href={`/work/${nextProject.slug}`}
          className="group block p-8 rounded-2xl border-2 border-line-bold bg-surface shadow-tactile hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--line-bold)] transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs font-bold uppercase text-accent">
                Next Project →
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-sans text-text group-hover:text-accent transition-colors">
                {nextProject.name}
              </span>
              <span className="text-sm text-text-2">
                {nextProject.oneLiner}
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl border-2 border-line-bold bg-surface-subtle flex items-center justify-center text-text group-hover:bg-accent group-hover:text-white transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

