import React from "react";
import { PanelContacto } from "../Contact/components/PanelContacto";
import { Footer, Navbar } from '../core/components';

export const Contact = () => {

  return (
    <>
      <Navbar />

      <PanelContacto flag={flag} handleFlag={handleFlag} />

      <Footer />
    </>
  );
};
