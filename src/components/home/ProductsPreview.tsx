import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';

const ProductsPreview = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', name: 'Todos los productos' },
    { id: 'equipos', name: 'Equipos Magnéticos' },
    { id: 'imanes', name: 'Imanes' },
    { id: 'instrumentos', name: 'Instrumentos' },
  ];

  const products = [
    {
      id: 1,
      name: 'Rejillas Magnéticas',
      category: 'equipos',
      application: 'Separación de partículas ferrosas',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
      industries: ['Alimentos', 'Farmacéutica']
    },
    {
      id: 2,
      name: 'Placas Magnéticas',
      category: 'equipos',
      application: 'Retención de metales ferrosos',
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=400',
      industries: ['Minería', 'Reciclaje']
    },
    {
      id: 3,
      name: 'Imanes de Neodimio',
      category: 'imanes',
      application: 'Alta fuerza magnética',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      industries: ['Automotriz', 'Electrónica']
    },
    {
      id: 4,
      name: 'Gaussímetros',
      category: 'instrumentos',
      application: 'Medición de campo magnético',
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=400',
      industries: ['Laboratorio', 'Control de calidad']
    },
    {
      id: 5,
      name: 'Ablandadores Magnéticos',
      category: 'equipos',
      application: 'Tratamiento de agua',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
      industries: ['Industrial', 'Residencial']
    },
    {
      id: 6,
      name: 'Imanes Flexibles',
      category: 'imanes',
      application: 'Aplicaciones versátiles',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      industries: ['Publicidad', 'Educación']
    },
  ];

  const filteredProducts = activeFilter === 'todos' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Catálogo de
            <span className="text-orange-500"> productos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubre nuestra amplia gama de soluciones magnéticas diseñadas 
            para satisfacer las necesidades específicas de tu industria.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-sm'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                    {filters.find(f => f.id === product.category)?.name}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.application}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Industrias:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.industries.map((industry, index) => (
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
                    className="text-orange-500 font-medium hover:text-orange-600 transition-colors duration-200"
                  >
                    Ver detalles
                  </Link>
                  <a
                    href="https://wa.me/5215512345678"
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

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/productos"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Ver catálogo completo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;