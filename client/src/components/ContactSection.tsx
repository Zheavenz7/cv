import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '@/hooks/useOnScreen';
import resumeData from '@/data/resumeData';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  const { toast } = useToast();
  
  const { location, email } = resumeData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: t('contact.form.send'),
      description: t('contact.form.placeholders.message'),
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
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
          <motion.p 
            className="text-gray-500 text-center max-w-lg mx-auto mb-14 text-sm"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('contact.description')}
          </motion.p>
          
          <div className="grid md:grid-cols-5 gap-5 max-w-4xl mx-auto">
            <div className="md:col-span-2 space-y-4">
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
                  ></motion.i>Locatie
                </h3>
                <p className="text-sm text-gray-400">{location}</p>
                <p className="text-xs text-gray-500 mt-1">Beschikbaar voor werk op afstand</p>
              </motion.div>
              
              <motion.div 
                className="glass rounded-2xl p-5 group cursor-default hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                initial={{ x: -30, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -3 }}
              >
                <h3 className="text-sm font-semibold mb-2 flex items-center gap-2 text-white">
                  <i className="fas fa-envelope text-primary text-xs"></i>Email
                </h3>
                <motion.a 
                  href={`mailto:${email}`} 
                  className="text-sm text-primary/80 hover:text-primary transition-colors inline-block"
                  whileHover={{ x: 4 }}
                >
                  {email}
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="glass rounded-2xl p-5 group cursor-default hover:bg-white/[0.07] hover:border-white/[0.15] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                initial={{ x: -30, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -3 }}
              >
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2 text-white">
                  <i className="fas fa-share-alt text-primary text-xs"></i>Sociale Media
                </h3>
                <div className="flex gap-2">
                  {[
                    { href: "https://www.linkedin.com/in/jamaldrenthe/", icon: "fab fa-linkedin", label: "LinkedIn" },
                    { href: "https://github.com/", icon: "fab fa-github", label: "GitHub" }
                  ].map((social, i) => (
                    <motion.a 
                      key={social.label}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 hover:bg-primary/[0.06] transition-all duration-200" 
                      aria-label={social.label}
                      whileHover={{ scale: 1.15, y: -3, rotate: i % 2 === 0 ? 5 : -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className={`${social.icon} text-sm`}></i>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          
            <motion.div 
              className="md:col-span-3"
              initial={{ y: 30, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="glass-strong rounded-2xl p-6">
                <h3 className="text-base font-semibold mb-5 text-white">{t('contact.subtitle')}</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block mb-1.5 text-xs font-medium text-gray-400">{t('contact.form.name')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-input" 
                      placeholder={t('contact.form.placeholders.name')} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1.5 text-xs font-medium text-gray-400">{t('contact.form.email')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="glass-input" 
                      placeholder={t('contact.form.placeholders.email')} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-1.5 text-xs font-medium text-gray-400">{t('contact.form.subject')}</label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="glass-input" 
                      placeholder={t('contact.form.placeholders.subject')} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1.5 text-xs font-medium text-gray-400">{t('contact.form.message')}</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="glass-input resize-none" 
                      placeholder={t('contact.form.placeholders.message')} 
                      required
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className="w-full btn-glass btn-primary"
                    whileHover={{ scale: 1.02, y: -2, boxShadow: '0 8px 30px rgba(30,64,175,0.3)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t('contact.form.send')}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
