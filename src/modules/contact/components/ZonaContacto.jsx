import React from "react";

export const ZonaContacto = () => {
  return (
    <section className="w-full px-6 md:px-20 py-14 bg-gray-100 flex flex-col md:flex-row gap-16">
      {/* Formulario de Contacto */}
      <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center mt-10">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Correo Electrónico</label>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Mensaje</label>
            <textarea
              placeholder="Tu mensaje"
              rows="4"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button className="w-1/2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-center mt-6">
            Send Message
          </button>
        </form>
      </div>

      {/* Información de Contacto */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-start mt-[10px]">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Siéntase libre de contactarnos</h2>
        <p className="text-gray-600 mb-10">
          Si tienes alguna pregunta o necesitas más información sobre nuestros
          servicios, no dudes en escribirnos. Estamos aquí para ayudarte a
          disfrutar de la mejor experiencia en nuestro hotel.
        </p>

        <div className="space-y-10">
          <div className="flex items-center gap-10">
            <img src="/direccion.png" alt="Dirección" className="w-10" />
            <p className="font-bold text-lg text-gray-700">Calle 7 #34-45</p>
          </div>
          <div className="flex items-center gap-10">
            <img src="/correo.png" alt="Correo" className="w-10" />
            <p className="font-bold text-lg text-gray-700">nameHotel@contact.com</p>
          </div>
          <div className="flex items-center gap-10">
            <img src="/telefono.png" alt="Teléfono" className="w-10" />
            <p className="font-bold text-lg text-gray-700">601 234 6756</p>
          </div>
          <div className="flex items-center gap-10">
            <img src="/horario.png" alt="Horario" className="w-10" />
            <p className="font-bold text-lg text-gray-700">Lunes - Domingo: 10AM - 10PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};