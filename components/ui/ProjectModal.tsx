"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  details?: string;
  tag: string;
  icon: React.ReactNode;
};

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* 1. 背景の黒いフィルター */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* 2. モーダル本体 */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-zinc-900 border border-white/10 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl pointer-events-auto"
            >
              {/* ヘッダー画像エリア（将来的に画像入れたいならここ） */}
              <div className="h-32 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05]" />
                <div className="text-accent-cyan opacity-20 transform scale-150">
                   {project.icon}
                </div>
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* コンテンツエリア */}
              <div className="p-8">
                <span className="text-accent-cyan text-xs font-mono tracking-widest uppercase mb-2 block">
                  {project.tag}
                </span>
                <h2 className="text-3xl font-bold text-white mb-1">{project.title}</h2>
                <p className="text-slate-400 font-medium mb-6">{project.subtitle}</p>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {project.details || project.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex justify-end">
                   <button 
                     onClick={onClose}
                     className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
                   >
                     Close
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