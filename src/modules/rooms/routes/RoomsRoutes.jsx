import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RoomDetailPage } from '../pages/RoomDetailPage'
import { RoomListPage } from '../pages/RoomListPage'

export const RoomsRoutes = () => {


    return (
        <Routes>
            <Route path='/room/:id' element={<RoomDetailPage />} />
            <Route path='/list' element={<RoomListPage />} />
        </Routes>
    )
}
