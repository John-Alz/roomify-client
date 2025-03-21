import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white px-10 text-gray-800 pb-6 mt-10 mb-10"> {/* Agregamos mb-10 para espacio debajo */}
      <div className="container mx-auto flex justify-between items-start px-12">
        {/* Sección izquierda: Nombre y descripción */}
        <div className="w-1/3 ml-6"> {/* Movimiento un poco más hacia la derecha */}
          <h3 className="text-2xl font-semibold">Name Hotel</h3>
          <p className="text-sm mt-2 text-gray-600">
            Descripción del hotel. Detalles que los <br /> hagan especial
          </p>
        </div>

        {/* Sección central: Enlaces */}
        <div className="grid grid-cols-3 gap-12 text-sm text-gray-600">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="space-y-1">
              <p>Habitaciones</p>
              <p>Servicios</p>
              <p>Eventos</p>
            </div>
          ))}
        </div>
      </div>

      {/* Línea inferior con derechos y redes sociales */}
      <div className="container mx-auto flex justify-between items-center mt-8 text-sm text-gray-600 px-12">
        <p className="text-xs ml-6">
          &copy; Logo Hotel 2025. Derechos reservados
        </p> {/* Movimiento un poco más hacia la derecha */}
        <div className="flex space-x-3 items-center mr-6"> {/* Movimiento un poco más hacia la izquierda */}
          <p>Encuéntranos en:</p>
          <a href="#" className="text-gray-800 hover:text-gray-900">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-900">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-900">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
