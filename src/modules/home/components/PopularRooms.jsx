import { Link } from "react-router-dom";
import { rooms } from "../mock/mockRooms";  

export const PopularRooms = () => {
  return (
    <section className="py-12 px-6 relative">
      <h2 className="text-2xl font-bold text-center section-title mb-6">Habitaciones Populares</h2>

      <div className="relative flex items-center justify-center">
        {/* Botón Izquierdo */}
        <img 
          src="/left.png"  
        
          className="absolute left-[-40px] top-[40%] -translate-y-1/2 z-10 w-12 h-12 cursor-pointer hidden md:block ml-12"
        />

        {/* Contenedor de habitaciones */}
        <div className="flex justify-center gap-6 overflow-x-auto px-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white min-w-[250px]">
              <img src={room.img} className="rounded-md w-full" alt={room.name} />
              <h3 className="mt-2 font-semibold">{room.name}</h3>
              <p className="text-[#34A0A4] text-xl font-semibold">{room.price}</p>
            </div>
          ))}
        </div>

        {/* Botón Derecho */}
        <img 
          src="/right.png"  
        
          className="absolute right-[-40px] top-[40%] -translate-y-1/2 z-10 w-12 h-12 cursor-pointer hidden md:block mr-12"
        />
      </div>
    </section>
  );
};
