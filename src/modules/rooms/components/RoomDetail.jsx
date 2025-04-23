import React, { useEffect } from 'react'
import useRoomStore from '../store/useRoomStore'
import { useParams } from 'react-router-dom';
import { Bed } from 'lucide-react';
import { Bath } from 'lucide-react';
import { PersonStanding } from 'lucide-react';

export const RoomDetail = () => {

    const { id } = useParams();

    const roomSelected = useRoomStore(state => state.roomSelected);
    const fetchRoomById = useRoomStore(state => state.fetchRoomById)

    useEffect(() => {
        fetchRoomById(id);
    }, [])

    console.log(roomSelected);

    return (
        <>
            {
                roomSelected && (
                    <div>
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-2 grid-rows-2 md:grid-rows-2 gap-2 md:gap-2 my-4">
                                <div className="col-start-1 row-start-1 row-span-2 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-2">
                                    <img src={roomSelected.room_images[0]} alt={roomSelected.room_name} className="w-full h-full object-cover rounded-md" />
                                </div>
                                <div className="col-start-2 row-start-1 md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-1 rounded-md ">
                                    <img src={roomSelected.room_images[1]} alt={roomSelected.room_name} className="w-full h-full object-cover rounded-md" />
                                </div>
                                <div className="col-start-2 row-start-2 md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-1 rounded-md">
                                    <img src={roomSelected.room_images[2]} alt={roomSelected.room_name} className="w-full h-full object-cover rounded-md" />
                                </div>
                            </div>

                            <h2 className='text-3xl font-bold'>{roomSelected.room_name}</h2>
                            <div className='flex gap-4 text-gray-500 font-semibold justify-between'>
                                <p className='text-lg'>${roomSelected.room_price}/Noche</p>
                                <p className='flex gap-3 text-black font-bold '><span>5.0</span>⭐⭐⭐⭐⭐</p>
                            </div>
                            <div className='flex gap-6 mt-3 items-center'>
                                <p className='flex items-center gap-2'><Bed /> <span className='font-semibold'>{roomSelected.rooms}</span></p>
                                <p className='flex gap-2'><Bath /> <span className='font-semibold'>{roomSelected.bathRooms}</span></p>
                            </div>
                            <div className='mt-5'>
                                <p>{roomSelected.room_description}</p>
                                <h2>{roomSelected.room_capacity}</h2>                            </div>
                            <div className='py-4'>
                                <h3 className='text-xl font-bold mb-5'>Servicios.</h3>
                                <ul className='flex flex-wrap gap-8 w-full'>
                                    {roomSelected.amenities?.map((amenity) => (
                                        <li className='flex gap-1'>
                                            <img src={amenity.image} alt={amenity.name} className='w-[30px]' />
                                            <p className='flex items-center'>{amenity.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
