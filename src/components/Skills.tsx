import React from 'react';
import { Code, Database, Shield, Wifi, Terminal, Server } from 'lucide-react';
import { TextScramble } from './TextScramble';
import { CyberQuote } from './CyberQuote';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Skills = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerView = 3;

  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code className="h-6 w-6 text-green-400" />,
      items: ['C++', 'C', 'Java', 'Python']
    },
    {
      category: 'Penetration Testing',
      icon: <Shield className="h-6 w-6 text-green-400" />,
      items: ['Kali Linux', 'Nmap', 'Metasploit', 'BurpSuite', 'OpenVAS']
    },
    {
      category: 'Network Analysis',
      icon: <Wifi className="h-6 w-6 text-green-400" />,
      items: ['Wireshark', 'Network Monitoring', 'Packet Analysis']
    },
    {
      category: 'Password Cracking',
      icon: <Terminal className="h-6 w-6 text-green-400" />,
      items: ['John the Ripper', 'Password Analysis', 'Brute Force Techniques']
    },
    {
      category: 'Operating Systems',
      icon: <Server className="h-6 w-6 text-green-400" />,
      items: ['Linux', 'Windows', 'Kali Linux']
    },
    {
      category: 'Database',
      icon: <Database className="h-6 w-6 text-green-400" />,
      items: ['SQL', 'Database Security', 'Injection Prevention']
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= skills.length ? 0 : prev + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, skills.length - itemsPerView) : Math.max(0, prev - itemsPerView)
    );
  };

  const visibleSkills = skills.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section id="skills" className="py-16 bg-black/70 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-green-400 pb-2">
            <TextScramble text="Technical Arsenal" />
          </h2>
          <p className="text-gray-400 mt-4">
            Equipped with skills for offensive and defensive security operations
          </p>
        </div>

        <CyberQuote />

        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-green-600/20 text-green-400 hover:bg-green-600/30 transition-all duration-300 shadow-lg shadow-green-400/20"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-green-600/20 text-green-400 hover:bg-green-600/30 transition-all duration-300 shadow-lg shadow-green-400/20"
              disabled={currentIndex + itemsPerView >= skills.length}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleSkills.map((skillGroup, index) => (
              <div 
                key={currentIndex + index} 
                className="bg-gray-900/80 backdrop-blur-md p-6 rounded-lg border border-green-400/30 hover:border-green-400/70 transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg hover:shadow-green-400/40 glow-border"
              >
                <div className="flex items-center mb-4">
                  {skillGroup.icon}
                  <h3 className="text-xl font-bold ml-2 text-white glow-text">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 shadow-sm shadow-green-400/50"></span>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(skills.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? 'bg-green-400 shadow-lg shadow-green-400/50'
                    : 'bg-gray-600 hover:bg-green-400/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
            <div 
              key={index} 
              className="bg-gray-900/80 backdrop-blur-md p-6 rounded-lg border border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg hover:shadow-green-400/20"
            >
              <div className="flex items-center mb-4">
                {skillGroup.icon}
                <h3 className="text-xl font-bold ml-2 text-white">{skillGroup.category}</h3>
              </div>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};