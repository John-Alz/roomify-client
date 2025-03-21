import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full bg-opacity-70 text-white py-6 px-10 flex items-center justify-between z-20">
      <h1 className="text-4xl font-semibold tracking-wide ml-13">NameHotel</h1>
      <div className="flex space-x-8 text-sm  font-semibold mr-10">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/habitaciones" className="hover:underline">Habitaciones</Link>
        <Link to="/servicios" className="hover:underline">Servicios</Link>
        <Link to="/sobre-nosotros" className="hover:underline">Sobre nosotros</Link>
        <Link to="/contacto" className="hover:underline">Contacto</Link>
      </div>
      <button className="bg-white/30 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white/50 transition mr-12">
        Iniciar sesión
      </button>
    </nav>
  );
};
