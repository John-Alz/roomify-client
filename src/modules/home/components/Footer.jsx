import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white px-[216px] text-gray-800 pb-6 mt-10 mb-10">
      <div className="w-full max-w-screen-xl mx-auto py-20 inline-flex flex-col justify-start items-start gap-16">
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="inline-flex flex-col justify-start items-start gap-4">
            <div className="w-auto h-10 relative">
              {/* Contenedor del nombre del hotel con estilos aplicados */}
              <div className="left-0 top-0 absolute justify-start text-black text-5xl font-normal font-['Belleza'] leading-10 whitespace-nowrap">
                Name Hotel
              </div>
            </div>
            <div className="w-80 justify-start text-neutral-600 text-base font-normal font-['DM_Sans'] leading-tight">
              Descripción del hotel. Detalles que los hagan especial
            </div>
          </div>
          <div className="flex justify-start items-start gap-20">
            <div className="inline-flex flex-col justify-start items-start gap-2">
              <div className="text-center justify-start text-neutral-800 text-base font-normal font-['DM_Sans'] leading-tight whitespace-nowrap tracking-wide">
                Habitaciones
              </div>
              <div className="text-center justify-start text-neutral-800 text-base font-normal font-['DM_Sans'] leading-tight whitespace-nowrap tracking-wide">
                Servicios
              </div>
              <div className="text-center justify-start text-neutral-800 text-base font-normal font-['DM_Sans'] leading-tight whitespace-nowrap tracking-wide">
                Eventos
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-2">
              <div className="text-center justify-start text-neutral-800 text-base font-normal font-['DM_Sans'] leading-tight whitespace-nowrap tracking-wide">
                Habitaciones
              </div>
              <div className="text-center justify-start text-neutral-800 text-base font-normal font-['DM_Sans'] leading-tight whitespace-nowrap tracking-wide">
                Servicios
              </div>
              <div className="text-center justify-start text-neutral-800 text-base font-normal font-['DM_Sans'] leading-tight whitespace-nowrap tracking-wide">
                Eventos
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-2">
              <div className="text-center justify-start text-neutral-800 text-base font-normal font-['DM_Sans'] leading-tight whitespace-nowrap tracking-wide">
                Habitaciones
              </div>
              <div className="text-center justify-start text-neutral-800 text-base font-normal font-['DM_Sans'] leading-tight whitespace-nowrap tracking-wide">
                Servicios
              </div>
              <div className="text-center justify-start text-neutral-800 text-base font-normal font-['DM_Sans'] leading-tight whitespace-nowrap tracking-wide">
                Eventos
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="justify-start text-neutral-600 text-xs font-normal font-['DM_Sans'] leading-none">
            © Logo Hotel 2025. Derechos reservados
          </div>
          <div className="flex justify-start items-center gap-4">
            <div className="justify-start text-neutral-600 text-xs font-normal font-['DM_Sans'] leading-none">
              Encuentranos en:
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="relative overflow-hidden">
                {/* Aquí puedes agregar las imágenes que reemplazarán los íconos */}
                <img src="public/Vector.png" alt="icono1" className="h-5 w-5" />
              </div>
              <div className="relative overflow-hidden">
                <img src="public/Vector2.png" alt="icono2" className="h-5 w-5" />
              </div>
              <div className="relative overflow-hidden">
                <img src="public/Vector3.png" alt="icono3" className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
