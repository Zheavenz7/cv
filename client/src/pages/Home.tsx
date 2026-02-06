import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import InteractiveBackground from "@/components/InteractiveBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  useEffect(() => {
    document.title = 'Jamal Drenthe | Portfolio';
  }, []);

  return (
    <div className="relative min-h-screen bg-darkBg text-white overflow-x-hidden selection:bg-primary selection:text-darkBg">
      <InteractiveBackground />
      <NavBar />
      <main className="relative z-10">
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
