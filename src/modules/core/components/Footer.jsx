import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white font-dm-sans tracking-wide text-gray-800 pb-6 mt-10 mb-10">
      {/* Contenedor principal con un 80% de ancho siempre */}
      <div className="w-[85%] mx-auto py-10 px-4 sm:px-6 md:px-10 lg:px-0">
        
        {/* Sección principal */}
        <div className="w-full flex flex-wrap justify-between gap-20">
          {/* Nombre y descripción */}
          <div className="flex flex-col gap-6 w-full sm:w-auto px-6 py-4">
            <div className="text-black text-4xl md:text-5xl font-['Belleza'] leading-10">
              Name Hotel
            </div>
            <p className="w-full sm:w-80 text-[#555555]">
              Descripción del hotel. Detalles que los <br /> hagan especial.
            </p>
          </div>

          {/* Enlaces de navegación */}
          <div className="flex flex-wrap sm:flex-nowrap gap-12 sm:gap-16 md:gap-24">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="text-[#222222]">Habitaciones</div>
                <div className="text-[#222222]">Servicios</div>
                <div className="text-[#222222]">Eventos</div>
              </div>
            ))}
          </div>
        </div>

        {/* Derechos y redes sociales */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 px-6 py-4">
          <p className="text-[#4D4D4D] text-xs">© Logo Hotel 2025. Derechos reservados</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <p className="text-[#4D4D4D] text-xs">Encuéntranos en:</p>
            <div className="flex items-center gap-4">
              <Facebook className="h-6 w-6" stroke="none" fill="#4D4D4D" />
              <Instagram className="h-6 w-6" stroke="#4D4D4D" />
              <Twitter className="h-6 w-6" stroke="none" fill="#4D4D4D" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
