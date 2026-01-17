import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { personalInfo } from '../constants/portfolio';

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      
      // If not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/' + href);
        // Wait for navigation, then scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 bg-white border-b border-[rgba(50,64,79,0.35)] px-5 md:px-12 lg:px-[50px] py-6 z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left Naming */}
        <div className="flex items-center gap-0">
          <div className="px-1.5 py-2.5">
            <p className="text-primary text-sm md:text-base font-medium font-geist">{personalInfo.name}</p>
          </div>
          <div className="hidden sm:block px-1.5 py-2.5">
            <p className="text-secondary text-sm md:text-base font-normal font-geist">{personalInfo.title}</p>
          </div>
        </div>

        {/* Navbar - Hidden on mobile, visible on desktop */}
        <nav className="hidden lg:flex gap-11 items-center">
          <a 
            href="/#work" 
            onClick={(e) => handleNavClick(e, '#work')}
            className="text-primary text-base font-normal font-geist p-2.5 hover:text-[#CE5347] transition-colors cursor-pointer"
          >
            WORK
          </a>
          <a 
            href="/#about" 
            onClick={(e) => handleNavClick(e, '#about')}
            className="text-primary text-base font-normal font-geist p-2.5 hover:text-[#CE5347] transition-colors cursor-pointer"
          >
            ABOUT
          </a>
          <a 
            href="/#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-primary text-base font-normal font-geist p-2.5 hover:text-[#CE5347] transition-colors cursor-pointer"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-primary hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
          >
            {isMenuOpen ? (
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>

        {/* Available for Work - Desktop */}
        {personalInfo.availableForWork && (
          <div className="hidden lg:flex items-center gap-2.5">
            <div className="w-2 h-4.5 flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="px-2.5 py-1.5">
              <p className="text-primary text-base font-normal font-geist">AVAILABLE FOR WORK</p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-4 pt-6 pb-4">
          <a
            href="/#work"
            onClick={(e) => handleNavClick(e, '#work')}
            className="text-primary text-base font-normal font-geist p-2.5 hover:text-[#CE5347] transition-colors cursor-pointer"
          >
            WORK
          </a>
          <a
            href="/#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="text-primary text-base font-normal font-geist p-2.5 hover:text-[#CE5347] transition-colors cursor-pointer"
          >
            ABOUT
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-primary text-base font-normal font-geist p-2.5 hover:text-[#CE5347] transition-colors cursor-pointer"
          >
            CONTACT
          </a>
          {personalInfo.availableForWork && (
            <div className="flex items-center gap-2.5 p-2.5 border-t border-[rgba(50,64,79,0.15)] mt-2 pt-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-primary text-sm font-normal font-geist">AVAILABLE FOR WORK</p>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
