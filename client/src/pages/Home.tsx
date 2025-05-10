import { useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  const sections = useRef<HTMLElement[]>([]);

  const highlightNavLinks = () => {
    const scrollPosition = window.scrollY;
    
    // Find the current visible section
    let currentSection = '';
    
    sections.current.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop - 200) {
        currentSection = section.id;
      }
    });
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach((link) => {
      link.classList.remove('active');
      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (href && href.substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  };

  useEffect(() => {
    // Collect all sections
    sections.current = Array.from(document.querySelectorAll('section[id]'));
    
    // Add scroll event listener for nav highlighting
    window.addEventListener('scroll', highlightNavLinks);
    
    // Initial call
    highlightNavLinks();
    
    return () => {
      window.removeEventListener('scroll', highlightNavLinks);
    };
  }, []);

  return (
    <div className="relative z-10 bg-darkBg text-lightText">
      <ParticleBackground />
      
      <NavBar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
