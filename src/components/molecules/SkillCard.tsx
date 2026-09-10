import React from 'react';
import type { SkillCategory } from '../../types/portfolio';
import { Layers, Code2, Terminal, Cpu } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const getIcon = (title: string) => {
    if (title.includes('Mobile')) return <Layers className="w-4 h-4 text-emerald-400" />;
    if (title.includes('Frontend')) return <Code2 className="w-4 h-4 text-emerald-400" />;
    if (title.includes('Backend')) return <Cpu className="w-4 h-4 text-emerald-400" />;
    return <Terminal className="w-4 h-4 text-emerald-400" />;
  };

  return (
    <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between group shadow-sm hover:shadow-lg hover:shadow-emerald-500/5">
      <div>
        <div className="flex items-center gap-2.5 mb-4 text-white text-sm sm:text-base font-semibold group-hover:text-emerald-300 transition-colors">
          {getIcon(category.title)}
          <span>{category.title}</span>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {category.skills.map((skill) => (
            <Badge key={skill} variant="subtle" size="sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
