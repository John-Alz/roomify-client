import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../modules/auth/routes/AuthRoutes'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth/*' element={<AuthRoutes />} />
        </Routes>
    )
}
