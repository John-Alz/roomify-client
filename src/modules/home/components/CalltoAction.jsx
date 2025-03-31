import { Link } from "react-router-dom";

export const CalltoAction = () => {
  return (
    <section className="relative w-full h-[220px] py-20 flex flex-col items-center justify-center text-center bg-white mx-auto mt-25 -translate-y-17">
      <img 
        src="public/CTA(2).png" 
        className="absolute w-full h-full object-cover left-0 top-0"
        alt="Call to Action"
      />
      
      <h2 className="z-10 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-dm-sans leading-tight md:leading-[50px] text-center shadow-md [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)] max-w-[90%] sm:max-w-[80%] md:max-w-[60%]">
        Estancia perfecta, reserva sencilla.
      </h2>
      
      <div className="z-10 mt-4 sm:mt-6">
        <Link 
          to="/reservaciones"
          className="bg-white text-[#34A0A4] px-6 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 rounded-full font-bold transition w-auto shadow-md flex items-center justify-center "
        >
          <span className="text-base sm:text-lg md:text-xl font-bold font-dm-sans tracking-wide">
            Reservar ahora
          </span>
        </Link>
      </div>
    </section>
  );
};