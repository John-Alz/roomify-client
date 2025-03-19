
import { Link } from "react-router-dom";
const Testimonials = () => {
   
    return (
      <section className="py-12 bg-gray-100 text-center mb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Lo Que Opinan Nuestros Clientes</h2>
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              {[{
                img: "./assets/Frame 49.png",
                name: "Fatima Taylor",
                text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
              }, {
                img: "assets/images.jpg",
                name: "John Doe",
                text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
              }, {
                img: "assets/3.jpg",
                name: "Jane Smith",
                text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
              }, {
                img: "assets/4.jpg",
                name: "Jane Smith",
                text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
              }].map((testimonial, index) => (
                <div key={index} className="swiper-slide bg-white rounded-2xl shadow-xl p-6 text-center">
                  <img src={testimonial.img} alt="Cliente" className="w-16 h-16 rounded-full object-cover mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.text}</p>
                </div>
              ))}
            </div>
            <div className="swiper-pagination mt-4"></div>
          </div>
        </div>
      </section>
    );
  };
  
  export { Testimonials };
