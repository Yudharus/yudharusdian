import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../../data/portfolioData';
import { SectionHeader } from '../atoms/SectionHeader';
import { SkillCard } from '../molecules/SkillCard';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto z-10 reveal-fade-up">
      {/* Section Header */}
      <SectionHeader
        tag="About"
        title="Biography"
        subtitle="Bridging modern web & mobile architectures, component-driven design systems, and fluid user experiences."
      />

      {/* Grid Layout: Photo & Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Portrait & Social Connect */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative group">
            {/* Ambient subtle glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/15 via-transparent to-white/5 blur-lg opacity-40 group-hover:opacity-70 transition duration-700 pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-900/90 shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-emerald-500/30">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-full aspect-[4/5] object-cover object-[center_20%] filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  {PERSONAL_INFO.name}
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 font-mono mt-0.5">
                  Frontend Engineer // Web, Mobile & Desktop
                </p>
              </div>
            </div>
          </div>

          {/* Social Quick Link */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-colors group"
            >
              <div>
                <div className="text-xs font-mono text-white font-medium">GitHub</div>
                <div className="text-[11px] text-zinc-400">@yudharus</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-colors group"
            >
              <div>
                <div className="text-xs font-mono text-white font-medium">LinkedIn</div>
                <div className="text-[11px] text-zinc-400">Professional Profile</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Column: Narrative & Technical Capabilities */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-5 text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
              Hello! I am Moch Yudha Rusdian, a Frontend Engineer with over 4 years of professional experience developing and maintaining scalable web, mobile, and desktop applications.
            </p>
            <p>
              My expertise centers on modern web and native technologies, with a strong focus on <span className="text-white font-medium">TypeScript</span>, <span className="text-white font-medium">React.js</span>, <span className="text-white font-medium">React Native</span>, <span className="text-white font-medium">Next.js</span>, and cross-platform desktop development with <span className="text-white font-medium">Tauri</span>. I have led engineering initiatives for high-frequency real-time interfaces, WebSocket architectures, and robust state management pipelines.
            </p>
            <p>
              I specialize in crafting component-driven design systems, optimizing rendering performance, and building responsive, accessible interfaces that deliver intuitive user experiences and maintainable, testable codebases.
            </p>
          </div>

          {/* Core Competencies Grid */}
          <div className="border-t border-white/10 pt-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Technical Capabilities & Stack</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <SkillCard key={cat.title} category={cat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
