import Reveal from "./Reveal";

interface SectionHeaderProps {
  zone: string;
  title: string;
  sub?: string;
}

export default function SectionHeader({ zone, title, sub }: SectionHeaderProps) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-glow/90">
        {zone}
      </p>
      <h2 className="mt-4 text-5xl md:text-7xl font-black tracking-tighter text-foam">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 font-mono text-sm tracking-[0.15em] text-faint">
          {sub}
        </p>
      )}
    </Reveal>
  );
}
