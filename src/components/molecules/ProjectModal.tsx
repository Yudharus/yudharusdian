import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../../types/portfolio';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { X, ExternalLink, Sparkles } from 'lucide-react';

export interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    // Lock body scroll smoothly
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || typeof document === 'undefined') return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      data-lenis-prevent="true"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      className="fixed inset-0 z-[70] overflow-y-auto overscroll-contain p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 flex justify-center items-start"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        data-lenis-prevent="true"
        className="relative w-full max-w-3xl my-8 sm:my-12 bg-zinc-950 border border-white/15 rounded-3xl p-5 sm:p-10 shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-white/10 text-zinc-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 pr-10">
          <span>{project.type}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>

        <h3 id="modal-title" className="text-2xl sm:text-4xl font-bold text-white mb-4 pr-8">
          {project.title}
        </h3>

        {project.metrics && (
          <div className="mb-6">
            <Badge variant="emerald" size="md" icon={<Sparkles className="w-3.5 h-3.5" />}>
              {project.metrics}
            </Badge>
          </div>
        )}

        {/* Screenshot Preview */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black mb-6 shadow-inner">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain sm:object-cover bg-zinc-950"
          />
        </div>

        {/* Description */}
        <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
          <p>{project.longDescription || project.description}</p>
        </div>

        {/* Tech Stack Tags */}
        <div className="border-t border-white/10 pt-6 mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
            Technologies & Architecture
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {project.link && (
            <Button
              asLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              icon={<ExternalLink className="w-4 h-4" />}
              iconPosition="right"
            >
              Visit Live Project
            </Button>
          )}
          <Button variant="outline" onClick={onClose}>
            Close Window
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};
