import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Save, ArrowLeft } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



import useAmenityStore from '../../amenities/store/userAmenityStore';
import useRoomTypeStore from '../../roomsTypes/store/useRoomTypeStore';

export function FormCreateRoom() {
  const { roomsTypes, fetchRoomsTypes, loadingRoomsTypes } = useRoomTypeStore();
  const { amenities, fetchAmenities, loadingAmenities } = useAmenityStore();

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    fetchRoomsTypes();
    fetchAmenities();
  }, [fetchRoomsTypes, fetchAmenities]);

  const onSubmit = (data) => {
    console.log('Datos del formulario:', data);
    toast.success('Habitación creada correctamente');
  };

  return (
    <div className="shadow px-15 py-6">
      <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Link to="/admin/habitaciones">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </div>
        </Link>
        Agregar nueva habitación
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow p-6 mb-20">
        <h2 className="text-xl font-semibold mb-4">Fotos de la habitación</h2>
        <div className="flex gap-4 overflow-x-auto mb-6">
          <img
            src="/room-2.webp"
            alt="room-example"
            className="rounded-2xl w-[270px] h-[180px] object-cover"
          />
        </div>

        <hr className="border-t-2 border-gray-300 mt-4 mb-4" />

        <h2 className="text-xl font-semibold mb-4">Detalle de la habitación</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Nombre habitación *</label>
            <input
              type="text"
              {...register('name', { required: true })}
              className="border border-gray-300 rounded-xl px-3 py-2 w-full"
            />
            {errors.name && <span className="text-red-500 text-xs">Este campo es requerido</span>}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Estado de reserva *</label>
            <select
              {...register('status', { required: true })}
              className="border border-gray-300 rounded-xl px-3 py-2 w-full"
            >
              <option value="Disponible">Disponible</option>
              <option value="No disponible">No disponible</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Tipo de habitación *</label>
            <select
              {...register('roomType', { required: true })}
              className="border border-gray-300 rounded-xl px-3 py-2 w-full"
            >
              {loadingRoomsTypes ? (
                <option disabled>Cargando tipos de habitación...</option>
              ) : roomsTypes?.content?.length > 0 ? (
                roomsTypes.content.map((room) => (
                  <option key={room.id} value={room.name}>
                    {room.name}
                  </option>
                ))
              ) : (
                <option disabled>No hay tipos disponibles</option>
              )}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Capacidad *</label>
            <input
              type="number"
              {...register('capacity', { required: true, min: 1 })}
              className="border border-gray-300 rounded-xl px-3 py-2 w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Precio por noche *</label>
            <input
              type="number"
              {...register('price', { required: true })}
              className="border border-gray-300 rounded-xl px-3 py-2 w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Número de camas *</label>
            <select
              {...register('beds', { required: true })}
              className="border border-gray-300 rounded-xl px-3 py-2 w-full"
            >
              <option value={1}>1 cama</option>
              <option value={2}>2 camas</option>
              <option value={3}>3 camas</option>
              <option value={4}>4 camas</option>
            </select>
          </div>

          <div className="flex flex-col col-span-3">
            <label className="text-sm font-medium mb-1">Descripción de la habitación *</label>
            <textarea
              {...register('description', { required: true })}
              className="border border-gray-300 rounded-xl px-3 py-2 h-28 w-1/2 resize-none"
            />
          </div>
        </div>

        <hr className="border-t-2 border-gray-300 mb-6" />
        <h2 className="text-xl font-semibold mb-4">Amenidades</h2>

        <div className="mt-6 grid grid-cols-6 gap-3 mb-16">
          {loadingAmenities ? (
            <p>Cargando amenidades...</p>
          ) : amenities?.content?.length > 0 ? (
            amenities.content.map((amenity) => (
              <label key={amenity.id} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  value={amenity.name}
                  {...register('amenities')}
                  className="w-5 h-5"
                />
                <img src={amenity.image} alt={amenity.name} className="w-5 h-5" />
                {amenity.name}
              </label>
            ))
          ) : (
            <p>No hay amenidades disponibles</p>
          )}
        </div>

        <hr className="border-t-2 border-gray-300 mt-4 mb-4" />

        <div className="flex justify-left gap-4">
          <button
            type="submit"
            className="px-7 py-2 bg-blue-600 text-white rounded-xl flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Guardar
          </button>
          <button type="button" className="px-7 py-2 border border-gray-400 bg-white rounded-xl">
            Cancelar
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}
