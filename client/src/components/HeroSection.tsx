import { motion } from 'framer-motion';
import { useEffect, useState, useRef, createContext, useContext } from 'react';
import { throttle } from '@/lib/utils';
import resumeData from '@/data/resumeData';
import { Link } from 'wouter';
import profileImg from '@/assets/images/profile.jpg';
import { useTranslation } from 'react-i18next';

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

function TerminalText({ text, delay = 0, speed = 40 }: { text: string; delay?: number; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(false);
    
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      <span className="text-primary/60">{'> '}</span>
      {displayedText}
      <span 
        className={`inline-block w-[3px] h-[0.85em] bg-primary ml-0.5 align-middle ${
          showCursor ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-100`}
      />
    </span>
  );
}

export default function HeroSection() {
  const { t } = useTranslation();
  const mousePosition = useMousePosition();
  const { name } = resumeData.personalInfo;
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
        className="hero-gradient-overlay"
        style={{
          opacity: Math.min(1, scrollY / 300),
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(30,64,175,0.2) 0%, rgba(30,41,59,0) 60%), linear-gradient(to bottom, rgba(15,23,42,0) 0%, rgba(15,23,42,0.7) 100%)`
        }}
      />
      
      {/* Main content with parallax effect */}
      <motion.div 
        className="container relative mx-auto px-4 py-16 text-center z-20 will-change-transform hero-parallax-content"
        style={{ 
          transform: `translateY(${yOffset}px) scale(${scale})`,
          opacity
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Profile Image */}
        <motion.div 
          className="inline-block mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          <div className="relative">
            <div className="w-36 h-36 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-white/[0.1] shadow-2xl shadow-primary/10">
              <img 
                src={profileImg} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1.5 -right-1.5 glow-dot"></div>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter mb-2 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {name}
        </motion.h1>
        
        <motion.p 
          className="text-xs md:text-sm font-medium text-primary/70 uppercase tracking-[0.2em] mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          {t('hero.title')}
        </motion.p>

        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-5 max-w-3xl mx-auto font-mono leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <TerminalText text={t('hero.subtitle')} delay={800} speed={40} />
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg max-w-xl mx-auto mb-10 text-gray-400 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {t('hero.description')}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/contact" className="btn-glass btn-primary px-8">
            {t('hero.contact')}
          </Link>
          <Link href="/projects" className="btn-glass btn-outline px-8">
            {t('hero.cta')}
          </Link>
        </motion.div>
        
        {/* Social Media Links */}
        <motion.div 
          className="flex justify-center gap-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {[
            { href: "https://www.linkedin.com/in/jamaldrenthe/", icon: "fab fa-linkedin", label: "LinkedIn" },
            { href: "#", icon: "fab fa-github", label: "GitHub" },
            { href: `mailto:${resumeData.personalInfo.email}`, icon: "fas fa-envelope", label: "Email" }
          ].map((social) => (
            <a 
              key={social.label}
              href={social.href} 
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 hover:bg-white/[0.08] transition-all duration-200" 
              aria-label={social.label}
            >
              <i className={`${social.icon} text-base`}></i>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}