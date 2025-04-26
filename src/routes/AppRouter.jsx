import React from "react";
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";
import { HomeRoutes } from "../modules/home/routes/HomeRoutes";
import { ServicesRoutes } from "../modules/services/routes/ServicesRoutes";
import { AboutUsRoutes } from "../modules/about/routes/AboutUsRoutes";
import { ContactRoutes } from "../modules/Contact/routes/ContactRoutes";
import { RoomDetailRoutes } from "../modules/rooms/routes/RoomDetailRoutes";
import { RoomListRoutes } from "../modules/rooms/routes/RoomListRoutes";

export const AppRouter = () => {
  return (


    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/" element={<HomeRoutes />} />
      <Route path="/services/*" element={<ServicesRoutes />} />
      <Route path="/about-us/*" element={<AboutUsRoutes />} />
      <Route path="/contact/" element={<ContactRoutes />} />
      <Route path="/room/:id" element={<RoomDetailRoutes />} />
      <Route path="/rooms/" element={<RoomListRoutes />} />
    </Routes>
  );
};
