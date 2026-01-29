"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      // ↓↓↓ ここを bottom-8 から top-6 に変更しました！ ↓↓↓
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl hover:border-accent-cyan/50 transition-colors"
    >
      <div className="flex items-center gap-1 text-xs font-mono font-bold">
        <span className={lang === 'ja' ? "text-accent-cyan" : "text-zinc-600"}>JP</span>
        <span className="text-zinc-600">/</span>
        <span className={lang === 'en' ? "text-accent-cyan" : "text-zinc-600"}>EN</span>
      </div>
    </motion.button>
  );
}