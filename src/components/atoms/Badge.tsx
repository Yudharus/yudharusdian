import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'emerald' | 'amber' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  icon,
  className = '',
}) => {
  const sizeStyles =
    size === 'sm'
      ? 'px-3 py-1 text-xs font-mono'
      : 'px-3.5 py-1.5 text-xs sm:text-sm font-mono';

  const variantStyles = {
    default: 'bg-white/5 border border-white/10 text-zinc-300',
    emerald: 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-400',
    amber: 'bg-amber-500/10 border border-amber-500/25 text-amber-300',
    outline: 'border border-white/20 text-white bg-transparent',
    subtle: 'bg-zinc-900/60 border border-zinc-800 text-zinc-400',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full transition-colors ${sizeStyles} ${variantStyles} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
