import React from 'react';
import { Shield, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black/90 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-green-400 mr-2" />
              <span className="text-white font-bold text-lg">SOUMYA</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Ethical Hacker & Cybersecurity Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.github.com/SOUMYA547" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/soumyakantamahapatra/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:manaswininayak616@gmail.com" 
              className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Soumyakanta Mahapatra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};