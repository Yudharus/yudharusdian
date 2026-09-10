import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  asLink = false,
  href,
  target,
  rel,
  download,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs sm:text-sm',
    lg: 'px-8 py-4 text-xs sm:text-sm',
  }[size];

  const variantStyles = {
    primary:
      'bg-white text-black font-semibold uppercase tracking-wider hover:bg-zinc-100 hover:shadow-lg hover:shadow-white/10 active:scale-[0.97]',
    secondary:
      'bg-white/10 text-white font-medium hover:bg-white/20 border border-white/10 hover:border-white/25 active:scale-[0.97]',
    outline:
      'border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 active:scale-[0.97]',
    ghost:
      'text-zinc-400 hover:text-white hover:bg-white/5 active:scale-[0.97]',
  }[variant];

  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none hover:-translate-y-0.5 active:translate-y-0';

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={combinedClasses}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
