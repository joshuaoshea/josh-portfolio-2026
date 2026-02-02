import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      
      // Check if we're over a case study card
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      const card = elementUnderCursor?.closest('.case-study-card');
      setIsHovering(!!card);
    };

    const handleMouseOut = (e) => {
      if (!e.relatedTarget || e.relatedTarget === document.body) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isVisible]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  if (!isVisible) return null;

  const cursorImage = isHovering ? '/hovercursor.svg' : '/cursor.svg';
  const cursorWidth = isHovering ? 138 : 16;
  const cursorHeight = isHovering ? 23 : 16;

  return (
    <div
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${cursorWidth}px`,
        height: `${cursorHeight}px`,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: isHovering ? 'translate(-50%, -50%)' : 'translate(-8px, -8px)',
        transition: 'transform 0.1s ease, width 0.2s ease, height 0.2s ease',
      }}
    >
      <img
        src={cursorImage}
        alt="cursor"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

export default CustomCursor;
