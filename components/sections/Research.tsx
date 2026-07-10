"use client";

import Image from "next/image";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { hci, research, themes, type Theme, type Lang } from "@/lib/content";

/* ---------- Instrument visuals (decorative, all inline SVG) ---------- */

function SonarPanel() {
  const contacts: Array<[number, number]> = [
    [128, 62], [146, 88], [118, 104], [88, 128], [64, 96], [138, 130], [96, 58],
  ];
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <svg viewBox="0 0 200 200" className="w-full" aria-hidden="true">
        {[28, 56, 84].map((r) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            className="stroke-foam/15"
            strokeWidth="0.6"
          />
        ))}
        <line x1="100" y1="12" x2="100" y2="188" className="stroke-foam/10" strokeWidth="0.5" />
        <line x1="12" y1="100" x2="188" y2="100" className="stroke-foam/10" strokeWidth="0.5" />
        <g className="sonar-sweep">
          <path
            d="M100 100 L100 16 A84 84 0 0 1 135 23.5 Z"
            className="fill-glow/10"
          />
          <line x1="100" y1="100" x2="100" y2="16" className="stroke-glow/70" strokeWidth="1" />
        </g>
        {contacts.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2.4"
            className="ping-dot fill-glow"
            style={{ animationDelay: `${i * 0.45}s` }}
          />
        ))}
      </svg>
      <p className="mt-3 text-center font-mono text-[10px] tracking-[0.3em] text-faint">
        SONAR VIEW — 7 CONTACTS TRACKING
      </p>
    </div>
  );
}

function ProbeSchematic() {
  return (
    <div className="blueprint-grid border border-foam/15 p-6 md:p-8">
      <svg viewBox="0 0 240 150" className="w-full" aria-hidden="true">
        {/* Sand line */}
        <path
          d="M10 72 q12 -5 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0"
          fill="none"
          className="stroke-mist/60"
          strokeWidth="1"
        />
        <g className="stroke-mist/80" fill="none" strokeWidth="1">
          {/* Probe stick with handle */}
          <line x1="168" y1="14" x2="122" y2="96" />
          <line x1="160" y1="10" x2="176" y2="19" strokeWidth="2" />
          {/* Sensor tip */}
          <circle cx="122" cy="96" r="4" className="stroke-glow/80" />
          {/* Buried eggs */}
          <ellipse cx="106" cy="116" rx="7" ry="8.5" />
          <ellipse cx="122" cy="122" rx="7" ry="8.5" />
          <ellipse cx="115" cy="107" rx="7" ry="8.5" />
          {/* Proximity detection arcs (before contact) */}
          <path d="M112 102 a12 12 0 0 1 16 6" className="stroke-glow/60" strokeDasharray="2 2" />
          <path d="M106 106 a20 20 0 0 1 26 10" className="stroke-glow/35" strokeDasharray="2 2" />
          {/* Audible alert at the handle */}
          <path d="M180 24 a8 8 0 0 1 0 10" className="stroke-sand/70" />
          <path d="M185 20 a14 14 0 0 1 0 18" className="stroke-sand/45" />
        </g>
        <g className="fill-faint" fontSize="6.5" fontFamily="monospace" letterSpacing="1">
          <text x="12" y="64">SAND LINE</text>
          <text x="60" y="138">EGG CHAMBER</text>
          <text x="132" y="98">SENSOR TIP</text>
          <text x="176" y="46">ALERT</text>
        </g>
      </svg>
      <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-faint">
        WORKING PRINCIPLE — DETECT BEFORE CONTACT
      </p>
    </div>
  );
}

