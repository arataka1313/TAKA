"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label={
        lang === "ja" ? "Switch language to English" : "言語を日本語に切り替える"
      }
      className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.2em] border border-foam/20 px-3 py-1.5 hover:border-glow/60 transition-colors"
    >
      <span className={lang === "ja" ? "text-glow" : "text-faint"}>JA</span>
      <span className="text-faint">/</span>
      <span className={lang === "en" ? "text-glow" : "text-faint"}>EN</span>
    </button>
  );
}
