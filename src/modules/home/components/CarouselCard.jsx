import { Star } from 'lucide-react'
import React from 'react'

export const CarouselCard = ({ room_images, room_rumber, room_name, room_type_name, rooms, bathRooms, room_price }) => {
    return (
        <div className="flex flex-col items-start p-4 relative cursor-pointer">
            {/* Contenedor con estrella y puntaje */}
            <div className="absolute top-6 right-7 flex items-center justify-center p-2 bg-white/40 rounded-2xl backdrop-blur-[2px] w-[66px] h-[30px] z-10">
                <Star
                    size={16}
                    fill="#34A0A4"
                    stroke="none"
                />
                <div className="ml-1 text-[14px] text-black font-dm-sans">4.5</div> {/* Puntaje en negro */}
            </div>

            <img
                src={room_images[0]}
                className="rounded-xl w-full h-[240px] object-cover mb-4"
                alt={room_rumber}
            />

            <h3 className="text-lg font-medium tracking-wide w-full mb-1">
                {room_name.slice(0, 20)}...
            </h3>

            <div className="w-full flex gap-3">
                <p className="text-[15px] text-[#858585] font-dm-sans leading-snug mb-4">
                    {rooms} camas
                </p>
                <p className="text-[15px] text-[#858585] font-dm-sans leading-snug mb-4">
                    {bathRooms} banios
                </p>
            </div>

            <div className="flex items-baseline space-x">
                <p className="text-[27px] font-regular text-[#1A759F] font-dm-sans tracking-tight">
                    ${room_price} <small>/noche</small>
                </p>
            </div>

        </div>
    )
}
