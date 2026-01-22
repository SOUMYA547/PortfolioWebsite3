import React from 'react';
import { Mail, Phone, Linkedin, Github, Code2, BookOpen, HardDrive, MessageSquare } from 'lucide-react';
import { TextScramble } from './TextScramble';
import { CyberQuote } from './CyberQuote';

export const Contact = () => {
  const platforms = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/soumyakantamahapatra/', 
      icon: <Linkedin className="w-6 h-6" /> 
    },
    { 
      name: 'GitHub', 
      url: 'https://www.github.com/SOUMYA547', 
      icon: <Github className="w-6 h-6" /> 
    },
    { 
      name: 'CodeChef', 
      url: 'https://www.codechef.com/users/soumya547', 
      icon: <Code2 className="w-6 h-6" /> 
    },
    { 
      name: 'HackerRank', 
      url: 'https://www.hackerrank.com/profile/manaswininayak61', 
      icon: <BookOpen className="w-6 h-6" /> 
    },
    { 
      name: 'LeetCode', 
      url: 'https://www.leetcode.com/soumya_547-959648', 
      icon: <Code2 className="w-6 h-6" /> 
    },
    { 
      name: 'HackerEarth', 
      url: 'https://www.hackerearth.com/@soumyakanta12', 
      icon: <HardDrive className="w-6 h-6" /> 
    },
    { 
      name: 'GeeksForGeeks', 
      url: 'https://www.geeksforgeeks.org/user/manaswininayak61/', 
      icon: <Code2 className="w-6 h-6" /> 
    },
    { 
      name: 'Discord', 
      url: 'https://discord.com/users/soumya547', 
      icon: <MessageSquare className="w-6 h-6" /> 
    }
  ];

  return (
    <section id="contact" className="py-16 bg-black/70 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-green-400 pb-2">
            <TextScramble text="Connect With Me" />
          </h2>
          <p className="text-gray-400 mt-4">
            Let's collaborate on cybersecurity challenges
          </p>
        </div>

        <CyberQuote />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Direct Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:soumyakantamahapatraixa959648@gmail.com"
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200 group"
              >
                <div className="bg-gray-800 p-3 rounded-full mr-4 group-hover:bg-green-400/20 transition-colors duration-200">
                  <Mail className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div>soumyakantamahapatraixa959648@gmail.com</div>
                </div>
              </a>
              <a 
                href="tel:9438714694" 
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200 group"
              >
                <div className="bg-gray-800 p-3 rounded-full mr-4 group-hover:bg-green-400/20 transition-colors duration-200">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div>9438714694</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Professional Platforms</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {platforms.map((platform, index) => (
                <a 
                  key={index} 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <div className="text-green-400 mb-2">
                    {platform.icon}
                  </div>
                  <span className="text-sm text-center">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};