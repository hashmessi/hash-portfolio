import { PROJECTS } from "@/data/projects";
import { RuledHeading } from "@/components/editorial/RuledHeading";
import { LedgerRow } from "@/components/editorial/LedgerRow";
import { ExhibitTile } from "@/components/editorial/ExhibitTile";
import { demoFor } from "@/components/visuals";

const linksOf = (p: (typeof PROJECTS)[number]) =>
  [
    p.links.demo && { label: "Live demo", href: p.links.demo },
    p.links.github && { label: "GitHub", href: p.links.github },
  ].filter(Boolean) as { label: string; href: string }[];

/** design.md "Ledger": projects without demo visuals stay as ruled text rows, never empty frames. */
export function AppliedAISection() {
  const projects = PROJECTS.filter((p) => p.tier === "applied");
  return (
    <section aria-labelledby="applied-title" className="page py-s9 flex flex-col gap-s6">
      <RuledHeading id="applied-title" title="Models in front of real people." />
      <p className="type-reading max-w-[836px] text-ink-2">
        These projects take models off the benchmark page and put them in front of real people: patients,
        factory floors, classrooms and shoppers.
      </p>
      <div>
        {projects.map((p) => {
          const demo = demoFor(p);
          // Projects with an interactive demo get a full exhibit tile instead of a text row.
          return demo ? (
            <div key={p.id} className="border-t border-ink pt-s3 pb-s7">
              <ExhibitTile name={p.name} href={`/work/${p.slug}`} descriptor={p.oneLiner} tag="Industrial AI">
                {demo}
              </ExhibitTile>
            </div>
          ) : (
            <LedgerRow
              key={p.id}
              index={p.id}
              name={p.name}
              href={`/work/${p.slug}`}
              summary={p.oneLiner}
              detail={p.metric?.label ?? p.scopeNote ?? p.builtVsNext}
              links={linksOf(p)}
            />
          );
        })}
      </div>
    </section>
  );
}

export function MoreBuildsSection() {
  const projects = PROJECTS.filter((p) => p.tier === "more");
  return (
    <section aria-labelledby="more-title" className="page py-s9 flex flex-col gap-s6">
      <RuledHeading id="more-title" title="More builds." />
      <p className="type-reading max-w-[836px] text-ink-2">
        These are smaller products that show range across automation, personalization and full-stack delivery.
      </p>
      <div>
        {projects.map((p) => (
          <LedgerRow
            key={p.id}
            index={p.id}
            name={p.name}
            href={`/work/${p.slug}`}
            summary={p.oneLiner}
            detail={p.result ?? p.keyDecision}
            links={linksOf(p)}
          />
        ))}
      </div>
    </section>
  );
}
export default AppliedAISection;
