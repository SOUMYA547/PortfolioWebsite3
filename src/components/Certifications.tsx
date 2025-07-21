import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Certifications = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerView = 3;

  const certifications = [
    {
      title: 'Cisco Cybersecurity Specialization',
      provider: 'Coursera',
      date: '2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/CFVLBNF3532I',
      logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
    },
    {
      title: 'Palo Alto Networks Cybersecurity Specialization',
      provider: 'Coursera',
      date: '2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/9D6KE9DCBQPX',
      logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
    },
    {
      title: 'Microsoft IT Support Specialization',
      provider: 'Coursera',
      date: '2025',
      link: 'https://www.coursera.org/account/accomplishments/specialization/F1RX7W0AW0ZS',
      logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
    },
    {
      title: 'Microsoft Cybersecurity Specialization',
      provider: 'Coursera',
      date: '2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/GWV5WG6AUU99',
      logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
    },
    {
      title: 'Google IT Support Specialization',
      provider: 'Coursera',
      date: '2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/QMFC7F55B4RS',
      logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
    },
    {
      title: 'Google Cybersecurity Specialization',
      provider: 'Coursera',
      date: '2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/W5PMY7HWRHRM',
      logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= certifications.length ? 0 : prev + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, certifications.length - itemsPerView) : Math.max(0, prev - itemsPerView)
    );
  };

  const visibleCertifications = certifications.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section id="certifications" className="py-16 bg-black/70 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-green-400 pb-2 glitch-text">
            Cybersecurity Certifications
          </h2>
          <p className="text-gray-400 mt-4">
            Professional qualifications and specialized training
          </p>
        </div>

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
              disabled={currentIndex + itemsPerView >= certifications.length}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCertifications.map((cert, index) => (
              <div 
                key={currentIndex + index}
                className="bg-gray-900/80 backdrop-blur-md rounded-lg overflow-hidden group hover:transform hover:translate-y-[-5px] transition-all duration-300 border border-green-400/30 hover:border-green-400/70 glow-border"
              >
                <div className="h-32 bg-gray-800 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={cert.logo}
                    alt={cert.provider} 
                    className="opacity-30 absolute inset-0 w-full h-full object-cover"
                  />
                  <Award className="text-green-400 h-12 w-12 relative z-10 shadow-lg shadow-green-400/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-white glow-text">{cert.title}</h3>
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
          
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(certifications.length / itemsPerView) }).map((_, index) => (
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