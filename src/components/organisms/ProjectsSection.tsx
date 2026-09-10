import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';
import { SectionHeader } from '../atoms/SectionHeader';
import { ProjectRow } from '../molecules/ProjectRow';
import { ProjectModal } from '../molecules/ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto z-10 reveal-fade-up">
      {/* Section Header */}
      <SectionHeader
        tag="Curated Works"
        title="Projects"
        subtitle="Modern web applications, layout engines, and interactive tools engineered with Next.js, React, and TypeScript."
      />

      {/* Projects Table / Row List */}
      <div className="divide-y divide-white/10">
        {PROJECTS.map((project, idx) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={idx}
            onHover={(p) => setHoveredProject(p)}
            onClick={(p) => setActiveProject(p)}
          />
        ))}
      </div>

      {/* Floating Hover Preview Card (Desktop pointer only) */}
      {hoveredProject && (
        <div
          className="fixed pointer-events-none z-40 hidden lg:block transition-transform duration-100 ease-out"
          style={{
            left: `${cursorPos.x + 28}px`,
            top: `${cursorPos.y - 110}px`,
          }}
        >
          <div className="w-72 h-44 rounded-2xl overflow-hidden border border-white/20 bg-zinc-900/90 backdrop-blur-md shadow-2xl p-1.5">
            <img
              src={hoveredProject.image}
              alt={hoveredProject.title}
              className="w-full h-full object-cover rounded-xl bg-zinc-950"
            />
          </div>
        </div>
      )}

      {/* Detailed Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
