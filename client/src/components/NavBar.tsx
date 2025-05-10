import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "backdrop-blur-md bg-darkBg/80 shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo/Name */}
        <a href="#home" className="text-2xl font-bold font-montserrat tracking-wide text-primary">
          Jamal Drenthe
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-lightText focus:outline-none"
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
          <a href="#home" className="navbar-link py-1 px-2 transition-colors duration-300 hover:text-primary active">Home</a>
          <a href="#about" className="navbar-link py-1 px-2 transition-colors duration-300 hover:text-primary">About</a>
          <a href="#skills" className="navbar-link py-1 px-2 transition-colors duration-300 hover:text-primary">Skills</a>
          <a href="#experience" className="navbar-link py-1 px-2 transition-colors duration-300 hover:text-primary">Experience</a>
          <a href="#projects" className="navbar-link py-1 px-2 transition-colors duration-300 hover:text-primary">Projects</a>
          <a href="#contact" className="navbar-link py-1 px-2 transition-colors duration-300 hover:text-primary">Contact</a>
        </div>
      </div>
    </nav>
  );
}
