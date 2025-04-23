import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contact } from "../Contact";

export const ContactRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Contact />} />
    </Routes>
  );
};
