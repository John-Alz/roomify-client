import React from "react";

export const HeroContact = () => {
    return (
        <header className="relative w-full h-screen flex items-center justify-center px-6 md:px-20 pb-16 bg-gradient-to-b from-black/30 to-black/0">
 
            <img
              src="/hero.jpg" 
              className="absolute inset-0 w-full h-full object-cover z-[-1]"
              alt="Hero Background"
            />

            <div className="relative z-10 w-full md:w-[840px] text-white text-center flex flex-col items-center">
              <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-wide leading-[70px] md:leading-[70px]">
                Contactanos
              </h1>
              <p className="mt-4 text-lg md:text-xl font-semibold">
                 Ya sea que tengas preguntas, necesites ayuda o solo quieras comentarnos algo.
              </p>
            </div>

        </header>
    );
};
