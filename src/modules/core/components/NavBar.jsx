import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useFlag } from "../hooks/UseFlag";
import { Contact } from "./Contact";

export const Navbar = () => {
  // Estado para controlar si el menú hamburguesa está abierto
  const { flag: menuAbierto, handleFlag: alternarMenu } = useFlag();

  // Estado para controlar si el panel de contacto está abierto
  const { flag: contactoAbierto, handleFlag: alternarContacto } = useFlag();
  
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent font-dm-sans tracking-wide z-50 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="w-full flex items-center justify-between h-[80px] py-2">
        {/* Logo */}
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl ml-6 font-regular font-['Belleza']">
          NameHotel
        </h1>

        {/* Menú de navegación (escritorio) */}
        <nav className="hidden lg:flex flex-wrap gap-6 md:gap-8">
          <NavLink to="/" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Inicio</NavLink>
          <NavLink to="/Rooms" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Habitaciones</NavLink>
          <NavLink to="/services" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Servicios</NavLink>
          <NavLink to="/About-Us" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Nosotros</NavLink>
          <button
  onClick={alternarContacto}
  className="text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 cursor-pointer"
>
  Contacto
</button>

        </nav>

        {/* Botón de inicio de sesión (escritorio) */}
        <aside className="hidden lg:flex">
          <NavLink to="/auth/login" className="bg-white/30 hover:bg-white/50 transition text-white text-[14px] sm:text-[16px] px-5 py-2 rounded-full text-center">
            Iniciar sesión
          </NavLink>
        </aside>

        {/* Menú hamburguesa (móvil y tablet) */}
        <button className="lg:hidden text-white" onClick={alternarMenu}>
  {menuAbierto ? <X size={28} /> : <Menu size={28} />}
</button>
</div>

{/* Menú desplegable para móvil y tablet */}
<section className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center transition-transform ${menuAbierto ? 'translate-x-0' : '-translate-x-full'}`}>
  <button className="absolute top-6 right-6 text-gray-900" onClick={alternarMenu}>
    <X size={28} />
  </button>
  <NavLink 
    to="/" 
    className="py-3 text-black text-xl border-b border-transparent hover:border-[#34A0A4] transition duration-300" 
    onClick={alternarMenu}
  >
    Inicio
  </NavLink>
  <NavLink 
    to="/Rooms" 
    className="py-3 text-black text-xl border-b border-transparent hover:border-[#34A0A4] transition duration-300" 
    onClick={alternarMenu}
  >
    Habitaciones
  </NavLink>
  <NavLink 
    to="/services" 
    className="py-3 text-black text-xl border-b border-transparent hover:border-[#34A0A4] transition duration-300" 
    onClick={alternarMenu}
  >
    Servicios
  </NavLink>
  <NavLink 
    to="/About-Us" 
    className="py-3 text-black text-xl border-b border-transparent hover:border-[#34A0A4] transition duration-300" 
    onClick={alternarMenu}
  >
    Nosotros
  </NavLink>

  {/* Contacto: cerrar menú y abrir panel */}
  <button
    className="py-3 text-black text-xl border-b border-transparent hover:border-[#34A0A4] transition duration-300"
    onClick={() => {
      alternarMenu();
      alternarContacto();
    }}
  >
    Contacto
  </button>

  <NavLink
    to="/auth/login"
    className="mt-6 bg-[#34A0A4] hover:bg-[#2e8587] transition text-white text-[16px] px-5 py-2 rounded-full text-center"
    onClick={alternarMenu}
  >
    Iniciar sesión
  </NavLink>
</section>


      {/* Panel de contacto */}
      <Contact flag={contactoAbierto} handleFlag={alternarContacto} />
    </header>
  );
};
