"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteCopy, timelineData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Timeline() {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-28">
      <SectionTitle title={siteCopy[lang].sections.journey} />
      <div className="relative mt-20 ml-4 border-l border-white/10">
        {timelineData[lang].map((item, index) => (
          <motion.div
            key={`${item.date}-${item.title}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: Math.min(index * 0.03, 0.15) }}
            className="group relative mb-16 ml-10"
          >
            <div className="absolute top-1.5 -left-[49px] h-4 w-4 rounded-full border-2 border-accent-cyan bg-zinc-950 shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
            <time className="mb-2 block font-mono text-xs tracking-widest text-accent-cyan uppercase">
              {item.date}
            </time>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
