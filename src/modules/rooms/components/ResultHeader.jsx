import React from 'react';
import { ChevronDown } from 'lucide-react';
import useRoomStore from '../store/useRoomStore';
import { useSearchParams } from 'react-router-dom';

export const ResultHeader = () => {

  const [searchParams] = useSearchParams();
  const rooms = useRoomStore(state => state.rooms)
  const filters = useRoomStore(state => state.filters)

  console.log(rooms?.content?.length);

  console.log(searchParams.size);



  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 px-4">
      {
        searchParams.size === 0 ? <div className="mb-4 sm:mb-0">
          <span className="text-sm text-gray-500">{rooms?.content?.length} resultados de búsqueda</span>
          <p className="text-xl font-semibold">Explora todas nuestras Habitaciones.</p>
        </div> : <div className="mb-4 sm:mb-0">
          <span className="text-sm text-gray-500">{rooms?.content?.length} resultados de búsqueda</span>
          <p className="text-xl font-semibold">Habitación {filters.roomType}, 9 de diciembre - 12 de diciembre, {filters.capacity} huéspedes.</p>
        </div>
      }
      <div className="relative">
        <select className="appearance-none border rounded-full px-4 py-2 text-sm pr-10 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400">
          <option value="recommended">Ordenar por</option>
          <option value="priceLow">Precio (de menor a mayor)</option>
          <option value="priceHigh">Precio (de mayor a menor)</option>
        </select>
        <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};