"use client";

import { useEffect, useState } from "react";

const ZONES: Array<[number, string]> = [
  [40, "SURFACE"],
  [180, "SUNLIT"],
  [420, "TWILIGHT"],
  [700, "MIDNIGHT"],
  [940, "ABYSS"],
  [Infinity, "SEABED"],
];

/**
 * Dive-computer style depth readout, driven by scroll position.
 * Decorative — hidden from assistive tech and small screens.
 */
export default function DepthGauge() {
  const [frac, setFrac] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        setFrac(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const depth = Math.round(frac * 1000);
  const zone = ZONES.find(([limit]) => depth < limit)?.[1] ?? "SEABED";

  return (
    <div
      aria-hidden="true"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 select-none flex-col items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-faint lg:flex"
    >
      <span className="tabular-nums">{String(depth).padStart(3, "0")}m</span>
      <div className="relative h-44 w-px bg-foam/15">
        <span
          className="absolute left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-glow shadow-[0_0_8px_rgba(110,231,216,0.7)]"
          style={{ top: `calc(${(frac * 100).toFixed(2)}% - 3px)` }}
        />
      </div>
      <span className="[writing-mode:vertical-rl]">{zone}</span>
    </div>
  );
}
