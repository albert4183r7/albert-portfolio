import React from 'react';
import { Cloud, Globe, Zap, Github } from 'lucide-react';
import { CONTENT } from '../../utils/content';
import TiltCard from '../ui/TiltCard';
import MagneticButton from '../ui/MagneticButton';

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Selected works demonstrating production-ready IT solutions.
          </p>
        </div>

        <div className="space-y-20">
          {CONTENT.projects.map((project, i) => (
            <TiltCard key={i} className={`group relative rounded-3xl bg-zinc-900/50 border border-white/10 p-1 overflow-hidden hover:border-blue-500/30 transition-colors`}>
              <div className={`flex flex-col lg:flex-row gap-12 items-center p-8 lg:p-12`}>
                <div className={`w-full lg:w-1/2 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-white/5 shadow-2xl group-hover:shadow-blue-500/10 transition-all">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-lg font-bold opacity-50">Project Visual</div>
                      </div>
                    </div>
                </div>

                <div className={`w-full lg:w-1/2 space-y-6 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map(t => (
                        <span key={t} className="text-sm text-zinc-300 font-mono border-b border-zinc-700 pb-0.5">{t}</span>
                      ))}
                    </div>
                    <div className="pt-4">
                      <MagneticButton href={project.link} variant="outline" className="px-6 py-3 rounded-xl flex items-center gap-2 group/btn">
                        View Code <Github size={18} className="group-hover/btn:text-white" />
                      </MagneticButton>
                    </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;