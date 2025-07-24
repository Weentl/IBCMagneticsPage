import React, { useState, useEffect, useRef } from 'react';
import { Settings, Search, GraduationCap, ArrowRight, CheckCircle, Clock, Users, Award, Lightbulb } from 'lucide-react';

// Datos de Servicios
const services = [
  {
    id: 'fabricacion',
    icon: Settings,
    title: 'Fabricación a Medida',
    fullDescription: 'Combinamos 20+ años de experiencia con tecnología avanzada para diseñar soluciones magnéticas adaptadas a cada cliente, optimizando rendimiento y durabilidad. Nuestro enfoque garantiza que cada equipo no solo cumpla, sino que supere las expectativas de las aplicaciones industriales más exigentes.',
    image: '/Fabricacion.webp',
    workflow: [
      'Consultoría y análisis de necesidades detallado',
      'Diseño CAD 3D y simulación magnética avanzada',
      'Selección de materiales premium y componentes de alta durabilidad',
      'Producción con estrictos controles de calidad',
      'Rigurosas pruebas de rendimiento y validación',
      'Instalación en sitio y puesta en marcha con soporte técnico'
    ],
    benefits: [
      'Soluciones 100% personalizadas y de alta precisión',
      'Mayor eficiencia y productividad operativa',
      'Ahorro significativo en costos a largo plazo por durabilidad',
      'Cumplimiento total de normativas y estándares industriales',
      'Soporte técnico especializado y continuo post-venta'
    ],
    caseStudy: {
      client: 'Minera del Norte S.A.',
      challenge: 'Espacio limitado para la instalación de separadores magnéticos de alta intensidad, sin comprometer la capacidad.',
      solution: 'Diseñamos un sistema compacto y de alto rendimiento con imanes de tierras raras, optimizado para su infraestructura existente.',
      result: '35% más eficiencia en la separación de minerales y 20% menos consumo energético, superando las expectativas iniciales.',
      testimonial: 'La integración fue perfecta y los resultados operativos han sido sobresalientes. IBC Magnetics es un socio estratégico invaluable.'
    }
  },
  {
    id: 'diagnostico',
    icon: Search,
    title: 'Diagnóstico y Medición',
    fullDescription: 'Utilizamos gaussímetros calibrados, fluxímetros y metodologías probadas para diagnosticar y mejorar el rendimiento de tus sistemas magnéticos. Identificamos puntos de mejora y te proporcionamos un plan claro para optimizar la eficiencia y prolongar la vida útil de tus equipos.',
    image: '/Diagnostico.webp',
    workflow: [
      'Inspección visual detallada y documentación inicial',
      'Medición precisa de campo magnético y fuerza de atracción',
      'Análisis de eficiencia de separación y retención de impurezas',
      'Evaluación de desgaste, corrosión y posibles daños estructurales',
      'Elaboración de reporte técnico exhaustivo con gráficos y datos',
      'Presentación de recomendaciones y plan de optimización personalizado'
    ],
    benefits: [
      'Prevención proactiva de fallas y averías costosas',
      'Mayor productividad y continuidad operativa',
      'Extensión significativa de la vida útil de los equipos',
      'Reducción de paradas no programadas y costos de mantenimiento',
      'Documentación completa y validada para auditorías y certificaciones'
    ],
    caseStudy: {
      client: 'Alimentos Premium Corp',
      challenge: 'Baja eficiencia en sus rejillas magnéticas de línea de producción, resultando en posibles contaminaciones.',
      solution: 'Diagnóstico completo en sitio, remagnetización de equipos y ajuste de parámetros operativos para máximo rendimiento.',
      result: '99.9% de eficiencia restaurada en la separación de impurezas ferrosas, manteniendo la certificación HACCP.',
      testimonial: 'El servicio de diagnóstico de IBC fue clave para evitar una parada de producción costosa y asegurar la inocuidad de nuestros productos. Un servicio indispensable para nuestra operación.'
    }
  },
  {
    id: 'capacitacion',
    icon: GraduationCap,
    title: 'Capacitación Especializada',
    fullDescription: 'Ofrecemos cursos personalizados que combinan teoría y práctica intensiva para empoderar a tu equipo en el manejo seguro y eficiente de soluciones magnéticas. Nuestros programas están diseñados para maximizar la vida útil y el rendimiento de tus sistemas, garantizando operaciones seguras y eficientes.',
    image: '/Capacitacion.webp',
    workflow: [
      'Evaluación de necesidades y objetivos de capacitación específicos',
      'Diseño de programa personalizado y material didáctico interactivo',
      'Sesiones teóricas y prácticas en laboratorio o en sitio',
      'Evaluación de conocimientos y habilidades adquiridas con feedback',
      'Emisión de certificación técnica reconocida al finalizar el curso',
      'Soporte y acompañamiento continuo post-curso para resolución de dudas'
    ],
    benefits: [
      'Personal técnico altamente especializado y autónomo',
      'Reducción significativa de errores operativos y riesgos laborales',
      'Mantenimiento preventivo más efectivo y proactivo',
      'Certificación reconocida que valida competencias técnicas',
      'Mejora en seguridad laboral y cumplimiento normativo'
    ],
    caseStudy: {
      client: 'Pharma Solutions Ltd',
      challenge: 'Necesitaban capacitar a su equipo en el manejo y calibración de nuevos equipos de medición magnética de alta precisión.',
      solution: 'Programa de capacitación intensivo de 40 horas con simulaciones prácticas y certificación final personalizada.',
      result: '100% del personal certificado en el uso de instrumentos, mejorando el cumplimiento de las regulaciones FDA.',
      testimonial: 'La capacitación de IBC fue fundamental para nuestro cumplimiento regulatorio y para empoderar a nuestro equipo con las habilidades necesarias. Absolutamente recomendable para cualquier empresa farmacéutica.'
    }
  }
];

