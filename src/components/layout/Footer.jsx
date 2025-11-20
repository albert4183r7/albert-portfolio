import React from 'react';
import { MapPin } from 'lucide-react';
import { CONTENT } from '../../utils/content';

const Footer = () => (
  <footer className="py-8 bg-zinc-950 text-center relative z-10 border-t border-white/5">
    <div className="flex items-center justify-center gap-2 text-zinc-600 text-xs font-mono uppercase tracking-widest">
      <MapPin size={12} /> Engineered in Indonesia • © {new Date().getFullYear()} {CONTENT.name}
    </div>
  </footer>
);

export default Footer;