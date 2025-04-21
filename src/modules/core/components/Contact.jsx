import React from "react";
import { X, Phone, Mail,  MapPin, Clock } from "lucide-react";

export const Contact = ({ flag, handleFlag }) => {
  return (
    <section
      className={`fixed inset-y-0 right-0 z-50 w-1/2 min-w-[300px] bg-white flex flex-col justify-between p-8 space-y-6 transform transition-transform duration-300 ease-in-out ${flag ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Botón de cerrar */}
      <button
        className="absolute top-4 left-4 p-2 text-black hover:bg-gray-200 rounded"
        onClick={handleFlag}
        aria-label="Cerrar panel de contacto"
      >
        <X size={24} />
      </button>

      {/* Título */}
      <h2 className="text-2xl font-semibold text-center w-full mt-6">
        Te ayudamos a gestionar tu reserva
      </h2>

      {/* Dirección */}
      <div className="flex items-center space-x-3">
        <MapPin size={20} className="text-[#34A0A4]" />
        <p className="text-lg font-medium">Dirección: Callle 123, Ciudad bogota, País colombia</p>
      </div>

      {/* Correo */}
      <div className="flex items-center space-x-3">
        <Mail size={20} className="text-[#34A0A4]" />
        <p className="text-lg font-medium">Correo: contacto@hotel.com</p>
      </div>

      {/* Teléfono */}
      <div className="flex items-center space-x-3">
        <Phone size={20} className="text-[#34A0A4]" />
        <p className="text-lg font-medium">
          Llámanos al <strong>+576015085377</strong>
        </p>
      </div>

      {/* Horario */}
      <div className="flex items-center space-x-3">
        <Clock size={20} className="text-[#34A0A4]" />
        <p className="text-lg font-medium">Horario: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
      </div>

      {/* Contacto: enviar correo y WhatsApp */}
<div className="flex flex-col gap-4 w-full mt-6">
  {/* Enviar correo */}
  <div className="flex justify-between items-center w-full flex-wrap gap-2">
    <p className="text-sm text-gray-600 w-full sm:w-auto">
      ¿Tienes alguna consulta? ¡Envíanos un correo!
    </p>
    <a 
      href="mailto:contacto@tuhotel.com" 
      className="border border-[#34A0A4] text-black rounded-full px-4 py-1 text-sm hover:bg-[#34A0A4]/10 transition"
    >
      Enviar correo
    </a>
  </div>

  {/* Contactar por WhatsApp */}
  <div className="flex justify-between items-center w-full flex-wrap gap-2">
    <p className="text-sm text-gray-600 w-full sm:w-auto">
      ¿Prefieres chat? Contáctanos por WhatsApp
    </p>
    <a 
      href="https://wa.me/576015085377" 
      className="border border-[#34A0A4] text-black rounded-full px-4 py-1 text-sm hover:bg-[#34A0A4]/10 transition"
    >
      WhatsApp
    </a>
  </div>
</div>

      {/* Enlace inferior */}
      <div className="w-full text-center mt-6">
        <a href="#" className="text-sm text-gray-600 underline">
          ¿Quieres contactar directamente con el hotel?
        </a>
      </div>
    </section>
  );
};
