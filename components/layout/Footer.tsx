"use client";

import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { footer, hero } from "@/lib/content";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer id="contact" className="scroll-mt-24 px-5 pb-12 pt-28 md:px-10 md:pt-40">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-glow/90">
          {footer.zone}
        </p>
        <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tighter text-foam md:text-6xl">
          {footer.heading[lang]}
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-mist">
          {footer.body[lang]}
        </p>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          {footer.links.filter((link) => link.url).map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="border-b border-foam/30 pb-1 font-mono text-sm tracking-[0.15em] text-foam hover:border-glow hover:text-glow transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-24 flex flex-col gap-6 border-t border-foam/10 pt-8 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[10px] tracking-[0.25em] text-faint">
          {hero.coords} · © 2026 TAKASHI ARAI
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-faint hover:text-glow transition-colors"
        >
          <span aria-hidden="true">↑</span>
          {footer.resurface[lang]}
        </a>
      </div>
    </footer>
  );
}
