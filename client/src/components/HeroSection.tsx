import { motion } from 'framer-motion';
import { useEffect, useState, useRef, createContext, useContext } from 'react';
import { throttle } from '@/lib/utils';
import resumeData from '@/data/resumeData';

// Create a context for mouse position
export const MouseContext = createContext<{x: number; y: number}>({ x: 0, y: 0 });

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
}

export default function HeroSection() {
  const mousePosition = useMousePosition();
  const { name, title, summary } = resumeData.personalInfo;
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Handle scroll for manual parallax effect - using throttle for better performance
  useEffect(() => {
    // Optimized scroll handler with throttling to improve performance
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 10);
    
    window.addEventListener('scroll', handleScroll);
    
    // Set initial value
    setScrollY(window.scrollY);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate parallax values with smoother transitions
  const yOffset = scrollY * 0.3; // Move at 30% of the scroll speed for smoother effect
  
  // Use a slower fade-out to ensure the text remains visible longer
  const opacity = Math.max(0, 1 - (scrollY / 1000)); // Much slower fade out (was 700)
  
  // Calculate scale effect - content gets slightly smaller as you scroll down
  const scale = Math.max(0.9, 1 - (scrollY / 3000));
  
  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden will-change-transform"
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          opacity: Math.min(1, scrollY / 300),
          background: `radial-gradient(
            circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
            rgba(30, 64, 175, 0.2) 0%,
            rgba(30, 41, 59, 0) 60%
          ),
          linear-gradient(to bottom, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.7) 100%)`,
          transition: 'background 0.2s ease-out'
        }}
      />
      
      {/* Main content with parallax effect */}
      <motion.div 
        className="container relative mx-auto px-4 py-16 text-center z-20 will-change-transform"
        style={{ 
          transform: `translateY(${yOffset}px) scale(${scale})`,
          opacity,
          transition: 'transform 0.15s ease-out, opacity 0.3s ease-out, scale 0.3s ease-out'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
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