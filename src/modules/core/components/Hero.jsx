import React from 'react';

export const Hero = ({ title, subtitle }) => {
  return (
    <div className="relative w-full">
      <div className="bg-[url('/image.png')] bg-no-repeat bg-cover bg-center min-h-[410px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] flex justify-center items-center px-4">
        <div className="bg-black/40 w-full h-full absolute top-0 left-0" />
        <div className="relative z-10 text-center text-white w-full max-w-3xl px-4">
          <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold leading-tight">{title}</h2>
          <p className="text-base sm:text-lg md:text-xl mt-4">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
