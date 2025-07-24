import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Play, MessageCircle, Star, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('descripcion');

  // Mock product data - in real app, fetch based on ID
  const product = {
    id: parseInt(id || '1'),
    name: 'Rejillas Magnéticas',
    model: 'RM-2000',
    category: 'Equipos Magnéticos',
    subcategory: 'Separación',
    mainImage: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    description: 'Las rejillas magnéticas RM-2000 son equipos de alta eficiencia diseñados para la separación de partículas ferrosas en procesos industriales. Fabricadas con materiales de primera calidad y imanes de neodimio de alta potencia, garantizan una separación efectiva y duradera.',
    applications: [
      {
        industry: 'Alimentos',
        description: 'Separación de contaminantes metálicos en líneas de producción',
        icon: '🍞'
      },
      {
        industry: 'Farmacéutica',
        description: 'Control de calidad en procesos de manufactura',
        icon: '💊'
      },
      {
        industry: 'Química',
        description: 'Purificación de materias primas y productos finales',
        icon: '⚗️'
      },
      {
        industry: 'Minería',
        description: 'Concentración de minerales ferrosos',
        icon: '⛏️'
      }
    ],
    specifications: {
      'Fuerza magnética': '12,000 Gauss',
      'Material de construcción': 'Acero inoxidable 316L',
      'Temperatura máxima de operación': '80°C',
      'Dimensiones estándar': '300 x 200 x 50 mm',
      'Peso': '15 kg',
      'Conexiones': 'Bridas ANSI 150',
      'Presión máxima': '10 bar',
      'Certificaciones': 'FDA, CE, ISO 9001'
    },
    maintenance: [
      'Inspección visual semanal de la superficie magnética',
      'Limpieza de partículas ferrosas cada 24 horas de operación',
      'Verificación de fuerza magnética mensual con gaussímetro',
      'Revisión de conexiones y sellos cada 6 meses',
      'Calibración anual por técnico certificado'
    ],
    features: [
      'Imanes de neodimio de alta potencia',
      'Construcción en acero inoxidable',
      'Fácil limpieza y mantenimiento',
      'Diseño sanitario para industria alimentaria',
      'Resistente a la corrosión',
      'Instalación rápida y sencilla'
    ],
    benefits: [
      'Mejora la calidad del producto final',
      'Reduce costos de mantenimiento',
      'Cumple normativas internacionales',
      'Aumenta la eficiencia del proceso',
      'Protege equipos downstream'
    ]
  };

  const tabs = [
    { id: 'descripcion', name: 'Descripción' },
    { id: 'aplicaciones', name: 'Aplicaciones' },
    { id: 'especificaciones', name: 'Ficha Técnica' },
    { id: 'galeria', name: 'Galería' },
    { id: 'mantenimiento', name: 'Mantenimiento' }
  ];

  const relatedProducts = [
    { id: 2, name: 'Placas Magnéticas', model: 'PM-1500', image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 5, name: 'Ablandadores Magnéticos', model: 'AM-500', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 7, name: 'Detectores de Metales', model: 'DM-2500', image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-orange-500">Inicio</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/productos" className="text-gray-500 hover:text-orange-500">Productos</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/productos"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
              <img
                src={product.mainImage}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 mb-6">Modelo: {product.model}</p>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Características principales:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Beneficios:</h3>
              <div className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-4 h-4 text-orange-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/5215512345678?text=Hola, me interesa el producto ${product.name} modelo ${product.model}. ¿Podrían enviarme más información y cotización?`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar cotización
              </a>
              <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Descargar ficha técnica
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'descripcion' && (
              <div className="prose prose-gray max-w-none">
                <h3 className="text-xl font-semibold mb-4">Descripción detallada</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                <p className="text-gray-700 leading-relaxed">
                  Nuestras rejillas magnéticas están diseñadas con la más alta tecnología para garantizar 
                  una separación eficiente y confiable. El diseño modular permite una fácil instalación 
                  y mantenimiento, mientras que los materiales de construcción aseguran una larga vida útil 
                  incluso en las condiciones más exigentes.
                </p>
              </div>
            )}

            {activeTab === 'aplicaciones' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Aplicaciones por industria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.applications.map((app, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">{app.icon}</span>
                        <h4 className="text-lg font-semibold text-gray-900">{app.industry}</h4>
                      </div>
                      <p className="text-gray-700">{app.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'especificaciones' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Especificaciones técnicas</h3>
                  <button className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar PDF
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Parámetro</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Valor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-300 px-4 py-3 font-medium">{key}</td>
                          <td className="border border-gray-300 px-4 py-3">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'galeria' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Galería de imágenes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.gallery.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'mantenimiento' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Guía de mantenimiento</h3>
                <div className="space-y-4 mb-8">
                  {product.maintenance.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h4 className="font-semibold text-orange-800 mb-2">Video de mantenimiento</h4>
                  <p className="text-orange-700 mb-4">
                    Aprende las mejores prácticas de mantenimiento con nuestro video tutorial.
                  </p>
                  <button className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                    <Play className="w-4 h-4 mr-2" />
                    Ver video tutorial
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Productos relacionados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/producto/${relatedProduct.id}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{relatedProduct.name}</h4>
                  <p className="text-sm text-gray-600">{relatedProduct.model}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-900">{product.name}</h4>
            <p className="text-sm text-gray-600">Modelo: {product.model}</p>
          </div>
          <a
            href={`https://wa.me/5215512345678?text=Hola, me interesa el producto ${product.name} modelo ${product.model}. ¿Podrían enviarme más información y cotización?`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 flex items-center"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Solicitar cotización
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;