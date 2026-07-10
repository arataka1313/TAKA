/**
 * Image placeholder, styled as an expedition figure plate.
 * Swap later by replacing the inner content with an <Image />.
 */
export default function Figure({
  label,
  note,
  className,
}: {
  label: string;
  note?: string;
  className?: string;
}) {
  return (
    <figure
      className={`border border-dashed border-foam/25 bg-foam/[0.03] flex flex-col items-center justify-center gap-2 p-6 text-center min-h-32 ${className ?? ""}`}
    >
      <figcaption className="font-mono text-[10px] tracking-[0.3em] uppercase text-faint">
        {label}
      </figcaption>
      {note && <span className="text-xs text-faint">{note}</span>}
    </figure>
  );
}
