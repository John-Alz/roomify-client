import React from 'react';
import { CalendarCheck2, CalendarX2, Users, ArrowLeft, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import useRoomStore from '../store/useRoomStore';
import useRoomTypeStore from '../../roomsTypes/store/useRoomTypeStore';

export const SearchForm = () => {

  const filters = useRoomStore(state => state.filters);
  const roomsTypes = useRoomTypeStore(state => state.roomsTypes);
  console.log(roomsTypes);


  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-14 max-w-xl w-full mx-auto space-y-4">
      <Link to="/" className="flex items-center space-x-2">
        <ArrowLeft className="text-gray-600" size={24} />

      </Link>

      <h2 className="text-2xl font-semibold text-gray-800">Buscar Habitación</h2>

      <div className="space-y-1">
        <label htmlFor="checkin" className="text-sm font-medium text-gray-600">Fecha de Check-in</label>
        <div className="relative">
          <CalendarCheck2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input id="checkin" type="date" value={filters.checkIn} className="w-full pl-10 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-[#34a0a4] focus:outline-none border-gray-300 hover:border-[#34a0a4]" />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="checkout" className="text-sm font-medium text-gray-600">Fecha de Check-out</label>
        <div className="relative">
          <CalendarX2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input id="checkout" type="date" value={filters.checkOut} className="w-full pl-10 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-[#34a0a4] focus:outline-none border-gray-300 hover:border-[#34a0a4]" />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="guests" className="text-sm font-medium text-gray-600">Número de Huéspedes</label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input id="guests" type="text" placeholder="2 adultos, 1 habitación" defaultValue="2 adultos, 1 habitación" className="w-full pl-10 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-[#34a0a4] focus:outline-none border-gray-300 hover:border-[#34a0a4]" />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="room-type" className="text-sm font-medium text-gray-600">Tipo de Habitación</label>
        <div className="relative">
          <select value={filters.roomType} id="room-type" className="appearance-none w-full pl-4 pr-10 py-3 border rounded-full focus:ring-2 focus:ring-[#34a0a4] focus:outline-none border-gray-300 hover:border-[#34a0a4]">
            {
              roomsTypes?.content?.map((item) => (
                <option >{item.name}</option>
              ))

            }
          </select>
          <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <button className="w-full bg-[#34a0a4] text-white py-3 rounded-full mt-4 hover:bg-[#2f9397] transition">
        Buscar
      </button>
    </div>
  );
};