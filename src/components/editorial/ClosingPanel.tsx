import { CONTACT_CONTENT } from "@/data/projects";
import { cn } from "@/lib/utils";
import { TextLink } from "./TextLink";

const COLUMNS = [
  { label: "Email", href: `mailto:${CONTACT_CONTENT.email}`, text: CONTACT_CONTENT.email },
  { label: "GitHub", href: CONTACT_CONTENT.github, text: "@hashmessi" },
  { label: "LinkedIn", href: CONTACT_CONTENT.linkedin, text: "Hashvanth M U" },
];

/** design.md "Shared monumental ending": inset ink panel, small utility columns, huge clipped serif ticker. */
// Every page ends with this panel, so its bottom padding (not <main>) clears the floating index
// and stays in the surround colour.
export function ClosingPanel({ surround = "paper" }: { surround?: "paper" | "green" }) {
  const phrase = CONTACT_CONTENT.heading;
  // Two identical halves so translateX(-50%) loops seamlessly.
  const half = Array.from({ length: 3 }, () => phrase);

  return (
    <section id="contact" aria-labelledby="contact-heading" className={cn("pb-28 sm:pb-36 px-4 sm:px-[60px]", surround === "green" ? "bg-green" : "bg-paper")}>
      <div className="mx-auto max-w-page bg-ink text-paper rounded-media overflow-hidden">
        <div className="grid gap-s5 px-6 sm:px-[55.6px] pt-s6 lg:grid-cols-2">
          <div className="flex flex-col gap-s2 max-w-[520px]">
            <h2 id="contact-heading" className="sr-only">
              {phrase}
            </h2>
            <p className="type-small text-ink-2-rev">Availability</p>
            <p className="type-body">{CONTACT_CONTENT.subhead}</p>
          </div>
          <ul className="grid gap-s3 sm:grid-cols-[minmax(0,1.8fr)_1fr_1fr]">
            {COLUMNS.map((c) => (
              <li key={c.label} className="flex flex-col gap-1 type-small">
                <span className="text-ink-2-rev">{c.label}</span>
                <TextLink href={c.href} className="[overflow-wrap:anywhere]">
                  {c.text}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>

        <div aria-hidden="true" className="mt-s6 overflow-hidden whitespace-nowrap">
          <div className="ticker-track inline-flex type-ticker">
            {[...half, ...half].map((p, i) => (
              <span key={i} className="px-[0.3em]">
                {p} <span className="text-ink-2-rev">—</span>
              </span>
            ))}
          </div>
        </div>

        <p className="type-small text-ink-2-rev px-6 sm:px-[55.6px] pb-s5 pt-s3">
          © 2026 Hashvanth M U · Built with Next.js
        </p>
      </div>
    </section>
  );
}
export default ClosingPanel;
