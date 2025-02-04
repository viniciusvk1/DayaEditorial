import React from 'react';
import { Heart, Star, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white pt-4 sm:pt-5">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="fade-in relative z-10">
          <h1 className="section-title mb-4">Sobre nós</h1>
          <p className="section-subtitle">
            Conheça um pouco sobre a nossa empresa e a filosofia que seguimos
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2341&q=80"
            alt="Biblioteca"
            className="w-full h-[40vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-in">
              <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Sobre a Daya Editorial</h2>
              <p className="text-[#86868b] leading-relaxed">
                A Daya Editorial foi criada para dar suporte a editoras e autores independentes, 
                oferecendo serviços rápidos e de qualidade para o desenvolvimento de projetos gráficos, 
                a um custo realmente compatível com o mercado editorial.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2341&q=80"
                alt="Biblioteca"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Why Daya Section */}
          <div className="bg-[#f5f5f7] rounded-3xl p-12 mb-20">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Por que o nome Daya Editorial?</h2>
              <p className="text-[#86868b] leading-relaxed">
                A palavra "Daya" significa "compaixão", na língua hindu. O termo compaixão sintetiza 
                os principais valores que a empresa segue, pois está diretamente ligada à solidariedade, 
                ao companheirismo e respeito ao próximo, atributos que consideramos imprescindíveis ao 
                lidar com a arte literária.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-20 text-center fade-in">
            <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Nossa missão</h2>
            <p className="text-[#86868b] leading-relaxed max-w-3xl mx-auto">
              Nossa missão é ajudar escritores a publicarem os seus livros. Oferecemos, além de um 
              trabalho sério e altamente profissional, a dedicação afetiva de quem ama o que faz. 
              Qualquer que seja a sua necessidade, conte com a Daya Editorial, com a certeza de que 
              o seu sonho está em boas mãos!
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-[#f5f5f7] rounded-3xl p-12">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Por que nos escolher?</h2>
              <p className="text-[#86868b] leading-relaxed max-w-3xl mx-auto">
                Porque amamos a arte literária! Respeitamos os escritores - profissionais e amadores - 
                e os tratamos com respeito e dignidade. Além de oferecermos serviços e produtos com 
                preços e condições realmente adequados ao mercado editorial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  icon: Heart,
                  title: 'Paixão pela Literatura',
                  description: 'Dedicação e amor pela arte literária'
                },
                {
                  icon: Star,
                  title: 'Qualidade',
                  description: 'Serviços de alta qualidade'
                },
                {
                  icon: Users,
                  title: 'Respeito',
                  description: 'Tratamento digno aos autores'
                },
                {
                  icon: Award,
                  title: 'Preço Justo',
                  description: 'Valores adequados ao mercado'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:scale-105 transition-all duration-300">
                  <value.icon className="h-10 w-10 text-[#0071e3] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">{value.title}</h3>
                  <p className="text-[#86868b]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;