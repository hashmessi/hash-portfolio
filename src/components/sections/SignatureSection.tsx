import { PROJECTS, THESIS_CONTENT } from "@/data/projects";
import { RuledHeading } from "@/components/editorial/RuledHeading";
import { ExhibitTile } from "@/components/editorial/ExhibitTile";
import { demoFor } from "@/components/visuals";

/** design.md "Ruled heading and portfolio field": one wide tile, then a 2-column field. */
export default function SignatureSection() {
  const [first, ...rest] = PROJECTS.filter((p) => p.tier === "signature");

  const tile = (p: (typeof PROJECTS)[number], wide = false) => {
    return (
      <ExhibitTile
        key={p.id}
        name={p.name}
        href={`/work/${p.slug}`}
        descriptor={p.oneLiner}
        tag={p.award?.replace(/^\S+\s/, "")}
        wide={wide}
      >
        {demoFor(p)}
      </ExhibitTile>
    );
  };

  return (
    <section id="signature-work" aria-labelledby="signature-title" className="page py-s9 flex flex-col gap-s6">
      <RuledHeading id="signature-title" title="The trust layer for autonomous AI." />
      <p className="type-reading max-w-[836px] text-ink-2">{THESIS_CONTENT.subtext}</p>
      <div className="grid gap-x-s5 gap-y-s7 md:grid-cols-2">
        {tile(first, true)}
        {rest.map((p) => tile(p))}
      </div>
    </section>
  );
}
