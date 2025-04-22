import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from '../About';  

export const AboutRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<About />} />  
    </Routes>
  );
};