// Datos de los cursos (solo para el servicio de Capacitación)
const courses = [
  {
    id: 'fundamentos',
    name: 'Fundamentos del Magnetismo Industrial',
    duration: '16 horas',
    format: 'Presencial/Virtual',
    description: 'Conceptos básicos de magnetismo aplicado a procesos industriales, propiedades de los materiales magnéticos y principios de funcionamiento de equipos.'
  },
  {
    id: 'mantenimiento',
    name: 'Mantenimiento de Equipos Magnéticos',
    duration: '24 horas',
    format: 'Presencial',
    description: 'Técnicas de mantenimiento preventivo y correctivo para prolongar la vida útil de separadores, rejillas y otros sistemas magnéticos.'
  },
  {
    id: 'medicion',
    name: 'Instrumentos de Medición Magnética',
    duration: '20 horas',
    format: 'Presencial/Virtual',
    description: 'Uso y calibración de gaussímetros, fluxímetros y otros instrumentos para la medición precisa de campos magnéticos.'
  },
  {
    id: 'separacion',
    name: 'Optimización de Procesos de Separación',
    duration: '32 horas',
    format: 'Presencial',
    description: 'Técnicas avanzadas para maximizar la eficiencia de los procesos de separación magnética, incluyendo diseño de sistemas y resolución de problemas.'
  },
  {
    id: 'seguridad',
    name: 'Seguridad en Manejo de Imanes',
    duration: '8 horas',
    format: 'Presencial/Virtual',
    description: 'Protocolos de seguridad, riesgos asociados y mejores prácticas para el manejo seguro de imanes potentes en entornos industriales.'
  }
];

