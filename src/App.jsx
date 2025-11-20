import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ParticleNetwork from './components/ui/ParticleNetwork';

function App() {
  return (
    <div className="bg-[#050508] min-h-screen text-zinc-200 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <ParticleNetwork />
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;