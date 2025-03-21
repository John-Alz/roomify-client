import React from "react";
import { Link } from "react-router-dom";

export const Testimonials = () => {
  return (
    <section className="w-full bg-white py-12 flex flex-col mt-18 items-center text-center overflow-hidden">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Lo Que Opinan Nuestros Clientes.
      </h2>

      {/* Contenedor de testimonios con diseño centralizado */}
      <div className="w-full max-w-5xl overflow-hidden relative mt-10 flex justify-center">
        <div className="flex justify-center items-center gap-8 transition-all duration-300 relative">

          {/* Testimonio izquierdo (mitad visible) */}
          <div className="relative w-72 h-32 rounded-[20px]  scale-95  transition-all duration-300  shadow-lg flex flex-col items-center p-3 -translate-x-20"
            style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}>
            <img 
              src="/Frame 49(2).png" 
              className="w-14 h-14 object-cover object-top rounded-full -mt-3 border-4 border-white"
            />
            <h3 className="text-sm font-semibold mt-2">Juan Pérez</h3>
            <p className="text-gray-600 mt-1 text-xs text-center">"Servicio excelente y muy profesional."</p>
          </div>

          {/* Testimonio central (completo) */}
          <div className="relative w-96 h-36 rounded-[25px] overflow-hidden shadow-xl transform scale-105 transition-all duration-300 bg-white flex flex-col items-center p-4">
            <img 
              src="/Frame 49(2).png" 
              alt="Cliente 2"
              className="w-18 h-18 object-cover object-top rounded-full -mt-5 border-4 border-white"
            />
            <h3 className="text-sm font-semibold mt-2">Fatima Taylor</h3>
            <p className="text-gray-600 mt-1 text-xs text-center">"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui."</p>
          </div>

          {/* Testimonio derecho (mitad visible) */}
          <div className="relative w-72 h-42 rounded-[20px] overflow-hidden scale-95  transition-all duration-300 bg-white shadow-lg flex flex-col items-center p-3 translate-x-20"
            style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}>
            <img 
              src="/Frame 49(2).png" 
              alt="Cliente 3"
              className="w-14 h-14 object-cover object-top  rounded-full border-6 border-white"
            />
            <h3 className="text-sm font-semibold mt-2">Ana Gómez</h3>
            <p className="text-gray-600 mt-1 text-xs text-center">"Una experiencia maravillosa, totalmente recomendable."</p>
          </div>

        </div>
      </div>
      
      {/* Indicadores de posición */}
      <div className="flex mt-4 space-x-2">
        <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
        <span className="w-6 h-2 bg-[#34A0A4] rounded-full"></span>
        <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
      </div>
    </section>
  );
};
