import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { TimeClock } from '../molecules/TimeClock';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12 py-4 sm:py-5 flex items-center justify-between ${
        scrolled
          ? 'bg-[#111113]/85 backdrop-blur-md border-b border-white/5 py-3.5 sm:py-4 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      {/* Brand */}
      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href="#"
          className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/90 hover:text-white transition-colors flex items-center gap-2"
        >
          {/* Mobile stacked brand */}
          <span className="sm:hidden flex flex-col text-[10px] font-black tracking-widest leading-[1.15] text-white">
            <span>MOCH</span>
            <span>YUDHA</span>
            <span>RUSDIAN</span>
          </span>
          {/* Desktop single line brand */}
          <span className="hidden sm:inline font-bold">{PERSONAL_INFO.name}</span>
        </a>
      </div>

      {/* Local Time Clock (GMT+7) */}
      <div className="hidden md:block">
        <TimeClock />
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 text-xs font-mono uppercase tracking-wider sm:tracking-widest text-zinc-400">
        <button
          onClick={() => scrollTo('projects')}
          className="hover:text-white transition-colors cursor-pointer py-1"
        >
          Work
        </button>
        <button
          onClick={() => scrollTo('about')}
          className="hover:text-white transition-colors cursor-pointer py-1"
        >
          About
        </button>
        <button
          onClick={() => scrollTo('resume')}
          className="hover:text-white transition-colors cursor-pointer py-1"
        >
          Resume
        </button>
        <button
          onClick={() => scrollTo('contact')}
          className="hover:text-white transition-colors cursor-pointer py-1"
        >
          Contact
        </button>
      </nav>
    </header>
  );
};
