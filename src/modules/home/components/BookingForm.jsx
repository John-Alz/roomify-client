import { Link } from "react-router-dom";

export const BookingForm = () => {
  return (
    <div className="relative z-10 bg-white rounded-xl shadow-lg p-5 md:p-6 flex flex-wrap md:flex-nowrap items-center mx-auto mt-[-47px] space-y-4 md:space-y-0 md:space-x-4" style={{ width: '84%' }}>
      <div className="grid md:flex w-full items-center gap-4">
        {/* Habitación */}
        <div className="flex items-center gap-2 w-full md:w-1/5">
          <i className="fas fa-bed text-teal-500 text-lg"></i>
          <div className="flex flex-col ml-9">
            <span className="ttext-gray-900  font-medium text-[16px]">Habitación</span>
            <select className="bg-white text-gray-500 text-xs font-medium rounded-md border-gray-300 focus:outline-none p-1">
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Suite</option>
            </select>
          </div>
        </div>

        {/* Huéspedes */}
        <div className="flex items-center gap-2 w-full md:w-1/4">
          <i className="fas fa-user text-teal-500 text-lg"></i>
          <div className="flex flex-col ml-17">
            <span className="text-gray-900  font-medium text-[16px]">Huéspedes</span>
            <select className="bg-white text-gray-500 text-xs font-medium rounded-md border-gray-300 focus:outline-none p-1">
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
            </select>
          </div>
        </div>

        {/* Check-in */}
        <div className="flex items-center gap-2 w-full md:w-1/5">
          <i className="fas fa-calendar-check text-teal-500 text-lg"></i>
          <div className="flex flex-col">
            <span className="text-gray-900  font-medium text-[16px]">Check-in</span>
            <input
              type="date"
              className="bg-white text-gray-500 text-xs font-medium rounded-md border-gray-300 focus:outline-none p-1"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="flex items-center gap-2 w-full md:w-1/5">
          <i className="fas fa-calendar-alt text-teal-500 text-lg"></i>
          <div className="flex flex-col">
            <span className="text-gray-900  font-medium text-[16px]">Check-out</span>
            <input
              type="date"
              className="bg-white text-gray-500 text-xs font-medium rounded-md border-gray-300 focus:outline-none p-1"
            />
          </div>
        </div>

        {/* Botón de Reservar ahora */}
        <Link
          to="/buscar"
          className="bg-[#34A0A4]  text-18 text-white px-6 py-3 rounded-2xl  w-full md:w-1/5 flex items-center justify-center gap-2 shadow-md mt-2 md:mt-0  whitespace-nowrap font-dm-sans tracking-wide"
        >
          <i className="fas fa-search text-lg"></i> Reservar ahora
        </Link>
      </div>
    </div>
  );
};
