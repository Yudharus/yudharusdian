import React from 'react';
import { EXPERIENCES } from '../../data/portfolioData';
import { SectionHeader } from '../atoms/SectionHeader';
import { ExperienceCard } from '../molecules/ExperienceCard';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto z-10 reveal-fade-up">
      {/* Header */}
      <SectionHeader
        tag="Career History"
        title="Experience"
        subtitle="Track record of engineering robust web and mobile applications across capital markets, banking, and enterprise systems."
      />

      {/* Experience Timeline */}
      <div className="space-y-8 sm:space-y-10">
        {EXPERIENCES.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </div>
    </section>
  );
};
