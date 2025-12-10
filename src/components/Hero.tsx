import React, { useEffect, useState } from 'react';
import { Shield, Terminal } from 'lucide-react';
import { TextScramble } from './TextScramble';
import { CyberQuote } from './CyberQuote';

export const Hero = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = 'Ethical Hacker & Cybersecurity Enthusiast';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <section id="home" className="pt-24 pb-16 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <img 
                src="/portfolio.jpg" 
                alt="Soumyakanta Mahapatra" 
                className="w-32 h-32 rounded-full border-4 border-green-400 shadow-lg shadow-green-400/20 object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-400 rounded-full p-2">
                <Shield className="h-6 w-6 text-black" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <TextScramble text="Soumyakanta Mahapatra" className="glitch-text" />
          </h1>
          <div className="h-8 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl font-medium text-green-400 mb-6">
              {text}
              {!isTypingComplete && <span className="animate-pulse">|</span>}
            </h2>
          </div>
          <div className="max-w-2xl mb-8 text-gray-300">
            <p className="text-lg mb-4">
              As a motivated and enthusiastic individual, I am eager to embark on my professional journey and gain valuable experience in DSA/AI/ML/Cyber Security.
            </p>
            <p className="text-lg">
              While I may not have formal work experience, I bring a strong foundation of skills, a passion for learning, and a dedication to positively contributing to any team.
            </p>
          </div>
          <CyberQuote />
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="bg-green-600 hover:bg-green-700 text-black px-6 py-3 rounded-md font-medium transition-colors duration-300 flex items-center"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>View Projects</span>
            </a>
            <a 
              href="#contact"
              className="bg-transparent hover:bg-green-900/30 text-green-400 border border-green-400 px-6 py-3 rounded-md font-medium transition-colors duration-300 flex items-center"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Terminal className="mr-2 h-5 w-5" />
              <span>Connect</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};