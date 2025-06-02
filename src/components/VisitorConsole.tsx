import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Terminal } from 'lucide-react';

export const VisitorConsole = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-green-400/30 font-mono text-sm z-40">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center text-green-400">
          <Terminal className="h-4 w-4 mr-2" />
          <div className="space-y-1">
            <p>[*] Visitor IP: <span className="text-gray-400">***.***.***.**</span></p>
            <p>[*] Accessed at: <span className="text-gray-400">{format(currentTime, 'yyyy-MM-dd HH:mm:ss')}</span></p>
            <p>[*] Logging user-agent: <span className="text-gray-400">Encrypted</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};