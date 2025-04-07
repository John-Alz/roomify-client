import { Link } from "react-router-dom";
import { rooms } from "../mock/mockRooms";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";  // 

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useRef } from "react";


export const PopularRooms = () => {

  const swiperRef = useRef(null);


  return (
    <section className="py-[59px] relative max-w-[84%] mx-auto">
      <h2 className="text-[35px] font-semibold text-center section-title mb-[30px] w-full max-w-[410px] mx-auto whitespace-nowrap font-dm-sans tracking-wide">
        Habitaciones Populares
      </h2>
      <div className="relative flex items-center justify-center">
        <button onClick={() => swiperRef.current?.slidePrev()} className="rounded-full p-3 border border-gray-custom cursor-pointer">
          <ArrowLeft />
        </button>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {rooms.map((room) => (
            <SwiperSlide >
              <div key={room.id} className="flex flex-col items-start p-4 relative">
                {/* Contenedor con estrella y puntaje */}
                <div className="absolute top-6 right-7 flex items-center justify-center p-2 bg-white/40 rounded-2xl backdrop-blur-[2px] w-[66px] h-[30px] z-10">
                  <Star
                    size={16}
                    fill="#34A0A4"
                    stroke="none"
                  />
                  <div className="ml-1 text-[14px] text-black font-dm-sans">{room.rating}</div> {/* Puntaje en negro */}
                </div>

                <img
                  src={room.img}
                  className="rounded-xl w-full h-auto object-cover mb-4"
                  alt={room.name}
                />

                <h3 className="text-[17px] font-medium font-dm-sans tracking-wide w-full mb-1">
                  {room.name}
                </h3>

                <p className="text-[15px] text-[#858585] font-dm-sans leading-snug w-full mb-4">
                  {room.description}
                </p>

                <div className="flex items-baseline space-x">
                  <p className="text-[27px] font-regular text-[#1A759F] font-dm-sans tracking-tight">
                    {room.price}
                  </p>
                  <p className="text-[15px] relative top-[2px] font-normal text-[#1A759F] font-regular font-dm-sans tracking-wide">
                    {room.horario}
                  </p>
                </div>

              </div>
            </SwiperSlide>

          ))}
        </Swiper>
        <button onClick={() => swiperRef.current?.slideNext()} className="rounded-full p-3 border border-gray-custom cursor-pointer">
          <ArrowRight />
        </button>
      </div>
    </section >
  );
};
