"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteCopy, skills } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function TechStack() {
  const { lang } = useLanguage();

  return (
    <section className="border-y border-white/5 bg-white/[0.03] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionTitle title={siteCopy[lang].sections.skills} />
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-9">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ y: -5, scale: 1.1 }}
              className="group relative cursor-default"
              title={skill.name}
            >
              <div className="absolute -inset-2 rounded-full bg-accent-cyan/20 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://skillicons.dev/icons?i=${skill.id}&theme=dark`}
                alt={skill.name}
                className="relative h-14 w-14 object-contain drop-shadow-lg md:h-16 md:w-16"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
