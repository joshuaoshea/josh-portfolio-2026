import React, { useState, useContext, useRef } from 'react';
import CaseStudy from './CaseStudy';
import { caseStudies } from '../constants/portfolio';
import { HoverContext } from '../App';

const CaseStudies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [circleCenter, setCircleCenter] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentHoverColor, setCurrentHoverColor] = useState('#FDF7F2');
  const [currentBorderColor, setCurrentBorderColor] = useState('#F4EAE1');
  const { setIsCardHovered, setPageHoverColor } = useContext(HoverContext);
  const leaveTimeoutRef = useRef(null);

  const handleCardHover = (index, element) => {
    // Clear any pending leave timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }

    if (element) {
      const rect = element.getBoundingClientRect();
      setCircleCenter({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2 + window.scrollY
      });
      setHoveredCard(index);
      setIsAnimating(true);
      
      // Set the specific colors for this card
      const hoverColor = caseStudies[index].hoverColor || caseStudies[index].bgColor;
      const borderColor = caseStudies[index].hoverBorderColor || '#F4EAE1';
      setCurrentHoverColor(hoverColor);
      setCurrentBorderColor(borderColor);
      setIsCardHovered(true);
      setPageHoverColor(hoverColor);
    }
  };

  const handleCardLeave = () => {
    setIsAnimating(false);
    setIsCardHovered(false);
    setCurrentBorderColor('#F4EAE1');
    
    // Delay clearing the hover state to allow animation to complete
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredCard(null);
      setPageHoverColor('#FDF7F2');
    }, 400);
  };

  return (
    <section id="work" className="py-12 px-6 md:px-12 lg:px-[50px] relative">
      {/* Radial Background Overlay with Circular Growth Animation */}
      {hoveredCard !== null && (
        <div
          className="fixed inset-0 pointer-events-none z-[5]"
          style={{
            background: `radial-gradient(circle at ${circleCenter.x}px ${circleCenter.y}px, 
              ${currentHoverColor} 0px, 
              ${currentHoverColor} ${isAnimating ? '3000px' : '0px'}, 
              transparent ${isAnimating ? '3500px' : '100px'})`,
            transition: 'all 0.4s ease-out',
            opacity: isAnimating ? 1 : 0
          }}
        />
      )}

      <div className="max-w-[1440px] mx-auto relative z-10">
        <h2 className="text-primary text-[32px] font-medium font-manrope mb-6 pb-5">Case Studies</h2>
        
        <div className="flex flex-col gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudy 
              key={index} 
              {...study} 
              video={study.video}
              caseStudyId={study.id}
              onHover={(element) => handleCardHover(index, element)}
              onLeave={handleCardLeave}
              isHovered={hoveredCard === index}
              hoverBorderColor={hoveredCard === index ? currentBorderColor : '#F4EAE1'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
