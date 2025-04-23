import React from 'react';

export const AboutVideo = () => {
  return (
    <section className="flex justify-center px-8 pb-20">
      <div className="relative w-full max-w-6xl rounded-md overflow-hidden">
        <img
          src="public/sofa_verde.webp"
          alt="Sofá verde"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black transform -translate-x-1/2 -translate-y-1/2"></div>
        <img
          src="public/play_arrow.png"
          alt="Play Icon"
          className="absolute top-1/2 left-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10 transition-transform hover:scale-110"
        />
      </div>
    </section>
  );
};
