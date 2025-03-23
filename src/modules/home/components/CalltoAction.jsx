import { Link } from "react-router-dom";

export const CalltoAction = () => {
  return (
    <section className="relative w-full h-[259px] py-20 flex items-end justify-center text-center bg-white mx-auto mt-25">
      {/* Imagen de fondo ajustada */}
      <img 
        src="public/CTA(2).png" 
        className="absolute w-full h-full object-cover left-1/2 -translate-x-1/2"
        alt="Call to Action"
      />

      <div className="z-10 mb-10">
        <Link 
          to="/reservaciones"
          className="bg-white text-[#34A0A4] px-8 py-3 flex items-center justify-center rounded-full font-bold shadow-md transition w-auto"
        >
          <span className="text-[18px] font-bold whitespace-nowrap font-dm-sans tracking-wide text-center">
            Reservar ahora
          </span>
        </Link>
      </div>
    </section>
  );
};
