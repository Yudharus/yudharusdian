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
  // Initialize Lenis smooth scroll on desktop only (touch screens use fast native momentum scroll)
  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 1024);

    // On mobile devices, native touch momentum scrolling is superior and never gets stuck
    if (isTouchDevice) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      syncTouch: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
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
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
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
    <div className="relative min-h-screen bg-[#111113] text-[#f4f4f0] selection:bg-white selection:text-black overflow-x-clip font-sans">
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
