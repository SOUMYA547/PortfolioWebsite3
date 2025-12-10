import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { TextScramble } from './TextScramble';
import { CyberQuote } from './CyberQuote';

export const Projects = () => {
  const projects = [
    {
      title: 'Secure Linux Server Setup Hardening',
      description: 'Comprehensive Linux server hardening toolkit implementing security best practices, system configurations, and automated security measures.',
      github: 'https://github.com/SOUMYA547/Secure-Linux-Server-Setup-Hardening',
      technologies: ['Kali Linux', 'Virtual Machine', 'System Security', 'Server Hardening'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      title: 'AI Fraud Detection System',
      description: 'Advanced AI-powered system for detecting and preventing fraudulent activities using machine learning algorithms and real-time analysis.',
      link: 'https://www.linkedin.com/posts/soumyakantamahapatra_cybersecurity-vulnerabilityassessment-infotactsolutions-activity-7333069356584620032-nQhl?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoQ2YgBDgXIJuC2ACPV8AVPOG2J40dERrk',
      technologies: ['AI/ML', 'Fraud Detection', 'Python', 'Data Analysis'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    },
    {
      title: 'Password Cracker',
      description: 'Advanced password cracking tool for security testing and vulnerability assessment of password-protected systems.',
      github: 'https://github.com/SOUMYA547/Password-Cracker',
      technologies: ['Python', 'Cryptography', 'Security Testing'],
      image: 'https://images.pexels.com/photos/39624/padlock-lock-chain-key-39624.jpeg'
    },
    {
      title: 'Anonymous FTP Scanner',
      description: 'Finds public FTP servers so administrators can secure exposed data and prevent unauthorized access.',
      github: 'https://github.com/SOUMYA547/Anonymous-FTP-Scanner',
      technologies: ['Python', 'Network Security', 'FTP Analysis'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
    },
    {
      title: 'Brute Force FTP Accounts',
      description: 'Tests FTP passwords (with permission) to find weak credentials and improve security posture.',
      github: 'https://github.com/SOUMYA547/Brute-Force-FTP',
      technologies: ['Python', 'Brute Force', 'FTP Security'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      title: 'Port Scanner',
      description: 'Discovers open ports so users can close unnecessary services and improve system security.',
      github: 'https://github.com/SOUMYA547/Port-Scanner',
      technologies: ['Python', 'Network Analysis', 'Port Scanning'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      title: 'Find Deleted Files',
      description: 'Restores deleted documents and photos for digital forensics and data recovery purposes.',
      github: 'https://github.com/SOUMYA547/Find-Deleted-Files',
      technologies: ['Python', 'Digital Forensics', 'Data Recovery'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
    },
    {
      title: 'Keylogger',
      description: 'Logs keystrokes for consented usability testing or monitoring purposes in controlled environments.',
      github: 'https://github.com/SOUMYA547/Keylogger',
      technologies: ['Python', 'System Monitoring', 'Security Testing'],
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg'
    },
    {
      title: 'File Password Cracker',
      description: 'Recovers access to your own password-protected files for legitimate recovery purposes.',
      github: 'https://github.com/SOUMYA547/File-Password-Cracker',
      technologies: ['Python', 'File Security', 'Password Recovery'],
      image: 'https://images.pexels.com/photos/39624/padlock-lock-chain-key-39624.jpeg'
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden group hover:transform hover:translate-y-[-5px] transition-all duration-300 border border-green-400/30 hover:border-green-400/70 hover:shadow-lg hover:shadow-green-400/40"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm h-20">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-black/60 text-green-400 px-2 py-1 rounded-full border border-green-400/30">
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
      </div>
    </section>
  );
};