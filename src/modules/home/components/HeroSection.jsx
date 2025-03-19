import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <header className="relative h-screen flex items-center px-6 md:px-20 pb-16">
      <img 
        src="src/modules/home/assets/Hero section.png"  
        className="absolute inset-0 w-full h-full object-cover"
      />

    </header>
  );
};

export default HeroSection;
