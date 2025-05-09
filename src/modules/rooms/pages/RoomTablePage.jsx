import React from 'react';
import { TableHeaderListRoom } from '../components';
import { TableListRoom } from '../components/TableListRoom';

export function RoomTablePage() {
  return (
    <div>
      <TableHeaderListRoom />
      <TableListRoom />
    </div>
  );
}
