import { Link } from "react-router-dom";
import { rooms } from "../mock/mockRooms";  

export const PopularRooms = () => {
  return (
    <section className="py-[59px] px-6 relative w-[84%] mx-auto">
      {/* Título Principal */}
      <h2 className="text-[40px] font-medium text-center section-title mb-[59px] w-full max-w-[410px] h-[50px] mx-auto whitespace-nowrap font-dm-sans tracking-wide">
        Habitaciones Populares
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Botón Izquierdo */}
        <img 
          src="/left.png"  
          className="absolute left-[-76px] top-[35%]  -translate-y-1/2 z-10 w-12 h-12 cursor-pointer hidden md:block ml-12"
        />

        {/* Contenedor de habitaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] px-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white flex flex-col items-start p-[10px] rounded-lg">
              {/* Imagen con bordes redondeados */}
              <img 
                src={room.img} 
                className="rounded-xl w-full h-auto object-cover mb-[28px]" 
                alt={room.name} 
              />

              {/* Nombre de la habitación */}
              <h3 className="text-[19px] font-medium text-left font-dm-sans tracking-wide w-full max-w-[257px] h-[25px] ml-4 whitespace-nowrap">
                {room.name}
              </h3>

              {/* Descripción de la habitación */}
              <p className="text-[15px] font-normal text-[#858585] font-dm-sans leading-snug w-full max-w-[141px] h-[16px] ml-4 whitespace-nowrap tracking-wide mb-[18px]">
                {room.description}
              </p>

              {/* Precio + Horario alineado correctamente */}
              <div className="flex items-baseline ml-[17px]">
                {/* Precio */}
                <p className="text-[27px] font-normal text-[#34A0A4] font-dm-sans leading-[35px] whitespace-nowrap tracking-wide w-[75px] h-[35px]">
                  {room.price}
                </p>

                {/* Horario con mejor separación */}
                <p className="text-[15px] font-normal text-[#1A759F] font-dm-sans leading-[20px] hitespace-nowrap tracking-wide w-[44px] h-[20px] ml-2 w">
                  {room.horario}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Derecho */}
        <img 
          src="/right.png"  
          className="absolute right-[-76px] top-[35%]  -translate-y-1/2 z-10 w-12 h-12 cursor-pointer hidden md:block mr-12"
        />
      </div>
    </section>
  );
};
