import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoomTablePage } from "../pages/RoomTablePage";
import { FormCreateRoom, FormDeleteRoom, FormEditRoom } from "../components";

export const RoomFormRoutes = () => {
  return (
    <Routes>
     
      <Route path="/" element={<RoomTablePage />} />
      
      <Route path="crear" element={<FormCreateRoom />} />
      <Route path="editar/:id" element={<FormEditRoom />} />
      <Route path="delete" element={<FormDeleteRoom />} />
    </Routes>
  );
};
