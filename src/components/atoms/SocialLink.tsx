import React from 'react';

export interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  sublabel?: string;
  className?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  label,
  icon,
  className = '',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/40 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200 ${className}`}
    >
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
    </a>
  );
};
