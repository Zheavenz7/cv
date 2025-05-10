import { useRef } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '@/hooks/useOnScreen';
import resumeData from '@/data/resumeData';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  
  const { summary, location, email, languages, softSkills } = resumeData.personalInfo;
  
  return (
    <section id="about" className="py-16 bg-darkBgAlt/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-16 relative overflow-hidden">
          <span className="relative z-10 inline-block px-4 py-2 after:absolute after:w-full after:h-1 after:bg-primary after:bottom-0 after:left-0">
            About Me
          </span>
        </h2>
        
        <div 
          ref={sectionRef}
          className={`section-content grid md:grid-cols-2 gap-8 items-center ${isVisible ? 'visible' : ''}`}
        >
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg">
              I'm based in {location}, and am available for remote work worldwide. 
              As a Full Stack Developer, I specialize in delivering fully functional apps, 
              dashboards, automation flows, APIs, payment systems, and third-party service integrations.
            </p>
            <p className="text-lg">
              My expertise extends from responsive UI to backends, real-time data handling, 
              audio processing, and 3D visualizations. I'm passionate about creating seamless 
              user experiences backed by robust, scalable architectures.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {softSkills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ y: 50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-darkBg/80 rounded-xl p-6 backdrop-blur-md shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                <i className="fas fa-user-graduate mr-2"></i>Professional Summary
              </h3>
              <p>{summary}</p>
            </div>
            
            <div className="bg-darkBg/80 rounded-xl p-6 backdrop-blur-md shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                <i className="fas fa-language mr-2"></i>Languages
              </h3>
              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{lang.language}</span>
                    <span className="text-gray-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-darkBg/80 rounded-xl p-6 backdrop-blur-md shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                <i className="fas fa-map-marker-alt mr-2"></i>Location
              </h3>
              <p>{location} | Remote</p>
              <p className="mt-2">
                <i className="fas fa-envelope mr-2"></i>{email}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
