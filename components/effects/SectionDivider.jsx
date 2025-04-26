'use client';
import React from 'react';

const SectionDivider = ({ text }) => {
  return (
    <div className="relative w-full overflow-hidden py-6" style={{ transform: 'rotate(-3deg)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700"></div>
      <div className="relative flex whitespace-nowrap animate-scroll">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="text-white font-bold text-lg mx-8 tracking-wider">
            {text} ✦ {text} ✦ {text} ✦
          </span>
        ))}
      </div>
    </div>
  );
};

export default SectionDivider;
