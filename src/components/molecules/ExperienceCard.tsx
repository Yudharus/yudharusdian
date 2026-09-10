import React from 'react';
import type { ExperienceItem } from '../../types/portfolio';
import { Badge } from '../atoms/Badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="p-6 sm:p-10 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 group">
      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <Briefcase className="w-4 h-4 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
              {experience.role}
            </h3>
          </div>
          <div className="text-sm sm:text-base font-mono text-zinc-300">
            {experience.company}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Bullet Points */}
      <ul className="space-y-3 mb-8">
        {experience.description.map((desc, dIdx) => (
          <li
            key={dIdx}
            className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 font-light leading-relaxed"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
            <span>{desc}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap items-center gap-2">
        {experience.technologies.map((tech) => (
          <Badge key={tech} variant="default">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};
