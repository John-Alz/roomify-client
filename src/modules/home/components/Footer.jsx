import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white px-4 sm:px-10 lg:px-[216px] text-gray-800 pb-6 mt-10 mb-10">
      <div className="w-full max-w-screen-xl mx-auto py-10 flex flex-col justify-start items-start gap-16">
        
        {/* Sección superior */}
        <div className="w-full flex flex-wrap justify-between items-start gap-10">
          
          {/* Nombre del hotel y descripción */}
          <div className="flex flex-col justify-start items-start gap-4 w-full sm:w-auto">
            <div className="text-black text-4xl md:text-5xl font-normal font-['Belleza'] leading-10">
              Name Hotel
            </div>
            <p className="w-full sm:w-80 text-neutral-600 text-base font-normal font-['DM_Sans'] leading-tight">
              Descripción del hotel. Detalles que lo hagan especial.
            </p>
          </div>

          {/* Listado de enlaces */}
          <div className="flex flex-wrap sm:flex-nowrap justify-start items-start gap-8 sm:gap-14 md:gap-20">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex flex-col justify-start items-start gap-2">
                {["Habitaciones", "Servicios", "Eventos"].map((item, idx) => (
                  <div key={idx} className="text-neutral-800 text-base font-normal font-['DM_Sans'] leading-tight whitespace-nowrap tracking-wide">
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>

        {/* Sección inferior */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs font-normal font-['DM_Sans'] leading-none">
            © Logo Hotel 2025. Derechos reservados
          </p>

          <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
            <p className="text-neutral-600 text-xs font-normal font-['DM_Sans'] leading-none">
              Encuéntranos en:
            </p>
            <div className="flex justify-start items-center gap-2">
              {["Vector.png", "Vector2.png", "Vector3.png"].map((icon, index) => (
                <img key={index} src={`/public/${icon}`} alt={`icono${index + 1}`} className="h-5 w-5" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
