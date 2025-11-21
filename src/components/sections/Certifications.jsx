import React, { useState } from 'react';
import { ArrowUpRight, Award, X } from 'lucide-react';
import { CONTENT } from '../../utils/content';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-32 bg-gradient-to-b from-zinc-900/50 to-transparent border-y border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Certifications</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Validated expertise by industry leaders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTENT.certifications.map((cert, i) => (
            <div 
              key={i} 
              className="group relative bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="h-48 w-full bg-zinc-900 relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/20">
                     <ArrowUpRight className="text-white" size={24} />
                   </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">{cert.issuer}</div>
                <h3 className="text-white font-bold leading-snug mb-4 min-h-[3rem]">{cert.name}</h3>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-zinc-500 text-xs font-mono">Issued</span>
                  <span className="text-white text-xs font-mono bg-white/5 px-2 py-1 rounded">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in" onClick={() => setSelectedCert(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-zinc-900 rounded-2xl border border-white/10 p-2 shadow-2xl" onClick={(e) => e.stopPropagation()}>
             
             <button 
               className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-all backdrop-blur-sm border border-white/10"
               onClick={() => setSelectedCert(null)}
             >
               <X size={20} />
             </button>

             <img src={selectedCert.image} alt={selectedCert.name} className="w-full h-auto rounded-xl" />
             <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.name}</h3>
                <p className="text-zinc-400">{selectedCert.issuer} • {selectedCert.date}</p>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;