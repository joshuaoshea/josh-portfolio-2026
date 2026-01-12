import React from 'react';
import { socialLinks, personalInfo } from '../constants/portfolio';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-[rgba(50,64,79,0.35)] px-5 md:px-12 lg:px-[50px] py-8 md:py-6">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Copyright */}
        <div className="px-1.5 py-2.5">
          <p className="text-secondary text-sm md:text-base font-normal font-geist">CREATED IN 2026</p>
        </div>

        {/* Right - Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-11 items-center">
          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary text-sm md:text-base font-normal font-geist p-2.5 hover:opacity-70 transition-opacity"
          >
            LINKEDIN
          </a>
          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary text-sm md:text-base font-normal font-geist p-2.5 hover:opacity-70 transition-opacity"
          >
            INSTAGRAM
          </a>
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="text-primary text-sm md:text-base font-normal font-geist p-2.5 hover:opacity-70 transition-opacity"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
