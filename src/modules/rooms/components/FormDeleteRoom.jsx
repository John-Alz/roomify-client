import { useForm } from 'react-hook-form';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FormDeleteRoom() {
  const { register } = useForm();

  return (
    <div className="shadow px-15 py-6">
      <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Link to="/admin/habitaciones">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </div>
        </Link>
        Eliminar habitación
      </h1>

      <div className="bg-white rounded-xl shadow p-6 mb-20">
        <h2 className="text-xl font-semibold mb-4">¿Estás seguro de que deseas eliminar esta habitación?</h2>

        <p className="text-gray-700 mb-6">
          Esta acción no se puede deshacer. Si eliminas la habitación, se perderán todos los datos relacionados a ella.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Nombre habitación</label>
            <input
              type="text"
              {...register("nombre")}
              defaultValue="Suite Familiar 202"
              disabled
              className="border border-gray-300 rounded-xl px-3 py-2 w-full bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Tipo de habitación</label>
            <input
              type="text"
              {...register("tipo")}
              defaultValue="Familiar"
              disabled
              className="border border-gray-300 rounded-xl px-3 py-2 w-full bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Estado</label>
            <input
              type="text"
              {...register("estado")}
              defaultValue="Disponible"
              disabled
              className="border border-gray-300 rounded-xl px-3 py-2 w-full bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        <hr className="border-t-2 border-gray-300 mt-4 mb-6" />

        <div className="flex justify-left gap-4">
          <button
            className="px-7 py-2 bg-red-600 text-white rounded-xl flex items-center gap-2"
          >
            <Trash2 className="w-5 h-5" />
            Eliminar
          </button>
          <Link to="/admin/habitaciones">
            <button className="px-7 py-2 border border-gray-400 bg-white rounded-xl">
              Cancelar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
