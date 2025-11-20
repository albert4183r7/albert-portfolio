import React, { useState, useRef } from 'react';

const MagneticButton = ({ children, href, onClick, className = "", variant = "primary" }) => {
  const btnRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const baseStyles = "relative inline-flex items-center justify-center transition-transform duration-200 ease-out cursor-pointer";
  const variants = {
    primary: "bg-white text-black font-bold hover:bg-blue-50 hover:text-blue-900",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/30",
    outline: "border border-white/20 text-zinc-300 hover:text-white hover:border-white/50"
  };

  if (onClick) {
    return (
      <button 
        ref={btnRef} 
        onClick={onClick} 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave} 
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <a 
      ref={btnRef} 
      href={href} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave} 
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

export default MagneticButton;