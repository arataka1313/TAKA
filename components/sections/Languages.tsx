"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";
import { siteCopy } from "@/lib/data";

const languageCopy = {
  ja: [
    {
      language: "日本語",
      details: ["母語"],
    },
    {
      language: "英語",
      details: ["TOEIC L&R 750", "実用英語技能検定2級"],
    },
    {
      language: "中国語",
      details: ["日常会話", "中国語検定3級"],
    },
  ],
  en: [
    {
      language: "Japanese",
      details: ["Native"],
    },
    {
      language: "English",
      details: ["TOEIC L&R 750", "EIKEN Grade 2"],
    },
    {
      language: "Mandarin Chinese",
      details: ["Conversational", "Chinese Proficiency Test in Japan, Grade 3"],
    },
  ],
} as const;

export default function Languages() {
  const { lang } = useLanguage();
  const items = languageCopy[lang];

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <SectionTitle title={siteCopy[lang].sections.languages} />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.article
            key={item.language}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-7 text-center"
          >
            <h3 className="text-xl font-bold text-white">{item.language}</h3>
            <div className="mt-4 space-y-1.5 text-sm leading-relaxed text-zinc-400">
              {item.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
