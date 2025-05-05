import { Building2, User, ConciergeBell, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useRoomTypeStore from "../../roomsTypes/store/useRoomTypeStore";
import useRoomStore from "../../rooms/store/useRoomStore";
import { useEffect } from "react";

export const BookingForm = () => {

  const navigate = useNavigate();

  const { register, reset, handleSubmit, formState: { errors } } = useForm();


  const roomsTypes = useRoomTypeStore(state => state.roomsTypes);
  const fectRoomsTypes = useRoomTypeStore(state => state.fetchRoomsTypes);
  const rooms = useRoomStore(state => state.rooms);

  useEffect(() => {
    fectRoomsTypes();
  }, [])

  console.log(roomsTypes);

  const onSubmit = handleSubmit((data) => {

    const params = new URLSearchParams({
      roomType: data.room,
      capacity: data.capacity,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
    });

    navigate(`/rooms/list?${params.toString()}`);
  })

  console.log(rooms);


  return (
    <form onSubmit={onSubmit} className="relative z-10 bg-white rounded-2xl shadow-lg p-5 md:p-6 flex flex-col md:flex-row items-center mx-auto mt-[-47px] space-y-4 md:space-y-0 md:space-x-4" style={{ width: '84%' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full items-center gap-4">

        <div className="flex items-center gap-2 w-full justify-center">
          <Building2 className="text-[#34A0A4]" stroke="#34A0A4" size={20} />
          <div className="flex flex-col text-center">
            <span className="text-gray-900 font-medium text-[16px]">Habitación</span>
            <select {...register("room")} className="bg-white text-gray-500 text-xs font-medium rounded-md border-gray-300 focus:outline-none p-1 text-center">
              {
                roomsTypes?.content?.map((item) => (
                  <option >{item.name}</option>
                ))
              }
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full justify-center">
          <User className="text-[#34A0A4] fill-[#34A0A4]" size={20} />
          <div className="flex flex-col text-center">
            <span className="text-gray-900 font-medium text-[16px]">Huéspedes</span>
            <select {...register("capacity")} className="bg-white text-gray-500 text-xs font-medium rounded-md border-gray-300 focus:outline-none p-1 text-center">
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full justify-center">
          <ConciergeBell className="text-[#34A0A4] fill-[#34A0A4]" size={20} />
          <div className="flex flex-col text-center">
            <span className="text-gray-900 font-medium text-[16px]">Check-in</span>
            <input type="date" className="bg-white text-gray-500 text-xs font-medium rounded-md border-gray-300 focus:outline-none p-1 text-center" {...register("checkIn")} />
          </div>
        </div>

        <div className="flex items-center gap-2 w-full justify-center">
          <ConciergeBell className="text-[#34A0A4] fill-[#34A0A4]" size={20} />
          <div className="flex flex-col text-center">
            <span className="text-gray-900 font-medium text-[16px]">Check-out</span>
            <input type="date" className="bg-white text-gray-500 text-xs font-medium rounded-md border-gray-300 focus:outline-none p-1 text-center" {...register("checkOut")} />
          </div>
        </div>
      </div>

      {/* <Link to={'/rooms/list'}> */}
      <button className="bg-[#34A0A4] text-18 font-semibold text-white px-6 py-3 rounded-2xl w-full sm:w-auto md:w-1/5 flex items-center justify-center gap-2 shadow-md mt-2 md:mt-0 whitespace-nowrap font-dm-sans tracking-wide max-w-full">
        <Search className="text-white" stroke="white" size={20} /> Reservar ahora
      </button>
      {/* </Link> */}
    </form>
  );
};
