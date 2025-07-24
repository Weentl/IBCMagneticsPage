import React from 'react';
import { Link } from 'react-router-dom';
import { Magnet, MapPin, Phone, Mail, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Magnet className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">IBC Magnetics</h3>
                <p className="text-gray-400 text-sm">Soluciones Magnéticas Industriales</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Más de 20 años proporcionando soluciones magnéticas industriales de alta calidad 
              para empresas de minería, alimentos, farmacéutica, automotriz y procesado químico.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/ibc-magnetics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com/@ibcmagnetics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400 text-sm">México & Perú</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400 text-sm">+52 55 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400 text-sm">info@ibcmagnetics.com</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">
                Horario de atención:<br />
                Lun - Vie: 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 IBC Magnetics. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;