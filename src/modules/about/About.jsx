import React from 'react';
import { Navbar, Hero, Contact, Footer } from '../core/components';
import { AboutPage } from '../about/components/AboutPage';

export const About = () => {
  return (
    <div>
      <Navbar />
      {/* Usamos solo una instancia de Hero con el título y la imagen */}
      <Hero 
        title="About Us" 
        image="public/consejos-para-una-habitacion-de-invitados_900.jpg" // Imagen específica para la página "About"
      />

      <AboutPage />
      <Footer />
    </div>
  );
};
