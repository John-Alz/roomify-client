import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import { BookingForm } from "../components/BookingForm";
import { PopularRooms } from "../components/PopularRooms";
import { CalltoAction } from "../components/CalltoAction";
import { Testimonials} from "../components/Testimonials";
import { Footer } from "../components/Footer";


const Home = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <BookingForm />
      <PopularRooms />
      <CalltoAction />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
