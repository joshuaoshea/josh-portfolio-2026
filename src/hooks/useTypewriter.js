import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for typewriter animation effect
 * @param {Array<string>} phrases - Array of phrases to type (should include "I'm " prefix)
 * @param {number} typingSpeed - Speed of typing in milliseconds
 * @param {number} deletingSpeed - Speed of deleting in milliseconds
 * @param {number} pauseTime - Time to pause between phrases in milliseconds
 * @returns {string} - The current displayed text
 */
const useTypewriter = (
  phrases = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (phrases.length === 0) return;

    const currentPhrase = phrases[currentPhraseIndex];
    const baseText = "I'm ";

    const animate = () => {
      if (isDeleting) {
        // Deleting mode - remove characters until we reach base text
        if (displayedText.length > baseText.length) {
          setDisplayedText(prev => prev.slice(0, -1));
          timeoutRef.current = setTimeout(animate, deletingSpeed);
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          const nextIndex = (currentPhraseIndex + 1) % phrases.length;
          setCurrentPhraseIndex(nextIndex);
          timeoutRef.current = setTimeout(animate, typingSpeed);
        }
      } else {
        // Typing mode
        if (displayedText.length < currentPhrase.length) {
          // Still typing - add next character
          const nextChar = currentPhrase[displayedText.length];
          setDisplayedText(prev => prev + nextChar);
          timeoutRef.current = setTimeout(animate, typingSpeed);
        } else {
          // Finished typing - pause then start deleting
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            timeoutRef.current = setTimeout(animate, deletingSpeed);
          }, pauseTime);
        }
      }
    };

    // Start animation
    timeoutRef.current = setTimeout(animate, typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayedText, currentPhraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return displayedText;
};

export default useTypewriter;
