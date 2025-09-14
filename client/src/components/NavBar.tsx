import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for navbar background with smoother transition
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Find the current active section
      const sections = document.querySelectorAll('section[id]');
      let found = false;
      
      Array.from(sections).reverse().forEach(section => {
        if (!found) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).clientHeight;
          
          if (window.scrollY >= sectionTop - 200) {
            setActiveSection(section.id);
            found = true;
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-30 transition-all duration-500 will-change-transform",
      scrolled ? "backdrop-blur-md bg-darkBg/80 shadow-lg py-2" : "bg-transparent py-4"
    )}
    style={{
      transition: 'background-color 0.5s ease-out, padding 0.3s ease-out, backdrop-filter 0.5s ease-out, box-shadow 0.5s ease-out'
    }}
    >
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="text-2xl font-bold font-montserrat tracking-wide text-primary">
          Jamal Drenthe
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'} text-xl`}></i>
        </button>

        {/* Navigation Links */}
        <div 
          className={cn(
            "md:flex flex-col md:flex-row w-full md:w-auto mt-3 md:mt-0 space-y-2 md:space-y-0 md:space-x-6",
            isMenuOpen ? "flex" : "hidden"
          )}
        >
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' }
          ].map(item => (
            <a 
              key={item.id}
              href={`/${item.id === 'home' ? '' : item.id}`}
              asChild
              className={cn(
                "navbar-link py-1 px-2 transition-colors duration-300 hover:text-primary",
                activeSection === item.id ? "text-primary font-semibold" : "text-white"
              )}
              onClick={closeMenu}
            >
              <Link href={item.id === 'home' ? '/' : `/${item.id}`}>
                {item.label}
              </Link>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
