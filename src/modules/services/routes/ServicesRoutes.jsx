import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Services } from '../Services'

export const ServicesRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Services />} />
        </Routes>
    )
}
