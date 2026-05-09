import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { TextScramble } from './TextScramble';
import { CyberQuote } from './CyberQuote';

export const Certifications = () => {
  const certifications = [
    {
      title: 'Generative AI for Software Development',
      provider: 'Deep Learning',
      date: '2025',
      link: 'https://coursera.org/share/926a03c6e19b980d2b08d78c7c6ef469',
      logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    },
    {
      title: 'Microsoft AI & ML Engineering',
      provider: 'Microsoft',
      date: '2025',
      link: 'https://coursera.org/share/c0e917d50bcdf22d1b6abc84e69a4547',
      logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      title: 'Machine Learning',
      provider: 'Deep Learning & Stanford University',
      date: '2023',
      link: 'https://coursera.org/share/b89d7838ff294a36ccad4ce44b1bfcf0',
      logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    },
    {
      title: 'Data Structures and Algorithms',
      provider: 'UC San Diego',
      date: '2024',
      link: 'https://coursera.org/share/2fa7e5073ad72b97430e683670e72890',
      logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      title: 'Algorithms',
      provider: 'Stanford University',
      date: '2024',
      link: 'https://coursera.org/share/ec1026f121bfa297ac08462bf62f0cf1',
      logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      title: 'Natural Language Processing',
      provider: 'Deep Learning',
      date: '2024',
      link: 'https://coursera.org/share/cf98392002add0ce7b2c38781aa4fb98',
      logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    },
    {
      title: 'Intel AI Fundamentals',
      provider: 'Intel',
      date: '2024',
      link: 'https://coursera.org/share/7eb0d34cb39ea76fb3d06ac2da9dca13',
      logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      title: 'Deep Learning',
      provider: 'Deep Learning',
      date: '2023',
      link: 'https://coursera.org/share/d5b0b846d39c3b16c510b158eb68866e',
      logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    },
    {
      title: 'Microsoft Copilot: Your Everyday AI Companion',
      provider: 'Microsoft',
      date: '2024',
      link: 'https://coursera.org/share/e5065c4e9dd2144fd8b6d7fa927752ee',
      logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      title: 'Google Cybersecurity',
      provider: 'Google',
      date: '2023',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/W5PMY7HWRHRM',
      logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
},
{
      title: 'Google IT Support',
      provider: 'Google',
      date: '2023',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/QMFC7F55B4RS',
      logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
},
{
      title: 'Microsoft Cybersecurity Analyst',
      provider: 'Microsoft',
      date: '2023',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/GWV5WG6AUU99',
      logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
},
{
      title: 'Palo Alto Networks Cybersecurity',
      provider: 'Palo Alto Networks',
      date: '2024',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/9D6KE9DCBQPX',
      logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
},
{
      title: 'Cybersecurity Operations Fundamentals',
      provider: 'Cisco',
      date: '2025',
      link: 'https://www.coursera.org/account/accomplishments/specialization/CFVLBNF3532I',
      logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
},
{
      title: 'Microsoft IT Support Specialist',
      provider: 'Microsoft',
      date: '2025',
      link: 'https://coursera.org/share/8aab81c351513ede65eb86aa4ca979f3',
      logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
}
  ];

  return (
    <section id="certifications" className="py-16 bg-black/70 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-green-400 pb-2 glitch-text">
            <TextScramble text="Cybersecurity Certifications" />
          </h2>
          <p className="text-gray-400 mt-4">
            Professional qualifications and specialized training
          </p>
        </div>

        <CyberQuote />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gray-900/80 backdrop-blur-md rounded-lg overflow-hidden group hover:transform hover:translate-y-[-5px] transition-all duration-300 border border-green-400/30 hover:border-green-400/70 hover:shadow-lg hover:shadow-green-400/40"
            >
              <div className="h-32 bg-gray-800 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={cert.logo}
                  alt={cert.provider} 
                  className="opacity-30 absolute inset-0 w-full h-full object-cover"
                />
                <Award className="text-green-400 h-12 w-12 relative z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-white">{cert.title}</h3>
                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>{cert.provider}</span>
                  <span>{cert.date}</span>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mt-2"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
