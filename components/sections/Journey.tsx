"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { journey } from "@/lib/content";

/**
 * Career shown as a dive log: a descent line with depth marks,
 * each life event logged as a stop on the way down.
 */
export default function Journey() {
  const { lang } = useLanguage();

  return (
    <section id="journey" className="scroll-mt-24 px-5 py-28 md:px-10 md:py-40">
      <SectionHeader
        zone={journey.zone}
        title={journey.title}
        sub={journey.sub[lang]}
      />

      <ol className="relative ml-2 max-w-3xl border-l border-foam/15 md:ml-24">
        {journey.entries.map((entry, i) => (
          <Reveal
            as="li"
            key={entry.date}
            delay={i * 60}
            className="relative pb-14 pl-8 last:pb-0 md:pl-12"
          >
            {/* Depth mark on the descent line */}
            <span
              aria-hidden="true"
              className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ${
                entry.upcoming
                  ? "border border-glow bg-transparent"
                  : "bg-glow shadow-[0_0_10px_rgba(110,231,216,0.5)]"
              }`}
            />
            <span
              aria-hidden="true"
              className="absolute -left-20 top-1 hidden font-mono text-[10px] tracking-[0.2em] text-faint md:block"
            >
              {entry.depth}
            </span>

            <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-mono text-sm tracking-[0.2em] text-glow">
                {entry.date}
              </span>
              {entry.upcoming && (
                <span className="border border-glow/50 px-2 py-0.5 font-mono text-[9px] tracking-[0.25em] text-glow">
                  {lang === "ja" ? "予定" : "NEXT DIVE"}
                </span>
              )}
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-foam md:text-2xl">
              {entry.title[lang]}
            </h3>
            {entry.note && (
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-mist">
                {entry.note[lang]}
              </p>
            )}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
