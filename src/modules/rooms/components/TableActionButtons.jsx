// TableActionButtons.tsx
import { Pencil, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function TableActionButtons({ roomId }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/admin/habitaciones/editar/${roomId}`);
  };

  return (
    <div className="flex items-center space-x-2 pl-6">
      <button
        className="cursor-pointer text-blue-500 hover:text-blue-700"
        onClick={handleEdit}
      >
        <Pencil size={18} />
      </button>
      <button className="cursor-pointer text-red-500 hover:text-red-700">
        <Trash2 size={18} />
      </button>
    </div>
  );
}
