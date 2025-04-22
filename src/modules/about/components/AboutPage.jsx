import React from 'react';

export const AboutPage = () => {
  return (
    <div className="w-full font-sans bg-white">
      {/* Sección de título y texto */}
      <section className="flex flex-col md:flex-row items-start justify-between px-8 py-16 max-w-6xl mx-auto">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold leading-tight text-black">
            Nos dedicamos a  <br />satisfacer tus necesidades
          </h2>
        </div>
        <div className="md:w-2/3 mt-6 md:mt-0">
          <p className="text-gray-700 text-justify leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur, Blanditiis ab laudantium ab earum ad ipsam officiis.
            Atque placeat delectus ut nesciunt dignissimos. Officiis harum facilis obcaecati dolores quidem.
            Possimus fuga at tempore repudiandae! Repellat totam alias, nihil molestias eveniet nihil?
            Asperiores iure error blanditiis blanditiis maiores. Praesentium reiciendis et suscipit,
            officiis est velit soluta.
          </p>
        </div>
      </section>

     
<section className="flex justify-center px-8 pb-20">
  <div className="relative w-full max-w-6xl rounded-md overflow-hidden">
    <img
      src="public/sofa_verde.webp" 
      alt="Sofá verde"
      className="w-full h-auto object-cover"
    />

    <div className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black transform -translate-x-1/2 -translate-y-1/2"></div>

    
    <img
      src="public/play_arrow.png" 
      alt="Play Icon"
      className="absolute top-1/2 left-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10 transition-transform hover:scale-110"
    />
  </div>
</section>

{/* Sección de estadísticas */}
<section className="bg-white py-10 px-4">
  <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
    <div>
      <h3 className="text-3xl font-bold">150</h3>
      <p className="text-gray-500">Habitaciones disponibles</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold">95%</h3>
      <p className="text-gray-500">Tasa de ocupación</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold">5000</h3>
      <p className="text-gray-500">Huéspedes felices</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold">30</h3>
      <p className="text-gray-500">Miembros del equipo</p>
    </div>
  </div>
  <div className="h-1 bg-[#34A0A4] mt-8 w-3/4 mx-auto rounded-full"></div>

</section>

    </div>
  );
};
