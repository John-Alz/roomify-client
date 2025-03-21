
export const HeroSection = () => {
  return (
    <header className="relative h-screen flex items-center justify-start px-10 md:px-20 pb-16">
      <img 
        src="public/Hero section (1).png"  
        className="absolute inset-0 w-full h-full object-cover"
        
      />
      <div className="relative z-10 max-w-3.5xl text-white">
        <h2 className="text-5xl md:text-5xl font-bold leading-tight ml-2  mt-6">
          Tu estancia perfecta te espera.  <br /> Reserva de forma rápida, segura <br /> y sin complicaciones.
        </h2>
      </div>
    </header>
  );
};
