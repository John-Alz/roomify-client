import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../modules/auth/routes/AuthRoutes'
import { ContactRoutes } from '../modules/contact/rout/ContactRoutes'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth/*' element={<AuthRoutes />} />
            <Route path='/' element={<ContactRoutes />} />
        </Routes>
    )
}

