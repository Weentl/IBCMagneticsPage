import React from 'react';
import { Award, Shield, Users, Globe } from 'lucide-react';

const TrustSection = () => {
  const clients = [
    { name: 'Minera ABC', logo: 'https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Alimentos XYZ', logo: 'https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Pharma Corp', logo: 'https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Auto Parts Ltd', logo: 'https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Chemical Pro', logo: 'https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Industrial Tech', logo: 'https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=200' },
  ];

  const certifications = [
    { icon: Award, title: 'ISO 9001:2015', description: 'Gestión de Calidad' },
    { icon: Shield, title: 'ISO 14001', description: 'Gestión Ambiental' },
    { icon: Users, title: 'OHSAS 18001', description: 'Seguridad Laboral' },
    { icon: Globe, title: 'Exportación', description: 'Certificado Internacional' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            +20 años de experiencia
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Confianza que respalda resultados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas líderes en sus industrias confían en nuestras soluciones magnéticas 
            para optimizar sus procesos productivos.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold text-gray-700 mb-8">
            Clientes que confían en nosotros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">{client.name.split(' ')[0]}</span>
                  </div>
                  <p className="text-xs text-gray-500">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-center text-lg font-semibold text-gray-700 mb-8">
            Certificaciones y estándares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <cert.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;