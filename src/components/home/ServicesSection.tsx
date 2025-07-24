import React from 'react';
import { Settings, Search, GraduationCap, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: 'Fabricación a medida',
      description: 'Diseñamos y fabricamos equipos magnéticos personalizados según las especificaciones exactas de tu proceso industrial.',
      features: ['Diseño personalizado', 'Materiales de alta calidad', 'Pruebas de rendimiento', 'Garantía extendida'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Search,
      title: 'Diagnóstico y Medición',
      description: 'Evaluamos el rendimiento de tus equipos magnéticos existentes y optimizamos su funcionamiento.',
      features: ['Análisis de campo magnético', 'Medición de eficiencia', 'Reporte detallado', 'Recomendaciones'],
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: GraduationCap,
      title: 'Capacitación especializada',
      description: 'Programas de entrenamiento técnico para tu equipo en mantenimiento y operación de equipos magnéticos.',
      features: ['Cursos personalizados', 'Certificación técnica', 'Material didáctico', 'Soporte continuo'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Servicios que impulsan tu
            <span className="text-orange-500"> productividad</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales que van más allá de la venta de equipos, 
            asegurando el máximo rendimiento de tus inversiones.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="https://wa.me/5215512345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
                  >
                    Solicitar información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    Más detalles
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;