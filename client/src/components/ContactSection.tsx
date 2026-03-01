import { useRef } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '@/hooks/useOnScreen';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {t('contact.title')}
          <span className="section-heading-line" />
        </motion.h2>
        
        <div 
          ref={sectionRef}
          className={`section-content ${isVisible ? 'visible' : ''}`}
        >
          <div className="max-w-md mx-auto space-y-4">
            <motion.div 
              className="glass rounded-2xl p-5 group cursor-default hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              initial={{ x: -30, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -3 }}
            >
              <h3 className="text-sm font-semibold mb-2 flex items-center gap-2 text-white">
                <motion.i 
                  className="fas fa-map-marker-alt text-primary text-xs"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                ></motion.i>{t('contactSection.location')}
              </h3>
              <p className="text-sm text-gray-400">{t('contactSection.locationCity')}</p>
              <p className="text-xs text-gray-500 mt-1">{t('contactSection.remote')}</p>
            </motion.div>
            
            <motion.div 
              className="glass rounded-2xl p-5 group cursor-default hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              initial={{ x: -30, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -3 }}
            >
              <h3 className="text-sm font-semibold mb-2 flex items-center gap-2 text-white">
                <i className="fas fa-envelope text-primary text-xs"></i>{t('contactSection.email')}
              </h3>
              <motion.a 
                href="mailto:info@jamaldrenthe.com" 
                className="text-sm text-primary/80 hover:text-primary transition-colors inline-block"
                whileHover={{ x: 4 }}
              >
                info@jamaldrenthe.com
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
