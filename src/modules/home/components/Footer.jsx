
const Footer = () => {
    return (
      <footer className="bg-gray-100 px-6 text-gray-800 pb-8">
        <div className="container mx-auto flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">Name Hotel</h3>
            <p className="text-sm mt-2">Descripción del hotel. Detalles que los hagan especial</p>
          </div>
          <div className="grid grid-cols-3 gap-8 text-sm text-gray-600">
            {Array(3).fill().map((_, i) => (
              <div key={i}>
                <p>Habitaciones</p>
                <p>Servicios</p>
                <p>Eventos</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto flex justify-between items-center border-t pt-4 mt-4 text-sm">
          <p className="text-xs">&copy; Logo Hotel 2025. Derechos reservados</p>
          <div className="flex space-x-3">
            <p>Encuéntranos en:</p>
            <a href="#" className="text-gray-800 hover:text-gray-900"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-800 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-800 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>
    );
  };
  
  export { Footer };