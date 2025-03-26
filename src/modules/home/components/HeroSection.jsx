import React from "react";

export const HeroSection = () => {
  return (
    <header className="relative w-full h-screen flex items-center justify-start px-6 md:px-20 pb-16 bg-gradient-to-b from-black/30 to-black/0">
      {/* Imagen de fondo */}
      <img 
        src="public/Hero section.png"  
        className="absolute inset-0 w-full h-full object-cover"
        alt="Hero Background"
      />

      {/* Contenido de la sección */}
      <div className="relative z-10 w-full md:w-[840px] text-white">
        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide leading-[50px] md:leading-[70px]">
          "Tu estancia perfecta te espera. <br /> Reserva de forma rápida, segura <br /> y sin complicaciones."
        </h1>
      </div>

      {/* Botón Ver Video */}
      <a className="absolute left-1/8 transform -translate-x-1/2 bottom-24 sm:bottom-16 md:bottom-24 flex items-center gap-4 sm:gap-6 cursor-pointer">
        <span className="text-white text-lg sm:text-xl md:text-2xl font-dm-sans tracking-wide">
          Ver video
        </span>
        <div className="relative flex items-center justify-center">
          {/* Círculos animados */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 absolute rounded-full border border-white/20 animate-ping"></div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 absolute rounded-full border border-white/30 animate-pulse"></div>
          
          {/* Icono de Play */}
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 p-2 bg-white/10 rounded-full outline outline-1 outline-offset-[-1px] outline-white/60 flex items-center justify-center">
            <img src="public/play_arrow.png" alt="Play Icon" className="w-6 h-6" />
          </div>
        </div>
      </a>
    </header>
  );
};
