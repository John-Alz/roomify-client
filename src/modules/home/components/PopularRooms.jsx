import { Link } from "react-router-dom";
import { rooms } from '../mock/mockRooms';  // Aquí usamos llaves
  

export const PopularRooms = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold text-center section-title mb-6">Habitaciones Populares</h2>
      <div className="flex justify-center gap-4 overflow-x-auto">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white shadow-lg rounded-lg p-4 min-w-[250px]">
            <img src={room.img} className="rounded-md w-full" alt={room.name} />
            <h3 className="mt-2 font-semibold">{room.name}</h3>
            <p className="text-[#34A0A4] text-xl font-semibold">{room.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
