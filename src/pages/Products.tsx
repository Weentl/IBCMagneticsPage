import React, { useState } from 'react';
import { Search, Filter, Download, ArrowRight, Magnet, Settings, Gauge, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'todos', name: 'Todas las Soluciones', icon: Filter }, // Cambiado el texto
    { id: 'equipos', name: 'Equipos Magnéticos', icon: Settings },
    { id: 'imanes', name: 'Imanes', icon: Magnet },
    { id: 'instrumentos', name: 'Instrumentos', icon: Gauge },
  ];

  const products = [
    {
      id: 1,
      name: 'Rejillas Magnéticas de Alta Potencia',
      model: 'RM-2000',
      category: 'equipos',
      subcategory: 'Separación',
      applications: ['Separación de partículas ferrosas', 'Control de calidad alimentaria', 'Protección de maquinaria'],
      industries: ['Alimentos', 'Farmacéutica', 'Química', 'Plásticos'],
      image: '/rejilla4-1-scaled.webp', // Placeholder profesional
      specs: {
        'Fuerza magnética': '12,000 Gauss',
        'Material': 'Acero inoxidable 316L',
        'Temperatura máx.': '80°C',
        'Dimensiones': '300x200x50mm',
        'Certificación': 'FDA, HACCP'
      }
    },
    {
      id: 2,
      name: 'Placas Magnéticas Industriales',
      model: 'PM-1500',
      category: 'equipos',
      subcategory: 'Retención',
      applications: ['Retención de metales ferrosos', 'Limpieza de materiales a granel', 'Protección de trituradoras'],
      industries: ['Minería', 'Reciclaje', 'Construcción', 'Agregados'],
      image: '/placa_magnetica3-1.webp', // Placeholder profesional
      specs: {
        'Fuerza magnética': '15,000 Gauss',
        'Material': 'Acero al carbono de alta resistencia',
        'Temperatura máx.': '120°C',
        'Dimensiones': '500x300x80mm',
        'Instalación': 'Sobre cinta transportadora'
      }
    },
    {
      id: 3,
      name: 'Imanes de Ferrita',
      model: 'NdFeB-N52',
      category: 'imanes',
      subcategory: 'Tierras raras',
      applications: ['Alta fuerza magnética en espacios compactos', 'Sensores y actuadores', 'Sujeción de alta precisión'],
      industries: ['Automotriz', 'Electrónica', 'Aeroespacial', 'Robótica'],
      image: '/iman_Ferrita-1.webp', // Placeholder profesional
      specs: {
        'Grado': 'N52',
        'Fuerza magnética': '52 MGOe',
        'Temperatura máx.': '60°C',
        'Recubrimiento': 'Ni-Cu-Ni (Triple capa)',
        'Formas disponibles': 'Discos, Anillos, Bloques'
      }
    },
    {
      id: 4,
      name: 'Gaussímetros Digitales de Alta Precisión',
      model: 'GM-3000',
      category: 'instrumentos',
      subcategory: 'Medición',
      applications: ['Medición precisa de campo magnético', 'Control de calidad en producción', 'Investigación y desarrollo'],
      industries: ['Laboratorio', 'Control de calidad', 'Investigación', 'Fabricación'],
      image: '/gaussmeter-1.webp', // Placeholder profesional
      specs: {
        'Rango': '0-30,000 Gauss',
        'Precisión': '±1%',
        'Resolución': '0.1 Gauss',
        'Pantalla': 'LCD digital retroiluminada',
        'Funciones': 'Peak Hold, Auto Power Off'
      }
    },
    {
      id: 5,
      name: 'Ablandadores Magnéticos Industriales',
      model: 'AM-500',
      category: 'equipos',
      subcategory: 'Tratamiento',
      applications: ['Tratamiento de agua sin químicos', 'Reducción de incrustaciones de cal', 'Protección de tuberías'],
      industries: ['Industrial', 'Residencial', 'Hotelería', 'Agricultura'],
      image: '/ablandadores.webp', // Placeholder profesional
      specs: {
        'Caudal': '500 L/min',
        'Presión máx.': '10 bar',
        'Conexión': '2" NPT',
        'Material': 'Acero inoxidable 304',
        'Vida útil': '+10 años'
      }
    },
    {
      id: 6,
      name: 'Imanes Flexibles Personalizables',
      model: 'IF-100',
      category: 'imanes',
      subcategory: 'Flexibles',
      applications: ['Aplicaciones versátiles de sujeción', 'Señalización magnética', 'Prototipado rápido'],
      industries: ['Publicidad', 'Educación', 'Oficina', 'Automotriz'],
      image: '/iman_flexible-1.webp', // Placeholder profesional
      specs: {
        'Espesor': '1.5mm',
        'Fuerza magnética': '800 Gauss',
        'Flexibilidad': 'Alta, cortable',
        'Recubrimiento': 'Vinilo blanco mate o brillante',
        'Adhesivo': 'Opcional (cara no magnética)'
      }
    },
    {
      id: 7,
      name: 'DETECTOR DE POLARIDAD NORTE-SUR',
      model: 'DM-2500',
      category: 'instrumentos',
      subcategory: 'Detección',
      applications: ['Detección de contaminantes metálicos', 'Control de calidad en línea', 'Protección de equipos'],
      industries: ['Alimentos', 'Farmacéutica', 'Textil', 'Madera'],
      image: '/lapicero_detector-1.webp', // Placeholder profesional
      specs: {
        'Sensibilidad': '0.5mm Fe, 1.0mm No-Fe',
        'Apertura': '400x100mm',
        'Velocidad': '60 m/min',
        'Alarma': 'Visual y sonora, con rechazo automático',
        'Conectividad': 'Ethernet, USB'
      }
    },
    {
      id: 8,
      name: 'Imanes de Ferrita de Alto Rendimiento',
      model: 'FE-C8',
      category: 'imanes',
      subcategory: 'Cerámicos',
      applications: ['Aplicaciones económicas de sujeción', 'Motores eléctricos', 'Generadores'],
      industries: ['Automotriz', 'Electrodomésticos', 'Industrial', 'Juguetes'],
      image: 'https://placehold.co/600x400/262626/F97316?text=Iman+Ferrita', // Placeholder profesional
      specs: {
        'Grado': 'C8',
        'Fuerza magnética': '3.8 MGOe',
        'Temperatura máx.': '250°C',
        'Densidad': '4.9 g/cm³',
        'Resistencia': 'Excelente a la corrosión'
      }
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'todos' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.applications.some(app => app.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Hero Section para la página de productos (reducido y más enfocado) */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 animate-fade-in-up">
            Catálogo de <span className="text-orange-500">Soluciones Magnéticas</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Encuentre el equipo, imán o instrumento perfecto para optimizar sus procesos industriales.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl mx-auto mb-10">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          <input
            type="text"
            placeholder="Buscar por nombre, modelo o aplicación..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:ring-3 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-lg shadow-sm"
          />
        </div>

        {/* Product Sections (formerly Filter Tabs) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ease-in-out
                ${activeFilter === filter.id
                  ? 'bg-orange-600 text-white shadow-xl transform scale-105 border-2 border-orange-700' // Estilo más prominente para activo
                  : 'bg-white text-gray-800 hover:bg-orange-50 hover:text-orange-700 shadow-md border border-gray-200' // Estilo mejorado para inactivo
                } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50`}
            >
              <filter.icon className="w-6 h-6 mr-3" /> {/* Icono más grande */}
              {filter.name}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-8 text-gray-700 text-lg font-semibold text-center">
          <p>Mostrando <span className="text-orange-600">{filteredProducts.length}</span> productos
            {searchTerm && ` para "<span class="text-orange-600">${searchTerm}</span>"`}
          </p>
        </div>

        {/* Products Grid - Innovative Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white border border-gray-200"
              //
            >
              {/* Imagen del Producto */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  // Si la imagen local falla, usa un placeholder de color naranja
                  target.src = `https://placehold.co/600x400/F97316/262626?text=${encodeURIComponent(product.name.replace(/\s/g, '+'))}`;
                }}
              />

              {/* Contenido Visible Inicial */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 font-medium">{product.model}</p>

                {/* Aplicaciones Destacadas */}
                <div className="mt-4 space-y-1">
                  {product.applications.slice(0, 2).map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                  {product.applications.length > 2 && (
                    <p className="text-sm text-gray-500 mt-1">+ {product.applications.length - 2} aplicaciones más</p>
                  )}
                </div>

                {/* Botones de Acción alineados y consistentes */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/producto/${product.id}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 h-11 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 text-sm"
                  >
                    Ver Detalles
                  </Link>
                  <a
                    href={`https://wa.me/5215512345678?text=Hola, me interesa el producto ${product.name} modelo ${product.model}. ¿Podrían enviarme más información y cotización?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 h-11 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm"
                  >
                    Cotizar
                  </a>
                </div>
              </div>

              {/* Etiqueta de Categoría */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full shadow-md">
                  {filters.find(f => f.id === product.category)?.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta con otros términos de búsqueda o filtros diferentes.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('todos');
              }}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Fabricamos soluciones magnéticas personalizadas según tus especificaciones exactas.
          </p>
          <a
            href="https://wa.me/5215512345678?text=Hola, necesito una solución magnética personalizada. ¿Podrían ayudarme?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Solicitar fabricación a medida
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>


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
    </div>
  );
};

export default Products;

