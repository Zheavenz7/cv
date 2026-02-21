import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const circumference = 2 * Math.PI * 18;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] text-gray-300 rounded-full shadow-lg z-50 hover:bg-white/[0.1] hover:text-primary hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 focus:outline-none group"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.3, y: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          whileHover={{ scale: 1.12, y: -4 }}
          whileTap={{ scale: 0.85 }}
          aria-label="Scroll to top"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray={circumference} strokeDashoffset={circumference * (1 - scrollPercent)} className="text-primary/40 transition-all duration-150" strokeLinecap="round" />
          </svg>
          <motion.i 
            className="fas fa-arrow-up text-sm relative z-10"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.i>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