function BeaconDiagram() {
  return (
    <div className="border border-foam/15 bg-foam/[0.02] p-5 md:p-7">
      <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-faint">
        <span>SYSTEM CONCEPT — ACOUSTIC BEACON LOCALIZATION</span>
        <span className="hidden sm:inline">LOW VISIBILITY</span>
      </div>
      <svg viewBox="0 0 600 160" className="mt-4 w-full" aria-hidden="true">
        {/* Water surface */}
        <line x1="0" y1="26" x2="600" y2="26" className="stroke-foam/25" strokeWidth="1" strokeDasharray="6 5" />
        <g fill="none" strokeWidth="1.2">
          {/* Person with wrist beacon */}
          <circle cx="132" cy="66" r="9" className="stroke-mist/80" />
          <path d="M132 75 v26 M132 84 l-18 12 M132 84 l17 -8 M132 101 l-12 22 M132 101 l13 21" className="stroke-mist/80" />
          <circle cx="149" cy="76" r="3.5" className="stroke-glow" />
          {/* Acoustic pulses from the beacon */}
          <path d="M162 62 a26 26 0 0 1 0 30" className="stroke-glow/70" />
          <path d="M176 52 a44 44 0 0 1 0 50" className="stroke-glow/45" />
          <path d="M192 42 a64 64 0 0 1 0 70" className="stroke-glow/25" />
          {/* Underwater robot with hydrophone array */}
          <rect x="412" y="70" width="86" height="34" rx="10" className="stroke-mist/80" />
          <circle cx="490" cy="87" r="7" className="stroke-mist/80" />
          {[428, 446, 464, 482].map((x) => (
            <circle key={x} cx={x} cy="112" r="3" className="stroke-glow/80" />
          ))}
          {/* Estimated bearing (method under study) */}
          <path d="M424 108 L158 80" className="stroke-sand/50" strokeDasharray="4 4" />
        </g>
        <g className="fill-faint" fontSize="9" fontFamily="monospace" letterSpacing="1.5">
          <text x="8" y="18">SURFACE</text>
          <text x="96" y="146">WRIST BEACON</text>
          <text x="412" y="132">HYDROPHONE ARRAY</text>
          <text x="252" y="72">POSITION ESTIMATE — METHOD UNDER STUDY</text>
        </g>
      </svg>
    </div>
  );
}

/** Off-white paper panel for the HCI research figure. */
function PaperFigure({ lang }: { lang: Lang }) {
  const img = hci.image;
  return (
    <figure className="bg-[#f1ede2] p-5 text-[#26333c]">
      {img.available ? (
        <Image
          src={img.src}
          alt={img.alt}
          width={960}
          height={640}
          className="h-auto w-full"
        />
      ) : (
        <div className="flex min-h-44 flex-col items-center justify-center gap-2 border border-dashed border-[#26333c]/35 p-6 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#26333c]/60">
            {img.placeholderLabel}
          </span>
          <span className="text-xs text-[#26333c]/55">
            {img.placeholderNote[lang]}
          </span>
        </div>
      )}
      <figcaption className="mt-3 font-mono text-[11px] leading-relaxed text-[#26333c]/75">
        {img.caption}
      </figcaption>
    </figure>
  );
}

/* ---------------------------- Theme entries ---------------------------- */

