"use client";
import { useState } from "react"; // ← 追加
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal"; // ← 追加
import { projects } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { lang } = useLanguage();
  
  // モーダルの状態管理
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // アニメーション終了後に消す
  };

  return (
    <section className="py-32 w-full max-w-6xl mx-auto px-6">
      <SectionTitle title="Selected Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {projects[lang].map((p, i) => (
          // divでラップしてonClickを追加
          <div key={i} onClick={() => handleOpenModal(p)} className="cursor-pointer">
            <ProjectCard {...p} />
          </div>
        ))}
      </div>

      {/* モーダルコンポーネントを配置 */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        project={selectedProject} 
      />
    </section>
  );
}