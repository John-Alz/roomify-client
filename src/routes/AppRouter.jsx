import React from "react";
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";
import { HomeRoutes } from "../modules/home/routes/HomeRoutes";
import { ServicesRoutes } from "../modules/services/routes/ServicesRoutes";
import { ContactRoutes } from "../modules/Contact/routes/ContactRoutes"; // asegúrate que esta importación exista

export const AppRouter = () => {
  return (

    
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/" element={<HomeRoutes />} />
      <Route path="/services/*" element={<ServicesRoutes />} />
      <Route path="/contact/*" element={<ContactRoutes />} />
    </Routes>
  );
};
