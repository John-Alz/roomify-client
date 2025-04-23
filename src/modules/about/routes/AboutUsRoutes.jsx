import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../About'

export const AboutUsRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<About />} />
    </Routes>
  )
}
