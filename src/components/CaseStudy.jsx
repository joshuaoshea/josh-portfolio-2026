import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const CaseStudy = ({ company, title, description, tags, metrics, bgColor, hoverColor, image, caseStudyId, onHover, onLeave, isHovered, hoverBorderColor }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    if (onHover && cardRef.current) {
      onHover(cardRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (onLeave) {
      onLeave();
    }
  };

  // Use hoverColor if provided, otherwise fall back to bgColor, then default
  const displayBgColor = isHovered 
    ? (hoverColor || bgColor || '#FEFAF6')
    : '#FEFAF6';

  return (
    <div 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-[10px] overflow-hidden transition-all duration-300 hover:scale-[1.01]" 
      style={{ 
        backgroundColor: displayBgColor,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: hoverBorderColor,
        transition: 'background-color 0.4s ease-out, border-color 0.4s ease-out, transform 0.3s ease'
      }}
    >
      <div className="min-h-[400px] md:min-h-[505px] p-6 md:p-10 lg:p-[54px] flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* Left Content */}
        <div className="flex flex-col gap-3 max-w-[617px] lg:w-1/2 z-10">
          <p className="text-base md:text-lg font-normal font-manrope" style={{ color: 'rgba(50,64,79,0.75)' }}>{company}</p>
          
          <h3 
            className="text-[24px] md:text-[32px] lg:text-4xl font-medium font-manrope leading-normal tracking-[0.72px] text-[#32404f]"
          >
            {title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {tags.map((tag, index) => (
              <div 
                key={index}
                className="bg-[rgba(50,64,79,0.3)] border border-primary rounded-[45px] px-3 md:px-4 py-1 md:py-1.5 transition-transform duration-200 hover:scale-105"
              >
                <p className="text-primary text-[11px] md:text-[13px] font-medium font-manrope tracking-[0.26px]">
                  {tag}
                </p>
              </div>
            ))}
          </div>
          
          <div 
            className="text-base md:text-lg font-normal font-manrope leading-normal tracking-[0.36px] text-[#32404f]"
          >
            <p>{description}</p>
          </div>

          {/* Metrics */}
          <div className="flex gap-3 md:gap-4 flex-wrap">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col gap-2 md:gap-2.5 min-w-[120px] md:min-w-[154px]">
                <p className="text-primary text-3xl md:text-4xl font-normal font-manrope leading-tight">
                  {metric.value}
                </p>
                <p className="text-[#516479] text-xs md:text-sm font-medium font-manrope leading-tight uppercase">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <Link 
            to={`/case-study/${caseStudyId}`} 
            className="bg-[#FF5500] hover:bg-[#E64D00] transition-colors duration-200 rounded-[11px] px-[25px] py-[20px] w-[154px] h-[60px] flex items-center justify-center mt-[25px]"
          >
            <span className="text-[#FEFAF6] text-lg font-medium font-manrope leading-tight">
              Learn more
            </span>
          </Link>
        </div>

        {/* Right Browser Mockup */}
        <div className="lg:absolute lg:right-[30px] lg:top-[54px] lg:w-[calc(50%-30px)] max-w-[749px] flex items-center justify-center">
          <div className="w-full aspect-[749/459] bg-[#38393a] rounded-[8px] md:rounded-[10px] shadow-[0px_0px_0.585px_0px_rgba(0,0,0,0.7),0px_11.709px_17.564px_0px_rgba(0,0,0,0.3),0px_5.855px_29.273px_0px_rgba(0,0,0,0.2)] border border-[#070707] overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Browser Chrome */}
            <div className="bg-[#191c1f] h-[40px] md:h-[53px] px-2 md:px-3 flex items-center gap-2 rounded-t-[8px] md:rounded-t-[10px]">
              {/* Traffic Lights */}
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FF5F57]"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FEBC2E]"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#28C840]"></div>
              </div>
              
              {/* URL Bar */}
              <div className="flex-1 max-w-xs md:max-w-md mx-auto bg-[#0c0f12] rounded-md px-2 md:px-3 py-0.5 md:py-1 flex items-center gap-1.5 md:gap-2">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
                  <path d="M8 4V3C8 2.44772 7.55228 2 7 2H5C4.44772 2 4 2.44772 4 3V4M3 4H9C9.55228 4 10 4.44772 10 5V9C10 9.55228 9.55228 10 9 10H3C2.44772 10 2 9.55228 2 9V5C2 4.44772 2.44772 4 3 4Z" stroke="#dbdbdc" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white text-[10px] md:text-xs font-normal font-manrope">
                  {company.toLowerCase()}.com
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="bg-[#38393a] h-[calc(100%-40px)] md:h-[calc(100%-53px)] flex items-center justify-center overflow-hidden">
              {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover object-top" />
              ) : (
                <div className="text-white text-xs md:text-sm opacity-50">Product Screenshot</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
