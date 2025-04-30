import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { PanelContacto } from '../../Contact/components/PanelContacto';

export const Navbar = ({ colors }) => {

  const [menuFlag, setMenuFlag] = useState(false); 
  const [contactFlag, setContactFlag] = useState(false); 
  const location = useLocation(); 

  const handleMenuFlag = () => setMenuFlag(!menuFlag);
  const handleContactFlag = () => setContactFlag(!contactFlag);

  
  const isRoomsPage = location.pathname === '/rooms';

  return (
    <header className={`absolute top-0 left-0 w-full bg-transparent font-dm-sans tracking-wide z-50 px-4 sm:px-6 md:px-10 lg:px-20 ${colors ? colors.textColot : "text-white"}`}>
      <div className="w-full flex items-center justify-between h-[80px] py-2">
       
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl ml-6 font-regular font-['Belleza']">
          NameHotel
        </h1>

        <nav className="hidden lg:flex flex-wrap gap-6 md:gap-8">
          <NavLink to="/" className={({ isActive }) => ` text-[14px] sm:text-[16px] border-b border-transparent ${colors ? colors.borderColor : "hover:border-white"} transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Inicio</NavLink>
          <NavLink to="/rooms" className={({ isActive }) => `text-[14px] sm:text-[16px] border-b border-transparent ${colors ? colors.borderColor : "hover:border-white"} transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Habitaciones</NavLink>
          <NavLink to="/services" className={({ isActive }) => ` text-[14px] sm:text-[16px] border-b border-transparent ${colors ? colors.borderColor : "hover:border-white"} transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Servicios</NavLink>
          <NavLink to="/about-us" className={({ isActive }) => ` text-[14px] sm:text-[16px] border-b border-transparent ${colors ? colors.borderColor : "hover:border-white"} transition duration-300 ${isActive ? 'border-b border-white' : ''}`}>Nosotros</NavLink>

          <button
            onClick={handleContactFlag}
            className={`text-[14px] sm:text-[16px] border-b border-transparent ${colors ? colors.borderColor : "hover:border-white"} transition duration-300 cursor-pointer`}>
            Contacto
          </button>
        </nav>

        <aside className="hidden lg:flex">
          <NavLink to="/auth/login" className={`${colors?.bgOpacity ?? "bg-white/30"} text-white transition text-[14px] sm:text-[16px] px-5 py-2 rounded-full text-center`}>
            Iniciar sesión
          </NavLink>
        </aside>

       
        <button
          className={`lg:hidden ${isRoomsPage ? 'text-black' : 'text-white'}`} 
          onClick={handleMenuFlag}
        >
          {menuFlag ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      <section className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center transition-transform ${menuFlag ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="absolute top-6 right-6 text-black" onClick={handleMenuFlag}>
          <X size={28} />
        </button>
        <NavLink to="/" className="py-3 text-black text-xl" onClick={handleMenuFlag}>Inicio</NavLink>
        <NavLink to="/rooms" className="py-3 text-black text-xl" onClick={handleMenuFlag}>Habitaciones</NavLink>
        <NavLink to="/services" className="py-3 text-black text-xl" onClick={handleMenuFlag}>Servicios</NavLink>
        <NavLink to="about-us" className="py-3 text-black text-xl" onClick={handleMenuFlag}>Nosotros</NavLink>

        
        <button
          onClick={handleContactFlag} 
          className="py-3 text-black text-xl"
        >
          Contacto
        </button>

        <NavLink
          to="/auth/login"
          className="mt-6 bg-[#34a0a4] hover:bg-gray transition text-white text-[16px] px-5 py-2 rounded-full text-center"
          onClick={handleMenuFlag}
        >
          Iniciar sesión
        </NavLink>
      </section>

      
      <PanelContacto flag={contactFlag} handleFlag={handleContactFlag} />
    </header>
  );
};
