import { ArrowRight, Play, Users, Globe, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    // Contenedor principal con fondo oscuro y centrado vertical
    <section className="relative bg-slate-900 text-white w-full overflow-hidden font-inter">
      {/* Imagen de fondo con efecto de paralaje sutil y superposición */}
      <img
        src="/blog-electromagnetism-HSC-Physics-Study-Guide-hero.webp"
        alt="Equipo industrial trabajando en un proyecto"
        className="absolute inset-0 w-full h-full object-cover object-center min-h-full min-w-full"
        loading="eager"
        decoding="async"
        sizes="100vw"
        style={{ maxHeight: '800px', minHeight: '420px', height: '100%' }} // Altura aumentada y forzada a cubrir
        onError={(e) => {
          e.currentTarget.src = 'https://placehold.co/1920x800/0f172a/ffffff?text=Industria+Moderna';
          e.currentTarget.onerror = null;
        }}
      />

      {/* Filtro oscuro sobre la imagen para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-slate-900/70 z-10"></div>

      {/* Contenido principal sobre la imagen */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-20 min-h-[520px] flex items-center py-20"> {/* Altura y padding aumentados */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Columna de Texto */}
          <div className="lg:col-span-7 text-center lg:text-left animate-fade-in-up">
            <div className="flex flex-col items-center lg:items-start">
              {/* Título Principal */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Soluciones Magnéticas
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                  de Alto Desempeño
                </span>
              </h1>

              {/* Párrafo Descriptivo */}
              <p className="mt-4 text-base md:text-lg text-slate-300 max-w-xl leading-relaxed animate-fade-in-up delay-200">
                En IBC Magnetics diseñamos y fabricamos equipos magnéticos de alta precisión, adaptados a sus necesidades, para garantizar procesos estables y resultados consistentes en el ámbito industrial.
              </p>

              {/* Botones de Llamada a la Acción (CTA) */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto animate-fade-in-up delay-400">
                <a
                  href="https://wa.me/5215512345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-orange-600/30 transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-base"
                >
                  Contactar a un Especialista
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <button className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-slate-800/50 border border-slate-600 text-slate-200 font-semibold rounded-full hover:bg-slate-700/70 hover:border-orange-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-base">
                  <Play className="mr-2 h-5 w-5 text-orange-400 transition-colors group-hover:text-orange-300" />
                  Ver Casos de Éxito
                </button>
              </div>
            </div>
          </div>

          {/* Columna de Estadísticas (más compacta) */}
          <div className="lg:col-span-5 w-full mt-10 lg:mt-0 animate-fade-in-up delay-600">
            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/60 rounded-xl p-4 lg:p-6 space-y-6 shadow-2xl">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-500/10 p-3 rounded-full">
                  <Award className="h-7 w-7 text-orange-500" />
                </div>
                <div className="ml-3">
                  <p className="text-2xl font-bold text-white">+20</p>
                  <p className="text-sm text-slate-400">Años sirviendo a la industria</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-500/10 p-3 rounded-full">
                  <Users className="h-7 w-7 text-orange-500" />
                </div>
                <div className="ml-3">
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-sm text-slate-400">Empresas globales atendidas</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-500/10 p-3 rounded-full">
                  <Globe className="h-7 w-7 text-orange-500" />
                </div>
                <div className="ml-3">
                  <p className="text-2xl font-bold text-white">15+</p>
                  <p className="text-sm text-slate-400">Países con presencia activa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Estilos CSS personalizados para la fuente Inter y animaciones */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
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
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        `}
      </style>
    </section>
  );
};

export default HeroSection;