function ThemeMeta({ theme }: { theme: Theme }) {
  return (
    <div className="flex flex-row flex-wrap items-baseline gap-x-6 gap-y-3 md:flex-col md:gap-y-4">
      <p className="font-mono text-xs tracking-[0.3em] text-glow">{theme.no}</p>
      <p className="border border-foam/25 px-2 py-1 font-mono text-[10px] tracking-[0.25em] text-mist">
        {theme.status}
      </p>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 md:flex-col md:gap-y-1.5">
        {theme.tags.map((tag) => (
          <li key={tag} className="font-mono text-[10px] tracking-[0.15em] text-faint">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ThemeText({ theme, lang }: { theme: Theme; lang: Lang }) {
  const other: Lang = lang === "ja" ? "en" : "ja";
  return (
    <div>
      <h3 className="text-3xl font-black tracking-tight text-foam md:text-4xl">
        {theme.title[lang]}
      </h3>
      <p className="mt-2 font-mono text-sm tracking-[0.1em] text-faint">
        {theme.title[other]}
      </p>
      <p className="mt-6 max-w-xl leading-relaxed text-mist">
        {theme.desc[lang]}
      </p>
    </div>
  );
}

function ThemeFigures({ theme, lang, className }: { theme: Theme; lang: Lang; className?: string }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${className ?? ""}`}>
      {theme.figures.map((fig) => (
        <Figure key={fig.label} label={fig.label} note={fig.note[lang]} />
      ))}
    </div>
  );
}

export default function Research() {
  const { lang } = useLanguage();
  const other: Lang = lang === "ja" ? "en" : "ja";
  const [auvSwarm, smartProbe, acousticRescue] = themes;

  return (
    <section id="research" className="scroll-mt-24 px-5 py-28 md:px-10 md:py-40">
      <SectionHeader
        zone={research.zone}
        title={research.title}
        sub={research.sub[lang]}
      />

      {/* Current research phase — SITL now, physical prototypes next */}
      <Reveal className="-mt-8 mb-6 max-w-3xl border border-foam/15 bg-foam/[0.02] p-6 md:-mt-12 md:p-7">
        <p className="font-mono text-[10px] tracking-[0.3em] text-glow">
          {research.phaseLabel}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-mist">
          {research.phase[lang]}
        </p>
      </Reveal>

      {/* SIG-01 — AUV swarm platform: sonar display right, figures below */}
      <Reveal as="article" className="border-t border-foam/10 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <ThemeMeta theme={auvSwarm} />
          </div>
          <div className="md:col-span-5">
            <ThemeText theme={auvSwarm} lang={lang} />
          </div>
          <div className="md:col-span-4">
            <SonarPanel />
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-12 md:gap-10">
          <ThemeFigures
            theme={auvSwarm}
            lang={lang}
            className="md:col-span-9 md:col-start-4"
          />
        </div>
      </Reveal>

      {/* SIG-02 — smart probe: schematic + figures left, text right */}
      <Reveal as="article" className="grid gap-10 border-t border-foam/10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:order-2 md:col-span-3 md:col-start-10">
          <ThemeMeta theme={smartProbe} />
        </div>
        <div className="md:order-1 md:col-span-5">
          <ProbeSchematic />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Figure
              label={smartProbe.figures[0].label}
              note={smartProbe.figures[0].note[lang]}
            />
            <Figure
              label={smartProbe.figures[1].label}
              note={smartProbe.figures[1].note[lang]}
            />
          </div>
        </div>
        <div className="md:order-1 md:col-span-4 md:col-start-6 md:self-center">
          <ThemeText theme={smartProbe} lang={lang} />
          <Figure
            label={smartProbe.figures[2].label}
            note={smartProbe.figures[2].note[lang]}
            className="mt-6"
          />
        </div>
      </Reveal>

      {/* SIG-03 — acoustic rescue: full-width system diagram above the text */}
      <Reveal as="article" className="border-t border-foam/10 py-16 md:py-24">
        <BeaconDiagram />
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <ThemeMeta theme={acousticRescue} />
          </div>
          <div className="md:col-span-6">
            <ThemeText theme={acousticRescue} lang={lang} />
          </div>
          <div className="md:col-span-3">
            <ThemeFigures
              theme={acousticRescue}
              lang={lang}
              className="sm:grid-cols-1"
            />
          </div>
        </div>
      </Reveal>

      {/* SIG-04 — previous HCI research, clearly separated from marine themes */}
      <Reveal as="article" className="border-y border-foam/10 py-16 md:py-24">
        <p className="font-mono text-[11px] tracking-[0.35em] text-sand/90">
          {hci.label}
          <span className="text-faint"> · {hci.sensorLabel}</span>
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="flex flex-row flex-wrap items-baseline gap-x-6 gap-y-3 md:flex-col md:gap-y-4">
              <p className="font-mono text-xs tracking-[0.3em] text-glow">{hci.no}</p>
              <p className="border border-foam/25 px-2 py-1 font-mono text-[10px] tracking-[0.25em] text-mist">
                {hci.status}
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 md:flex-col md:gap-y-1.5">
                {hci.tags.map((tag) => (
                  <li key={tag} className="font-mono text-[10px] tracking-[0.15em] text-faint">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-5">
            <h3 className="text-3xl font-black tracking-tight text-foam md:text-4xl">
              {hci.title[lang]}
            </h3>
            <p className="mt-2 font-mono text-sm tracking-[0.1em] text-faint">
              {hci.title[other]}
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-mist">
              {hci.desc[lang]}
            </p>
            <p className="mt-6 max-w-xl border-l-2 border-glow/50 pl-4 text-sm leading-relaxed text-mist">
              {hci.publication[lang]}
            </p>
          </div>
          <div className="md:col-span-4">
            <PaperFigure lang={lang} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
