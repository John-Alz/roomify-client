import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";
import { HomeRoutes } from "../modules/home/routes/HomeRoutes";
import { ServicesRoutes } from "../modules/services/routes/ServicesRoutes";
import { AboutUsRoutes } from "../modules/about/routes/AboutUsRoutes";
import { ContactRoutes } from "../modules/Contact/routes/ContactRoutes";
import { RoomDetailRoutes } from "../modules/rooms/routes/RoomDetailRoutes";
import { AdminLayout } from "../modules/layouts/AdminLayout";
import { Test } from "../modules/core/components/Test";
import { RoomsRoutes } from "../modules/rooms/routes/RoomsRoutes";
import { RoomTablePage } from "../modules/rooms/pages/RoomTablePage";

export const AppRouter = () => {
  return (


    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/" element={<HomeRoutes />} />
      <Route path="/services/*" element={<ServicesRoutes />} />
      <Route path="/about-us/*" element={<AboutUsRoutes />} />
      <Route path="/contact/" element={<ContactRoutes />} />
      <Route path="/rooms/*" element={<RoomsRoutes />} />

      {/* Admin layout routes */}

      <Route path="/admin" element={<AdminLayout />} >
        <Route index element={<Navigate to='dashboard' replace />} />
        <Route path="dashboard" element={<Test />} />
        <Route path="habitaciones" element={<RoomTablePage />} />
        <Route path="reservas" element={<Test />} />
        <Route path="usuarios" element={<Test />} />
        <Route path="tipos-habitacion" element={<Test />} />
        <Route path="amenidades" element={<Test />} />

      </Route>

    </Routes>
  );
};
