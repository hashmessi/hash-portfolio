import Link from "next/link";
import { cn } from "@/lib/utils";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  /** Screen-reader-only suffix for repeated labels, e.g. "GitHub" → "GitHub for TrustPulse". */
  context?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

/** design.md "Underlined text action": the site's only action style (no filled buttons). */
export function TextLink({ href, children, context, className, onClick }: TextLinkProps) {
  const newTab = href.startsWith("http");
  const classes = cn(
    "underline decoration-1 underline-offset-[0.22em] transition-[text-decoration-thickness] duration-200 ease-editorial hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current rounded-[2px]",
    className
  );
  const label = (
    <>
      {children}
      {context && <span className="sr-only"> for {context}</span>}
      {newTab && <span className="sr-only"> (opens in new tab)</span>}
    </>
  );

  if (newTab || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} onClick={onClick} {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {label}
    </Link>
  );
}
export default TextLink;
