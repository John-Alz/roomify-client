import { Link } from "react-router-dom";

export const BookingForm = () => {
  return (
    <div className="relative z-10 bg-white rounded-xl shadow-lg p-5 md:p-6 flex flex-wrap md:flex-nowrap items-center max-w-7xl mx-auto mt-[-20px] space-y-4 md:space-y-0 md:space-x-4 ml-12 mr-10">
      <div className="grid md:flex w-full items-center gap-4">
        <div className="flex items-center gap-2 w-full md:w-1/5 ">
          <i className="fas fa-bed text-teal-500 text-lg"></i>
          <div className="flex flex-col ml-9 ">
            <span className="text-gray-500 text-xs">Habitación</span>
            <select className="bg-white text-gray-700 text-sm font-medium rounded-md border-gray-300 focus:outline-none p-1">
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Suite</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-1/4">
          <i className="fas fa-user text-teal-500 text-lg"></i>
          <div className="flex flex-col ml-17">
            <span className="text-gray-500 text-xs">Huéspedes</span>
            <select className="bg-white text-gray-700 text-sm font-medium rounded-md border-gray-300 focus:outline-none p-1">
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-1/5 ml-14">
          <i className="fas fa-calendar-check text-teal-500 text-lg"></i>
          <div className="flex flex-col mr-20">
            <span className="text-gray-500 text-xs">Check-in</span>
            <input
              type="date"
              className="bg-white text-gray-700 text-sm font-medium rounded-md border-gray-300 focus:outline-none p-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-1/5">
          <i className="fas fa-calendar-alt text-teal-500 text-lg"></i>
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Check-out</span>
            <input
              type="date"
              className="bg-white text-gray-700 text-sm font-medium rounded-md border-gray-300 focus:outline-none p-1"
            />
          </div>
        </div>

        <Link 
          to="/buscar" 
          className="bg-[#34A0A4] text-white px-6 py-3 rounded-2xl whitespace-nowrap w-full md:w-1/5 flex items-center justify-center gap-2 shadow-md mt-2 md:mt-0  mr-8"
        >
          <i className="fas fa-search text-lg"></i> Reservar ahora
        </Link>
      </div>
    </div>
  );
};
