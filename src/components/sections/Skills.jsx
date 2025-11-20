import React from 'react';
import { CONTENT } from '../../utils/content';

const MarqueeRow = ({ items, direction = 'normal', speed = '30s' }) => (
  <div className="relative flex w-full overflow-hidden py-6">
    {/* Fade Masks */}
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none"></div>
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none"></div>
    
    <div 
      className="flex whitespace-nowrap"
      style={{ 
        animation: `marquee ${speed} linear infinite`,
        animationDirection: direction 
      }}
    >
      {/* Duplicate items 4 times to ensure seamless loop on wide screens */}
      {[...items, ...items, ...items, ...items].map((skill, index) => (
        <div key={index} className="flex items-center gap-3 mx-8 group cursor-default">
          <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-xl p-3 border border-white/5 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
             <img 
               src={skill.url} 
               alt={skill.name} 
               className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0" 
             />
          </div>
          <span className="text-lg font-bold text-zinc-500 group-hover:text-white transition-colors">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Technical Stack</h2>
        <p className="text-zinc-400 text-sm">The comprehensive toolkit I use to deliver reliable solutions.</p>
      </div>

      <div className="space-y-4">
        {/* Row 1: Languages - Faster (25s) */}
        <MarqueeRow items={CONTENT.skills.languages} direction="normal" speed="25s" /> 
        
        {/* Row 2: Cloud - Slower (45s) */}
        <MarqueeRow items={CONTENT.skills.cloud} direction="reverse" speed="45s" />
        
        {/* Row 3: Tools - Medium (35s) */}
        <MarqueeRow items={CONTENT.skills.tools} direction="normal" speed="35s" />
      </div>
    </section>
  );
};

export default Skills;