import { useRef } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '@/hooks/useOnScreen';
import resumeData from '@/data/resumeData';
import { useTranslation } from 'react-i18next';

const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.97 },
  visible: (i: number) => ({
    y: 0, opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export default function AboutSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  
  const { summary, location, email, languages, softSkills } = resumeData.personalInfo;
  
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {t('about.title')}
          <span className="section-heading-line" />
        </motion.h2>
        
        <div 
          ref={sectionRef}
          className={`section-content grid md:grid-cols-2 gap-10 items-start mt-14 max-w-6xl mx-auto ${isVisible ? 'visible' : ''}`}
        >
          <motion.div 
            className="space-y-5"
            initial={{ x: -40, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.p 
              className="text-xl font-semibold text-white leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('about.subtitle')}
            </motion.p>
            <motion.p 
              className="text-base text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('about.description1')}
            </motion.p>
            <motion.p 
              className="text-base text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t('about.description2')}
            </motion.p>
            <div className="flex flex-wrap gap-2 pt-4">
              {softSkills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="glass-tag text-primary cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.06 }}
                  whileHover={{ scale: 1.08, y: -2, boxShadow: '0 4px 20px rgba(30,64,175,0.15)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <div className="space-y-4">
            <motion.div 
              className="glass rounded-2xl p-6 group cursor-default hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-base font-semibold mb-3 text-primary flex items-center gap-2">
                <motion.i 
                  className="fas fa-user-graduate text-sm"
                  whileHover={{ rotate: 12 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                ></motion.i>Professionele Samenvatting
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{summary}</p>
            </motion.div>
            
            <motion.div 
              className="glass rounded-2xl p-6 group cursor-default hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-base font-semibold mb-3 text-primary flex items-center gap-2">
                <motion.i 
                  className="fas fa-language text-sm"
                  whileHover={{ rotate: -12 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                ></motion.i>Talen
              </h3>
              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <motion.div 
                    key={index} 
                    className="flex justify-between items-center p-2 -mx-2 rounded-lg hover:bg-white/[0.04] transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-sm text-gray-300">{lang.language}</span>
                    <span className="text-xs text-gray-500 bg-white/[0.04] px-2 py-0.5 rounded-md">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="glass rounded-2xl p-6 group cursor-default hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-base font-semibold mb-3 text-primary flex items-center gap-2">
                <motion.i 
                  className="fas fa-map-marker-alt text-sm"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                ></motion.i>Locatie
              </h3>
              <p className="text-sm text-gray-300">{location} · Op afstand beschikbaar</p>
              <p className="mt-2 text-sm">
                <motion.a 
                  href={`mailto:${email}`} 
                  className="text-primary/80 hover:text-primary transition-colors inline-flex items-center gap-1.5"
                  whileHover={{ x: 4 }}
                >
                  <i className="fas fa-envelope text-xs"></i>{email}
                </motion.a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
