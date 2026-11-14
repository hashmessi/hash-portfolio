import Link from "next/link";
import { TextLink } from "./TextLink";

/** Ruled editorial row for projects without a demo: no empty media frames (design.md). */
export function LedgerRow({
  index,
  name,
  href,
  summary,
  detail,
  links,
}: {
  index: string;
  name: string;
  href: string;
  summary: string;
  detail?: string;
  links: { label: string; href: string }[];
}) {
  return (
    <article className="grid gap-s2 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-s5 border-t border-ink pt-s3 pb-s6">
      <div className="flex items-baseline gap-s2">
        <span className="type-small text-ink-2">{index}</span>
        <h3 className="type-name">
          <Link
            href={href}
            className="underline decoration-transparent decoration-1 underline-offset-[0.22em] transition-colors duration-200 ease-editorial hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink rounded-[2px]"
          >
            {name}
          </Link>
        </h3>
      </div>
      <div className="flex flex-col gap-s2 max-w-[836px]">
        <p className="type-reading">{summary}</p>
        {detail && <p className="type-small text-ink-2">{detail}</p>}
        <p className="flex flex-wrap gap-x-s3 gap-y-s1 type-small">
          {links.map((l) => (
            <TextLink key={l.label} href={l.href} context={name}>
              {l.label}
            </TextLink>
          ))}
        </p>
      </div>
    </article>
  );
}
export default LedgerRow;
