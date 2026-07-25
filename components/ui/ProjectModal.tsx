"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/types";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  closeLabel: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
  closeLabel,
}: ProjectModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const imageClass =
    project?.imageFit === "contain"
      ? "object-contain p-5 md:p-8"
      : "object-cover";

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          <div className="pointer-events-none fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`project-title-${project.id}`}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="pointer-events-auto max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-r from-zinc-950 to-zinc-900 md:h-72">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className={imageClass}
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-900 to-transparent" />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={closeLabel}
                  className="absolute top-4 right-4 rounded-full border border-white/10 bg-black/60 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/80"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-7 md:p-9">
                <span className="mb-2 block font-mono text-xs tracking-widest text-accent-cyan uppercase">
                  {project.tag}
                </span>
                <h2
                  id={`project-title-${project.id}`}
                  className="mb-1 text-3xl font-bold text-white md:text-4xl"
                >
                  {project.title}
                </h2>
                <p className="mb-6 font-medium text-slate-400">
                  {project.subtitle}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-7 flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-accent-cyan/20 bg-accent-cyan/5 px-3 py-1.5 font-mono text-[10px] tracking-wide text-accent-cyan"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                <p className="leading-8 whitespace-pre-wrap text-slate-300">
                  {project.details}
                </p>

                <div className="mt-8 flex justify-end border-t border-white/5 pt-8">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                  >
                    {closeLabel}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
