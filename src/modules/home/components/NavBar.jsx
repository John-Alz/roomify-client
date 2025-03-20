import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full bg-opacity-70 text-white p-6 flex items-center justify-between z-20">
      <h1 className="text-2xl font-bold ml-6">NameHotel</h1>
      <div className="flex justify-center flex-grow space-x-6">
        <Link to="/" className="hover:underline font-semibold">Home</Link>
        <Link to="/habitaciones" className="hover:underline font-semibold">Habitaciones</Link>
        <Link to="/servicios" className="hover:underline font-semibold">Servicios</Link>
        <Link to="/sobre-nosotros" className="hover:underline font-semibold">Sobre nosotros</Link>
        <Link to="/contacto" className="hover:underline font-semibold">Contacto</Link>
      </div>
      <button className="bg-white/30 text-white px-6 py-3 rounded-full ml-auto hover:bg-white/50 transition">
        Iniciar sesión
      </button>
    </nav>
  );
};

