import { Link } from "react-router-dom";

export const CalltoAction = () => {
  return (
    <section className="relative h-64 flex items-center justify-center text-center bg-white">
    
      <img 
        src="public/CTA(2).png" 
        className=" bg-white absolute inset-0 w-full h-full object-cover"
      />

     
     
      <div className="relative z-10 p-6 text-white rounded-lg flex flex-col items-center">
        <Link 
          to="/reservaciones"
          className="bg-white text-[#34A0A4] px-6 py-3 rounded-full font-bold shadow-md hover:bg-gray-200 transition mt-20"
        >
          Reserva ahora
        </Link>
      </div>
    </section>
  );
};


