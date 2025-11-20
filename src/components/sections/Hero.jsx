import React from 'react';
import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import { CONTENT } from '../../utils/content';
import { useParallax } from '../../hooks/useParallax';
import { useTypewriter } from '../../hooks/useTypewriter';
import MagneticButton from '../ui/MagneticButton';

const Hero = () => {
  const offset = useParallax(25);
  const headline = useTypewriter("I Transform Complex\nProblems into\nReliable Solutions.", 35, 200);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-950/30 border border-blue-800/50 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">{CONTENT.availability}</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight min-h-[160px]">
            {headline}
            <span className="animate-pulse text-blue-500">_</span>
          </h1>
          
          {/* Updated Copy: Value-Driven but Grounded */}
          <p className="text-lg text-zinc-400 max-w-lg leading-relaxed border-l-2 border-blue-500/50 pl-6">
            I focus on building practical, efficient, and secure IT systems. From responsive web applications to optimized cloud configurations, I deliver work that is clean, maintainable, and impactful.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
             <MagneticButton href={`mailto:${CONTENT.email}`} variant="primary" className="px-8 py-4 rounded-xl text-base shadow-lg shadow-blue-900/20 gap-2 group">
               Contact Me <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
             </MagneticButton>
             
             <a 
               href={CONTENT.cvLink} 
               download 
               className="px-6 py-4 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-white/30 transition-all flex items-center gap-2"
             >
               <Download size={18} /> Download CV
             </a>
          </div>
          
          <div className="flex gap-4 pt-2">
             <a href={CONTENT.social.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github size={24} /></a>
             <a href={CONTENT.social.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
          </div>
        </div>

        {/* Expanded Profile Picture Area */}
        <div className="relative flex justify-center perspective-[1000px]">
           <div 
             className="relative w-[350px] h-[350px] md:w-[550px] md:h-[550px] transition-transform duration-75 ease-linear"
             style={{ transform: `rotateX(${offset.y}deg) rotateY(${offset.x}deg)` }}
           >
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-12 rounded-full border border-cyan-500/20 animate-[spin_20s_linear_infinite_reverse]"></div>
              
              <div className="absolute inset-[10%] bg-zinc-900/80 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center shadow-2xl shadow-blue-500/10">
                 <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/5 group">
                   {/* Placeholder for your actual photo */}
                   <img 
                     src="https://placehold.co/800x800/0f172a/ffffff?text=A" 
                     alt="Profile" 
                     className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                   />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;