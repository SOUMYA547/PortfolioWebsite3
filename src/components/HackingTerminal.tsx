import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface HackingTerminalProps {
  text: string;
  onComplete?: () => void;
}

export const HackingTerminal: React.FC<HackingTerminalProps> = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [text, onComplete]);

  return (
    <div className="bg-black/80 backdrop-blur-md p-4 rounded-lg border border-green-400/30 font-mono">
      <div className="flex items-center mb-2">
        <Terminal className="h-4 w-4 text-green-400 mr-2" />
        <span className="text-green-400 text-sm">Terminal</span>
      </div>
      <div className="text-green-400">
        <span>{displayText}</span>
        {showCursor && <span className="animate-pulse">█</span>}
      </div>
    </div>
  );
};