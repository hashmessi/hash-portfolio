import { MANIFESTO_CONTENT, RECOGNITION_COUNTERS } from "@/data/projects";
import { RuledHeading } from "@/components/editorial/RuledHeading";

/** Positioning statement, prose, the focus-area ledger, then the green recognition band. */
export default function ManifestoSection() {
  return (
    <>
      <section id="manifesto" aria-labelledby="manifesto-title" className="page py-s9 flex flex-col gap-s6">
        <RuledHeading id="manifesto-title" title={MANIFESTO_CONTENT.heading} />
        <p className="type-statement max-w-[770px]">
          {MANIFESTO_CONTENT.statementLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <div className="grid gap-s5 md:grid-cols-2">
          <div className="flex flex-col gap-s3 type-reading max-w-[560px]">
            {MANIFESTO_CONTENT.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <ul className="grid grid-cols-1 gap-x-s5 sm:grid-cols-2">
            {MANIFESTO_CONTENT.focusAreas.map((area) => (
              <li key={area} className="type-name border-t border-ink py-s3 pr-s3">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Recognition" className="bg-green mt-s9 py-s9">
        <div className="page grid gap-s5 md:grid-cols-3">
          {RECOGNITION_COUNTERS.map((c) => (
            <div key={c.label} className="flex flex-col gap-s1 border-t border-ink pt-s3">
              <span className="type-statement">
                {c.value} <span className="type-name">{c.label}</span>
              </span>
              <span className="type-small text-ink-2">{c.sub}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
