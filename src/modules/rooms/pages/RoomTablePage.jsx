import React from 'react';
import { TableHeaderListRoom } from '../components';
import { TableRoom } from '../components/TableRoom';

export function RoomTablePage() {
  return (
    <div>
      <TableHeaderListRoom />
      <TableRoom />
    </div>
  );
}
