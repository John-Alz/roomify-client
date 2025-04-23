import React from 'react';
import { Footer, Hero, Navbar } from '../core/components';
import { ServicesList } from '../Services/components/ServicesList';


export const Services = () => {
    return (
        <div>
            <Navbar />
            {/* Pasamos la ruta de la imagen como prop al componente Hero */}
            <Hero 
                title="Verdaderamente Inolvidable" 
                subtitle="Ofrecemos atención personalizada a cada detalle para que tu experiencia sea" 
                image="/image.png" // Ruta correcta para la imagen (sin 'public')
            />
            <ServicesList />
            <Footer />
        </div>
    );
};
