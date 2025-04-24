import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RoomListPage } from '../pages/RoomListPage'

export const RoomListRoutes = () => {


    return (
        <Routes>
            <Route path='' element={<RoomListPage />} />
        </Routes>
    )
}
