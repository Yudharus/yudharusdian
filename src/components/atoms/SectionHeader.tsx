import React from 'react';

export interface SectionHeaderProps {
  tag: string;
  title: string | React.ReactNode;
  subtitle?: string;
  rightAction?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  rightAction,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-white/10 pb-8 gap-6 ${className}`}
    >
      <div>
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{tag}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-zinc-400 font-light mt-2 max-w-xl">
            {subtitle}
          </p>
        )}
      </div>

      {rightAction && <div className="flex items-center gap-3 shrink-0">{rightAction}</div>}
    </div>
  );
};
