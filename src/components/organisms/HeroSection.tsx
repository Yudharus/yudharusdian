import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Button } from '../atoms/Button';
import { ArrowDown } from 'lucide-react';

export interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto z-10">
      {/* Top Description Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
        <p className="text-xs font-mono text-zinc-400">
          Based in Indonesia — Crafting high-performance web & mobile applications and fluid digital experiences.
        </p>
      </div>

      {/* Main Content: 2-Column Grid with Headline and Right-Side Image */}
      <div className="my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Monumental Headline */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md shadow-lg shadow-black/20 hover:border-emerald-500/40 transition-colors">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold tracking-tight text-white">
              Moch Yudha Rusdian
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05] uppercase break-words">
            <span>Frontend</span>
            <br />
            <span className="relative inline-block">
              Engineer
              <span className="absolute -bottom-1.5 sm:-bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-white/50 to-transparent" />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-xl font-light leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-4">
            <Button variant="primary" size="lg" onClick={onExploreClick}>
              Explore Projects
            </Button>
          </div>
        </div>

        {/* Right Column: Interactive Portrait Card (1.jpeg) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-md animate-float-gentle">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-white/5 to-emerald-500/10 blur-xl opacity-50 group-hover:opacity-80 transition duration-700 pointer-events-none" />

            {/* Frame Container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-900/90 shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-emerald-500/40">
              <img
                src="/1.jpeg"
                alt="Moch Yudha Rusdian in workstation"
                className="w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="eager"
              />

              {/* Bottom Glass Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-6 pointer-events-none">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    {/* <span className="text-[11px] sm:text-xs font-mono text-emerald-400 uppercase tracking-widest block">
                      Workstation & Lab
                    </span> */}
                    <p className="text-xs sm:text-sm text-emerald-400 font-mono mt-0.5">
                      Jakarta, INDONESIA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar without company names or user counts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
        <div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">4+ Years</div>
          <div className="text-[11px] sm:text-xs text-zinc-400 mt-1 uppercase tracking-wider font-mono">
            Professional Experience
          </div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-mono leading-tight">
            Web, Mobile & Desktop
          </div>
          <div className="text-[11px] sm:text-xs text-zinc-400 mt-1 uppercase tracking-wider font-mono">
            Scalable Applications
          </div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">Architecture</div>
          <div className="text-[11px] sm:text-xs text-zinc-400 mt-1 uppercase tracking-wider font-mono">
            Clean Code & Performance
          </div>
        </div>
        <div className="flex items-end justify-between md:justify-end">
          <button
            onClick={onExploreClick}
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-widest cursor-pointer group"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 animate-bounce transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
