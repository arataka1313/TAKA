"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, siteCopy } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/types";

export default function Projects() {
  const { lang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-28">
      <SectionTitle title={siteCopy[lang].sections.projects} />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects[lang].map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer text-left"
            aria-label={`${project.title} details`}
          >
            <ProjectCard {...project} />
          </button>
        ))}
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        closeLabel={siteCopy[lang].modal.close}
      />
    </section>
  );
}
