"use client";

import { cn } from "@/lib/utils";

/**
 * Shared ink backing for the four interactive demos. Self-contained (own background), so a demo
 * reads correctly wherever it is placed; `.on-ink` swaps the state colors to their dark-backing values.
 */
export function Exhibit({
  label,
  live,
  children,
  className,
}: {
  label: string;
  live: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "on-ink h-full w-full flex flex-col justify-between gap-s3 bg-ink text-paper p-s3 sm:p-s4",
        className
      )}
    >
      <p className="sr-only" aria-live="polite">
        {live}
      </p>
      {children}
    </div>
  );
}

/** Two-state scenario switch, used by every demo. */
export function ScenarioToggle<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-s1 pt-s2 border-t border-white/15">
      <span className="type-small text-ink-2-rev mr-auto">{label}</span>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          aria-pressed={value === o.value}
          className={cn(
            "type-small min-h-9 px-s2 rounded-[6px] border transition-colors duration-200 ease-editorial cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper",
            value === o.value
              ? "bg-paper text-ink border-paper"
              : "border-white/30 text-paper hover:border-paper"
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** Small mono verdict chip: ALLOW / BLOCK / HOLD. */
export function Verdict({ tone, children }: { tone: "allow" | "block" | "award"; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "shrink-0 font-mono text-[11px] font-bold px-2 py-0.5 rounded-tag border",
        tone === "allow" && "text-allow border-allow",
        tone === "block" && "bg-block text-ink border-block",
        tone === "award" && "text-award border-award"
      )}
    >
      {children}
    </span>
  );
}
