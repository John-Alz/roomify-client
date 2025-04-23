import React from "react";
import { X } from "lucide-react";

export const PanelContacto = ({ flag, handleFlag }) => {
  return (
    <>
      {flag && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={handleFlag}
        ></div>
      )}

      {/* Panel derecho de contacto */}
      <section
        className={`
          fixed inset-y-0 right-0 z-50
          bg-white
          flex flex-col justify-between
          p-8 space-y-6
          transform transition-transform duration-300 ease-in-out
          w-full sm:w-1/2
          min-w-[300px]
          text-black
          ${flag ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Botón de cierre */}
        <button
          className="absolute top-4 left-4 p-2 text-black hover:bg-gray-200 rounded"
          onClick={handleFlag}
          aria-label="Cerrar panel de contacto"
        >
          <X size={24} />
        </button>

        {/* Título */}
        <h2 className="text-2xl font-semibold text-left mt-15">
          Te ayudamos a gestionar tu reserva
        </h2>

        {/* Llamada */}
        <div className="flex justify-between items-start w-full">
          <div className="text-left">
            <p className="text-lg font-medium">
              Llámanos al{" "}
              <strong className="underline">+576015085377</strong>
            </p>
          </div>
        </div>

        {/* Chat */}
        <div className="flex justify-between items-center space-x-6">
          <p className="text-lg font-medium">
            <span className="underline">contacto@hotel.com</span>
          </p>

          <button className="border border-[#34A0A4] text-black rounded-full px-6 py-2 hover:bg-[#34A0A4]/10 transition">
            Envíanos un Mensaje
          </button>
        </div>

        {/* Enlace inferior */}
        <div className="w-full text-center mt-6">
          <a href="#" className="text-sm text-gray-600 underline">
            ¿Quieres contactar directamente con el hotel?
          </a>
        </div>
      </section>
    </>
  );
};
