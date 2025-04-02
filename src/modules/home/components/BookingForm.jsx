import { Building2, User, ConciergeBell, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const BookingForm = () => {
  return (
    <div className="relative z-10 bg-white rounded-2xl shadow-lg p-5 md:p-6 flex flex-col md:flex-row items-center mx-auto mt-[-47px] space-y-4 md:space-y-0 md:space-x-4" style={{ width: '84%' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full items-center gap-4">

        <div className="flex items-center gap-2 w-full justify-center">
          <Building2 className="text-[#34A0A4]" stroke="#34A0A4" size={20} />
          <div className="flex flex-col text-center">
            <span className="text-gray-900 font-medium text-[16px]">Habitación</span>
            <select className="bg-white text-gray-500 text-xs font-medium rounded-md border-gray-300 focus:outline-none p-1 text-center">
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Suite</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full justify-center">
          <User className="text-[#34A0A4] fill-[#34A0A4]" size={20} />
          <div className="flex flex-col text-center">
            <span className="text-gray-900 font-medium text-[16px]">Huéspedes</span>
            <select className="bg-white text-gray-500 text-xs font-medium rounded-md border-gray-300 focus:outline-none p-1 text-center">
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full justify-center">
          <ConciergeBell className="text-[#34A0A4] fill-[#34A0A4]" size={20} />
          <div className="flex flex-col text-center">
            <span className="text-gray-900 font-medium text-[16px]">Check-in</span>
            <input type="date" className="bg-white text-gray-500 text-xs font-medium rounded-md border-gray-300 focus:outline-none p-1 text-center" />
          </div>
        </div>

        <div className="flex items-center gap-2 w-full justify-center">
          <ConciergeBell className="text-[#34A0A4] fill-[#34A0A4]" size={20} />
          <div className="flex flex-col text-center">
            <span className="text-gray-900 font-medium text-[16px]">Check-out</span>
            <input type="date" className="bg-white text-gray-500 text-xs font-medium rounded-md border-gray-300 focus:outline-none p-1 text-center" />
          </div>
        </div>
      </div>

      <Link to="/buscar" className="bg-[#34A0A4] text-18 font-semibold text-white px-6 py-3 rounded-2xl w-full sm:w-auto md:w-1/5 flex items-center justify-center gap-2 shadow-md mt-2 md:mt-0 whitespace-nowrap font-dm-sans tracking-wide max-w-full">
        <Search className="text-white" stroke="white" size={20} /> Reservar ahora
      </Link>
    </div>
  );
};
