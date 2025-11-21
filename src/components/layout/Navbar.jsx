import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { CONTENT } from '../../utils/content';
import MagneticButton from '../ui/MagneticButton';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Skills', id: '#skills' },
    { name: 'Projects', id: '#projects' },
    { name: 'Certifications', id: '#certifications' },
    { name: 'Contact', id: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
            <Terminal size={20} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-tight leading-none text-lg">{CONTENT.name}</span>
            <span className="text-[10px] font-mono text-blue-400 tracking-widest uppercase">{CONTENT.role}</span>
          </div>
        </div>
        
        {/* Desktop Navigation - Adjusted visibility for better responsiveness */}
        <div className="hidden lg:flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.slice(0, 3).map((item) => (
            <a 
              key={item.name} 
              href={item.id} 
              className="px-5 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full text-sm font-medium text-white bg-blue-600/20 hover:bg-blue-600 transition-all border border-blue-500/50"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Toggle - Visible on smaller screens */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 text-white bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-zinc-950/95 border-b border-white/10 backdrop-blur-xl p-6 flex flex-col gap-4 shadow-2xl animate-fade-in z-40">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.id} 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-medium text-zinc-300 hover:text-white py-2 border-b border-white/5 last:border-0"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;