import React from 'react';

import { TableHeaderListRoom, TableListRoom,  } from '../components'; 
import { TableList } from '../components/TableList';

export function RoomTablePage() {
  return (
    <div >
      <TableHeaderListRoom />
      <TableListRoom />
      <TableList />
    </div>
  );
}
