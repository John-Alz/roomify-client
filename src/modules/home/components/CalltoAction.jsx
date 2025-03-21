import { Link } from "react-router-dom";

export const CalltoAction = () => {
  return (
    <section className="relative w-full  mt-8 h-60 flex items-end justify-center text-center bg-white " >
      <img 
        src="public/CTA(2).png" 
        className="absolute w-full h-full  bg-white   "
      />

      <div className=" z-10 mb-10">

        <Link 
          to="/reservaciones"
          className="bg-white text-[#34A0A4] px-6 py-2 rounded-full font-bold shadow-md  transition mt- inline-block"
        >
          Reservar ahora
        </Link>
      </div>
    </section>
  );
};
