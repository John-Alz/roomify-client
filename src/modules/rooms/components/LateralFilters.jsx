import React from 'react';
import useAmenityStore from '../../amenities/store/userAmenityStore';
import { useEffect } from 'react';

export const LateralFilters = () => {

  const amenities = useAmenityStore(state => state.amenities);
  const fetchAmenities = useAmenityStore(state => state.fetchAmenities);

  useEffect(() => {
    fetchAmenities();
  }, [])


  console.log(amenities);


  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-14 max-w-xl w-full mx-auto space-y-4">
      {/* <div className="mb-8">
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
      </div> */}

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
          {
            amenities?.content?.map((amenity) => (
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-3 h-4 w-4 accent-[#34a0a4]" /> {amenity.name}
              </label>
            ))
          }
        </div>
      </div>
    </div>
  );
};
