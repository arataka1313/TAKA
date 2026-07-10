"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { records } from "@/lib/content";

/**
 * Records as mission logs: four expedition record groups,
 * each a manifest of dated entries — not a deck of identical cards.
 */
export default function Records() {
  const { lang } = useLanguage();

  return (
    <section id="records" className="scroll-mt-24 px-5 py-28 md:px-10 md:py-40">
      <SectionHeader
        zone={records.zone}
        title={records.title}
        sub={records.sub[lang]}
      />

      <div>
        {records.groups.map((group, gi) => (
          <Reveal
            key={group.id}
            delay={gi * 60}
            className="grid gap-6 border-t border-foam/10 py-10 last:border-b md:grid-cols-12 md:gap-10 md:py-14"
          >
            <div className="md:col-span-3">
              <p className="font-mono text-xs tracking-[0.3em] text-glow">
                {group.code}
              </p>
              <h3 className="mt-2 font-mono text-sm font-bold tracking-[0.2em] text-foam">
                {group.label}
              </h3>
              <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-faint">
                {group.jp}
              </p>
            </div>

            <ul className="md:col-span-9">
              {group.entries.map((entry, i) => (
                <li
                  key={i}
                  className="flex flex-col gap-2 border-t border-foam/10 py-5 first:border-t-0 first:pt-0 last:pb-0 md:flex-row md:items-baseline md:gap-8"
                >
                  <span className="w-16 shrink-0 font-mono text-xs tracking-[0.2em] text-faint">
                    {entry.date ?? "—"}
                  </span>
                  <div className="flex-1">
                    {entry.big ? (
                      <p className="flex items-baseline gap-3">
                        <span className="text-5xl font-black tracking-tighter text-glow md:text-6xl">
                          {entry.title[lang]}
                        </span>
                        {entry.note && (
                          <span className="font-mono text-sm text-faint">
                            {entry.note[lang]}
                          </span>
                        )}
                      </p>
                    ) : (
                      <>
                        <p
                          className={`font-semibold leading-snug ${
                            entry.accent === "sand"
                              ? "text-sand"
                              : entry.accent === "glow"
                                ? "text-glow"
                                : "text-foam"
                          }`}
                        >
                          {entry.title[lang]}
                        </p>
                        {entry.note && (
                          <p className="mt-2 text-sm leading-relaxed text-mist">
                            {entry.note[lang]}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                  {entry.status && (
                    <span className="w-fit shrink-0 border border-foam/20 px-2 py-0.5 font-mono text-[9px] tracking-[0.25em] text-faint">
                      {entry.status}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
