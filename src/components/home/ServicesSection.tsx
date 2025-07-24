import React, { useState } from 'react';
import { Settings, Search, GraduationCap, ArrowRight, Check, X } from 'lucide-react'; // Importación de iconos adicionales, incluyendo X para cerrar

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null); // Estado para controlar el servicio seleccionado para el modal

  const services = [
    {
      icon: Settings,
      title: 'Fabricación a Medida',
      shortDescription: 'Equipos magnéticos personalizados con ingeniería de precisión.',
      description: 'Diseñamos y fabricamos equipos magnéticos personalizados con ingeniería de precisión, adaptándonos a las necesidades específicas de su proceso industrial para maximizar el rendimiento. Desde el concepto inicial hasta la entrega, cada solución es única y optimizada para su aplicación.',
      features: ['Diseño y prototipado personalizado', 'Materiales de alta ingeniería y durabilidad', 'Rigurosas pruebas de rendimiento y calidad', 'Garantía extendida y soporte técnico especializado'],
      image: '/Fabricacion.webp' // Imagen placeholder profesional
    },
    {
      icon: Search,
      title: 'Diagnóstico y Optimización',
      shortDescription: 'Evaluación y mejora del rendimiento de sus equipos magnéticos.',
      description: 'Realizamos evaluaciones exhaustivas del rendimiento de sus equipos magnéticos existentes, identificando oportunidades de mejora y optimizando su funcionamiento para mayor eficiencia. Nuestro análisis detallado le proporciona una visión clara para tomar decisiones informadas.',
      features: ['Análisis avanzado de campo magnético', 'Medición de eficiencia operativa', 'Reportes detallados con hallazgos clave', 'Recomendaciones estratégicas de optimización y mantenimiento'],
      image: '/Diagnostico.webp' // Imagen placeholder profesional
    },
    {
      icon: GraduationCap,
      title: 'Capacitación Especializada',
      shortDescription: 'Programas de entrenamiento técnico para su equipo.',
      description: 'Ofrecemos programas de entrenamiento técnico personalizados para su equipo, asegurando el dominio en el mantenimiento, operación y aprovechamiento óptimo de los equipos magnéticos. Capacitamos a su personal para maximizar la vida útil y la eficiencia de sus sistemas.',
      features: ['Cursos teóricos y prácticos adaptados a su industria', 'Certificación técnica reconocida por expertos', 'Material didáctico completo y actualizado', 'Soporte continuo post-capacitación para consultas'],
      image: '/Capacitacion.webp' // Imagen placeholder profesional
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-900 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Nuestros Servicios:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              Soluciones Integrales para su Industria
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Descubra cómo nuestras capacidades de ingeniería y soporte técnico pueden transformar su operación.
          </p>
        </div>

        {/* Grid de Servicios (Vista Inicial) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedService(service)} // Abre el modal al hacer clic
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagen de Fondo del Servicio */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/${index % 2 === 0 ? 'F97316' : '262626'}/${index % 2 === 0 ? '262626' : 'F97316'}?text=${encodeURIComponent(service.title.replace(/\s/g, '+'))}`; }}
              />

              {/* Overlay con Título e Icono (Siempre visible, con efecto de hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 text-base opacity-90">{service.shortDescription}</p>
                {/* Indicador de "Ver Más" al hacer hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <ArrowRight className="w-8 h-8 text-orange-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalles del Servicio */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto transform scale-95 animate-scale-in">
            {/* Botón de Cerrar */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors duration-200"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Columna de Imagen */}
              <div className="md:order-2"> {/* Imagen a la derecha en desktop */}
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-auto rounded-xl shadow-lg object-cover mb-6 md:mb-0"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/${selectedService.image.includes('F97316') ? 'F97316' : '262626'}/${selectedService.image.includes('F97316') ? '262626' : 'F97316'}?text=${encodeURIComponent(selectedService.title.replace(/\s/g, '+'))}`; }}
                />
              </div>

              {/* Columna de Contenido */}
              <div className="md:order-1"> {/* Contenido a la izquierda en desktop */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900">{selectedService.title}</h3>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {selectedService.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5215512345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition-colors duration-200 text-lg"
                  >
                    Solicitar Información
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="#" // Podría ser un enlace a una página de contacto o un formulario específico
                    className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                  >
                    Más Detalles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos CSS personalizados para la fuente Inter y animaciones */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        `}
      </style>
    </section>
  );
};

export default ServicesSection;

