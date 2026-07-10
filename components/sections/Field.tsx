"use client";

import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { field } from "@/lib/content";

export default function Field() {
  const { lang } = useLanguage();

  return (
    <section id="field" className="scroll-mt-24 px-5 py-28 md:px-10 md:py-40">
      <SectionHeader zone={field.zone} title={field.title} sub={field.sub[lang]} />

      <div className="grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <p className="text-2xl font-bold leading-snug tracking-tight text-foam md:text-4xl">
            {field.lead[lang]}
          </p>
          <p className="mt-8 max-w-xl leading-relaxed text-mist">
            {field.body[lang]}
          </p>
        </Reveal>

        {/* Tide log — field activities as observed entries, not cards */}
        <Reveal delay={120} className="md:col-span-5 md:col-start-8">
          <ul>
            {field.entries.map((entry) => (
              <li
                key={entry.code}
                className="border-t border-foam/10 py-6 last:border-b"
              >
                <p className="font-mono text-[10px] tracking-[0.3em] text-glow/80">
                  {entry.code}
                </p>
                <p className="mt-2 text-lg font-semibold text-foam">
                  {entry.label[lang]}
                </p>
                <p className="mt-1 text-sm text-mist">{entry.desc[lang]}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Field photo plates — swap for real images later */}
      <Reveal delay={200} className="mt-16 grid max-w-4xl gap-4 sm:grid-cols-2">
        {field.figures.map((fig) => (
          <Figure key={fig.label} label={fig.label} note={fig.note[lang]} />
        ))}
      </Reveal>
    </section>
  );
}
