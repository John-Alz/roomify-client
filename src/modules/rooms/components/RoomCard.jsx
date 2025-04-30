import React from 'react';
import { Link } from 'react-router-dom';  
import { mockListRoom } from '../mock/mockListRoom';
import { Bed, Bath } from 'lucide-react'; 

export const RoomCard = ({item}) => {
  return (

    <Link to={`/rooms/room/${item.id}`} >
    <div className="space-y-6 p-4 max-w-4xl mx-auto">
      
        <div
          key={item.id}
          className="flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
        >
          <div className="p-4 pr-0 sm:px-4 md:px-6 lg:px-4">
            <div className="w-full sm:w-55 h-57 overflow-hidden rounded-xl">
              <img
                src={item.room_images[0]}
                alt={item.room_name}
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="flex flex-1 justify-between p-4">
            <div className="space-y-1 text-gray-800">
              <h2 className="text-lg font-semibold tracking-tight">{item.room_name}</h2>
              <p>{item.room_description.slice(0,100)}...</p>
              <p className="text-sm text-gray-500">40m2</p>
              <p className="text-sm text-gray-500">
                gratis
                {/* {item.breakfast && ' · Breakfast included'} */}
              </p>
              <p className="text-xl mt-2 font-semibold font-medium">{item.room_type_name}</p>

            
              <div className="flex items-center gap-4 mt-2 text-gray-500">
                <div className="flex items-center gap-1">
                  <Bed size={16} />
                  <span className="text-sm">{item.rooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath size={16} />
                  <span className="text-sm">{item.bathRooms}</span>
                </div>
              </div>

              {/* <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs bg-blue-100 text-blue-600 font-medium px-2 py-0.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div> */}
            </div>

            <div className="flex flex-col items-end justify-between text-right text-gray-800">
              <div>
                <p className="text-sm font-semibold text-emerald-600">muy bueno</p>
                {/* <p className="text-xs text-gray-400"> hospedajes</p> */}
                <span className="text-sm font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full mt-1 inline-block">
                  5.0
                </span>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">${item.room_price}</p>
                <p className="text-xs text-gray-500">3 noches, 2 personas</p>
                
                <button className="bg-[#34a0a4] cursor-pointer hover:bg-[#2b7d7d] transition text-white text-sm px-8 py-2 mt-2 rounded-full shadow-sm min-w-[240px]">
  Ver opciones de reserva
</button>

                
              </div>
            </div>
          </div>
        </div>
    
    </div>

    </Link>
  );
};
