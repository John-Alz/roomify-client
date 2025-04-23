import React from 'react';
import { Navbar, Hero, Footer } from '../core/components';
import { AboutPage } from './pages/AboutPage';



export const About = () => {
  return (
    <div>
      <Navbar textColor={"text-white"} />
      {/* Usamos solo una instancia de Hero con el título y la imagen */}
      <Hero
        title="About Us"

        image="consejos-para-una-habitacion-de-invitados_900.jpg" // Imagen específica para la página "About"
      />

      <AboutPage />
      <Footer />
    </div>
  );
};
