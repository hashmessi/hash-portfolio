import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS, type Project } from "@/data/projects";
import { demoFor } from "@/components/visuals";
import { Wordmark } from "@/components/editorial/Wordmark";
import { RuledHeading } from "@/components/editorial/RuledHeading";
import { ExhibitTile } from "@/components/editorial/ExhibitTile";
import { TextLink } from "@/components/editorial/TextLink";
import { TypeExhibit } from "@/components/editorial/TypeExhibit";
import { ClosingPanel } from "@/components/editorial/ClosingPanel";
import { VideoFacade } from "@/components/core/VideoFacade";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.name} | Hashvanth M U`;
  return {
    title,
    description: project.oneLiner,
    openGraph: { title, description: project.oneLiner, type: "article" },
  };
}

/** One ruled row of the ledger: a label on the left, reading text on the right. */
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-s2 border-t border-ink py-s3 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-s5">
      <dt className="type-name">{label}</dt>
      <dd className="type-reading max-w-[836px]">{children}</dd>
    </div>
  );
}

/** The project's exhibit: its interactive demo when it has one, otherwise a typographic one. */
function Exhibit({ project }: { project: Project }) {
  const demo = demoFor(project);
  return demo ? (
    <div className="mx-auto w-full max-w-[880px] overflow-hidden rounded-media bg-ink">
      {demo}
    </div>
  ) : (
    <TypeExhibit text={project.keyDecision ?? project.oneLiner} />
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = PROJECTS[index];
  const others = [1, 2].map((step) => PROJECTS[(index + step) % PROJECTS.length]);

  return (
    <>
      <article className="page flex flex-col gap-s8 pt-s6">
        {/* Compact identity: the billboard wordmark, shrunk, links home. */}
        <div className="flex items-start justify-between gap-s3">
          <Link href="/" className="block w-[165px] shrink-0" aria-label="Home">
            <Wordmark />
          </Link>
          <p className="type-small pt-s1 text-right text-ink-2">
            Case study · {project.id} · {project.name}
            {project.award && <span className="block sm:inline"> · {project.award.replace(/^\S+\s/, "")}</span>}
          </p>
        </div>

        <h1 className="type-detail-title max-w-[880px]">{project.oneLiner}</h1>

        <Exhibit project={project} />

        {project.links.video && (
          <div className="mx-auto w-full max-w-[880px]">
            <VideoFacade url={project.links.video} title={`${project.name} demo video`} />
          </div>
        )}

        {/* Reading copy on the left, metadata on the right. */}
        <div className="grid gap-s6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-s3 type-reading max-w-[836px]">
            <p>
              <span className="type-name">The problem. </span>
              {project.problem}
            </p>
            <p>
              <span className="type-name">What I built. </span>
              {project.whatIBuilt}
            </p>
          </div>
          <div className="type-small flex flex-col gap-s3">
            <dl className="flex flex-col gap-s3">
            {project.role && (
              <div>
                <dt className="type-name">Role</dt>
                <dd className="text-ink-2">{project.role}</dd>
              </div>
            )}
            <div>
              <dt className="type-name">Stack</dt>
              <dd className="text-ink-2">{project.stack.join(", ")}</dd>
            </div>
            </dl>
            <div className="flex flex-wrap gap-x-s3 gap-y-s1 pt-s1">
              {project.links.demo && (
                <TextLink href={project.links.demo} context={project.name}>
                  Live demo
                </TextLink>
              )}
              {project.links.github && (
                <TextLink href={project.links.github} context={project.name}>
                  GitHub
                </TextLink>
              )}
              {project.links.video && (
                <TextLink href={project.links.video} context={project.name}>
                  Demo video
                </TextLink>
              )}
            </div>
          </div>
        </div>

        {/* Ledger: decision, outcomes and scope as ruled rows. */}
        <dl className="flex flex-col">
          {project.keyDecision && <Row label="Key decision">{project.keyDecision}</Row>}
          {project.outcomes.map((outcome, i) => (
            <Row key={outcome} label={`Outcome ${String(i + 1).padStart(2, "0")}`}>
              {outcome}
            </Row>
          ))}
          {project.extension && (
            <Row label={`Extension: ${project.extension.name}`}>
              {project.extension.description}
              {project.extension.github && (
                <>
                  {" "}
                  <TextLink href={project.extension.github} context={project.extension.name}>
                    GitHub
                  </TextLink>
                </>
              )}
            </Row>
          )}
          {project.scopeNote && <Row label="Scope">{project.scopeNote}</Row>}
          {project.builtVsNext && <Row label="Built vs. next">{project.builtVsNext}</Row>}
          {project.result && <Row label="Result">{project.result}</Row>}
        </dl>
      </article>

      <section aria-labelledby="more-work" className="page mt-s9 flex flex-col gap-s6">
        <RuledHeading id="more-work" title="More work." />
        <div className="grid grid-cols-1 gap-x-s5 gap-y-s7 md:grid-cols-2">
          {others.map((p) => (
            <ExhibitTile key={p.slug} name={p.name} href={`/work/${p.slug}`} descriptor={p.oneLiner}>
              <Exhibit project={p} />
            </ExhibitTile>
          ))}
        </div>
      </section>

      <div className="mt-s9">
        <ClosingPanel />
      </div>
    </>
  );
}
