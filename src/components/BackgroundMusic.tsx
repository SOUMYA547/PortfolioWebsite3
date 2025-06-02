import React, { useState } from 'react';
import useSound from 'use-sound';
import { Volume2, VolumeX } from 'lucide-react';

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound('https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3', {
    volume: 0.4,
    loop: true
  });

  const toggleMusic = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-20 right-6 p-3 bg-green-600/20 backdrop-blur-sm text-green-400 rounded-full shadow-lg shadow-green-400/20 z-50 hover:bg-green-600/30 transition-all duration-300"
      aria-label="Toggle background music"
    >
      {isPlaying ? (
        <Volume2 className="h-6 w-6" />
      ) : (
        <VolumeX className="h-6 w-6" />
      )}
    </button>
  );
};