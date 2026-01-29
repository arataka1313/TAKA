"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { timelineData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext"; // ← 追加

export default function Timeline() {
  const { lang } = useLanguage(); // ← 追加

  return (
    <section className="py-32 w-full max-w-3xl mx-auto px-6">
      <SectionTitle title="Life Journey" />
      <div className="relative border-l border-white/10 ml-4 mt-20">
        {/* timelineData[lang] で切り替え */}
        {timelineData[lang].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16 ml-10 relative group"
          >
            <div className="absolute -left-[49px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-accent-cyan shadow-[0_0_10px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all" />
            <time className="text-xs font-mono text-accent-cyan uppercase tracking-widest block mb-2">
              {item.date}
            </time>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}