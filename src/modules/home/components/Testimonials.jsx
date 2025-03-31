import React from "react";
import { Link } from "react-router-dom";

export const Testimonials = () => {
  return (
    <section className="w-[74%] flex flex-col justify-center items-center mt-12 gap-10 mx-auto">
      <header className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-center text-[#292D32] ml-6 text-xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap font-bold font-dm-sans tracking-wide">
          Lo Que Opinan Nuestros Clientes.
        </h2>
      </header>
      <article className="self-stretch pt-10 pb-2 flex flex-col justify-center mt-8 items-center gap-6 overflow-hidden">
        <section className="w-[1400px] h-44 relative flex justify-center items-center">
          <article className="w-[400px] h-44 px-6 pt-8 pb-6 mr-28 absolute bg-white rounded-[40px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center gap-4 left-[40px] top-[10px]">
            <h3 className="w-36 text-center text-black mr-30 text-lg font-bold font-['Poppins']">
              Cameron Williamson
            </h3>
            <p className="w-[380px] text-center text-black text-lg font-regular font-['Poppins']">
              Servicio excepcional, superó mis expectativas en todos los sentidos. ¡Muy recomendado!
            </p>
            <img
              className="w-8 h-16 left-[152px] top-[-35px] absolute rounded-[40px]"
              src="public/testimonio1.png"
              alt="Testimonio de Cameron Williamson"
            />
          </article>
          <article className="w-[480px] h-44 px-6 pt-12 pb-6 absolute bg-white rounded-[40px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center gap-6 left-[480px] top-0">
            <h3 className="w-36 text-center text-black text-lg font-semibold font-['Poppins']">
              Fatima Taylor
            </h3>
            <p className="w-[380px] text-center text-black text-xl font-regular font-['Poppins']">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            </p>
            <img
              className="w-16 h-16 left-[206px] top-[-35px] absolute rounded-[40px]"
              src="public/testimonio2.png"
              alt="Testimonio de Fatima Taylor"
            />
          </article>
          <article className="px-6 pt-12 pb-6 absolute bg-white rounded-[40px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center gap-6 left-[996px] top-[12px]">
            <h3 className="w-36 text-center text-black text-lg ml-14 font-bold font-['Poppins']">
              Sara Watson
            </h3>
            <p className="w-[380px] text-center text-black text-lg font-regular font-['Poppins']">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
            </p>
            <img
              className="w-16 h-16 left-[206px] top-[-35px] absolute rounded-[40px]"
              src="public/testimnio3.png"
              alt="Testimonio de Sara Watson"
            />
          </article>
        </section>

        <nav className="flex justify-center items-center gap-3 ml-5 mt-8 mb-20">
          <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
          <span className="w-9 h-3 bg-teal-600 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
        </nav>
      </article>
    </section>
  );
};
