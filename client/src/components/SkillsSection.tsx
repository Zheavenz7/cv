import { useRef } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '@/hooks/useOnScreen';
import resumeData from '@/data/resumeData';
import { cn } from '@/lib/utils';

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  
  const { skillCategories } = resumeData;
  
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-16 relative overflow-hidden">
          <span className="relative z-10 inline-block px-4 py-2 after:absolute after:w-full after:h-1 after:bg-primary after:bottom-0 after:left-0">
            Vaardigheden & Tech Stack
          </span>
        </h2>
        
        <div 
          ref={sectionRef}
          className={`section-content grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible ? 'visible' : ''}`}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="bg-darkBg/60 backdrop-blur-sm rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2"
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <i className={`fas ${category.icon} text-xl text-primary mr-3`}></i>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-green-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
