import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Linkedin, Youtube, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    industry: '',
    productInterest: '',
    message: '',
    country: ''
  });

  const [selectedLocation, setSelectedLocation] = useState('mexico');

  const locations = [
    {
      id: 'mexico',
      country: 'México',
      city: 'Ciudad de México',
      address: 'Av. Insurgentes Sur 1234, Col. Del Valle, C.P. 03100',
      phone: '+52 55 1234 5678',
      whatsapp: '+5215512345678',
      email: 'mexico@ibcmagnetics.com',
      hours: 'Lun - Vie: 8:00 AM - 6:00 PM',
      timezone: 'GMT-6',
      flag: '🇲🇽'
    },
    {
      id: 'peru',
      country: 'Perú',
      city: 'Lima',
      address: 'Av. Javier Prado Este 567, San Isidro, Lima 27',
      phone: '+51 1 234 5678',
      whatsapp: '+5115123456789',
      email: 'peru@ibcmagnetics.com',
      hours: 'Lun - Vie: 8:00 AM - 6:00 PM',
      timezone: 'GMT-5',
      flag: '🇵🇪'
    }
  ];

  const industries = [
    'Minería',
    'Alimentos y Bebidas',
    'Farmacéutica',
    'Automotriz',
    'Química y Petroquímica',
    'Reciclaje',
    'Construcción',
    'Textil',
    'Papel y Pulpa',
    'Otra'
  ];

  const productCategories = [
    'Equipos Magnéticos',
    'Imanes Especializados',
    'Instrumentos de Medición',
    'Servicios de Fabricación',
    'Diagnóstico y Medición',
    'Capacitación',
    'Consultoría Técnica'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Detect country and select appropriate WhatsApp
    const selectedLoc = locations.find(loc => loc.id === selectedLocation) || locations[0];
    
    const whatsappMessage = `Hola, soy ${formData.name} de ${formData.company}.
    
Cargo: ${formData.position}
Industria: ${formData.industry}
País: ${formData.country}
Producto/Servicio de interés: ${formData.productInterest}

Mensaje: ${formData.message}

Email de contacto: ${formData.email}`;

    const whatsappUrl = `https://wa.me/${selectedLoc.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const currentLocation = locations.find(loc => loc.id === selectedLocation) || locations[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-orange-500">Contáctanos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos aquí para ayudarte a encontrar la solución magnética perfecta 
              para tu empresa. Contáctanos desde cualquier parte del mundo.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicita información detallada
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tu cargo en la empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industria *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Seleccionar industria</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    País *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                    placeholder="País de tu empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Producto/Servicio de interés
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Seleccionar categoría</option>
                  {productCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje detallado *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Describe tu proyecto, necesidades específicas, volúmenes, plazos, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar consulta por WhatsApp</span>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center mb-4">
                También puedes contactarnos directamente:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${currentLocation.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp directo
                </a>
                <a
                  href={`mailto:${currentLocation.email}`}
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email directo
                </a>
              </div>
            </div>
          </div>

          {/* Location Info and Map */}
          <div className="space-y-8">
            {/* Location Selector */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Nuestras oficinas
              </h3>
              <div className="flex gap-4 mb-6">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      selectedLocation === location.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    <span className="mr-2">{location.flag}</span>
                    {location.country}
                  </button>
                ))}
              </div>

              {/* Selected Location Details */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                    {currentLocation.city}, {currentLocation.country}
                  </h4>
                  <p className="text-gray-600 ml-7">{currentLocation.address}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-7">
                  <div>
                    <div className="flex items-center mb-2">
                      <Phone className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="text-sm font-medium text-gray-900">Teléfono</span>
                    </div>
                    <p className="text-gray-600 text-sm">{currentLocation.phone}</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <Mail className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="text-sm font-medium text-gray-900">Email</span>
                    </div>
                    <p className="text-gray-600 text-sm">{currentLocation.email}</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="text-sm font-medium text-gray-900">Horario</span>
                    </div>
                    <p className="text-gray-600 text-sm">{currentLocation.hours}</p>
                    <p className="text-gray-500 text-xs">{currentLocation.timezone}</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <MessageCircle className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="text-sm font-medium text-gray-900">WhatsApp</span>
                    </div>
                    <a
                      href={`https://wa.me/${currentLocation.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      {currentLocation.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gray-200 h-80 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/30"></div>
                <div className="text-center z-10">
                  <Globe className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mapa Interactivo</h3>
                  <p className="text-gray-600">
                    {currentLocation.city}, {currentLocation.country}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Haz clic en los marcadores para ver detalles de cada oficina
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media and Additional Contact */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Síguenos en redes sociales
              </h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://linkedin.com/company/ibc-magnetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com/@ibcmagnetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors duration-200"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Atención 24/7 para emergencias</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Para soporte técnico urgente fuera del horario laboral, 
                  contáctanos por WhatsApp con el código "URGENTE".
                </p>
                <a
                  href={`https://wa.me/${currentLocation.whatsapp.replace(/\D/g, '')}?text=URGENTE - Necesito soporte técnico inmediato`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Soporte de emergencia
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;