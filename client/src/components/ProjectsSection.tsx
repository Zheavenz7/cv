import { useRef } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '@/hooks/useOnScreen';
import resumeData from '@/data/resumeData';
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
  "WoningVrij": wvLogo,
  "DJOBBA": djobbaLogo
};

export default function ProjectsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  
  const { projects } = resumeData;
  
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-16 relative overflow-hidden">
          <span className="relative z-10 inline-block px-4 py-2 after:absolute after:w-full after:h-1 after:bg-primary after:bottom-0 after:left-0">
            {t('projects.title')}
          </span>
        </h2>
        
        <div 
          ref={sectionRef}
          className={`section-content grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'visible' : ''}`}
        >
          {projects.map((project, index) => {
            const logo = projectLogos[project.title] || projectLogos[Object.keys(projectLogos).find(key => project.title.includes(key)) || ""];
            
            return (
              <motion.div 
                key={index}
                className="bg-darkBgAlt/40 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
                initial={{ y: 50, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden relative flex items-center justify-center bg-black/20">
                  {logo ? (
                    <div className="w-32 h-32 rounded-full border-4 border-primary/20 overflow-hidden bg-white flex items-center justify-center p-2 group-hover:border-primary/50 transition-colors duration-300">
                      <img 
                        src={logo} 
                        alt={`${project.title} logo`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/20">
                      <i className="fas fa-project-diagram text-6xl"></i>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-darkBg rounded-full hover:bg-primary hover:text-white transition-colors">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                    {project.sourceLink && (
                      <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-darkBg rounded-full hover:bg-primary hover:text-white transition-colors">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm h-20 overflow-y-auto">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-primary/10 text-primary rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
