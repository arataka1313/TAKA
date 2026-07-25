"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types";

type ProjectCardProps = Pick<
  Project,
  "title" | "subtitle" | "description" | "tag" | "icon"
>;

export default function ProjectCard({
  title,
  subtitle,
  description,
  tag,
  icon,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-accent-cyan/30"
    >
      <div className="absolute top-0 right-0 p-6 text-accent-cyan opacity-10 transition-opacity group-hover:opacity-100">
        {icon}
      </div>
      <span className="mb-4 block font-mono text-[10px] tracking-widest text-accent-cyan uppercase">
        {tag}
      </span>
      <h3 className="mb-1 pr-8 text-2xl font-bold transition-colors group-hover:text-accent-cyan">
        {title}
      </h3>
      <p className="mb-4 text-xs font-medium tracking-tight text-slate-400 uppercase">
        {subtitle}
      </p>
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>
    </motion.article>
  );
}
