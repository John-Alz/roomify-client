
import { Link } from "react-router-dom";
const PopularRooms = () => {
    return (
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center section-title mb-6">Habitaciones Populares</h2>
        <div className="flex justify-center gap-4 overflow-x-auto">
          {[{
            img: "src/modules/home/assets/Frame 45 (2).png",
            name: "Wilderness Club at Big Cedar",
            price: "$2018/Noche"
          }, {
            img: "src/modules/home/assets/Frame 45 (1).png",
            name: "Wilderness Club at Big Cedar",
            price: "$2016/Noche"
          }, {
            img: "src/modules/home/assets/Frame 45.png",
            name: "Wilderness Club at Big Cedar",
            price: "$1024/Noche"
          }].map((room, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 min-w-[250px]">
              <img src={room.img} className="rounded-md w-full" alt={room.name} />
              <h3 className="mt-2 font-semibold">{room.name}</h3>
              <p className="text-[#34A0A4] text-xl font-semibold">{room.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export { PopularRooms };
  