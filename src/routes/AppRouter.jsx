import React from "react"
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";
import {HomePage} from "../modules/home/routes/HomePage";

export const AppRouter = () => {
  return (
      <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
  )
}


