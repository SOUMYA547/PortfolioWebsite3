import React from 'react';
import { Code, Database, Shield, Wifi, Terminal, Server } from 'lucide-react';
import { TextScramble } from './TextScramble';
import { CyberQuote } from './CyberQuote';

export const Skills = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="bg-gray-900/80 backdrop-blur-md p-6 rounded-lg border border-green-400/30 hover:border-green-400/70 transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg hover:shadow-green-400/40"
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