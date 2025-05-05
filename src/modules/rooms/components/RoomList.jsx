import React, { useEffect } from 'react'
import { RoomCard } from './RoomCard'
import { mockListRoom } from '../mock/mockListRoom'
import useRoomStore from '../store/useRoomStore'
import { useSearchParams } from 'react-router-dom'

export const RoomList = () => {

  const [searchParams] = useSearchParams();
  const rooms = useRoomStore(state => state.rooms)
  const setFilter = useRoomStore(state => state.setFilter)
  const fetchRooms = useRoomStore(state => state.fetchRooms)

  useEffect(() => {

    const filtersFromUrl = {
      roomType: searchParams.get("roomType"),
      capacity: searchParams.get("capacity"),
      checkIn: searchParams.get("checkIn"),
      checkOut: searchParams.get("checkOut"),
    }


    setFilter(filtersFromUrl)

    fetchRooms()
  }, [])

  console.log(rooms)

  return (
    <div >
      {
        rooms?.content?.length > 0 ? rooms?.content?.map((item) => (
          <RoomCard item={item} />
        )) : <p className='text-center text-xl text-red-400 font-bold'>No hay habitaciones disponibles</p>
      }
    </div>
  )
}
