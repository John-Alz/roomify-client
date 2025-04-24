import React from 'react';
import { ChevronDown } from 'lucide-react';

export const ResultHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="ml-4"> 
        <span className="text-sm text-gray-500">140 resultados de búsqueda</span>
        <p className="text-xl font-semibold">Habitación doble, 9 - 12 de diciembre, 2 huéspedes, 1 cama doble</p>
      </div>
      <div className="relative mr-4"> 
        <select className="appearance-none border rounded-full px-4 py-2 text-sm pr- border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400">
          <option value="recommended">Ordenar por</option>
          <option value="priceLow">Precio (de menor a mayor)</option>
          <option value="priceHigh">Precio (de mayor a menor)</option>
          <option value="rating">Valoración</option>
        </select>
        <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};
