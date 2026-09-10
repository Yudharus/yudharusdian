import { useEffect } from 'react';
import Lenis from 'lenis';
import {
  WebGLCanvas,
  Navigation,
  HeroSection,
  ProjectsSection,
  AboutSection,
  ResumeSection,
  FooterSection,
} from './components';

export function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Lag-free IntersectionObserver for smooth scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleExploreClick = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#111113] text-[#f4f4f0] selection:bg-white selection:text-black overflow-x-hidden font-sans">
      {/* Optimized Three.js WebGL Interactive Background */}
      <WebGLCanvas />

      {/* Main Navigation Header */}
      <Navigation />

      {/* Page Content Layers */}
      <main className="relative z-10">
        <HeroSection onExploreClick={handleExploreClick} />
        <ProjectsSection />
        <AboutSection />
        <ResumeSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
