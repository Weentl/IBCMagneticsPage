import React, { useState, useEffect } from 'react';
import { Award, Shield, Users, Globe, Building, CheckCircle2, Quote, ChevronLeft, ChevronRight } from 'lucide-react'; // Iconos adicionales

const TrustSection = () => {
  // Datos de clientes con placeholders de logos más profesionales
  const clients = [
    { name: 'Minera ABC', logo: 'https://placehold.co/120x60/F97316/262626?text=MINERA+ABC' },
    { name: 'Alimentos XYZ', logo: 'https://placehold.co/120x60/262626/F97316?text=ALIMENTOS+XYZ' },
    { name: 'Pharma Corp', logo: 'https://placehold.co/120x60/F97316/262626?text=PHARMA+CORP' },
    { name: 'Auto Parts Ltd', logo: 'https://placehold.co/120x60/262626/F97316?text=AUTO+PARTS+LTD' },
    { name: 'Chemical Pro', logo: 'https://placehold.co/120x60/F97316/262626?text=CHEMICAL+PRO' },
    { name: 'Industrial Tech', logo: 'https://placehold.co/120x60/262626/F97316?text=INDUSTRIAL+TECH' },
    { name: 'Construcciones G', logo: 'https://placehold.co/120x60/F97316/262626?text=CONST+G' },
    { name: 'Energía Solar', logo: 'https://placehold.co/120x60/262626/F97316?text=ENERGIA+SOLAR' },
    { name: 'Logística Express', logo: 'https://placehold.co/120x60/F97316/262626?text=LOGISTICA' },
    { name: 'Metalurgia F', logo: 'https://placehold.co/120x60/262626/F97316?text=METALURGIA+F' },
    { name: 'Agroindustria P', logo: 'https://placehold.co/120x60/F97316/262626?text=AGROIND+P' },
    { name: 'Textil M', logo: 'https://placehold.co/120x60/262626/F97316?text=TEXTIL+M' },
  ];

  // Datos de certificaciones
  const certifications = [
    { icon: Award, title: 'ISO 9001:2015', description: 'Gestión de Calidad Certificada', color: 'text-blue-600' },
    { icon: Shield, title: 'ISO 14001:2015', description: 'Excelencia en Gestión Ambiental', color: 'text-green-600' },
    { icon: Users, title: 'ISO 45001:2018', description: 'Seguridad y Salud Ocupacional', color: 'text-purple-600' },
    { icon: Globe, title: 'Estándares Globales', description: 'Cumplimiento Internacional y Exportación', color: 'text-indigo-600' },
  ];

  // Datos de un testimonio destacado
  const testimonial = {
    quote: "La precisión y durabilidad de los equipos magnéticos de IBC Magnetics han transformado nuestros procesos de producción, reduciendo significativamente los tiempos de inactividad y mejorando la calidad del producto final. Su soporte técnico es inigualable.",
    author: "Ing. Ana Gómez",
    position: "Directora de Operaciones, Minera Global S.A.",
    image: "https://placehold.co/80x80/F97316/FFFFFF?text=AG" // Placeholder para imagen de perfil
  };

  // Estado para el carrusel de clientes
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Función para determinar cuántos clientes se muestran por página según el tamaño de la pantalla
  const getVisibleClientsCount = () => {
    if (window.innerWidth >= 1280) return 6; // xl breakpoint
    if (window.innerWidth >= 1024) return 5; // lg breakpoint
    if (window.innerWidth >= 768) return 4; // md breakpoint
    if (window.innerWidth >= 640) return 3; // sm breakpoint
    return 2; // default for extra small screens
  };

  const [visibleClientsCount, setVisibleClientsCount] = useState(getVisibleClientsCount());

  // Efecto para actualizar visibleClientsCount al redimensionar la ventana
  useEffect(() => {
    const handleResize = () => {
      setVisibleClientsCount(getVisibleClientsCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Efecto para el auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clients.length);
      }
    }, 3000); // Mueve cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [clients.length, isPaused]); // Dependencias: si cambia el número de clientes o el estado de pausa

  // Funciones para navegación manual (botones)
  const nextClient = () => {
    setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const prevClient = () => {
    setCurrentClientIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
  };

  return (
    <section className="py-20 bg-white text-gray-900 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            La Confianza de Nuestros Clientes,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              Nuestro Mayor Respaldo
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Trabajamos con líderes de la industria, entregando soluciones magnéticas que garantizan rendimiento y fiabilidad.
          </p>
        </div>

        {/* Sección de Métricas Clave / Logros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
          <div className="p-6 bg-gray-50 rounded-xl shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 border border-gray-100">
            <Award className="w-14 h-14 text-orange-600 mb-4" /> {/* Icono más grande */}
            <p className="text-5xl font-extrabold text-orange-600">20+</p>
            <p className="text-lg text-gray-700 font-semibold mt-2">Años de Experiencia</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 border border-gray-100">
            <Building className="w-14 h-14 text-orange-600 mb-4" />
            <p className="text-5xl font-extrabold text-orange-600">100+</p>
            <p className="text-lg text-gray-700 font-semibold mt-2">Proyectos Exitosos</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 border border-gray-100">
            <Users className="w-14 h-14 text-orange-600 mb-4" />
            <p className="text-5xl font-extrabold text-orange-600">300+</p>
            <p className="text-lg text-gray-700 font-semibold mt-2">Clientes Industriales</p>
          </div>
        </div>

        {/* Carrusel de Logos de Clientes */}
        <div className="mb-20 relative">
          <h3 className="text-center text-2xl font-bold text-gray-800 mb-10">
            Empresas que Confían en IBC Magnetics
          </h3>
          <div
            className="relative overflow-hidden w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentClientIndex * (100 / visibleClientsCount)}%)` }}
            >
              {/* Duplicar los clientes para un efecto de carrusel infinito más suave */}
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index} // Usar el índice para la clave, ya que los clientes se duplican
                  className="flex-shrink-0 p-2"
                  style={{ width: `${100 / visibleClientsCount}%` }} // Ancho dinámico por cliente visible
                >
                  <div className="h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 border border-gray-100">
                    <img
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => { const target = e.target; target.onerror = null; target.src = `https://placehold.co/120x60/F97316/262626?text=${encodeURIComponent(client.name.replace(/\s/g, '+'))}`; }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de Navegación del Carrusel */}
          <button
            onClick={prevClient}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-opacity-75 transition-colors duration-300 z-30 ml-2"
            aria-label="Previous client"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextClient}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-opacity-75 transition-colors duration-300 z-30 mr-2"
            aria-label="Next client"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Sección de Certificaciones Destacadas */}
        <div className="mb-12">
          <h3 className="text-center text-2xl font-bold text-gray-800 mb-10">
            Compromiso con la Calidad y Estándares Globales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100"
              >
                <div className={`w-16 h-16 ${cert.color.replace('text-', 'bg-')} bg-opacity-10 rounded-full mx-auto mb-6 flex items-center justify-center`}>
                  <cert.icon className={`w-8 h-8 ${cert.color}`} />
                </div>
                <h4 className="font-extrabold text-xl text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-base text-gray-700 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Estilos CSS personalizados para la fuente Inter */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        `}
      </style>
    </section>
  );
};

export default TrustSection;

