import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent font-dm-sans tracking-wide z-50 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[60px] py-2">
        {/* Logo */}
        <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-regular font-['Belleza']">
          NameHotel
        </div>

        {/* Menú de navegación (escritorio) */}
        <nav className="hidden lg:flex flex-wrap gap-6 md:gap-8">
          <NavLink to="/" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Home</NavLink>
          <NavLink to="/habitaciones" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Habitaciones</NavLink>
          <NavLink to="/servicios" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Servicios</NavLink>
          <NavLink to="/sobre-nosotros" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Sobre nosotros</NavLink>
          <NavLink to="/contacto" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Contacto</NavLink>
        </nav>

        {/* Botón de inicio de sesión (escritorio) */}
        <div className="hidden lg:flex">
          <NavLink to="/auth/login" className="bg-white/30 hover:bg-white/50 transition text-white text-[14px] sm:text-[16px] px-4 py-2 rounded-full text-center">
            Iniciar sesión
          </NavLink>
        </div>

        {/* Menú hamburguesa (móvil y tablet) */}
        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú desplegable para móvil y tablet */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black/80 flex flex-col items-center justify-center transition-transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="absolute top-5 right-5 text-white" onClick={() => setMenuOpen(false)}>
          <X size={24} />
        </button>
        <NavLink to="/" className="py-3 text-white text-lg" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/habitaciones" className="py-3 text-white text-lg" onClick={() => setMenuOpen(false)}>Habitaciones</NavLink>
        <NavLink to="/servicios" className="py-3 text-white text-lg" onClick={() => setMenuOpen(false)}>Servicios</NavLink>
        <NavLink to="/sobre-nosotros" className="py-3 text-white text-lg" onClick={() => setMenuOpen(false)}>Sobre nosotros</NavLink>
        <NavLink to="/contacto" className="py-3 text-white text-lg" onClick={() => setMenuOpen(false)}>Contacto</NavLink>
        <NavLink 
          to="/auth/login" 
          className="mt-4 bg-white/30 hover:bg-white/50 transition text-white text-[14px] px-4 py-2 rounded-full text-center"
          onClick={() => setMenuOpen(false)}
        >
          Iniciar sesión
        </NavLink>
      </div>
    </header>
  );
};
