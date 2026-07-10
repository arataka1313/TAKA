"use client";

import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { currents } from "@/lib/content";

/** Global footprint as ocean currents — a quiet log, not a world map. */
export default function Currents() {
  const { lang } = useLanguage();

  return (
    <section id="currents" className="scroll-mt-24 px-5 py-28 md:px-10 md:py-40">
      <SectionHeader
        zone={currents.zone}
        title={currents.title}
        sub={currents.sub[lang]}
      />

      <ul className="max-w-4xl">
        {currents.entries.map((entry, i) => (
          <Reveal
            as="li"
            key={entry.code}
            delay={i * 80}
            className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 gap-y-1 border-t border-foam/10 py-7 last:border-b md:grid-cols-[4.5rem_6rem_1fr_auto] md:gap-x-8"
          >
            <span className="font-mono text-lg font-bold tracking-[0.2em] text-glow">
              {entry.code}
            </span>
            <span className="font-mono text-xs tracking-[0.2em] text-faint md:order-none order-3 col-start-2 md:col-start-auto">
              {entry.date}
            </span>
            <span className="col-start-2 md:col-start-auto">
              <span className="block font-semibold text-foam">
                {entry.place[lang]}
              </span>
              <span className="mt-1 block text-sm text-mist">
                {entry.desc[lang]}
              </span>
            </span>
            <span className="col-start-2 mt-1 w-fit border border-foam/20 px-2 py-0.5 font-mono text-[9px] tracking-[0.25em] text-faint md:col-start-auto md:mt-0 md:self-center">
              {entry.status}
            </span>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={200} className="mt-12 max-w-md">
        <Figure label={currents.figure.label} note={currents.figure.note[lang]} />
      </Reveal>
    </section>
  );
}
