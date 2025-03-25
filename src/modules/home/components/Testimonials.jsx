import React from "react";
import { Link } from "react-router-dom";

export const Testimonials = () => {
  return (
    <div className="w-[74%] flex flex-col justify-center items-center mt-12 gap-10 mx-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-center text-siah text-4xl whitespace-nowrap font-semibold font-dm-sans tracking-wide">
          Lo Que Opinan Nuestros Clientes.
        </div>
      </div>
      <div className="self-stretch pt-10 pb-2 flex flex-col justify-center mt-12 items-center gap-6 overflow-hidden">
        <div className="w-[1400px] h-44 relative flex justify-center items-center">
          <div className="w-[400px] h-44 px-6 pt-8 pb-6 mr-28 absolute bg-white rounded-[40px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center gap-4 left-[40px] top-[10px]">
            <div className="w-36 text-center text-black mr-30 text-lg font-bold font-['Poppins']">
              Cameron Williamson
            </div>
            <div className="w-[380px] text-center text-black text-lg font-light font-['Poppins']">
              Servicio excepcional, superó mis expectativas en todos los sentidos. ¡Muy recomendado!
            </div>
            <img
              className="w-8 h-16 left-[152px] top-[-35px] absolute rounded-[40px]"
              src="public/testimonio1.png"
            />
          </div>
          <div className="w-[480px] h-44 px-6 pt-12 pb-6 absolute bg-white rounded-[40px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center gap-6 left-[480px] top-0">
            <div className="w-36 text-center text-black text-lg font-semibold font-['Poppins']">
              Fatima Taylor
            </div>
            <div className="w-[380px] text-center text-black text-xl font-normal font-['Poppins']">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            </div>
            <img
              className="w-16 h-16 left-[206px] top-[-35px] absolute rounded-[40px]"
              src="public/testimonio2.png"
            />
          </div>
          <div className="px-6 pt-12 pb-6 absolute bg-white rounded-[40px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center gap-6 left-[996px] top-[12px]">
            <div className="w-36 text-center text-black text-lg ml-14 font-bold font-['Poppins']">
              Sara Watson
            </div>
            <div className="w-[380px] text-center text-black text-lg font-light font-['Poppins']">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
            </div>
            <img
              className="w-16 h-16 left-[206px] top-[-35px] absolute rounded-[40px]"
              src="public/testimnio3.png"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 ml-5 mt-8 mb-20">
          <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
          <div className="w-9 h-3 bg-teal-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
