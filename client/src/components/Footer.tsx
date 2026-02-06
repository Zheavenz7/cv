import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-darkBgAlt/80 backdrop-blur-md text-center text-gray-300 border-t border-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-2 md:gap-6 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>&copy; {currentYear} Jamal Drenthe</p>
          <span className="hidden md:block text-primary">•</span>
          <p>{t('footer.rights')}</p>
          <span className="hidden md:block text-primary">•</span>
          <p className="text-sm">{t('footer.description')}</p>
        </motion.div>
        
        <motion.div 
          className="mt-4 flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-primary transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="#contact" aria-label="Contact" className="text-gray-400 hover:text-primary transition-colors">
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
