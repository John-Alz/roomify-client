import React, { useEffect } from 'react';
import { TableListRoom } from './TableListRoom';
import { TablePaginationRoom } from './TablePaginationRoom';
import useRoomStore from '../store/useRoomStore';

export function TableList() {
  const rooms = useRoomStore(state => state.rooms);
  const fetchRooms = useRoomStore(state => state.fetchRooms);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  return (
    <div className=" pl-8 pr-8 pb-12 overflow-x-auto">
      <div className="bg-white shadow-md shadow-gray-600/40 rounded-2xl p-1">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="bg-white border-b border-[#D0D3D9] text-[#667085]">
              <th className="p-3">No</th>
              <th className="p-3">Nombre Habitación</th>
              <th className=" pr-7  whitespace-nowrap">Tipo Habitación</th>
              <th className=" pr-7  whitespace-nowrap">Precio Noche</th>
              <th className="pl-7">Capacidad</th>
              <th className="pl-10">Estado</th>
              <th className="p-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rooms?.content?.map((item) => (
              <TableListRoom key={item.id} item={item} />
            ))}
          </tbody>
        </table>
        <TablePaginationRoom />
      </div>
    </div>
  );
}
