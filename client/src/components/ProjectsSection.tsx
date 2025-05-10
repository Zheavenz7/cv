import { useRef } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '@/hooks/useOnScreen';
import resumeData from '@/data/resumeData';

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  
  const { projects } = resumeData;
  
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-16 relative overflow-hidden">
          <span className="relative z-10 inline-block px-4 py-2 after:absolute after:w-full after:h-1 after:bg-primary after:bottom-0 after:left-0">
            Selected Projects
          </span>
        </h2>
        
        <div 
          ref={sectionRef}
          className={`section-content grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'visible' : ''}`}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card bg-darkBg/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center">
                <i className={`${getProjectIcon(project.title)} text-5xl text-blue-300 opacity-70`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.demoLink && (
                    <a href={project.demoLink} className="text-primary hover:text-primary-dark transition-colors">
                      <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                  )}
                  {project.sourceLink && (
                    <a href={project.sourceLink} className="text-primary hover:text-primary-dark transition-colors">
                      <i className="fab fa-github mr-1"></i> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to get appropriate icon based on project title
function getProjectIcon(title: string): string {
  if (title.toLowerCase().includes('financial') || title.toLowerCase().includes('dashboard')) {
    return 'fas fa-chart-line';
  } else if (title.toLowerCase().includes('mobile') || title.toLowerCase().includes('app')) {
    return 'fas fa-mobile-alt';
  } else if (title.toLowerCase().includes('audio')) {
    return 'fas fa-volume-up';
  } else if (title.toLowerCase().includes('commerce') || title.toLowerCase().includes('checkout')) {
    return 'fas fa-shopping-cart';
  } else if (title.toLowerCase().includes('3d') || title.toLowerCase().includes('web')) {
    return 'fas fa-cube';
  } else if (title.toLowerCase().includes('data') || title.toLowerCase().includes('visualization')) {
    return 'fas fa-database';
  } else {
    return 'fas fa-code';
  }
}
