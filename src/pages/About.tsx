import React from 'react';
import { MapPin, Users, Award, Globe, Target, Eye, Heart, Lightbulb, Shield, Leaf } from 'lucide-react';

const About = () => {

  const values = [
    {
      icon: Award,
      title: 'Calidad',
      description: 'Comprometidos con los más altos estándares de calidad en cada producto y servicio que ofrecemos.'
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Desarrollamos constantemente nuevas tecnologías y soluciones para mantenernos a la vanguardia.'
    },
    {
      icon: Shield,
      title: 'Servicio',
      description: 'Brindamos soporte técnico excepcional y acompañamiento integral a nuestros clientes.'
    },
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      description: 'Promovemos prácticas responsables que contribuyan al cuidado del medio ambiente.'
    }
  ];

  const team = [
    {
      name: 'Nombre 1',
      position: 'Puesto 1',
      experience: 'Experiencia 1',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Nombre 2',
      position: 'Puesto 2',
      experience: 'Experiencia 2',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Nombre 3',
      position: 'Puesto 3',
      experience: 'Experiencia 3',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Nombre 4',
      position: 'Puesto 4',
      experience: 'Experiencia 4',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const globalProjects = [
    { country: 'México', projects: 150, flag: '🇲🇽' },
    { country: 'Perú', projects: 120, flag: '🇵🇪' },
    { country: 'Chile', projects: 45, flag: '🇨🇱' },
    { country: 'Colombia', projects: 30, flag: '🇨🇴' },
    { country: 'Alemania', projects: 25, flag: '🇩🇪' },
    { country: 'Japón', projects: 20, flag: '🇯🇵' },
    { country: 'Estados Unidos', projects: 35, flag: '🇺🇸' },
    { country: 'Brasil', projects: 40, flag: '🇧🇷' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Gestión de Calidad' },
    { name: 'ISO 14001:2015', description: 'Gestión Ambiental' },
    { name: 'OHSAS 18001', description: 'Seguridad y Salud Ocupacional' },
    { name: 'FDA Registered', description: 'Productos para industria alimentaria' },
    { name: 'CE Marking', description: 'Conformidad europea' },
    { name: 'ASME Certified', description: 'Equipos a presión' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Sobre <span className="text-orange-500">Nosotros</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Más de 20 años liderando la innovación en soluciones magnéticas industriales, 
              sirviendo a empresas de todo el mundo con excelencia y compromiso.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission, Vision, Values */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Impulsar la eficiencia de procesos industriales a través de soluciones 
                magnéticas innovadoras que generen valor sostenible para nuestros clientes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser el socio de confianza de empresas a nivel global, reconocidos por 
                nuestra excelencia técnica y compromiso con la innovación sostenible.
              </p>
            </div>

            {/* Values Preview */}
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-700 leading-relaxed">
                Calidad, Innovación, Servicio y Sostenibilidad guían cada una de 
                nuestras decisiones y acciones empresariales.
              </p>
            </div>
          </div>
        </section>

        {/* Values Detail */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros <span className="text-orange-500">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que definen nuestra cultura organizacional y guían 
              nuestro compromiso con la excelencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestro <span className="text-orange-500">Equipo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales altamente calificados con décadas de experiencia 
              en ingeniería magnética y desarrollo de soluciones industriales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-orange-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Coverage */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cobertura <span className="text-orange-500">Global</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendemos a empresas de todo el mundo con proyectos exitosos 
              en América, Europa y Asia.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            {/* World Map Placeholder */}
            <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/20"></div>
              <div className="text-center z-10">
                <Globe className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Presencia Mundial</h3>
                <p className="text-gray-600">Proyectos en más de 15 países</p>
              </div>
            </div>

            {/* Projects by Country */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {globalProjects.map((project, index) => (
                <div
                  key={index}
                  className="text-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors duration-200"
                >
                  <div className="text-2xl mb-2">{project.flag}</div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{project.country}</h4>
                  <p className="text-orange-600 font-bold">{project.projects} proyectos</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certificaciones y <span className="text-orange-500">Alianzas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cumplimos con los más altos estándares internacionales de calidad, 
              seguridad y gestión ambiental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            ¿Quieres ser parte de nuestra historia de éxito?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Únete a las empresas líderes que confían en IBC Magnetics para 
            optimizar sus procesos industriales.
          </p>
          <a
            href="https://wa.me/5215512345678?text=Hola, me interesa conocer más sobre IBC Magnetics y sus soluciones."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <Users className="w-5 h-5 mr-2" />
            Conoce nuestras soluciones
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;