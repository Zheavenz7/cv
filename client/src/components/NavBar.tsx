import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/data/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import jdLogo from '@/assets/logos/jd-logo.png';

interface NavItemProps {
  item: {
    id: string;
    label: string;
    href: string;
    children?: any[];
  };
  isMobile?: boolean;
  onClose?: () => void;
}

const NavLink = ({ item, isMobile = false, onClick }: { 
  item: { id: string; label: string; href: string }; 
  isMobile?: boolean; 
  onClick?: () => void;
}) => {
  const [location] = useLocation();
  const isActive = location === item.href || 
                  (location === '/' && item.href === '/') || 
                  (location.startsWith(item.href) && item.href !== '/');
  
  return (
    <Link 
      href={item.href} 
      className={cn(
        'block px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md',
        isActive 
          ? 'text-primary bg-primary/10 font-semibold' 
          : 'text-white/90 hover:text-white hover:bg-white/5',
        isMobile ? 'w-full text-left' : ''
      )}
      onClick={onClick}
    >
      {item.label}
    </Link>
  );
};

const DesktopDropdown = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const [location] = useLocation();
  const isActive = location.startsWith(item.href);

  return (
    <div 
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md",
          isActive || isOpen
            ? "text-primary bg-primary/10 font-semibold"
            : "text-white/90 hover:text-white hover:bg-white/5"
        )}
      >
        {item.label}
        <ChevronDown className={cn(
          "h-4 w-4 transition-transform duration-200",
          isOpen ? "rotate-180" : ""
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-2 min-w-[220px] z-50"
          >
            <div className="bg-gray-800/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2">
              <div className="space-y-1">
                {item.children?.map((child: any) => (
                  <Link
                    key={child.id}
                    href={child.href}
                    className="block px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavItem = ({ item, onClose }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  if (item.children) {
    return (
      <div className="w-full">
        <button 
          className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-md transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.label}
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="pl-4 mt-1 space-y-1 bg-white/5 rounded-md overflow-hidden"
            >
              {item.children.map((child) => (
                <NavLink 
                  key={child.id} 
                  item={child} 
                  isMobile 
                  onClick={onClose} 
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  
  return <NavLink item={item} isMobile onClick={onClose} />;
};

export default function NavBar({ onSearchOpen }: { onSearchOpen?: () => void }) {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);
  const [location] = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'nl' ? 'en' : 'nl';
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    setIsBlackAndWhite((prev) => !prev);
  };

  useEffect(() => {
    if (isBlackAndWhite) {
      document.body.classList.add('black-and-white');
    } else {
      document.body.classList.remove('black-and-white');
    }
  }, [isBlackAndWhite]);

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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-30 transition-all duration-500 will-change-transform",
        scrolled
          ? "backdrop-blur-2xl bg-darkBg/60 shadow-lg shadow-black/10 border-b border-white/[0.06] py-2"
          : "bg-transparent py-4"
      )}
    >
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
          {navigationItems.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.id} item={item} />
            ) : (
              <NavLink key={item.id} item={item} />
            )
          )}
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

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <MobileNavItem key={item.id} item={item} onClose={closeMenu} />
              ))}
              <button
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle language"
              >
                <i className="fas fa-globe"></i>
                <span className="text-sm font-medium">
                  {i18n.language === "nl"
                    ? "Switch to English"
                    : "Wissel naar Nederlands"}
                </span>
              </button>
              <button
                onClick={() => {
                  toggleTheme();
                  closeMenu();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {isBlackAndWhite ? (
                  <i className="fas fa-palette"></i>
                ) : (
                  <i className="fas fa-ghost"></i>
                )}
                <span className="text-sm font-medium">Thema wisselen</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-blue-400 to-primary"
        style={{ width: `${scrollProgress * 100}%` }}
        transition={{ duration: 0.05 }}
      />
    </nav>
  );
}
