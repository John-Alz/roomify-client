
import React from "react";
import { Navbar, HeroSection, BookingForm, PopularRooms, CalltoAction, Testimonials, Footer } from "./components/index";

export const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <BookingForm />
            <PopularRooms />
            <CalltoAction />
            <Testimonials />
            <Footer />
        </div>
    );
};