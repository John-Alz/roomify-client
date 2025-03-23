import React from "react";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-16 bg-transparent z-50 flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-20">
      {/* Contenedor Principal */}
      <div className="w-full max-w-[1440px] h-[60px] flex justify-between items-center">
        
        {/* Logo */}
        <div className="pl-[31px] text-white text-2xl sm:text-3xl lg:text-4xl font-normal font-['Belleza'] w-[360px] h-[40px]">
          NameHotel
        </div>

        {/* Menú de navegación */}
        <nav className="hidden sm:flex gap-[30px] md:gap-[40px]">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `w-auto h-[36px] flex items-center justify-center text-white text-[14px] sm:text-[16px] font-medium font-['DM_Sans tracking-wide border-b border-transparent hover:border-white transition duration-300 cursor-pointer ${isActive ? 'border-b border-white' : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/habitaciones"
            className={({ isActive }) => 
              `w-auto h-[36px] flex items-center justify-center text-white text-[14px] sm:text-[16px] font-medium font-DM_Sans tracking-wide border-b border-transparent hover:border-white transition duration-300 cursor-pointer ${isActive ? 'border-b border-white' : ''}`
            }
          >
            Habitaciones
          </NavLink>

          <NavLink
            to="/servicios"
            className={({ isActive }) => 
              `w-auto h-[36px] flex items-center justify-center text-white text-[14px] sm:text-[16px] font-medium font-DM_Sans tracking-wide border-b border-transparent hover:border-white transition duration-300 cursor-pointer ${isActive ? 'border-b border-white' : ''}`
            }
          >
            Servicios
          </NavLink>

          <NavLink
            to="/sobre-nosotros"
            className={({ isActive }) => 
              `w-auto h-[36px] flex items-center justify-center text-white text-[14px] sm:text-[16px] font-medium font-DM_Sans tracking-wide border-b border-transparent hover:border-white transition duration-300 cursor-pointer whitespace-nowrap ${isActive ? 'border-b border-white' : ''}`
            }
          >
            Sobre nosotros
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) => 
              `w-auto h-[36px] flex items-center justify-center text-white text-[14px] sm:text-[16px] font-medium font-DM_Sans tracking-wide border-b border-transparent hover:border-white transition duration-300 cursor-pointer ${isActive ? 'border-b border-white' : ''}`
            }
          >
            Contacto
          </NavLink>
        </nav>

        {/* Botón de inicio de sesión */}
        <div className="w-[302px] h-[39px] flex items-center justify-end">
          <div className="w-[130.91px] h-[39px] rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition bg-white/30">
            <span className="text-white text-[14px] sm:text-[16px] whitespace-nowrap font-dm-sans tracking-wide">
              Iniciar sesión
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
