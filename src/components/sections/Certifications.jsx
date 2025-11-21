import React, { useState } from 'react';
import { ArrowUpRight, Award, X } from 'lucide-react';
import { CONTENT } from '../../utils/content';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <section id="certifications" className="py-32 bg-gradient-to-b from-zinc-900/50 to-transparent border-y border-white/5 backdrop-blur-sm relative">
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
                  <h3 className="text-white font-bold leading-snug mb-4 min-h-[3rem] line-clamp-2">{cert.name}</h3>
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-zinc-500 text-xs font-mono">Issued</span>
                    <span className="text-white text-xs font-mono bg-white/5 px-2 py-1 rounded">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAGIAN 2: MODAL POPUP (Sekarang berada DI LUAR Section) */}
      {/* Posisi Fixed akan mengacu pada viewport layar penuh, bukan section */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fade-in" 
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-5xl flex flex-col items-center justify-center pointer-events-auto" 
            onClick={(e) => e.stopPropagation()}
          >
             
             {/* Tombol Close */}
             <button 
               className="absolute -top-16 right-0 md:-right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all border border-white/10 z-50"
               onClick={() => setSelectedCert(null)}
             >
               <X size={24} />
             </button>

             {/* Container Gambar & Teks */}
             <div className="flex flex-col items-center w-full">
                {/* Gambar dibatasi tingginya agar pas di tengah */}
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.name} 
                  className="w-auto h-auto max-h-[50vh] md:max-h-[55vh] max-w-full object-contain rounded-lg shadow-2xl shadow-blue-900/20 border border-white/10" 
                />
                
                {/* Keterangan di bawah gambar */}
                <div className="mt-4 text-center bg-zinc-950/80 border border-white/10 px-6 py-3 backdrop-blur-md rounded-full">
                   <h3 className="text-lg font-bold text-white mb-0.5">{selectedCert.name}</h3>
                   <p className="text-zinc-400 text-sm">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
             </div>
             
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;