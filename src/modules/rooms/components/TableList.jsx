import React, { useEffect } from 'react';
import { TableListRoom } from './TableListRoom';
import useRoomStore from '../store/useRoomStore';

export function TableList() {
  const rooms = useRoomStore(state => state.rooms);
  const fetchRooms = useRoomStore(state => state.fetchRooms);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  return (
    <>
      {rooms?.content?.map((item) => (
        <TableListRoom key={item.id} item={item} />
      ))}
    </>
  );
}