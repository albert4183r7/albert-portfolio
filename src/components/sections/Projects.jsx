import React, { useState } from 'react';
import { Github, ExternalLink, PlayCircle, Globe, Zap, X } from 'lucide-react';
import { CONTENT } from '../../utils/content';
import TiltCard from '../ui/TiltCard';
import MagneticButton from '../ui/MagneticButton';

const VideoModal = ({ src, onClose }) => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fade-in" onClick={onClose}>
    <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl" onClick={e => e.stopPropagation()}>
      <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-red-500/80 transition-colors">
        <X size={24} />
      </button>
      <video src={src} className="w-full h-full" controls autoPlay muted loop />
    </div>
  </div>
);

const Projects = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Selected works demonstrating production-level IT solutions.
          </p>
        </div>

        <div className="space-y-24">
          {CONTENT.projects.map((project, i) => (
            <TiltCard key={i} className={`group relative rounded-3xl bg-zinc-900/50 border border-white/10 p-1 overflow-hidden hover:border-blue-500/30 transition-colors`}>
              <div className={`flex flex-col lg:flex-row gap-12 items-center p-8 lg:p-12`}>
                
                {/* Project Visual Area - Clickable */}
                <div className={`w-full lg:w-1/2 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    {/* Glow Effect behind image */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`}></div>
                    
                    <div 
                      onClick={() => {
                        if (project.demo) setVideoSrc(project.demo);
                        else if (project.production) window.open(project.production, '_blank');
                        else window.open(project.link, '_blank');
                      }}
                      className="block relative aspect-video bg-zinc-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer z-10"
                    >
                      {/* Image Rendering */}
                      {project.image ? (
                        <div className="w-full h-full relative">
                           <img 
                            src={project.image} 
                            alt={project.title} 
                            className="absolute inset-0 w-full h-full object-contain p-2 bg-zinc-950 transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Subtle overlay gradient to make it look premium */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                        </div>
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      )}

                      {/* Hover Action Overlay - Now Clickable */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                        <div className="text-white font-bold flex flex-col items-center gap-2 bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors">
                          {project.demo ? <PlayCircle size={32} /> : (project.production ? <Globe size={32} /> : <Github size={32} />)}
                          <span>{project.demo ? "Watch Demo" : (project.production ? "View Live" : "View Code")}</span>
                        </div>
                      </div>
                    </div>
                </div>

                {/* Project Details */}
                <div className={`w-full lg:w-1/2 space-y-8 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                         <Zap size={16} className="text-white" />
                      </div>
                      <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-white/5 pl-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 text-xs font-mono text-zinc-300 bg-white/5 rounded-full border border-white/5 hover:border-white/20 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-6 flex flex-wrap gap-4">
                      {/* Conditionally Render Production Link */}
                      {project.production && (
                        <MagneticButton href={project.production} variant="primary" className="px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-900/20">
                          Live App <Globe size={18} />
                        </MagneticButton>
                      )}

                      {/* Conditionally Render Video Demo Link - triggers modal */}
                      {project.demo && (
                        <MagneticButton onClick={() => setVideoSrc(project.demo)} variant="primary" className="px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-orange-900/20">
                          Watch Demo <PlayCircle size={18} />
                        </MagneticButton>
                      )}

                      <MagneticButton href={project.link} variant="outline" className="px-6 py-3 rounded-xl flex items-center gap-2 group/btn">
                        Source Code <Github size={18} className="group-hover/btn:text-white" />
                      </MagneticButton>
                    </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {videoSrc && <VideoModal src={videoSrc} onClose={() => setVideoSrc(null)} />}
    </section>
  );
};

export default Projects;