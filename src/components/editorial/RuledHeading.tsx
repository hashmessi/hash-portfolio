import { TextLink } from "./TextLink";

/** design.md "Ruled heading": 1px ink rule, plain section label, optional edge-aligned text action. */
export function RuledHeading({
  id,
  title,
  action,
}: {
  id?: string;
  title: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-s3 gap-y-s1 border-t border-ink pt-s3">
      <h2 id={id} className="type-label">
        {title}
      </h2>
      {action && (
        <TextLink href={action.href} className="type-body">
          {action.label}
        </TextLink>
      )}
    </div>
  );
}
export default RuledHeading;
