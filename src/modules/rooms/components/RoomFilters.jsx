import React, { useEffect } from 'react';
import { TableListRoom } from './TableListRoom';  
import useRoomStore from '../store/useRoomStore';
import { useSearchParams } from 'react-router-dom';

export const RoomFilters = () => { 
  const [searchParams] = useSearchParams();
  const rooms = useRoomStore(state => state.rooms);
  const setFilter = useRoomStore(state => state.setFilter);
  const fetchRooms = useRoomStore(state => state.fetchRooms);

  useEffect(() => {
    const filtersFromUrl = {
      roomType: searchParams.get("roomType"),
      amenity: searchParams.get("amenity"),
    };

    setFilter(filtersFromUrl); 
    fetchRooms(filtersFromUrl); 
  }, [searchParams, setFilter, fetchRooms]);

  console.log(rooms)

  return (
    <div>
      {
        rooms?.content?.length > 0 ? rooms?.content?.map((item) => (
          <TableListRoom item={item} />
        )) : <p className='text-center text-xl text-red-400 font-bold'>No hay habitaciones disponibles</p>
      }
    </div>
  );
};
