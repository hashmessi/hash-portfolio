import { cn } from "@/lib/utils";

/**
 * Billboard identity (design.md): a heavy condensed grotesk name fitted to the full container.
 * `textLength` stretches the glyph run to exactly the viewBox width, so the silhouette always fills it.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Hashvanth M U"
      viewBox="0 0 1320 196"
      className={cn("block w-full h-auto text-ink", className)}
    >
      <text
        x="0"
        y="194"
        textLength="1320"
        lengthAdjust="spacingAndGlyphs"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontStretch: "62%", fontSize: 272 }}
      >
        HASHVANTH
      </text>
    </svg>
  );
}
export default Wordmark;
