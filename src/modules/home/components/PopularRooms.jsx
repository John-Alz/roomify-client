import { Link } from "react-router-dom";
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
import { useFetch } from "../../core/hooks/useFetch";
import { CarouselCard } from "./CarouselCard";


export const PopularRooms = () => {

  const swiperRef = useRef(null);

  const { data } = useFetch("http://localhost:8080/api/v1/rooms?page=0&size=20")
  console.log(data);



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
          {data?.content?.map((room) => (
            <SwiperSlide >
              <Link to={`/room/${room.id}`}>
                <CarouselCard room_images={room.room_images} room_rumber={room.room_rumber} room_name={room.room_name} room_type_name={room.room_type_name} rooms={room.rooms} bathRooms={room.bathRooms} room_price={room.room_price} />
              </Link>
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
