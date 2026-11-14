import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * design.md "Portfolio tile": rounded ink media with the caption outside, below it.
 * Only the caption name is a link: the media holds demo controls, which can't nest inside a link.
 * No fixed aspect ratio: the demo's own height is the frame, so nothing is clipped.
 */
export function ExhibitTile({
  name,
  href,
  descriptor,
  tag,
  wide = false,
  children,
}: {
  name: string;
  href: string;
  descriptor: string;
  tag?: string;
  /** Spans both columns of the signature grid. */
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <figure className={cn("flex flex-col", wide && "md:col-span-2")}>
      <div className="rounded-media overflow-hidden bg-ink">
        {children}
      </div>
      <figcaption className="mt-s3 flex flex-col gap-1">
        <span>
          <Link
            href={href}
            className="type-name underline decoration-transparent decoration-1 underline-offset-[0.22em] transition-colors duration-200 ease-editorial hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink rounded-[2px]"
          >
            {name}
          </Link>
          <span className="type-body"> — {descriptor}</span>
        </span>
        {tag && <span className="type-small text-ink-2">{tag}</span>}
      </figcaption>
    </figure>
  );
}
export default ExhibitTile;
