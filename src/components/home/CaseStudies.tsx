import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      id: 1,
      client: 'Minera del Norte S.A.',
      industry: 'Minería',
      challenge: 'Separación eficiente de minerales ferrosos en proceso de concentración',
      solution: 'Implementación de separadores magnéticos de alta intensidad personalizados',
      results: '35% de aumento en eficiencia de separación, reducción del 20% en costos operativos',
      testimonial: 'IBC Magnetics transformó nuestro proceso de separación. La calidad de sus equipos y el soporte técnico han sido excepcionales.',
      contact: 'Ing. Carlos Mendoza, Gerente de Operaciones',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      logo: 'Minera del Norte'
    },
    {
      id: 2,
      client: 'Alimentos Premium Corp',
      industry: 'Alimentos',
      challenge: 'Eliminación de contaminantes metálicos en línea de producción de cereales',
      solution: 'Instalación de rejillas magnéticas y detectores de metales integrados',
      results: '99.9% de eficiencia en detección, certificación HACCP obtenida',
      testimonial: 'Gracias a las soluciones de IBC Magnetics, hemos logrado los más altos estándares de seguridad alimentaria.',
      contact: 'Dra. Ana Rodríguez, Directora de Calidad',
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=600',
      logo: 'Alimentos Premium'
    },
    {
      id: 3,
      client: 'Pharma Solutions Ltd',
      industry: 'Farmacéutica',
      challenge: 'Control de calidad magnética en producción de medicamentos',
      solution: 'Sistema de medición magnética automatizado con trazabilidad completa',
      results: 'Cumplimiento FDA, reducción del 40% en tiempo de inspección',
      testimonial: 'La precisión y confiabilidad de los instrumentos de IBC Magnetics son fundamentales para nuestros procesos críticos.',
      contact: 'Dr. Miguel Torres, Jefe de Control de Calidad',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      logo: 'Pharma Solutions'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Casos de
            <span className="text-orange-500"> éxito</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones han transformado los procesos 
            industriales de empresas líderes en diferentes sectores.
          </p>
        </div>

        {/* Case Study Slider */}
        <div className="relative">
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={cases[currentSlide].image}
                  alt={cases[currentSlide].client}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">{cases[currentSlide].logo.split(' ')[0]}</span>
                  </div>
                  <p className="font-semibold">{cases[currentSlide].client}</p>
                  <p className="text-sm opacity-80">{cases[currentSlide].industry}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-orange-500 mb-4" />
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "{cases[currentSlide].testimonial}"
                  </blockquote>
                  <cite className="text-sm text-gray-600 font-medium">
                    {cases[currentSlide].contact}
                  </cite>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Desafío:</h4>
                    <p className="text-gray-600">{cases[currentSlide].challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solución:</h4>
                    <p className="text-gray-600">{cases[currentSlide].solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Resultados:</h4>
                    <p className="text-orange-600 font-medium">{cases[currentSlide].results}</p>
                  </div>
                </div>

                <div className="flex items-center mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">Satisfacción del cliente</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;