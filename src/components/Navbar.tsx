import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronUp } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrambledText, setScrambledText] = useState('3TH1C4LH4CK3R');
  const originalText = '3TH1C4LH4CK3R';
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+';

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrambleText = () => {
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setScrambledText(
        originalText
          .split('')
          .map((char, index) => {
            if (iterations >= maxIterations) {
              clearInterval(interval);
              return char;
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      iterations += 1;
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setScrambledText(originalText);
      }
    }, 50);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#internships' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    document.querySelector(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      scrollPosition > 10 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a 
                href="#home" 
                className="flex items-center text-green-400 font-bold text-xl"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                onMouseEnter={scrambleText}
              >
                <Shield className="h-8 w-8 mr-2" />
                <span className="font-mono">{scrambledText}</span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="/new_resume(4).pdf"
                className="inline-flex items-center bg-green-600 text-black border border-green-400 font-medium px-4 py-2 rounded hover:bg-green-500 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Resume</span>
                <ChevronUp className="ml-1 h-4 w-4 rotate-180" />
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="/new_resume(4).pdf"
            className="flex items-center justify-center bg-green-600 text-black border border-green-400 font-medium px-4 py-2 rounded hover:bg-green-500 transition-colors duration-200 mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download Resume</span>
            <ChevronUp className="ml-1 h-4 w-4 rotate-180" />
          </a>
        </div>
      </div>
    </nav>
  );
};