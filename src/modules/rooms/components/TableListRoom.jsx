import React, { useEffect } from 'react';
import { Users } from 'lucide-react';
import { TableActionButtons } from './TableActionButtons';
import { TablePaginationRoom } from './TablePaginationRoom';
import useRoomStore from '../store/useRoomStore';

const statusColors = {
  AVAILABLE: 'bg-green-500',
  RESERVED: 'bg-red-500',
  CLEANING: 'bg-blue-500',
};

export function TableListRoom() {
  const rooms = useRoomStore(state => state.rooms);
  const fetchRooms = useRoomStore(state => state.fetchRooms);
  const filters = useRoomStore(state => state.filters);

  useEffect(() => {
    if (filters) {
      fetchRooms(filters);  
    }
  }, [filters, fetchRooms]); 

  return (
    <div className="px-15 pb-12 overflow-x-auto">
      <div className="bg-white shadow-md shadow-gray-600/40 rounded-2xl p-1">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="bg-white border-b border-[#D0D3D9] text-[#667085]">
              <th className="p-3">No</th>
              <th className="p-3">Nombre Habitación</th>
              <th className="p-3 whitespace-nowrap">Tipo Habitación</th>
              <th className="p-3 whitespace-nowrap">Precio Noche</th>
              <th className="p-3">Capacidad</th>
              <th className="p-3">Estado</th>
              <th className="p-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rooms?.content?.map((item) => (
              <tr key={item.id} className="border-b border-[#D0D3D9]">
                <td className="p-3 font-semibold">{item.room_rumber}</td>

                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    {item.room_images?.[0] ? (
                      <img
                        src={item.room_images[0]}
                        alt={item.room_name}
                        className="w-36 h-24 rounded-xl object-cover"
                      />
                    ) : (
                      <div className="w-36 h-24 bg-gray-200 rounded-xl" />
                    )}
                    <span className="font-semibold text-sm">{item.room_name}</span>
                  </div>
                </td>

                <td className="p-3 font-semibold">{item.room_type_name}</td>

                <td className="p-3 font-semibold">
                  {item.room_price ? `$${item.room_price}` : 'N/A'}
                </td>

                <td className="p-3 text-[#6C6C6C]">
                  <div className="flex items-center">
                    <span>Capacidad:</span>
                    <Users className="w-5 h-5 mx-2 text-black" />
                    <strong className="text-black">{item.room_capacity}</strong>
                  </div>
                  <div>
                    Habitaciones: <strong className="text-black">{item.rooms}</strong>
                  </div>
                </td>

                <td className="p-3">
                  <span
                    className={`text-white px-3 py-2 rounded-lg text-base font-semibold ${
                      statusColors[item.room_availability] || 'bg-gray-500'
                    }`}
                  >
                    {item.room_availability}
                  </span>
                </td>

                <td className="p-3">
                <TableActionButtons roomId={item.id} />


                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <TablePaginationRoom />
      </div>
    </div>
  );
}
