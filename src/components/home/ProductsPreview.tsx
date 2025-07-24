import React, { useState } from 'react';
import { ArrowRight, Filter, Tag, Layers, Gauge } from 'lucide-react'; // Importación de iconos de lucide-react

const ProductsPreview = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  // Definición de los filtros con sus respectivos iconos
  const filters = [
    { id: 'todos', name: 'Todos los productos', icon: <Filter size={18} /> },
    { id: 'equipos', name: 'Equipos Magnéticos', icon: <Layers size={18} /> },
    { id: 'imanes', name: 'Imanes', icon: <Tag size={18} /> },
    { id: 'instrumentos', name: 'Instrumentos', icon: <Gauge size={18} /> },
  ];

  // Datos de ejemplo de productos con imágenes placeholder profesionales
  const products = [
    {
      id: 1,
      name: 'Rejillas Magnéticas de Alta Potencia',
      category: 'equipos',
      application: 'Separación eficiente de partículas ferrosas en flujos de material',
      image: '/rejilla4-1-scaled.webp', // Imagen industrial, ajustado para fondo blanco
      industries: ['Alimentos', 'Farmacéutica', 'Plásticos']
    },
    {
      id: 2,
      name: 'Placas Magnéticas Industriales',
      category: 'equipos',
      application: 'Retención robusta de metales ferrosos en cintas transportadoras',
      image: '/placa_magnetica3-1.webp',  // Imagen industrial, ajustado para fondo blanco
      industries: ['Minería', 'Reciclaje', 'Química']
    },
    {
      id: 3,
      name: 'Imanes de Ferrita',
      category: 'imanes',
      application: 'Soluciones compactas magnética para diversas aplicaciones',
      image: '/iman_Ferrita-1.webp', // Imagen abstracta/limpia, ajustado para fondo blanco
      industries: ['Automotriz', 'Electrónica', 'Energías Renovables']
    },
    {
      id: 4,
      name: 'Gaussímetros Digitales de Precisión',
      category: 'instrumentos',
      application: 'Medición exacta de campos magnéticos para control de calidad y desarrollo',
      image: '/gaussmeter-1.webp', // Imagen técnica, ajustado para fondo blanco
      industries: ['Laboratorio', 'Control de Calidad', 'Investigación']
    },
    {
      id: 5,
      name: 'Tambores Magnéticos',
      category: 'equipos',
      application: 'Extracción continua de contaminantes ferrosos en grandes volúmenes',
      image: '/tambor_magnetico.webp',
      industries: ['Granos', 'Cereales', 'Procesamiento de Minerales']
    },
    {
      id: 6,
      name: 'Bandas Magnéticas Transportadoras',
      category: 'equipos',
      application: 'Transporte y elevación de materiales ferrosos de forma segura',
      image: 'https://placehold.co/400x250/F97316/262626?text=Bandas+Magneticas',
      industries: ['Fabricación', 'Logística', 'Metalurgia']
    },
  ];

  // Lógica para filtrar y limitar los productos a mostrar (máximo 3 para la previsualización)
  const filteredProducts = activeFilter === 'todos'
    ? products.slice(0, 3) // Limita a 3 productos si no hay filtro activo
    : products.filter(product => product.category === activeFilter).slice(0, 3); // Limita a 3 productos filtrados

  return (
    <section className="py-20 bg-white text-gray-900 font-inter"> {/* Fondo blanco para un look limpio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Descubra Nuestras
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700"> {/* Ajuste de degradado */}
              Soluciones Magnéticas Avanzadas
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Explore una selección de nuestros equipos, imanes e instrumentos de alta ingeniería.
          </p>
        </div>

        {/* Controles de Filtro */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-5 py-2.5 rounded-full font-medium text-base transition-all duration-300 ease-in-out
                ${activeFilter === filter.id
                  ? 'bg-orange-600 text-white shadow-lg transform scale-105' // Estilo para filtro activo
                  : 'bg-gray-200 text-gray-700 hover:bg-orange-100 hover:text-orange-700 hover:shadow-md' // Estilo para filtro inactivo
                } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white`}
            >
              {filter.icon && <span className="mr-2">{filter.icon}</span>} {/* Icono del filtro */}
              {filter.name}
            </button>
          ))}
        </div>

        {/* Grid de Productos - Diseño Innovador */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 bg-white"
            >
              {/* Imagen del Producto */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                // Fallback para la imagen en caso de error de carga
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x288/F97316/262626?text=${encodeURIComponent(product.name.replace(/\s/g, '+'))}`; }}
              />

              {/* Contenido siempre visible */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {product.application}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <a
                    href={`/producto/${product.id}`} // Enlace a la página de detalles del producto
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300 text-base"
                  >
                    Ver Detalles
                  </a>
                  <a
                    href="https://wa.me/5215512345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300 text-base"
                  >
                    Cotizar Ahora
                  </a>
                </div>
              </div>

              {/* Etiqueta de Categoría */}
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 bg-orange-600 text-white text-sm font-semibold rounded-full shadow-md">
                  {filters.find(f => f.id === product.category)?.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action (CTA) al catálogo completo */}
        <div className="text-center mt-12">
          <a
            href="/productos" // Enlace a la página de productos completa
            className="inline-flex items-center px-10 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all duration-300 hover:scale-105 shadow-xl text-lg"
          >
            Explorar Catálogo Completo
            <ArrowRight className="ml-3 h-6 w-6" />
          </a>
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

export default ProductsPreview;

