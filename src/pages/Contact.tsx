import React from 'react';
import { Mail, Phone, MessageSquare, MapPin } from 'lucide-react';

const Contact = () => {
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de publicação da Daya Editorial.");
  const whatsappLink = `https://wa.me/5511971217605?text=${whatsappMessage}`;

  return (
    <div className="bg-white pt-4 sm:pt-5">
      {/* Header */}
      <div className="relative h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="fade-in relative z-10">
          <h1 className="section-title mb-4">Entre em Contato</h1>
          <p className="section-subtitle">
            Estamos aqui para ajudar a realizar seu sonho literário
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <img
            src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Contact"
            className="w-full h-[40vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-[980px] mx-auto px-4 py-20">
        <div className="max-w-xl mx-auto text-center">
          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            <div className="bg-[#f5f5f7] rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-12">Informações de Contato</h2>
              <div className="space-y-10">
                <div className="flex flex-col items-center">
                  <Mail className="h-8 w-8 text-[#0071e3] mb-4" />
                  <h3 className="text-lg font-medium text-[#1d1d1f] mb-2">E-mail</h3>
                  <p className="text-[#86868b]">carvalhoderoberto@gmail.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="h-8 w-8 text-[#0071e3] mb-4" />
                  <h3 className="text-lg font-medium text-[#1d1d1f] mb-2">Telefone/WhatsApp</h3>
                  <p className="text-[#86868b]">(11) 97121-7605</p>
                </div>
                <div className="flex flex-col items-center">
                  <MessageSquare className="h-8 w-8 text-[#0071e3] mb-4" />
                  <h3 className="text-lg font-medium text-[#1d1d1f] mb-2">Horário de Atendimento</h3>
                  <p className="text-[#86868b]">Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 block bg-[#34c759] text-white px-8 py-3 rounded-full font-medium text-center 
                         hover:bg-[#30d158] transform hover:scale-105 transition-all duration-300"
              >
                Falar pelo WhatsApp
              </a>
            </div>

            {/* Additional Info */}
            <div className="bg-[#f5f5f7] rounded-2xl p-8">
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-8 w-8 text-[#0071e3] mb-4" />
                <h3 className="text-lg font-medium text-[#1d1d1f] mb-3">Atendimento Online</h3>
                <p className="text-[#86868b]">
                  Realizamos todo o processo de publicação de forma online, proporcionando comodidade e 
                  praticidade para nossos autores em todo o Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;