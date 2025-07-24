import { ArrowRight, Play, Users, Globe, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    // Contenedor principal con fondo oscuro y centrado vertical
    <section className="relative bg-slate-900 text-white w-full overflow-hidden">
      {/* Filtro oscuro sobre la imagen para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-slate-900/60 z-10"></div>

      {/* Imagen de fondo con efecto de paralaje sutil y superposición */}
      <img
        src="/blog-electromagnetism-HSC-Physics-Study-Guide-hero.jpg"
        alt="Equipo industrial trabajando en un proyecto"
        className="absolute inset-0 w-full h-full object-cover object-center"
        // Fallback en caso de que la imagen no cargue
        onError={(e) => {
          e.currentTarget.src =
            'https://placehold.co/1920x1080/0f172a/ffffff?text=Industria+Moderna';
          e.currentTarget.onerror = null;
        }}
      />

      {/* Contenido principal sobre la imagen */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-20">
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* Columna de Texto */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                {/* Título Principal */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Soluciones Magnéticas
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                    para la Industria Global
                  </span>
                </h1>

                {/* Párrafo Descriptivo */}
                <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                  Ofrecemos equipos de alta especialización, diagnósticos
                  precisos y capacitación técnica avanzada para optimizar los
                  procesos de empresas líderes a nivel mundial.
                </p>

                {/* Botones de Llamada a la Acción (CTA) */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                  <a
                    href="https://wa.me/5215512345678" // Reemplazar con tu número
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-orange-600/30 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                  >
                    Contactar a un Especialista
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <button className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-slate-800/50 border border-slate-600 text-slate-200 font-semibold rounded-lg hover:bg-slate-700/70 hover:border-orange-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <Play className="mr-2 h-5 w-5 text-orange-400 transition-colors group-hover:text-orange-300" />
                    Ver Casos de Éxito
                  </button>
                </div>
              </div>
            </div>

            {/* Columna de Estadísticas (se muestra en la parte inferior en móviles) */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/60 rounded-xl p-6 lg:p-8 space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-orange-500/10 p-3 rounded-full">
                    <Award className="h-7 w-7 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-white">+20</p>
                    <p className="text-sm text-slate-400">
                      Años sirviendo a la industria
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-orange-500/10 p-3 rounded-full">
                    <Users className="h-7 w-7 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-white">500+</p>
                    <p className="text-sm text-slate-400">
                      Empresas globales atendidas
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-orange-500/10 p-3 rounded-full">
                    <Globe className="h-7 w-7 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-white">15+</p>
                    <p className="text-sm text-slate-400">
                      Países con presencia activa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
