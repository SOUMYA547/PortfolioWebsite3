import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { TextScramble } from './TextScramble';
import { CyberQuote } from './CyberQuote';

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);

  const projects = [
    {
      title: 'Defence Tools',
      description: 'A comprehensive toolkit for defensive cybersecurity measures, providing various utilities for system hardening and protection.',
      github: 'https://github.com/SOUMYA547/Defence_Tools',
      technologies: ['Python', 'Linux', 'Shell Scripting'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      title: 'Image Encryptor',
      description: 'Advanced tool for encrypting and securing image files using state-of-the-art cryptographic algorithms.',
      github: 'https://github.com/SOUMYA547/Image-Encryptor',
      technologies: ['Python', 'Cryptography', 'Image Processing'],
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg'
    },
    {
      title: 'Text Encryptor',
      description: 'Secure text encryption tool implementing modern encryption standards for data protection.',
      github: 'https://github.com/SOUMYA547/Text-Encryptor',
      technologies: ['Python', 'Cryptography', 'Security'],
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg'
    },
    {
      title: 'Password Analyzer',
      description: 'Tool to analyze password strength and security, identifying vulnerabilities and providing recommendations.',
      github: 'https://github.com/SOUMYA547/Password_Analyzer',
      technologies: ['Python', 'Cryptography', 'Pattern Analysis'],
      image: 'https://images.pexels.com/photos/39624/padlock-lock-chain-key-39624.jpeg'
    },
    {
      title: 'Password Generator',
      description: 'Secure password generation tool creating strong, unique passwords based on customizable parameters.',
      github: 'https://github.com/SOUMYA547/Password-Generator',
      technologies: ['Python', 'Cryptography', 'Random Generation'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive vulnerability assessment project conducted during internship at Infotact Solutions.',
      link: 'https://www.linkedin.com/posts/soumyakantamahapatra_cybersecurity-vulnerabilityassessment-infotactsolutions-activity-7333069356584620032-nQhl',
      technologies: ['Nmap', 'OpenVAS', 'Vulnerability Analysis'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    }
  ];

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isHovering, projects.length]);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  return (
    <section id="projects" className="py-16 bg-black/60 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-green-400 pb-2">
            <TextScramble text="Security Projects" />
          </h2>
          <p className="text-gray-400 mt-4">
            Practical applications of cybersecurity knowledge and skills
          </p>
        </div>

        <CyberQuote />

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-1000 ease-in-out">
            {getVisibleProjects().map((project, index) => (
              <div 
                key={`${project.title}-${currentIndex}-${index}`}
                className="bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden group hover:transform hover:translate-y-[-5px] transition-all duration-300 border border-green-400/30 hover:border-green-400/70 hover:shadow-lg hover:shadow-green-400/40 glow-border"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white glow-text">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm h-20">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-black/60 text-green-400 px-2 py-1 rounded-full border border-green-400/30 shadow-sm shadow-green-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                      >
                        <Github className="h-5 w-5 mr-1" /> Code
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 mr-1" /> View
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
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