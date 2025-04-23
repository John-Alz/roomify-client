import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { PanelContacto } from '../../Contact/components/PanelContacto';
import { useFlag } from "../hooks/UseFlag";

export const Navbar = () => {
  

  const { handleFlag, flag } = useFlag()

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent font-dm-sans tracking-wide z-50 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="w-full flex items-center justify-between h-[80px] py-2">
        {/* Logo */}
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl ml-6 font-regular font-['Belleza']">
          NameHotel
        </h1>

        {/* Navegación escritorio */}
        <nav className="hidden lg:flex flex-wrap gap-6 md:gap-8">
          <NavLink to="/" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Inicio</NavLink>
          <NavLink to="/rooms" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Habitaciones</NavLink>
          <NavLink to="/services" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Servicios</NavLink>
          <NavLink to="/about-us" className={({ isActive }) => `text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Nosotros</NavLink>
          
          {/* Botón de Contacto que abre el Panel */}
          <button
            onClick={handleFlag}
            className="text-white text-[14px] sm:text-[16px] border-b border-transparent hover:border-white transition duration-300"
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
        <button className="lg:hidden text-white" onClick={handleFlag}>
          {flag ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú desplegable para móvil y tablet */}
      <section className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black/90 flex flex-col items-center justify-center transition-transform ${flag ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="absolute top-6 right-6 text-white" onClick={handleFlag}>
          <X size={28} />
        </button>
        <NavLink to="/" className="py-3 text-white text-xl" onClick={handleFlag}>Inicio</NavLink>
        <NavLink to="/rooms" className="py-3 text-white text-xl" onClick={handleFlag}>Habitaciones</NavLink>
        <NavLink to="/services" className="py-3 text-white text-xl" onClick={handleFlag}>Servicios</NavLink>
        <NavLink to="about us" className="py-3 text-white text-xl" onClick={handleFlag}>Nosotros</NavLink>
        <NavLink to="/contact" className="py-3 text-white text-xl" onClick={handleFlag}>Contacto</NavLink>
        <NavLink
          to="/auth/login"
          className="mt-6 bg-white/40 hover:bg-white/60 transition text-white text-[16px] px-5 py-2 rounded-full text-center"
          onClick={handleFlag}
        >
          Iniciar sesión
        </NavLink>
      </section>


      
      <PanelContacto flag={flag} handleFlag={handleFlag} />
    </header>

    
  );
};