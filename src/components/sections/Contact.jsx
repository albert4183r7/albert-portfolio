import React, { useState } from 'react';
import { CheckCircle2, Copy, Send } from 'lucide-react';
import { CONTENT } from '../../utils/content';
import MagneticButton from '../ui/MagneticButton';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText(CONTENT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Launch?</span>
        </h2>
        <p className="text-xl text-zinc-400 mb-12">
          I am currently open to full-time opportunities. If you need a software engineer who speaks fluent full-stack, I'm ready to deploy.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <MagneticButton href={`mailto:${CONTENT.email}`} variant="primary" className="px-8 py-4 rounded-full text-lg shadow-xl shadow-blue-500/20 gap-2">
            <Send size={20} /> Contact Me
          </MagneticButton>
          
          <button 
            onClick={copyEmail}
            className="px-8 py-4 bg-zinc-900 border border-white/10 text-zinc-300 rounded-full font-mono hover:bg-zinc-800 transition-all flex items-center gap-3 group"
          >
            <span>{CONTENT.email}</span>
            {copied ? <CheckCircle2 size={18} className="text-emerald-500" /> : <Copy size={18} className="group-hover:text-white" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;