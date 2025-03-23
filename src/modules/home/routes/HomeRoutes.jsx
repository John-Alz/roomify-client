
import React from "react";
import { Navbar, HeroSection, BookingForm, PopularRooms, CalltoAction, Testimonials, Footer } from "../components/home"; 

export const HomeRoutes = () => {
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
