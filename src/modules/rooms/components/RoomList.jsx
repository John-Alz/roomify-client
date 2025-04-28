import React, { useEffect } from 'react'
import { RoomCard } from './RoomCard'
import { mockListRoom } from '../mock/mockListRoom'
import useRoomStore from '../store/useRoomStore'

export const RoomList = () => {
    
    const rooms = useRoomStore(state => state.rooms)
      const fetchRooms = useRoomStore(state => state.fetchRooms)
     
      useEffect(()=>{
        fetchRooms()
      },[])
    
      console.log(rooms)

  return (
    <div>
        {
            rooms?.content?.map((item)=>(
                <RoomCard item={item} />
            ))
        }
    </div>
  )
}
