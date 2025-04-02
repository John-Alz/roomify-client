import React from 'react';

export const Hero = ({ title, subtitle }) => {
  return (
    <div className="bg-[url('/public/image.png')] bg-no-repeat bg-cover bg-center h-[520px] flex justify-center px-4 sm:h-[400px] md:h-[500px] lg:h-[520px] w-full">
      <div className="self-center text-center text-white w-full max-w-3xl">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl mt-4">{subtitle}</p>
      </div>
    </div>
  );
};