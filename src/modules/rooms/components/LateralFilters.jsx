import React from 'react';

export const LateralFilters = () => {
  return (
    <div className="mt-6 bg-white p-6 pl-15 rounded-lg ">
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Filtros Populares</h3>
        <div className="space-y-3">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-3 h-4 w-4 accent-[#34a0a4]" /> Cama King Size
          </label>
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-3 h-4 w-4 accent-[#34a0a4]" /> Vista al Mar
          </label>
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-3 h-4 w-4 accent-[#34a0a4]" /> Aire Acondicionado
          </label>
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-3 h-4 w-4 accent-[#34a0a4]" /> Habitación con Jacuzzi
          </label>
        </div>
      </div>

      
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Precio por Noche</h3>
        <div className="space-y-3">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-3 h-4 w-4 accent-[#34a0a4]" /> Menos de $50
          </label>
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-3 h-4 w-4 accent-[#34a0a4]" /> $50 a $100
          </label>
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-3 h-4 w-4 accent-[#34a0a4]" /> $100 a $150
          </label>
        </div>
      </div>

      
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Características de la Habitación</h3>
        <div className="space-y-3">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-3 h-4 w-4 accent-[#34a0a4]" /> Habitación Familiar
          </label>
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-3 h-4 w-4 accent-[#34a0a4]" /> Habitación para No Fumadores
          </label>
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-3 h-4 w-4 accent-[#34a0a4]" /> Con Balcón
          </label>
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-3 h-4 w-4 accent-[#34a0a4]" /> Con Cocina
          </label>
        </div>
      </div>
    </div>
  );
};
