"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { vision } from "@/lib/content";

export default function Vision() {
  const { lang } = useLanguage();

  return (
    <section id="vision" className="scroll-mt-24 px-5 py-28 md:px-10 md:py-40">
      <SectionHeader zone={vision.zone} title={vision.title} sub={vision.sub[lang]} />

      <Reveal>
        <blockquote className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-foam md:text-5xl">
          {vision.statement[lang]}
        </blockquote>
      </Reveal>

      <div className="mt-14 grid max-w-4xl gap-10 md:ml-[10%] md:grid-cols-2">
        <Reveal>
          <p className="leading-relaxed text-mist">{vision.body1[lang]}</p>
        </Reveal>
        <Reveal delay={120}>
          <p className="leading-relaxed text-mist">{vision.body2[lang]}</p>
        </Reveal>
      </div>

      {/* Target applications — the show is one mission among many */}
      <Reveal delay={160} className="mt-16 md:ml-[10%]">
        <p className="font-mono text-[10px] tracking-[0.3em] text-faint md:text-[11px]">
          {vision.missionsLabel}
        </p>
        <ul className="mt-5 grid max-w-4xl gap-x-10 gap-y-4 sm:grid-cols-2">
          {vision.missions.map((mission, i) => (
            <li
              key={i}
              className="flex gap-4 border-t border-foam/10 pt-3"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-glow">
                M-{String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed text-mist">
                {mission[lang]}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Concept annotation — a school of drone-dots swimming in formation */}
      <Reveal delay={200} className="mt-16 md:ml-[10%]">
        <div className="flex max-w-4xl items-center gap-5 border-t border-foam/10 pt-6">
          <svg
            viewBox="0 0 120 28"
            className="h-6 w-24 shrink-0"
            aria-hidden="true"
          >
            {[
              [8, 14],
              [24, 8],
              [26, 20],
              [44, 5],
              [46, 14],
              [48, 23],
              [68, 9],
              [70, 19],
              [90, 14],
            ].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={2.2}
                className="ping-dot fill-glow/80"
                style={{ animationDelay: `${i * 0.28}s` }}
              />
            ))}
          </svg>
          <p className="font-mono text-[10px] tracking-[0.3em] text-faint md:text-[11px]">
            {vision.annotation}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
