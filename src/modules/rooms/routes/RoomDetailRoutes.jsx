import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RoomDetailPage } from '../pages/RoomDetailPage'

export const RoomDetailRoutes = () => {


    return (
        <Routes>
            <Route path='' element={<RoomDetailPage />} />
        </Routes>
    )
}
