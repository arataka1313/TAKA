"use client";
import { motion } from "framer-motion";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <motion.h2 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-2xl font-bold text-center tracking-[0.3em] text-zinc-500 uppercase"
    >
      {title}
    </motion.h2>
  );
}