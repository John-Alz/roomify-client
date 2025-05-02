import { Users } from 'lucide-react';
import { TableActionButtons } from './TableActionButtons';

// Colores de estado
const statusColors = {
  AVAILABLE: 'bg-green-500',
  RESERVED: 'bg-red-500',
  CLEANING: 'bg-blue-500',
};

export function TableListRoom({ item }) {
  if (!item) return null;

  return (
    <tr className="border-b border-[#D0D3D9]">
      <td className="p-2 font-semibold">{item.room_rumber}</td>
      
      <td className="p-2 flex items-center space-x-2">
        {item.room_images?.[0] ? (
          <img
            src={item.room_images[0]}
            alt={item.room_name}
            className="w-36 h-24 rounded-xl object-cover"
          />
        ) : (
          <div className="w-32 h-24 bg-gray-200 rounded-xl" />
        )}
        <span className="font-semibold ml-2 text-sm">{item.room_name}</span>
      </td>

      <td className="p-2 font-semibold">{item.room_type_name}</td>
      
      <td className="p-2 font-semibold">
        {item.room_price && `$${item.room_price}`}
      </td>

      <td className="p-2 font-semibold text-[#6C6C6C]">
        <div className="flex items-center">
          <span>Capacidad:</span>
          <Users className="w-5 h-5 mx-2 text-black" />
          <strong className="text-black">{item.room_capacity}</strong>
        </div>
        <div>
          Habitaciones: <strong className="text-black">{item.rooms}</strong>
        </div>
      </td>

      <td className="pl-5">
        <span
          className={`text-white px-3 py-2 rounded-lg text-base font-semibold ${
            statusColors[item.room_availability] || 'bg-gray-500'
          }`}
        >
          {item.room_availability}
        </span>
      </td>

      <td className="p-2 pt-8">
        <TableActionButtons roomId={item.id} />
      </td>
    </tr>
  );
}
