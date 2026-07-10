"use client";

import FishCanvas from "@/components/dive/FishCanvas";
import { useLanguage } from "@/context/LanguageContext";
import { hero } from "@/lib/content";

export default function Hero() {
  const { lang } = useLanguage();
  const tagline = hero.tagline[lang];

  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* School of fish — will later host underwater robot swarm animations. */}
      <FishCanvas className="absolute inset-0 h-full w-full" />

      {/* Faint surface light from above */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_55%_at_65%_-10%,rgba(190,235,245,0.12),transparent_65%)]"
      />

      <div className="relative z-10 flex flex-1 flex-col justify-between px-5 pb-10 pt-24 md:px-10">
        {/* Instrument line — top */}
        <div className="fade-up flex flex-col gap-1 font-mono text-[10px] tracking-[0.3em] text-faint md:flex-row md:justify-between md:text-[11px]">
          <span>{hero.log}</span>
          <span>{hero.coords}</span>
        </div>

        {/* Name block — pinned low-left, taglines offset right */}
        <div className="mt-auto">
          <p
            className="fade-up font-mono text-xs uppercase tracking-[0.3em] text-glow md:text-sm"
            style={{ animationDelay: "150ms" }}
          >
            {hero.fields}
          </p>

          <h1
            className="fade-up mt-3 text-[clamp(5rem,19vw,14rem)] font-black leading-[0.82] tracking-tighter text-foam"
            style={{ animationDelay: "250ms" }}
          >
            {hero.name}
          </h1>

          <div
            className="fade-up mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            style={{ animationDelay: "400ms" }}
          >
            <p className="font-mono text-sm uppercase tracking-[0.4em] text-mist">
              {hero.fullName[lang]}
            </p>
            <div className="max-w-md md:text-right">
              <p className="text-2xl font-semibold leading-snug text-foam md:text-3xl">
                {tagline.main}
              </p>
              <p className="mt-2 font-mono text-sm tracking-wide text-mist">
                {tagline.sub}
              </p>
            </div>
          </div>

          {/* Dive cue — deliberately off-center */}
          <a
            href="#vision"
            className="fade-up mt-14 inline-flex flex-col items-center gap-3 md:ml-[12%]"
            style={{ animationDelay: "600ms" }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-faint">
              {hero.dive[lang]}
            </span>
            <span
              aria-hidden="true"
              className="drift-down block h-14 w-px bg-gradient-to-b from-glow/80 to-transparent"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
