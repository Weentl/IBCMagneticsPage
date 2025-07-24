import React, { useState } from 'react';
import { Settings, Search, GraduationCap, ArrowRight, CheckCircle, Clock, Users, Award } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState('');

  const services = [
    {
      id: 'fabricacion',
      icon: Settings,
      title: 'Fabricación a medida',
      shortDescription: 'Diseñamos y fabricamos equipos magnéticos personalizados según las especificaciones exactas de tu proceso industrial.',
      fullDescription: 'Nuestro servicio de fabricación a medida combina más de 20 años de experiencia con tecnología de vanguardia para crear soluciones magnéticas que se adapten perfectamente a tus necesidades específicas.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      workflow: [
        'Análisis de requerimientos y consulta técnica',
        'Diseño 3D y simulación magnética',
        'Selección de materiales y componentes',
        'Fabricación con control de calidad',
        'Pruebas de rendimiento y certificación',
        'Instalación y puesta en marcha'
      ],
      benefits: [
        'Solución 100% personalizada',
        'Optimización de procesos',
        'Reducción de costos operativos',
        'Cumplimiento de normativas',
        'Soporte técnico especializado'
      ],
      caseStudy: {
        client: 'Minera del Norte S.A.',
        challenge: 'Necesitaban un separador magnético de alta intensidad para minerales específicos',
        solution: 'Diseñamos un sistema personalizado con imanes de tierras raras',
        result: '35% de aumento en eficiencia de separación',
        testimonial: 'La solución personalizada de IBC Magnetics superó nuestras expectativas.',
        logo: 'Minera del Norte'
      }
    },
    {
      id: 'diagnostico',
      icon: Search,
      title: 'Diagnóstico & Medición',
      shortDescription: 'Evaluamos el rendimiento de tus equipos magnéticos existentes y optimizamos su funcionamiento.',
      fullDescription: 'Utilizamos instrumentos de medición de precisión y metodologías probadas para diagnosticar el estado de tus equipos magnéticos y proponer mejoras que maximicen su eficiencia.',
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=600',
      workflow: [
        'Inspección visual y documentación',
        'Medición de campo magnético con gaussímetros',
        'Análisis de eficiencia de separación',
        'Evaluación de desgaste y corrosión',
        'Reporte técnico detallado',
        'Recomendaciones de mejora'
      ],
      benefits: [
        'Identificación de problemas tempranos',
        'Optimización del rendimiento',
        'Extensión de vida útil',
        'Reducción de paradas no programadas',
        'Documentación para auditorías'
      ],
      caseStudy: {
        client: 'Alimentos Premium Corp',
        challenge: 'Pérdida de eficiencia en sus rejillas magnéticas de línea de producción',
        solution: 'Diagnóstico completo y remagnetización de equipos',
        result: '99.9% de eficiencia restaurada, certificación HACCP mantenida',
        testimonial: 'El diagnóstico de IBC nos ayudó a evitar una costosa parada de producción.',
        logo: 'Alimentos Premium'
      }
    },
    {
      id: 'capacitacion',
      icon: GraduationCap,
      title: 'Capacitación especializada',
      shortDescription: 'Programas de entrenamiento técnico para tu equipo en mantenimiento y operación de equipos magnéticos.',
      fullDescription: 'Desarrollamos programas de capacitación personalizados que combinan teoría y práctica para que tu equipo domine el uso, mantenimiento y optimización de soluciones magnéticas.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      workflow: [
        'Evaluación de necesidades de capacitación',
        'Diseño de programa personalizado',
        'Preparación de material didáctico',
        'Sesiones teóricas y prácticas',
        'Evaluación y certificación',
        'Seguimiento y soporte continuo'
      ],
      benefits: [
        'Personal técnico especializado',
        'Reducción de errores operativos',
        'Mantenimiento preventivo efectivo',
        'Certificación reconocida',
        'Mejora en seguridad laboral'
      ],
      caseStudy: {
        client: 'Pharma Solutions Ltd',
        challenge: 'Necesitaban capacitar a su equipo en nuevos equipos de medición magnética',
        solution: 'Programa de capacitación de 40 horas con certificación',
        result: '100% del personal certificado, cumplimiento FDA mejorado',
        testimonial: 'La capacitación de IBC fue fundamental para nuestro cumplimiento regulatorio.',
        logo: 'Pharma Solutions'
      }
    }
  ];

  const courses = [
    {
      id: 'fundamentos',
      name: 'Fundamentos del Magnetismo Industrial',
      duration: '16 horas',
      format: 'Presencial/Virtual',
      description: 'Conceptos básicos de magnetismo aplicado a procesos industriales'
    },
    {
      id: 'mantenimiento',
      name: 'Mantenimiento de Equipos Magnéticos',
      duration: '24 horas',
      format: 'Presencial',
      description: 'Técnicas de mantenimiento preventivo y correctivo'
    },
    {
      id: 'medicion',
      name: 'Instrumentos de Medición Magnética',
      duration: '20 horas',
      format: 'Presencial/Virtual',
      description: 'Uso y calibración de gaussímetros y fluxímetros'
    },
    {
      id: 'separacion',
      name: 'Optimización de Procesos de Separación',
      duration: '32 horas',
      format: 'Presencial',
      description: 'Técnicas avanzadas para maximizar eficiencia de separación'
    },
    {
      id: 'seguridad',
      name: 'Seguridad en Manejo de Imanes',
      duration: '8 horas',
      format: 'Presencial/Virtual',
      description: 'Protocolos de seguridad y manejo seguro de imanes potentes'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Nuestros <span className="text-orange-500">Servicios</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones integrales que van más allá de la venta de equipos, 
              asegurando el máximo rendimiento de tus inversiones magnéticas.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-2">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.shortDescription}
                </p>
                <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors duration-200 flex items-center">
                  {selectedService === service.id ? 'Ver menos' : 'Ver más'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service View */}
        {selectedService && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
            {(() => {
              const service = services.find(s => s.id === selectedService);
              return (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-96 lg:h-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                          <service.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {service.fullDescription}
                      </p>

                      {/* Workflow */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Clock className="w-5 h-5 text-orange-500 mr-2" />
                          Proceso paso a paso
                        </h4>
                        <div className="space-y-3">
                          {service.workflow.map((step, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-1">
                                {index + 1}
                              </div>
                              <span className="text-gray-700">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
                          Beneficios
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/5215512345678?text=Hola, me interesa el servicio de ${service.title}. ¿Podrían enviarme más información?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
                      >
                        Solicitar información
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="border-t border-gray-200 p-8 lg:p-12 bg-gray-50">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Award className="w-6 h-6 text-orange-500 mr-2" />
                      Caso de éxito
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900">Cliente:</h5>
                          <p className="text-gray-700">{service.caseStudy.client}</p>
                        </div>
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900">Desafío:</h5>
                          <p className="text-gray-700">{service.caseStudy.challenge}</p>
                        </div>
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900">Solución:</h5>
                          <p className="text-gray-700">{service.caseStudy.solution}</p>
                        </div>
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900">Resultado:</h5>
                          <p className="text-orange-600 font-medium">{service.caseStudy.result}</p>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-lg">
                        <blockquote className="text-gray-700 italic mb-4">
                          "{service.caseStudy.testimonial}"
                        </blockquote>
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                          <span className="text-xs font-bold text-gray-600">
                            {service.caseStudy.logo.split(' ')[0]}
                          </span>
                        </div>
                        <cite className="text-sm text-gray-600 font-medium">
                          {service.caseStudy.client}
                        </cite>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Training Courses Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-orange-500 mr-3" />
              Capacitaciones a medida
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ofrecemos cursos especializados diseñados según las necesidades específicas 
              de tu equipo y los productos que utilizas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition-colors duration-200"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{course.name}</h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-orange-500" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-orange-500" />
                    {course.format}
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{course.description}</p>
                <button
                  onClick={() => setSelectedCourse(course.id)}
                  className="text-orange-500 font-medium hover:text-orange-600 transition-colors duration-200"
                >
                  Más información
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="mb-4">
              <label htmlFor="course-select" className="block text-sm font-medium text-gray-700 mb-2">
                Selecciona un curso para cotización:
              </label>
              <select
                id="course-select"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Seleccionar curso...</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
            <a
              href={`https://wa.me/5215512345678?text=Hola, me interesa el curso de ${
                selectedCourse ? courses.find(c => c.id === selectedCourse)?.name : 'capacitación'
              }. ¿Podrían enviarme más información y cotización?`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Solicita tu cotización
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white">
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
      </div>
    </div>
  );
};

export default Services;