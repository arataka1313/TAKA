"use client";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
}

export default function ProjectCard({ title, subtitle, description, tag, icon }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-accent-cyan/30 transition-all group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity text-accent-cyan">
        {icon}
      </div>
      <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest block mb-4">{tag}</span>
      <h3 className="text-2xl font-bold mb-1 group-hover:text-accent-cyan transition-colors">{title}</h3>
      <p className="text-xs text-slate-400 mb-4 font-medium uppercase tracking-tight">{subtitle}</p>
      <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
}