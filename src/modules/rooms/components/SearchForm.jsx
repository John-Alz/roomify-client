import React from 'react';
import { CalendarCheck2,CalendarX2,Users,ArrowLeft,ChevronDown,} from 'lucide-react';
 
import { Link } from 'react-router-dom'; 
export const SearchForm = () => {
  return (
    <div className="space-y-4 pl-14">
      
      <Link to="/" className="flex items-left space-x-1 cursor-pointer">
        <ArrowLeft className="text-gray-600 transform -translate-x-2 translate-y-1" size={24} />
      </Link>

      <h2 className="text-2xl font-semibold text-left text-gray-800">
        Buscar Habitación
      </h2>

      <label htmlFor="checkin" className="text-sm font-medium text-gray-600">
        Fecha de Check-in
      </label>
      <div className="relative">
        <CalendarCheck2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          id="checkin"
          type="date"
          defaultValue="2022-12-09"
          className="w-full pl-10 border border-gray-300 rounded-full px-4 py-3 focus:outline-none hover:border-[#34a0a4] focus:ring-2 focus:ring-[#34a0a4] focus:border-[#34a0a4] transition"
        />
      </div>

      
      <label htmlFor="checkout" className="text-sm font-medium text-gray-600">
        Fecha de Check-out
      </label>
      <div className="relative">
        <CalendarX2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          id="checkout"
          type="date"
          defaultValue="2022-12-12"
          className="w-full pl-10 border border-gray-300 rounded-full px-4 py-3 focus:outline-none hover:border-[#34a0a4] focus:ring-2 focus:ring-[#34a0a4] focus:border-[#34a0a4] transition"
        />
      </div>

      
      <label htmlFor="guests" className="text-sm font-medium text-gray-600">
        Número de Huéspedes
      </label>
      <div className="relative">
        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          id="guests"
          type="text"
          placeholder="2 adultos, 1 habitación"
          defaultValue="2 adultos, 1 habitación"
          className="w-full pl-10 border border-gray-300 rounded-full px-4 py-3 focus:outline-none hover:border-[#34a0a4] focus:ring-2 focus:ring-[#34a0a4] focus:border-[#34a0a4] transition"
        />
      </div>

      <label htmlFor="room-type" className="text-sm font-medium text-gray-600">
        Tipo de Habitación
      </label>
      <div className="relative">
        <select
          id="room-type"
          className="appearance-none border border-gray-300 rounded-full px-4 py-3 text-sm pr-10 w-full focus:outline-none hover:border-[#34a0a4] focus:ring-2 focus:ring-[#34a0a4] focus:border-[#34a0a4] transition"
        >
          <option value="doble">Hab. Doble</option>
          <option value="sencilla">Hab. Estandar</option>
          <option value="familiar">Hab. Familiar</option>
        </select>
        <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>

      
      <button className="w-full bg-[#34a0a4] text-white py-3 rounded-full mt-4 hover:bg-[#2f9397] transition">
        Buscar
      </button>
    </div>
  );
};
