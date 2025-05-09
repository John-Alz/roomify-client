import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import useRoomTypeStore from '../../roomsTypes/store/useRoomTypeStore';
import useAmenityStore from '../../amenities/store/userAmenityStore';
import useRoomStore from '../../rooms/store/useRoomStore';

export function TableHeaderListRoom() {
  const navigate = useNavigate();

  const roomsTypes = useRoomTypeStore((state) => state.roomsTypes);
  const fetchRoomsTypes = useRoomTypeStore((state) => state.fetchRoomsTypes);
  const amenities = useAmenityStore((state) => state.amenities);
  const fetchAmenities = useAmenityStore((state) => state.fetchAmenities);
  const setFilter = useRoomStore((state) => state.setFilter);

  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(null);

  useEffect(() => {
    fetchRoomsTypes();
    fetchAmenities();
  }, []);

  const handleSubMenuClick = (type, name) => {
    const params = new URLSearchParams({
      roomType: type === 'roomType' ? name : '',
      amenity: type === 'amenity' ? name : '',
    });

    navigate(`/admin/habitaciones?${params.toString()}`);
    setFilter({
      roomType: type === 'roomType' ? name : '',
      amenity: type === 'amenity' ? name : '',
    });

    setFlag1(false);
    setFlag2(null);
  };

  const handleSubMenuToggle = (type) => {
    setFlag2(flag2 === type ? null : type);
  };

  return (
    <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pt-8 pb-8 px-15">
      <h2 className="text-left w-full text-3xl font-semibold">Habitaciones</h2>

      <nav className="flex gap-6 text-sm font-medium pt-5" aria-label="Filtrado de habitaciones">
        <Link
          to="/admin/habitaciones"
          className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer"
          onClick={() => setFilter({ roomType: '', amenity: '' })}
        >
          Todas las habitaciones <span className="text-gray-500">(49)</span>
        </Link>
        <Link to="/admin/habitaciones/disponibles" className="text-gray-600 hover:text-blue-600 cursor-pointer">
          Habitaciones disponibles <span className="text-gray-500">(10)</span>
        </Link>
        <Link to="/admin/habitaciones/reservadas" className="text-gray-600 hover:text-blue-600 cursor-pointer">
          Habitaciones reservadas <span className="text-gray-500">(39)</span>
        </Link>
      </nav>

      <div className="flex gap-3 items-center">
        <div className="relative">
          <button
            type="button"
            onClick={() => setFlag1(!flag1)}
            className="flex items-center cursor-pointer gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100"
          >
            <Filter className="w-4 h-4" />
            Filtros
          </button>

          {flag1 && (
            <div className="absolute mt-2 w-48 bg-white rounded-lg shadow z-10">
              <button
                type="button"
                onClick={() => handleSubMenuToggle('roomType')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
              >
                Tipo de habitación
                {flag2 === 'roomType' && <ChevronDown className="w-4 h-4 ml-2" />}
              </button>
              <button
                type="button"
                onClick={() => handleSubMenuToggle('amenity')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
              >
                Amenidad
                {flag2 === 'amenity' && <ChevronDown className="w-4 h-4 ml-2" />}
              </button>
            </div>
          )}

          {flag2 && (
            <div className="absolute mt-2 w-37 bg-white rounded-lg shadow z-20 left-48">
              <button
                type="button"
                onClick={() => handleSubMenuClick(flag2, '')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Todas
              </button>
              {(flag2 === 'roomType' ? roomsTypes?.content : amenities?.content)?.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleSubMenuClick(flag2, item.name)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <Link to="/admin/habitaciones/crear">
          <button className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-xl hover:bg-blue-700">
            + Crear una Habitación
          </button>
        </Link>
      </div>
    </div>
  );
}
