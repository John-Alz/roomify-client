import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Save, ArrowLeft } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from 'react-router-dom';  
import useRoomStore from '../store/useRoomStore';
import useAmenityStore from '../../amenities/store/userAmenityStore';
import useRoomTypeStore from '../../roomsTypes/store/useRoomTypeStore';

export function FormEditRoom() {
  const { id } = useParams();  
  const { roomSelected, fetchRoomById } = useRoomStore();
  const { amenities, fetchAmenities } = useAmenityStore();
  const { roomsTypes, fetchRoomsTypes } = useRoomTypeStore();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (id) {
      fetchRoomById(id);  
    }
    fetchAmenities();
    fetchRoomsTypes();
  }, [id, fetchRoomById, fetchAmenities, fetchRoomsTypes]);

  useEffect(() => {
    if (roomSelected) {
      reset({
        room_name: roomSelected.room_name,
        room_availability: roomSelected.room_availability === 'AVAILABLE' ? 'Disponible' : 'No disponible',
        room_type_name: roomSelected.room_type_name,
        room_capacity: roomSelected.room_capacity,
        room_price: roomSelected.room_price,
        room_description: roomSelected.room_description,
        number_of_beds: roomSelected.rooms, 
      });
    }
  }, [roomSelected, reset]);

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Habitación actualizada');
  };

  return (
    <div className="shadow px-15 py-6">
      <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Link to="/admin/habitaciones">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </div>
        </Link>
        Editar habitación
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow p-6 mb-20">
        <h2 className="text-xl font-semibold mb-4">Fotos de la habitación</h2>
        <div className="flex gap-4 overflow-x-auto mb-6">
          {roomSelected?.room_images?.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`room-${i}`}
              className="rounded-2xl w-[270px] h-[180px] object-cover"
            />
          ))}
        </div>

        <hr className="border-t-2 border-gray-300 mt-4 mb-4" />

        <h2 className="text-xl font-semibold mb-4">Detalle de la habitación</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Nombre habitación *</label>
            <input
              type="text"
              {...register('room_name')}
              className="border border-gray-300 rounded-xl px-3 py-2 w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Estado de reserva *</label>
            <select
              {...register('room_availability')}
              className="border border-gray-300 rounded-xl px-3 py-2 w-full"
            >
              <option>Disponible</option>
              <option>No disponible</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Tipo de habitación *</label>
            <select
              {...register('room_type_name')}
              className="border border-gray-300 rounded-xl px-3 py-2 w-full"
            >
              {roomsTypes?.content?.map((type) => (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Capacidad *</label>
            <input
              type="number"
              {...register('room_capacity')}
              className="border border-gray-300 rounded-xl px-3 py-2 w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Precio por noche *</label>
            <input
              type="number"
              {...register('room_price')}
              className="border border-gray-300 rounded-xl px-3 py-2 w-full"
            />
          </div>
          <div className="flex flex-col">
  <label className="text-sm font-medium mb-1">Número de camas *</label>
  <select
    {...register('number_of_beds')}
    className="border border-gray-300 rounded-xl px-3 py-2 w-full"
    defaultValue={roomSelected?.number_of_beds || 1} 
  >
    {[1, 2, 3, 4, 5].map((beds) => (
      <option key={beds} value={beds}>
        {beds} cama{beds > 1 ? 's' : ''}
      </option>
    ))}
  </select>
</div>



          <div className="flex flex-col col-span-3">
            <label className="text-sm font-medium mb-1">Descripción de la habitación *</label>
            <textarea
              {...register('room_description')}
              className="border border-gray-300 rounded-xl px-3 py-2 h-28 w-1/2 resize-none"
            />
          </div>
        </div>

        <hr className="border-t-2 border-gray-300 mb-6" />
        <h2 className="text-xl font-semibold mb-4">Amenidades</h2>

        <div className="mt-6 grid grid-cols-6 gap-3 mb-16">
          {Array.isArray(amenities?.content) && amenities.content.length > 0 ? (
            amenities.content.map((item, idx) => (
              <label key={idx} className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked readOnly />
                {item.name}
              </label>
            ))
          ) : (
            <div>No amenities available</div>
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
