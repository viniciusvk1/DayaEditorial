import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Book, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6">
        {/* Main Footer */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Book className="h-6 w-6 text-[#1d1d1f]" />
                <span className="ml-2 text-sm font-semibold text-[#1d1d1f]">Daya Editorial</span>
              </div>
              <p className="text-[#86868b] text-sm leading-relaxed">
                Transformando sonhos em livros publicados com dedicação e profissionalismo.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Página Inicial', path: '/' },
                  { name: 'Sobre', path: '/sobre' },
                  { name: 'Autores', path: '/autores' },
                  { name: 'Contato', path: '/contato' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-4">Nossos Serviços</h3>
              <ul className="space-y-2">
                {[
                  'Publicação de Livros',
                  'Revisão de Textos',
                  'Criação de Capas',
                  'Diagramação',
                  'Impressão',
                  'Registro ISBN',
                ].map((service) => (
                  <li key={service} className="text-sm text-[#86868b]">{service}</li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-4">Contato</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:carvalhoderoberto@gmail.com" 
                    className="flex items-start text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors group"
                  >
                    <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>carvalhoderoberto@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+5511971217605" 
                    className="flex items-start text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors group"
                  >
                    <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>(11) 97121-7605</span>
                  </a>
                </li>
                <li className="flex items-start text-sm text-[#86868b]">
                  <Clock className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Segunda a Sexta<br />9h às 18h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-[#d2d2d7]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-[#86868b]">
              &copy; {currentYear} Daya Editorial. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-xs text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-xs text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;