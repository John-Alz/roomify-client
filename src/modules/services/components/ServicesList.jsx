import React from "react";
import { Wifi, Coffee, Dumbbell, Gamepad2, Lightbulb, Shirt, ParkingCircle, Waves } from "lucide-react";

const services = [
  { id: 1, name: "Swimming Pool", icon: <Waves size={40} color="#34A0A4" /> },
  { id: 2, name: "Wifi", icon: <Wifi size={40} color="#34A0A4" /> },
  { id: 3, name: "Breakfast", icon: <Coffee size={40} color="#34A0A4" /> },
  { id: 4, name: "Gym", icon: <Dumbbell size={40} color="#34A0A4" /> },
  { id: 5, name: "Game center", icon: <Gamepad2 size={40} color="#34A0A4" /> },
  { id: 6, name: "24/7 Light", icon: <Lightbulb size={40} color="#34A0A4" /> },
  { id: 7, name: "Laundry", icon: <Shirt size={40} color="#34A0A4" /> },
  { id: 8, name: "Parking space", icon: <ParkingCircle size={40} color="#34A0A4" /> }
];

export const ServicesList = () => {
  return (
    <section className="py-20 text-center w-full mx-auto min-h-screen px-6">
      <h2 className="text-3xl md:text-4xl font-medium mb-6">Nuestros servicios</h2>
      <p className="text-black text-base md:text-lg font-medium mb-12">
        Ofrecemos modernas instalaciones hoteleras de 5 estrellas para su comodidad.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-100 p-6 rounded-xl flex flex-col items-center justify-center w-full max-w-xs mx-auto h-[250px]">
            <div className="mb-4">{service.icon}</div>
            <p className="text-lg font-medium text-center text-[#34A0A4]">{service.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
