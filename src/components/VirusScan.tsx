import React, { useState, useEffect } from 'react';
import { Loader, Shield, CheckCircle } from 'lucide-react';

interface VirusScanProps {
  onScanComplete: () => void;
}

export const VirusScan: React.FC<VirusScanProps> = ({ onScanComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing scan...');

  useEffect(() => {
    const statuses = [
      'Scanning system...',
      'Analyzing vulnerabilities...',
      'Checking security protocols...',
      'Verifying integrity...',
      'Finalizing security check...'
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          onScanComplete();
          return 100;
        }
        const newProgress = prev + 1;
        setStatus(statuses[Math.floor((newProgress / 100) * statuses.length)]);
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onScanComplete]);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-gray-900 p-6 rounded-lg border border-green-400/30">
          <div className="flex items-center justify-center mb-4">
            {progress < 100 ? (
              <Loader className="h-8 w-8 text-green-400 animate-spin" />
            ) : (
              <CheckCircle className="h-8 w-8 text-green-400" />
            )}
          </div>
          <div className="h-2 bg-gray-800 rounded-full mb-4 overflow-hidden">
            <div
              className="h-full bg-green-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center">
            <p className="text-green-400 font-mono mb-2">{status}</p>
            <p className="text-gray-400 text-sm">{progress}% complete</p>
          </div>
        </div>
      </div>
    </div>
  );
};