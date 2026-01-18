import React from 'react';
import { socialLinks, personalInfo } from '../constants/portfolio';

const Footer = () => {
  return (
    <footer 
      id="contact" 
      className="fixed bottom-0 left-0 right-0 w-full bg-[#191f25] border-t border-[#32404f]"
      style={{ height: '600px', zIndex: 0 }}
    >
      <div className="max-w-[1440px] mx-auto h-full flex flex-col justify-between px-6 md:px-12 lg:px-[50px] py-10 md:py-16 lg:py-[68px]">
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[72px] justify-between">
          {/* Left Section - Heading and CTA */}
          <div className="flex flex-col gap-10 lg:gap-[66px] max-w-[820px]">
            {/* Heading */}
            <h2 className="text-[#fefaf6] text-3xl md:text-4xl lg:text-[52px] font-normal font-manrope leading-tight md:leading-tight lg:leading-[1.4]">
              Great ideas start with conversations, let's connect and see where it leads.
            </h2>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="bg-[#FF5500] hover:bg-[#E64D00] transition-colors duration-200 rounded-[11px] px-[25px] py-[20px] h-[60px] w-full sm:w-[232px] flex items-center justify-center"
              >
                <span className="text-[#fdf7f2] text-lg font-medium font-manrope">
                  CONNECT
                </span>
              </a>
              <a 
                href={socialLinks.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#FF5500] hover:bg-[#FF5500]/10 transition-colors duration-200 rounded-[11px] px-[25px] py-[20px] h-[60px] w-full sm:w-[232px] flex items-center justify-center"
              >
                <span className="text-[#FF5500] text-lg font-medium font-manrope">
                  RESUME
                </span>
              </a>
            </div>
          </div>

          {/* Right Section - Navigation and Social Links */}
          <div className="flex flex-wrap gap-8 lg:gap-[72px]">
            {/* Navigation Links */}
            <div className="flex flex-col gap-3">
              <a 
                href="#work"
                className="text-[#fefaf6] text-xl lg:text-[25px] font-normal font-manrope hover:opacity-70 transition-opacity"
              >
                Work
              </a>
              <a 
                href="#about"
                className="text-[#fefaf6] text-xl lg:text-[25px] font-normal font-manrope hover:opacity-70 transition-opacity"
              >
                About
              </a>
              <a 
                href="#contact"
                className="text-[#fefaf6] text-xl lg:text-[25px] font-normal font-manrope hover:opacity-70 transition-opacity"
              >
                Connect
              </a>
            </div>

            {/* Social Links and Location */}
            <div className="flex flex-col gap-10">
              {/* Social Links */}
              <div className="flex flex-col gap-3">
                <a 
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fefaf6] text-xl lg:text-[25px] font-normal font-manrope hover:opacity-70 transition-opacity"
                >
                  LinkedIn
                </a>
                <a 
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fefaf6] text-xl lg:text-[25px] font-normal font-manrope hover:opacity-70 transition-opacity"
                >
                  Instagram
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2.5">
                <p className="text-[rgba(253,247,242,0.7)] text-lg font-normal font-manrope">
                  LOCATION
                </p>
                <p className="text-[#fefaf6] text-xl lg:text-[25px] font-normal font-manrope">
                  Dublin, Ireland
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 lg:mt-0">
          <p className="text-[#b9b6b4] text-sm md:text-base font-normal font-geist">
            CREATED BY JOSH
          </p>
          <p className="text-[#b9b6b4] text-sm md:text-base font-normal font-geist">
            {personalInfo.email.toUpperCase()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
