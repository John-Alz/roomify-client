import React from "react";

export const HeroSection = () => {
  return (
    <header className="relative w-full h-screen flex items-center justify-start px-6 md:px-20 pb-16 bg-gradient-to-b from-black/30 to-black/0">
     
      <img 
        src="public/Hero section.png"  
        className="absolute inset-0 w-full h-full object-cover"
        alt="Hero Background"
      />

      <div className="relative z-10 w-full md:w-[840px] text-white">
        <div className="text-white text-3xl hitespace-nowrap font-dm-sans tracking-wide md:text-5xl font-bold   leading-[50px] md:leading-[70px]">
        "Tu estancia perfecta te espera. <br /> Reserva de forma rápida, segura <br /> y sin complicaciones."
        </div>
      </div>

      {/* Botón Ver Video */}
      <a 
       
        className="absolute left-43 transform -translate-x-1/2 bottom-24 sm:bottom-16 md:bottom-24 flex items-center gap-4 sm:gap-6 "
      >
        <div className="text-white text-lg sm:text-xl md:text-2xl hitespace-nowrap font-dm-sans  tracking-wide">
          Ver video
        </div>
        <div className="relative flex items-center justify-center cursor-pointer">
          {/* Círculos de borde */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 absolute rounded-full border  cursor-pointer border-white/20"></div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 absolute rounded-full border cursor-pointer  border-white/30"></div>
          
          {/* Icono de Play */}
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 p-2 bg-white/0 rounded-full outline cursor-pointer outline-1 outline-offset-[-1px] outline-white/60 flex items-center justify-center">
            <img src="public/play_arrow.png" alt="Play Icon" className="w-6 h-6 cursor" />
          </div>
        </div>
      </a>
    </header>
  );
};
