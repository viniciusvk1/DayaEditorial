import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Edit, Palette, Layout, Printer, BookCopy, Bookmark, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Book,
    title: 'Publicação de Livros',
    description: 'Transforme seu manuscrito em um livro profissional publicado.'
  },
  {
    icon: Edit,
    title: 'Revisão de Textos',
    description: 'Revisão minuciosa para garantir a qualidade do seu conteúdo.'
  },
  {
    icon: Palette,
    title: 'Criação de Capas',
    description: 'Design profissional que destaca seu livro no mercado.'
  },
  {
    icon: Layout,
    title: 'Diagramação',
    description: 'Layout interno profissional para melhor experiência de leitura.'
  },
  {
    icon: Printer,
    title: 'Impressão de Livros',
    description: 'Impressão de alta qualidade para seu livro.'
  },
  {
    icon: BookCopy,
    title: 'Acabamento',
    description: 'Acabamento profissional para valorizar sua obra.'
  }
];

const Home = () => {
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de publicação da Daya Editorial.");
  const whatsappLink = `https://wa.me/5511971217605?text=${whatsappMessage}`;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="pt-4 sm:pt-5">
        <div className="relative h-[85vh] flex flex-col items-center justify-center text-center px-4">
          <div className="fade-in relative z-10">
            <h1 className="section-title mb-4">
              Sua história merece ser contada.
            </h1>
            <p className="section-subtitle mb-8">
              Transforme seu manuscrito em um livro profissional com a Daya Editorial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="hero-button hero-button-primary"
              >
                Publique seu Livro
              </Link>
              <Link
                to="/sobre"
                className="hero-button hero-button-secondary"
              >
                Saiba mais
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 w-full">
            <img
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              alt="Books"
              className="w-full h-[40vh] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="section-title mb-16">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              >
                <service.icon className="h-10 w-10 text-[#0071e3] mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-[#1d1d1f]">{service.title}</h3>
                <p className="text-[#86868b] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-[#000000]">
        <div className="max-w-[980px] mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-[#86868b] mb-10 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos transformar seu manuscrito em um livro profissional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="hero-button hero-button-primary"
            >
              Solicitar Orçamento
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button bg-[#34c759] text-white hover:bg-[#30d158]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;