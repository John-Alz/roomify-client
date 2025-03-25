import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white px-4 sm:px-10 whitespace-nowrap font-16 font-dm-sans tracking-wide lg:px-[115px] text-gray-800 pb-6 mt-10 mb-10">
      <div className="w-full max-w-screen-xl mx-auto py-10 flex flex-col justify-start items-start gap-16">
        
        {/* Sección superior */}
        <div className="w-full flex flex-wrap justify-between items-start gap-20">
          
          {/* Nombre del hotel y descripción */}
          <div className="flex flex-col justify-start items-start gap-6 w-full sm:w-auto">
            <div className="text-black text-4xl md:text-5xl font-normal font-['Belleza'] leading-10">
              Name Hotel
            </div>
            <p className="w-full sm:w-80 text-neutral-600 text-base font-normal font-['DM_Sans'] leading-tight">
              Descripción del hotel. Detalles que los <br /> hagan especial.
            </p>
          </div>

          {/* Listado de enlaces */}
          <div className="flex flex-wrap sm:flex-nowrap justify-start items-start gap-12 sm:gap-16 md:gap-24">
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="text-neutral-800 text-base font-normal whitespace-nowrap font-dm-sans tracking-wide leading-tight">Habitaciones</div>
              <div className="text-neutral-800 text-base font-normal whitespace-nowrap font-dm-sans tracking-wide leading-tight">Servicios</div>
              <div className="text-neutral-800 text-base font-normal whitespace-nowrap font-dm-sans tracking-wide leading-tight">Eventos</div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="text-neutral-800 text-base font-normal whitespace-nowrap font-dm-sans tracking-wide leading-tight">Habitaciones</div>
              <div className="text-neutral-800 text-base font-normal whitespace-nowrap font-dm-sans tracking-wide leading-tight">Servicios</div>
              <div className="text-neutral-800 text-base font-normal whitespace-nowrap font-dm-sans tracking-wide leading-tight">Eventos</div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="text-neutral-800 text-base font-normal whitespace-nowrap font-dm-sans tracking-wide leading-tight">Habitaciones</div>
              <div className="text-neutral-800 text-base font-normal whitespace-nowrap font-dm-sans tracking-wide leading-tight">Servicios</div>
              <div className="text-neutral-800 text-base font-normal whitespace-nowrap font-dm-sans tracking-wide leading-tight">Eventos</div>
            </div>
          </div>
        </div>

        {/* Sección inferior */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-xs font-normal whitespace-nowrap font-dm-sans tracking-wide leading-none">
            © Logo Hotel 2025. Derechos reservados
          </p>

          <div className="flex flex-col text-gray-700 whitespace-nowrap font-dm-sans tracking-wide sm:flex-row justify-start items-center gap-6">
            <p className="text-neutral-600 text-xs font-normal whitespace-nowrap font-dm-sans tracking-wide leading-none">
              Encuéntranos en:
            </p>
            <div className="flex justify-start  items-center gap-4">
              <img src="/public/Vector.png" alt="icono1" className="h-5 w-3" />
              <img src="/public/Vector3.png" alt="icono2" className="h-5 w-6" />
              <img src="/public/Vector2.png" alt="icono3" className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
