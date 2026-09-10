import React from 'react';
import type { Project } from '../../types/portfolio';
import { Badge } from '../atoms/Badge';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export interface ProjectRowProps {
  project: Project;
  index: number;
  onHover?: (project: Project | null) => void;
  onClick?: (project: Project) => void;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({
  project,
  index,
  onHover,
  onClick,
}) => {
  return (
    <div
      onMouseEnter={() => onHover?.(project)}
      onMouseLeave={() => onHover?.(null)}
      onClick={() => onClick?.(project)}
      className="group relative py-7 sm:py-9 flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 cursor-pointer transition-all duration-300 hover:px-4 sm:hover:px-6 rounded-2xl hover:bg-white/[0.03]"
    >
      {/* Left: Index, Title & Description */}
      <div className="flex items-start sm:items-center gap-4 sm:gap-8">
        <span className="text-xs font-mono text-zinc-500 tracking-widest pt-1 sm:pt-0 shrink-0">
          {(index + 1).toString().padStart(2, '0')}
        </span>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-zinc-200 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all opacity-0 group-hover:opacity-100 shrink-0" />
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl line-clamp-1 font-light">
            {project.subtitle || project.description}
          </p>
        </div>
      </div>

      {/* Right: Metrics, Type Badge & Year */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 lg:justify-end pl-8 sm:pl-0">
        {project.metrics && (
          <Badge variant="emerald" icon={<Sparkles className="w-3 h-3" />}>
            {project.metrics}
          </Badge>
        )}
        <Badge variant="default">{project.type}</Badge>
        <span className="text-xs font-mono text-zinc-500 tracking-wider">
          {project.year}
        </span>
      </div>
    </div>
  );
};
