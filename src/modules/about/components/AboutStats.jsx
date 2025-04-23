import React from 'react';

export const AboutStats = () => {
  return (
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
  );
};
