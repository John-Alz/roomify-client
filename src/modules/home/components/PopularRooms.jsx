import { Link } from "react-router-dom";
import { rooms } from "../mock/mockRooms";  

export const PopularRooms = () => {
  return (
    <section className="py-[59px] px-6 relative max-w-[84%] mx-auto">
      
      <h2 className="text-[35px] font-semibold text-center section-title mb-[30px] w-full max-w-[410px] mx-auto whitespace-nowrap font-dm-sans tracking-wide">
        Habitaciones Populares
      </h2>

      <div className="relative flex items-center justify-center">
      
        <img 
          src="/left.png"  
          className="absolute left-2 md:left-[-24px] top-1/3 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hidden md:block"
        />

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2px] px-8 w-full">
          {rooms.map((room) => (
            <div key={room.id} className="flex flex-col items-start p-4">
             
              <img 
                src={room.img} 
                className="rounded-xl w-full h-auto object-cover mb-4" 
                alt={room.name} 
              />

             
              <h3 className="text-[17px] font-medium font-dm-sans tracking-wide w-full mb-1">
                {room.name}
              </h3>

    
              <p className="text-[15px] text-[#858585] font-dm-sans leading-snug w-full mb-4">
                {room.description}
              </p>

              
              <div className="flex items-baseline space-x">
  <p className="text-[27px] font-regular  text-[#1A759F] font-dm-sans tracking-tight">
    {room.price}
  </p>
  <p className="text-[15px] relative top-[2px] font-normal text-[#1A759F] font-regular font-dm-sans tracking-wide">
    {room.horario}
  </p>
</div>

            </div>
          ))}
        </div>

       
        <img 
          src="/right.png"  
          className="absolute right-2 md:right-[-24px] top-1/3 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hidden md:block"
        />
      </div>
    </section>
  );
};
