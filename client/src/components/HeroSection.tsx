import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import resumeData from '@/data/resumeData';

export default function HeroSection() {
  const { name, title, summary } = resumeData.personalInfo;
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll for manual parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate parallax values
  const yOffset = scrollY * 0.5; // Move at half the scroll speed
  const opacity = 1 - Math.min(1, scrollY / 500); // Fade out gradually as user scrolls
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      <motion.div 
        className="container mx-auto px-4 py-16 text-center"
        style={{ 
          transform: `translateY(${yOffset}px)`,
          opacity 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Image */}
        <div className="inline-block mb-6 p-1 rounded-full bg-gradient-to-r from-primary to-blue-400">
          {/* Using a placeholder avatar, can be replaced with actual photo later */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center text-4xl text-white font-bold">
            {name.split(' ').map(part => part[0]).join('')}
          </div>
        </div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter mb-4 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {name}
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl font-medium text-primary mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {summary}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a href="#contact" className="px-8 py-3 bg-primary text-white font-medium rounded-lg transition-all duration-300 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none">
            Contact Me
          </a>
          <a href="#projects" className="px-8 py-3 bg-transparent border border-primary text-primary font-medium rounded-lg transition-all duration-300 hover:bg-primary/10 focus:ring-4 focus:ring-blue-300 focus:outline-none">
            View Projects
          </a>
        </motion.div>
        
        {/* Social Media Links */}
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="GitHub">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href={`mailto:${resumeData.personalInfo.email}`} className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="Email">
            <i className="fas fa-envelope text-2xl"></i>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}