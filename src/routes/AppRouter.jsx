import React from "react"
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";
import {HomeRoutes} from "../modules/home/routes/HomeRoutes";

export const AppRouter = () => {
  return (
      <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/" element={<HomeRoutes />} />
      </Routes>
  )
}


