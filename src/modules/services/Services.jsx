import React from 'react';
import { Footer, Hero, Navbar } from '../core/components';
import { ServicesList } from '../Services/components/ServicesList';


export const Services = () => {
    return (
        <div>
            <Navbar />
            <Hero title={"Verdaderamente Inolvidable"} subtitle={"Ofrecemos atencion personalizada a cada detalle para que tu experiencia sea"} />
            <ServicesList />
            <Footer />
        </div>
    );
};
