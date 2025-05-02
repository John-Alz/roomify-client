import React from 'react';
import { Link } from 'react-router-dom';  
import { Filter } from 'lucide-react'; 

export function TableHeaderListRoom() {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pt-8 pb-8 px-8">
      
      <h2 className="text-left w-full text-3xl font-semibold">Habitaciones</h2>

      <nav className="flex gap-6 text-sm font-medium pt-5" aria-label="Filtrado de habitaciones">
        <Link to="/admin/habitaciones" className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">
          Todas las habitaciones <span className="text-gray-500">(49)</span>
        </Link>
        <Link to="/admin/habitaciones/disponibles" className="text-gray-600 hover:text-blue-600 cursor-pointer">
          Habitaciones disponibles <span className="text-gray-500">(10)</span>
        </Link>
        <Link to="/admin/habitaciones/reservadas" className="text-gray-600 hover:text-blue-600 cursor-pointer">
          Habitaciones reservadas <span className="text-gray-500">(39)</span>
        </Link>
      </nav>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          <Filter className="w-4 h-4" />
          Filtros
        </button>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 cursor-pointer">
          + Crear una Habitación
        </button>
      </div>
    </div>
  );
}
