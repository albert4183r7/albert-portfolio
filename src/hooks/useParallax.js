import { useState, useEffect } from 'react';

export const useParallax = (sensitivity = 15) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * sensitivity;
      const y = (e.clientY / window.innerHeight - 0.5) * sensitivity;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [sensitivity]);

  return offset;
};