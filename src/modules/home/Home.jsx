
import React from "react";
import { HeroSection, BookingForm, PopularRooms, CalltoAction, Testimonials } from "./components/index";
import { Footer, Navbar } from "../core/components";

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