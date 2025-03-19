import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    
    <nav class="absolute top-0 left-0 w-full bg-opacity-70 text-white p-6 flex items-center justify-between z-20">
        <h1 class="text-2xl font-bold ml-6">NameHotel</h1>
        <div class="flex justify-center flex-grow space-x-6">
            <a href="#" class="hover:underline font-semibold">Home</a>
            <a href="#" class="hover:underline font-semibold">Habitaciones</a>
            <a href="#" class="hover:underline font-semibold">Servicios</a>
            <a href="#" class="hover:underline font-semibold">Sobre nosotros</a>
            <a href="#" class="hover:underline font-semibold">Contacto</a>
        </div>
        <button class="bg-white/30 text-white px-6 py-3 rounded-full ml-auto hover:bg-white/50 transition">
        Iniciar sesión</button>
    </nav>
  );
};

export default Navbar;
