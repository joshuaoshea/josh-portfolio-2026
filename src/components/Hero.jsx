import React from 'react';
import { personalInfo, experience, socialLinks } from '../constants/portfolio';

const Hero = () => {
  return (
    <section id="about" className="pt-[120px] md:pt-[140px] pb-[75px] px-6 md:px-12 lg:px-[50px]">
      <div className="max-w-[1390px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[72px]">
        {/* Left Side - Main Intro */}
        <div className="flex flex-col gap-2 max-w-[730px]">
          <p className="text-accent text-lg font-normal font-manrope">DIA DHUIT</p>
          <div className="text-black text-[32px] md:text-[42px] lg:text-[52px] font-normal font-manrope leading-tight">
            {personalInfo.tagline.split('\n').length > 1 ? (
              personalInfo.tagline.split('\n').map((line, i) => <p key={i} className={i < personalInfo.tagline.split('\n').length - 1 ? "mb-0" : ""}>{line}</p>)
            ) : (
              <>
                <p className="mb-0">I'm Josh, a product designer</p>
                <p className="mb-0">blending technical experience</p>
                <p className="mb-0">with a strategic & data-driven</p>
                <p>design approach.</p>
              </>
            )}
          </div>
        </div>

        {/* Right Side - Experience & Connect */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-[72px]">
          {/* Experience Section */}
          <div className="flex flex-col gap-2.5 w-full md:w-[292px]">
            <p className="text-accent text-lg font-normal font-manrope">EXPERIENCE</p>
            <div className="flex flex-col gap-3">
              {experience.map((job, index) => (
                <div key={index} className="flex flex-col gap-1.5 group">
                  <div className="flex flex-col transition-transform duration-200 group-hover:translate-x-1">
                    <p className="text-primary text-2xl font-normal font-manrope leading-tight">{job.company}</p>
                    <p className="text-primary text-2xl font-extralight font-manrope leading-tight">{job.role}</p>
                  </div>
                  <p className="text-secondary text-sm font-normal font-manrope">{job.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connect & Location Section */}
          <div className="flex flex-col gap-10 w-full md:w-[119px]">
            {/* Connect */}
            <div className="flex flex-col gap-2.5">
              <p className="text-accent text-lg font-normal font-manrope">CONNECT</p>
              <div className="flex flex-col gap-3 text-primary text-2xl font-normal font-manrope">
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#CE5347] transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  LinkedIn
                </a>
                <a 
                  href={socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#CE5347] transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Instagram
                </a>
                <a 
                  href={socialLinks.cv} 
                  className="hover:text-[#CE5347] transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  CV
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2.5">
              <p className="text-accent text-lg font-normal font-manrope">LOCATION</p>
              <p className="text-primary text-2xl font-normal font-manrope">{personalInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
