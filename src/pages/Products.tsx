import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Download, ArrowRight, Magnet, Settings, Gauge } from 'lucide-react';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'todos', name: 'Todos los productos', icon: Filter },
    { id: 'equipos', name: 'Equipos Magnéticos', icon: Settings },
    { id: 'imanes', name: 'Imanes', icon: Magnet },
    { id: 'instrumentos', name: 'Instrumentos', icon: Gauge },
  ];

  const products = [
    {
      id: 1,
      name: 'Rejillas Magnéticas',
      model: 'RM-2000',
      category: 'equipos',
      subcategory: 'Separación',
      applications: ['Separación de partículas ferrosas', 'Control de calidad alimentaria'],
      industries: ['Alimentos', 'Farmacéutica', 'Química'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        'Fuerza magnética': '12,000 Gauss',
        'Material': 'Acero inoxidable 316L',
        'Temperatura máx.': '80°C',
        'Dimensiones': '300x200x50mm'
      }
    },
    {
      id: 2,
      name: 'Placas Magnéticas',
      model: 'PM-1500',
      category: 'equipos',
      subcategory: 'Retención',
      applications: ['Retención de metales ferrosos', 'Limpieza de materiales'],
      industries: ['Minería', 'Reciclaje', 'Construcción'],
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        'Fuerza magnética': '15,000 Gauss',
        'Material': 'Acero al carbono',
        'Temperatura máx.': '120°C',
        'Dimensiones': '500x300x80mm'
      }
    },
    {
      id: 3,
      name: 'Imanes de Neodimio',
      model: 'NdFeB-N52',
      category: 'imanes',
      subcategory: 'Tierras raras',
      applications: ['Alta fuerza magnética', 'Aplicaciones compactas'],
      industries: ['Automotriz', 'Electrónica', 'Aeroespacial'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        'Grado': 'N52',
        'Fuerza magnética': '52 MGOe',
        'Temperatura máx.': '60°C',
        'Recubrimiento': 'Ni-Cu-Ni'
      }
    },
    {
      id: 4,
      name: 'Gaussímetros Digitales',
      model: 'GM-3000',
      category: 'instrumentos',
      subcategory: 'Medición',
      applications: ['Medición de campo magnético', 'Control de calidad'],
      industries: ['Laboratorio', 'Control de calidad', 'Investigación'],
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        'Rango': '0-30,000 Gauss',
        'Precisión': '±1%',
        'Resolución': '0.1 Gauss',
        'Pantalla': 'LCD digital'
      }
    },
    {
      id: 5,
      name: 'Ablandadores Magnéticos',
      model: 'AM-500',
      category: 'equipos',
      subcategory: 'Tratamiento',
      applications: ['Tratamiento de agua', 'Reducción de cal'],
      industries: ['Industrial', 'Residencial', 'Hotelería'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        'Caudal': '500 L/min',
        'Presión máx.': '10 bar',
        'Conexión': '2" NPT',
        'Material': 'Acero inoxidable'
      }
    },
    {
      id: 6,
      name: 'Imanes Flexibles',
      model: 'IF-100',
      category: 'imanes',
      subcategory: 'Flexibles',
      applications: ['Aplicaciones versátiles', 'Señalización magnética'],
      industries: ['Publicidad', 'Educación', 'Oficina'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        'Espesor': '1.5mm',
        'Fuerza magnética': '800 Gauss',
        'Flexibilidad': 'Alta',
        'Recubrimiento': 'Vinilo'
      }
    },
    {
      id: 7,
      name: 'Detectores de Metales',
      model: 'DM-2500',
      category: 'instrumentos',
      subcategory: 'Detección',
      applications: ['Detección de contaminantes', 'Control de calidad'],
      industries: ['Alimentos', 'Farmacéutica', 'Textil'],
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        'Sensibilidad': '0.5mm Fe',
        'Apertura': '400x100mm',
        'Velocidad': '60 m/min',
        'Alarma': 'Visual y sonora'
      }
    },
    {
      id: 8,
      name: 'Imanes de Ferrita',
      model: 'FE-C8',
      category: 'imanes',
      subcategory: 'Cerámicos',
      applications: ['Aplicaciones económicas', 'Motores eléctricos'],
      industries: ['Automotriz', 'Electrodomésticos', 'Industrial'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        'Grado': 'C8',
        'Fuerza magnética': '3.8 MGOe',
        'Temperatura máx.': '250°C',
        'Densidad': '4.9 g/cm³'
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Catálogo de <span className="text-orange-500">Productos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre nuestra amplia gama de soluciones magnéticas diseñadas para 
              satisfacer las necesidades específicas de tu industria.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar productos, modelos o aplicaciones..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-sm'
                }`}
              >
                <filter.icon className="w-4 h-4 mr-2" />
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {filteredProducts.length} productos
            {searchTerm && ` para "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                    {product.model}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                    <Download className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  {product.applications.slice(0, 2).map((app, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      {app}
                    </div>
                  ))}
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.industries.slice(0, 3).map((industry, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    to={`/producto/${product.id}`}
                    className="text-orange-500 font-medium hover:text-orange-600 transition-colors duration-200 flex items-center"
                  >
                    Ver detalle
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <a
                    href={`https://wa.me/5215512345678?text=Hola, me interesa el producto ${product.name} modelo ${product.model}. ¿Podrían enviarme más información y cotización?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200"
                  >
                    Cotizar
                  </a>
                </div>
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
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white">
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
    </div>
  );
};

export default Products;