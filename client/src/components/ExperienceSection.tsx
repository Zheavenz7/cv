import { useRef } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '@/hooks/useOnScreen';
import resumeData from '@/data/resumeData';

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  
  const { experiences } = resumeData;
  
  return (
    <section id="experience" className="py-16 bg-darkBgAlt/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-16 relative overflow-hidden">
          <span className="relative z-10 inline-block px-4 py-2 after:absolute after:w-full after:h-1 after:bg-primary after:bottom-0 after:left-0">
            Ervaring
          </span>
        </h2>
        
        <div 
          ref={sectionRef}
          className={`section-content max-w-4xl mx-auto ${isVisible ? 'visible' : ''}`}
        >
          <div className="relative border-l-2 border-primary pl-6 pb-10">
            <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="mb-12 transform transition-all duration-500 hover:translate-x-2"
                initial={{ x: -50, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                  <div className="flex flex-col items-end">
                    <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full mt-1">
                      {exp.period}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">{exp.company === 'Pearson & Partners' || exp.company === 'Belnino' || exp.company === 'Vinted' || exp.company === 'Hot Networkz BV' || exp.company === 'Essent' ? 'Fulltime' : exp.company === 'VodafoneZiggo' || exp.company === 'Samsung Electronics' || exp.company === 'Eneco' || exp.company === 'Temper' || exp.company === 'YoungOnes' ? 'Freelance' : 'Parttime'}</span>
                  </div>
                </div>
                <h4 className="text-lg font-medium mb-2">{exp.company}</h4>
                <p className="text-gray-300 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-darkBg text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
