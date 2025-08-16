import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { TextScramble } from './TextScramble';
import { CyberQuote } from './CyberQuote';

export const Internships = () => {
  const internships = [
    {
      title: 'Cyber Security Internship',
      company: 'Infotact Solutions',
      period: '2025',
      type: 'Remote',
      description: 'Participating in vulnerability assessments and penetration testing of client systems. Implementing security controls and documenting findings.',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Security Documentation']
    },
    {
      title: 'Cyber Security Internship',
      company: 'Vaishnav Technologies',
      period: '2025',
      type: 'Remote',
      description: 'Analyzing network traffic for potential threats and vulnerabilities. Assisting in security audits and compliance verification.',
      skills: ['Network Security', 'Traffic Analysis', 'Security Auditing']
    },
    {
      title: 'Cyber Security Internship',
      company: 'Pinnacle Labs',
      period: '2025',
      type: 'Remote',
      description: 'Identifying and addressing security vulnerabilities in web applications. Conducting code reviews for security issues.',
      skills: ['Web Security', 'Code Auditing', 'Vulnerability Management']
    },
    {
      title: 'AI Azure Internship',
      company: 'All India Council for Technical Education (AICTE)',
      period: '2025',
      type: 'Remote',
      description: 'Working with Azure-based AI systems to implement security controls and identify potential vulnerabilities in AI workflows.',
      skills: ['Azure Security', 'AI Systems', 'Cloud Protection']
    },
    {
      title: 'Cybersecurity Research Intern',
      company: 'All India Council for Technical Education (AICTE)',
      period: '2025',
      type: 'Remote',
      description: 'Conducting research on emerging cybersecurity threats and developing mitigation strategies. Implementing advanced security protocols.',
      skills: ['Threat Research', 'Security Protocols', 'Risk Mitigation']
    }
  ];

  return (
    <section id="internships" className="py-16 bg-black/60 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-green-400 pb-2">
            <TextScramble text="Professional Experience" />
          </h2>
          <p className="text-gray-400 mt-4">
            Hands-on internships and practical industry experience
          </p>
        </div>

        <CyberQuote />

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div 
              key={index}
              className="bg-gray-900/80 backdrop-blur-md p-6 rounded-lg border-l-4 border-green-400 hover:transform hover:translate-x-1 transition-all duration-300"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{internship.title}</h3>
                  <div className="flex items-center mt-1 text-gray-400">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span>{internship.company}</span>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{internship.period}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{internship.type}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{internship.description}</p>
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs bg-black/60 text-green-400 px-2 py-1 rounded-full border border-green-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};