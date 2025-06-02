import React, { useState, useEffect } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
}

export const TextScramble: React.FC<TextScrambleProps> = ({ text, className = '' }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+';

  const scramble = () => {
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setScrambledText(
        text
          .split('')
          .map((char, index) => {
            if (iterations >= maxIterations) {
              clearInterval(interval);
              return char;
            }
            if (char === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      iterations += 1;
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setScrambledText(text);
      }
    }, 50);
  };

  return (
    <span 
      className={className}
      onMouseEnter={scramble}
    >
      {scrambledText}
    </span>
  );
};