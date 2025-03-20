import {Navbar} from "../components/NavBar";
import {HeroSection} from "../components/HeroSection";
import { BookingForm } from "../components/BookingForm";
import { PopularRooms } from "../components/PopularRooms";
import { CalltoAction } from "../components/CalltoAction";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-4">
        <BookingForm />
        <PopularRooms />
        <CalltoAction />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};


