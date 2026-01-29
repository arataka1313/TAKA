"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/lib/data";

export default function TechStack() {
  return (
    <section className="py-24 bg-white/5 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionTitle title="Tech Stack" />
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {skills.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, scale: 1.1 }} // ホバー時に少し大きく！
              className="flex flex-col items-center gap-2 transition-all cursor-default"
            >
              {/* Skill Iconsの画像を動的に取得 */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-accent-cyan/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={`https://skillicons.dev/icons?i=${s.id}&theme=dark`} 
                  alt={s.name}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}