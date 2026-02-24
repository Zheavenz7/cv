import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

import jdLogo from '@/assets/logos/jd-logo.png';

export default function NavBar({ onSearchOpen }: { onSearchOpen?: () => void }) {
  const { t, i18n } = useTranslation();
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'nl' ? 'en' : 'nl';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    if (isBlackAndWhite) {
      document.body.classList.add('black-and-white');
    } else {
      document.body.classList.remove('black-and-white');
    }
  }, [isBlackAndWhite]);

  const toggleTheme = () => setIsBlackAndWhite(!isBlackAndWhite);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-30 transition-all duration-500 will-change-transform",
      scrolled 
        ? "backdrop-blur-2xl bg-darkBg/60 shadow-lg shadow-black/10 border-b border-white/[0.06] py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group transition-all duration-300">
          <div className="relative w-10 h-10 md:w-11 md:h-11 overflow-hidden rounded-xl bg-white/[0.06] border border-white/[0.1] group-hover:border-primary/40 group-hover:bg-white/[0.1] transition-all duration-300">
            <img 
              src={jdLogo} 
              alt="JD Logo" 
              className="w-full h-full object-contain filter brightness-100 contrast-125"
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white/80 hover:text-white focus:outline-none rounded-xl p-2.5 hover:bg-white/[0.06] transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'} text-lg`}></i>
        </button>

        {/* Navigation Links */}
        <div 
          className={cn(
            "md:flex items-center gap-1",
            isMenuOpen 
              ? "flex flex-col absolute top-full left-4 right-4 mt-2 glass-strong rounded-2xl p-3 space-y-1 md:static md:bg-transparent md:backdrop-blur-none md:border-0 md:shadow-none md:p-0 md:space-y-0 md:rounded-none" 
              : "hidden md:flex"
          )}
        >
          {[
            { id: 'home', label: t('nav.home') },
            { id: 'about', label: t('nav.about') },
            { id: 'services', label: 'Diensten' },
            { id: 'cv', label: 'CV' },
            { id: 'projects', label: t('nav.projects') },
            { id: 'contact', label: t('nav.contact') }
          ].map(item => (
            <Link 
              key={item.id}
              href={item.id === 'home' ? '/' : `/${item.id}`}
              className={cn(
                "py-2 px-4 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer",
                location === (item.id === 'home' ? '/' : `/${item.id}`) 
                  ? "text-primary bg-primary/10" 
                  : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
              )}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-1 md:ml-2 md:pl-2 md:border-l md:border-white/[0.08]">
            {onSearchOpen && (
              <button
                onClick={onSearchOpen}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200 text-gray-400 hover:text-white"
                aria-label="Search"
              >
                <i className="fas fa-search text-xs"></i>
                <span className="hidden lg:inline text-xs text-gray-500">Zoeken</span>
                <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[9px] text-gray-600 font-mono ml-1">
                  ⌘K
                </kbd>
              </button>
            )}

            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] transition-all duration-200 text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider"
              aria-label="Toggle language"
            >
              {i18n.language === 'nl' ? 'EN' : 'NL'}
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-white/[0.06] transition-all duration-200 text-gray-400 hover:text-white"
              aria-label="Toggle theme"
            >
              {isBlackAndWhite ? (
                <i className="fas fa-palette text-sm"></i>
              ) : (
                <i className="fas fa-ghost text-sm"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-blue-400 to-primary"
        style={{ width: `${scrollProgress * 100}%` }}
        transition={{ duration: 0.05 }}
      />
    </nav>
  );
}
