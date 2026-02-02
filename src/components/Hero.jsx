import React from 'react';
import { Link } from 'react-router-dom';
import useTypewriter from '../hooks/useTypewriter';
import { personalInfo } from '../constants/portfolio';

const Hero = () => {
  const phrases = [
    "I'm Josh O Shea 👤",
    "I'm a designer 🎨",
    "I'm a gamer 🎮",
    "I'm a developer 💻"
  ];

  const animatedText = useTypewriter(phrases, 100, 50, 2000);

  // Function to render text with styled emojis
  const renderTextWithStyledEmojis = (text) => {
    // Emoji mapping with CSS filters for color adjustments
    const emojiStyles = {
      '👤': { filter: 'hue-rotate(20deg) saturate(1.2) brightness(1.1)' }, // Warmer tone for avatar
      '🎮': { filter: 'hue-rotate(-30deg) saturate(1.3) brightness(1.05)' }, // Different color for joystick
      '🎨': {}, // Keep designer palette as is
      '💻': {} // Keep developer laptop as is
    };

    // Split text and wrap emojis in styled spans
    const parts = text.split(/([\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}])/gu);
    
    return parts.map((part, index) => {
      if (emojiStyles[part]) {
        return (
          <span key={index} style={emojiStyles[part]} className="inline-block">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section id="hero" className="pt-[120px] md:pt-[140px] pb-0 md:pb-[calc(40vh-310px)] lg:pb-[calc(45vh-310px)] px-6 md:px-12 lg:px-[50px] relative z-10">
      <div className="max-w-[1390px] mx-auto pb-20">
        {/* Main Intro */}
        <div className="flex flex-col gap-2 max-w-full md:max-w-[751px] lg:max-w-[1037px] pt-[50px]">
          <p className="text-accent text-base md:text-lg lg:text-xl font-normal font-manrope">DIA DHUIT</p>
          <div className="text-black text-[48px] md:text-[64px] lg:text-[86px] font-normal font-manrope leading-tight">
            {personalInfo.tagline.split('\n').length > 1 ? (
              personalInfo.tagline.split('\n').map((line, i) => <p key={i} className={i < personalInfo.tagline.split('\n').length - 1 ? "mb-0" : ""}>{line}</p>)
            ) : (
              <>
                <p className="mb-0">
                  {renderTextWithStyledEmojis(animatedText)}
                  <span className="typewriter-cursor inline-block ml-1">|</span>
                </p>
              </>
            )}
          </div>
          <p className="text-secondary text-[20px] md:text-[32px] lg:text-[52px] font-normal font-manrope leading-tight mt-8 pb-5">
            Based in Dublin, Ireland. I have 6+ years of experience designing enterprise solutions, blending technical knowledge with a strategic, data-driven approach.
          </p>
          {/* Learn More Button */}
          <Link 
            to="/about"
            className="group inline-flex items-center gap-[5px] mt-8 text-black hover:text-[#FF5500] text-[20px] md:text-[32px] lg:text-[48px] font-normal font-manrope cursor-pointer w-fit transition-colors"
          >
            <span className="relative">
              Learn more
              <span className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-black group-hover:bg-[#FF5500]"></span>
            </span>
            <svg 
              className="w-5 h-[22px] md:w-7 md:h-[30px] lg:w-8 lg:h-[34px] text-black group-hover:text-[#FF5500] transition-all duration-300 translate-y-1 group-hover:-rotate-45 group-hover:-translate-y-0.5" 
              viewBox="0 0 14 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ alignSelf: 'center' }}
            >
              <path 
                d="M13.4394 8.07094C13.83 7.68041 13.83 7.04725 13.4394 6.65672L7.07545 0.292784C6.68492 -0.0977388 6.05176 -0.0977364 5.66123 0.292789C5.27071 0.683315 5.27071 1.31648 5.66124 1.707L11.3181 7.36384L5.66128 13.0207C5.27076 13.4112 5.27076 14.0444 5.66128 14.4349C6.05181 14.8254 6.68497 14.8254 7.0755 14.4349L13.4394 8.07094ZM5.24521e-06 7.36388L8.85328e-06 8.36388L12.7323 8.36383L12.7323 7.36383L12.7323 6.36383L1.87556e-06 6.36388L5.24521e-06 7.36388Z" 
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
