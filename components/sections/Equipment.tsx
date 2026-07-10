"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { equipment } from "@/lib/content";

/**
 * Local monochrome SVG glyphs, drawn in one line style so the
 * toolkit reads as an instrument rack. No external images.
 */
function ToolIcon({ id }: { id: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-8 w-8",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "python":
      // Simplified two-snake mark (180° rotationally symmetric).
      return (
        <svg {...common}>
          <g fill="currentColor" stroke="none">
            <path d="M11.8 2c-3 0-4.6 1.4-4.6 3.2v2.2h4.7v.7H6.2C4 8.1 2.2 9.7 2.2 12h5v-1.6c0-1.9 1.6-3.4 3.5-3.4h3.6c1.6 0 2.9-1.3 2.9-2.9V5.2C17.2 3.3 15.4 2 12.9 2h-1.1z" />
            <path
              d="M11.8 2c-3 0-4.6 1.4-4.6 3.2v2.2h4.7v.7H6.2C4 8.1 2.2 9.7 2.2 12h5v-1.6c0-1.9 1.6-3.4 3.5-3.4h3.6c1.6 0 2.9-1.3 2.9-2.9V5.2C17.2 3.3 15.4 2 12.9 2h-1.1z"
              transform="rotate(180 12 12)"
            />
          </g>
          <circle cx="9.7" cy="4.7" r="0.9" className="fill-abyss" />
          <circle cx="14.3" cy="19.3" r="0.9" className="fill-abyss" />
        </svg>
      );
    case "c":
      return (
        <svg {...common}>
          <path
            d="M12 1.8l8.9 5.1v10.2L12 22.2l-8.9-5.1V6.9z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
            fill="currentColor"
          >
            C
          </text>
        </svg>
      );
    case "cpp":
      return (
        <svg {...common}>
          <path
            d="M12 1.8l8.9 5.1v10.2L12 22.2l-8.9-5.1V6.9z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontSize="8"
            fontFamily="monospace"
            fontWeight="bold"
            fill="currentColor"
          >
            C++
          </text>
        </svg>
      );
    case "linux":
      // Minimal penguin.
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2.8c-2.4 0-3.8 1.8-3.8 4.1 0 1.5-.5 2.7-1.2 4-.8 1.5-1.5 3-1.5 4.6 0 1.4.8 2.7 2.1 2.7h8.8c1.3 0 2.1-1.3 2.1-2.7 0-1.6-.7-3.1-1.5-4.6-.7-1.3-1.2-2.5-1.2-4 0-2.3-1.4-4.1-3.8-4.1z" />
          <circle cx="10.6" cy="7" r="0.5" fill="currentColor" stroke="none" />
          <circle cx="13.4" cy="7" r="0.5" fill="currentColor" stroke="none" />
          <path d="M11 8.7l1 .9 1-.9" />
          <path d="M9.3 12.4c.3 2-.2 3.6-.2 3.6M14.7 12.4c-.3 2 .2 3.6.2 3.6" />
          <path d="M8.5 20.5h2.5M13 20.5h2.5" strokeWidth="1.6" />
        </svg>
      );
    case "git":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2.1L21.9 12 12 21.9 2.1 12z" />
          <line x1="9.2" y1="6.6" x2="16.8" y2="14.2" />
          <path d="M12.9 14.6c0-2.2 1.4-3.2 2.6-4" />
          <circle cx="9.2" cy="6.6" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="16.8" cy="14.2" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="12.4" cy="15.1" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "arduino":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.3">
          <circle cx="7.4" cy="12" r="4.7" />
          <circle cx="16.6" cy="12" r="4.7" />
          <line x1="5.4" y1="12" x2="9.4" y2="12" />
          <line x1="14.6" y1="12" x2="18.6" y2="12" />
          <line x1="16.6" y1="10" x2="16.6" y2="14" />
        </svg>
      );
    case "ardusub":
      // Small autonomous sub glyph.
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.2">
          <ellipse cx="11" cy="13" rx="7.5" ry="4.2" />
          <path d="M8.5 8.8V6.4h4.5v2.4" />
          <circle cx="7.8" cy="13" r="1.2" />
          <line x1="19" y1="10.2" x2="19" y2="15.8" />
          <line x1="18.5" y1="13" x2="21.5" y2="13" />
          <path d="M4 19.5c1.5 1 3-1 4.5 0s3-1 4.5 0 3-1 4.5 0" strokeWidth="0.9" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Equipment() {
  const { lang } = useLanguage();

  return (
    <section id="equipment" className="scroll-mt-24 px-5 py-28 md:px-10 md:py-40">
      <SectionHeader
        zone={equipment.zone}
        title={equipment.title}
        sub={equipment.sub[lang]}
      />

      {/* Instrument rack — one bay per tool, plus an empty reserved bay */}
      <Reveal>
        <ul className="grid grid-cols-2 gap-px border border-foam/15 bg-foam/15 md:grid-cols-4">
          {equipment.tools.map((tool, i) => (
            <li key={tool.id} className="flex flex-col gap-4 bg-[#040f18] p-5 md:p-6">
              <span className="font-mono text-[9px] tracking-[0.3em] text-faint">
                BAY-{String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-mist">
                <ToolIcon id={tool.id} />
              </span>
              <span>
                <span className="block font-semibold text-foam">{tool.name}</span>
                <span className="mt-1 block text-xs text-faint">
                  {tool.role[lang]}
                </span>
              </span>
            </li>
          ))}
          <li className="flex flex-col gap-4 bg-[#040f18] p-5 md:p-6">
            <span className="font-mono text-[9px] tracking-[0.3em] text-faint">
              BAY-{String(equipment.tools.length + 1).padStart(2, "0")}
            </span>
            <span className="flex h-8 w-8 items-center justify-center border border-dashed border-foam/25" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
              {lang === "ja" ? "EMPTY — 拡張用" : "EMPTY — RESERVED"}
            </span>
          </li>
        </ul>
      </Reveal>

      {/* Operator languages */}
      <Reveal delay={120} className="mt-10 max-w-2xl border border-foam/15 p-6 md:p-7">
        <p className="font-mono text-[10px] tracking-[0.3em] text-glow">
          {equipment.languagesLabel}
        </p>
        <ul className="mt-4">
          {equipment.languages.map((row, i) => (
            <li
              key={i}
              className="flex flex-col gap-1 border-t border-foam/10 py-3 first:border-t-0 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span className="w-24 shrink-0 font-semibold text-foam">
                {row.name[lang]}
              </span>
              <span className="text-sm text-mist">{row.level[lang]}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
