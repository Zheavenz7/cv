import { useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useOnScreen from '@/hooks/useOnScreen';
import resumeData from '@/data/resumeData';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

// Logo imports
import vvcLogo from '@/assets/logos/vvc.png';
import iqLogo from '@/assets/logos/investbotiq.png';
import spontivaLogo from '@/assets/logos/spontiva.png';
import wvLogo from '@/assets/logos/woningvrij.png';
import djobbaLogo from '@/assets/logos/djobba.png';

const projectLogos: Record<string, string> = {
  "VVC": vvcLogo,
  "Investbotiq": iqLogo,
  "Spontiva": spontivaLogo,
  "WoningVry": wvLogo,
  "DJOBBA": djobbaLogo
};

function TiltCard({ children, className, delay, isVisible }: { children: React.ReactNode; className?: string; delay: number; isVisible: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    // Glare effect
    const glare = el.querySelector('.card-glare') as HTMLElement;
    if (glare) {
      glare.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,255,255,0.08) 0%, transparent 60%)`;
      glare.style.opacity = '1';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    const glare = el.querySelector('.card-glare') as HTMLElement;
    if (glare) glare.style.opacity = '0';
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ y: 40, opacity: 0, rotateX: 8 }}
      animate={isVisible ? { y: 0, opacity: 1, rotateX: 0 } : { y: 40, opacity: 0, rotateX: 8 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out' }}
    >
      <div className="card-glare absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300 z-10" />
      {children}
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  const [isOpen, setIsOpen] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  const handleToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setCardsVisible(true), 50);
    } else {
      setCardsVisible(false);
      setIsOpen(false);
    }
  };
  
  const { projects } = resumeData;

  const teaser = t('projectsSection.viewCase');
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {t('projects.title')}
          <span className="section-heading-line" />
        </motion.h2>

        {/* Collapsed toggle */}
        <div className="max-w-6xl mx-auto mt-10">
          <motion.button
            onClick={handleToggle}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 rounded-2xl glass border border-white/[0.08] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center text-primary">
                <i className="fas fa-project-diagram text-sm"></i>
              </div>
              <div className="text-left">
                <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{projects.length} {t('projects.title')}</span>
                <p className="text-xs text-white/50">{t('projectsSection.clickToView')}</p>
              </div>
            </div>
            <motion.i
              className="fas fa-chevron-down text-sm text-white/40 group-hover:text-primary transition-colors"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div 
                ref={sectionRef}
                className={`section-content grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mt-6 ${isVisible ? 'visible' : ''}`}
              >
                {projects.map((project, index) => {
                  const logo = projectLogos[project.title] || projectLogos[Object.keys(projectLogos).find(key => project.title.includes(key)) || ""];
                  
                  return (
                    <TiltCard 
                      key={index}
                      className="relative glass rounded-2xl overflow-hidden group cursor-default"
                      delay={index * 0.06}
                      isVisible={cardsVisible}
                    >
                      <div className="h-44 overflow-hidden relative flex items-center justify-center bg-white/[0.02]">
                        {logo ? (
                          <motion.div 
                            className="w-24 h-24 rounded-2xl overflow-hidden bg-white/90 flex items-center justify-center p-3 shadow-lg"
                            whileHover={{ scale: 1.12, rotate: 2 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                          >
                            <img 
                              src={logo} 
                              alt={`${project.title} logo`} 
                              className="max-w-full max-h-full object-contain"
                            />
                          </motion.div>
                        ) : (
                          <motion.div 
                            className="w-24 h-24 rounded-2xl overflow-hidden bg-white/90 flex items-center justify-center p-3 shadow-lg shadow-primary/15 ring-4 ring-white/10"
                            whileHover={{ scale: 1.12, rotate: -2 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                          >
                            <img src="/jd-logo.png" alt={`${project.title} logo`} className="max-w-full max-h-full object-contain" />
                          </motion.div>
                        )}
                        {/* Hover overlay with links */}
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-3">
                          {project.demoLink && project.demoLink !== '#' && (
                            <motion.a 
                              href={project.demoLink} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              aria-label={`Visit ${project.title}`} 
                              className="w-11 h-11 rounded-xl bg-white/[0.1] border border-white/[0.2] flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200"
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <i className="fas fa-external-link-alt text-sm"></i>
                            </motion.a>
                          )}
                          {project.sourceLink && project.sourceLink !== '#' && (
                            <motion.a 
                              href={project.sourceLink} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              aria-label={`Source code for ${project.title}`} 
                              className="w-11 h-11 rounded-xl bg-white/[0.1] border border-white/[0.2] flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200"
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <i className="fab fa-github text-sm"></i>
                            </motion.a>
                          )}
                        </div>
                      </div>
                      <div className="p-5 relative z-20 space-y-3">
                        <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                          {teaser}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <motion.span 
                                key={techIndex} 
                                className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-primary/[0.06] text-primary/70 rounded-md border border-primary/[0.1] hover:bg-primary/[0.15] hover:text-primary transition-all duration-200"
                                whileHover={{ scale: 1.08, y: -1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                          <Link
                            to="/projects"
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-primary/15 text-primary border border-primary/30 hover:bg-primary hover:text-black transition-all"
                          >
                            {t('projectsSection.moreInfo')} <i className="fas fa-arrow-right text-[10px]" />
                          </Link>
                        </div>
                      </div>
                    </TiltCard>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
