import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Internships } from './components/Internships';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MatrixRain } from './components/MatrixRain';
import { ScrollToTop } from './components/ScrollToTop';
import { PasswordStrength } from './components/PasswordStrength';
import { VirusScan } from './components/VirusScan';
import { VisitorConsole } from './components/VisitorConsole';

function App() {
  const [showVirusScan, setShowVirusScan] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVirusScan(false);
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative text-gray-100 font-mono">
      <MatrixRain />
      {showVirusScan && (
        <VirusScan onScanComplete={() => setShowVirusScan(false)} />
      )}
      {showContent && (
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <section className="py-16 bg-black/70">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <PasswordStrength />
                </div>
              </div>
            </section>
            <Skills />
            <Projects />
            <Certifications />
            <Internships />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
          <VisitorConsole />
        </div>
      )}
    </div>
  );
}

export default App;