const Services = () => {
  // Estado para el ID del servicio seleccionado. Por defecto, se muestra "Capacitación Especializada".
  const [selectedId, setSelectedId] = useState('capacitacion');
  const detailRef = useRef(null);
  const current = services.find(s => s.id === selectedId);

  // Scroll al detalle del servicio cuando se selecciona uno nuevo (solo en móvil)
  useEffect(() => {
    if (window.innerWidth < 1024) { // Solo en pantallas lg o menores
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedId]);

  return (
    <section className="min-h-screen bg-gray-50 font-inter">
      {/* Hero Section para la página de servicios */}
      <header className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 animate-fade-in-up">
            Nuestros <span className="text-orange-500">Servicios Integrales</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Soluciones que van más allá de la venta de equipos, asegurando el máximo rendimiento de tus inversiones magnéticas.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Panel de Navegación de Servicios (Tabs) */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-4 md:p-6 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">Explora Nuestros Servicios</h3>
          <nav className="flex flex-wrap justify-center md:justify-start gap-3">
            {services.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedId(s.id)}
                className={`flex items-center px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-in-out
                  ${selectedId === s.id
                    ? 'bg-orange-600 text-white shadow-xl transform scale-105 border-2 border-orange-700'
                    : 'bg-white text-gray-800 hover:bg-orange-50 hover:text-orange-700 shadow-md border border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50`}
              >
                <s.icon className="w-6 h-6 mr-3 flex-shrink-0" />
                <span className="flex-grow">{s.title}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Detalle Servicio */}
        {current && (
          <div ref={detailRef} className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Imagen */}
              <div className="relative h-72 md:h-96 lg:h-auto"> {/* Ajuste de altura para mejor visualización en móvil/tablet */}
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x600/0f172a/ffffff?text=${encodeURIComponent(current.title.replace(/\s/g, '+'))}`; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <current.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold">{current.title}</h3>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 lg:p-12">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {current.fullDescription}
                </p>

                {/* Workflow */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" />
                    Proceso Paso a Paso
                  </h4>
                  <div className="space-y-4">
                    {current.workflow.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-base font-semibold mr-3 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 text-base leading-tight">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3" />
                    Beneficios Clave
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {current.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <Lightbulb className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-base">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action para el Servicio General */}
                <a
                  href={`https://wa.me/5215512345678?text=Hola, me interesa el servicio de ${current.title}. ¿Podrían enviarme más información?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition-colors duration-200 text-lg"
                >
                  Solicitar Información del Servicio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Sección de Caso de Estudio */}
            <div className="border-t border-gray-200 p-8 lg:p-12 bg-gray-50">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 text-orange-600 mr-3" />
                Caso de Éxito: <span className="text-orange-600 ml-2">{current.caseStudy.client}</span>
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900">Desafío:</h5>
                    <p className="text-gray-700">{current.caseStudy.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900">Solución:</h5>
                    <p className="text-gray-700">{current.caseStudy.solution}</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900">Resultado:</h5>
                    <p className="text-orange-600 font-bold text-lg">{current.caseStudy.result}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between border border-gray-100">
                  <blockquote className="text-gray-700 italic text-lg mb-4 leading-relaxed">
                    "{current.caseStudy.testimonial}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={`https://placehold.co/50x50/F97316/FFFFFF?text=${encodeURIComponent(current.caseStudy.client.split(' ').map(n => n[0]).join(''))}`}
                      alt={`${current.caseStudy.client} Logo`}
                      className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-orange-500"
                    />
                    <div>
                      <cite className="text-base text-gray-800 font-semibold block">{current.caseStudy.client}</cite>
                      <p className="text-sm text-gray-600">Representante</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section (siempre visible al final) */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold mb-4">
          ¿Necesitas un servicio personalizado?
        </h3>
        <p className="text-lg mb-6 opacity-90">
          Desarrollamos soluciones a medida que se adapten perfectamente a tus necesidades específicas.
        </p>
        <a
          href="https://wa.me/5215512345678?text=Hola, necesito información sobre servicios personalizados de IBC Magnetics."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          Hablar con un especialista
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>

      {/* Estilos CSS personalizados para la fuente Inter y animaciones */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInFromBottom 0.8s ease-out forwards;
        }

        .delay-200 { animation-delay: 0.2s; }
        `}
      </style>
    </section>
  );
};

export default Services;

