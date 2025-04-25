import React from 'react';
import { Link } from 'react-router-dom';  
import { mockListRoom } from '../mock/mockListRoom';

export const RoomCard = () => {
  return (
    <div className="space-y-6 p-4 max-w-4xl mx-auto">
      {mockListRoom.map(hotel => (
        <div
          key={hotel.id}
          className="flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
        >
          <div className="p-4 pr-0 sm:px-4 md:px-6 lg:px-4">
            <div className="w-full sm:w-50 h-44 overflow-hidden rounded-xl">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="flex flex-1 justify-between p-4">
            <div className="space-y-1 text-gray-800">
              <h2 className="text-lg font-semibold tracking-tight">{hotel.name}</h2>
              <p className="text-sm text-gray-500">{hotel.distance}</p>
              <p className="text-sm text-gray-500">
                {hotel.cancellation}
                {hotel.breakfast && ' · Breakfast included'}
              </p>
              <p className="text-sm mt-2 font-medium">{hotel.roomType}</p>
              <p className="text-sm text-gray-500">{hotel.bed}</p>
              <p className="text-sm text-gray-500">{hotel.bathroom}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {hotel.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs bg-blue-100 text-blue-600 font-medium px-2 py-0.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end justify-between text-right text-gray-800">
              <div>
                <p className="text-sm font-semibold text-emerald-600">{hotel.ratingText}</p>
                <p className="text-xs text-gray-400">{hotel.reviews} hospedajes</p>
                <span className="text-sm font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full mt-1 inline-block">
                  {hotel.rating}
                </span>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">${hotel.price}</p>
                <p className="text-xs text-gray-500">3 noches, 2 personas</p>
                <Link to={`/room/${hotel.id}`}>  
                  <button className="bg-[#34a0a4] cursor-pointer hover:bg-[#2b7d7d] transition text-white text-sm px-4 py-1.5 mt-2 rounded-full shadow-sm">
                    Ver opciones de reserva
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
