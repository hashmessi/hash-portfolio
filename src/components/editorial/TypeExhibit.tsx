/** Ink exhibit for projects without an interactive demo: one serif line on black, never an empty frame. */
export function TypeExhibit({ text }: { text: string }) {
  return (
    <div className="on-ink flex min-h-[260px] items-end bg-ink p-s4 text-paper sm:p-s6">
      <p className="type-statement max-w-[640px]">{text}</p>
    </div>
  );
}
export default TypeExhibit;
