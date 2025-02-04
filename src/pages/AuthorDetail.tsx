import React from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const authorData = {
  1: {
    name: 'Amauri Menezes Filho',
    photo: '../dist/assets/Amauri Menezes Filho/amaury.jpg',
    bio: 'Punk, dissidente; trabalha como professor, artista e marketing. Nasceu em 17/08/1987 na periferia da zona leste de São Paulo. Formação acadêmica como Tradutor e Intérprete da Língua Inglesa. Descobriu nas palavras a forma de ganhar a vida. Agitador cultural, participa intensamente de eventos e discussões de caráter político e social.',
    books: [
      {
        title: 'Iracemeando',
        cover: '../dist/assets/Amauri Menezes Filho/iracemeando_g.jpg',
      }
    ]
  },

  2: {
    name: 'Ana Maris de Figueiredo Ribeiro',
    photo: '../dist/assets/Ana Maris de Figueiredo Ribeiro/ana-maris.jpg',
    bio: 'Poetisa, escritora e historiadora, Ana Maris de Figueiredo Ribeiro nasceu em São Paulo, mas pode ser considerada natural de Angra dos Reis, pois se tornou angrense logo após o nascimento. É formada em Letras, Turismo e Patrimônio Histórico, possuindo também formação como Professora de Primeiro Segmento, Técnica em Contabilidade e cursos de Pós Graduação em Psicopedagogia e História do Brasil. Exerce atualmente a função de Coordenadora de Patrimônio, Turismo e Memória na Secretaria Municipal de Educação de Angra dos Reis. Foi colaboradora por mais de 50 edições da coluna de Cultura e História do jornal Novo Rumo, da Costa Verde; e escreveu também para o Contato Art On Line. É membro, entre outras instituições, da Associação Brasil Soka Gakkai Internacional e do Ateneu Angrense de Letras e Artes. Possui várias publicações e diversas premiações e distinções honoríficas em reconhecimento à sua relevante atuação em diversos segmentos históricos e culturais.',
    books: [
      {
        title: 'Revoada de Sonhos I',
        cover: '../dist/assets/Ana Maris de Figueiredo Ribeiro/revoada-vol-i-g.jpg',
      },
      {
        title: 'Revoada de Sonhos II',
        cover: '../dist/assets/Ana Maris de Figueiredo Ribeiro/revoada-vol-ii-g.jpg',
      },
      {
        title: 'Revoada de Sonhos III',
        cover: '../dist/assets/Ana Maris de Figueiredo Ribeiro/revoada-de-sonhos3-g.jpg',
      },
      {
        title: 'Revoada de Sonhos IV',
        cover: '../dist/assets/Ana Maris de Figueiredo Ribeiro/revoada-IV_g.jpg',
      }
    ]
  }

};

const AuthorDetail = () => {
  const { id } = useParams();
  const author = authorData[Number(id)];

  if (!author) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#1d1d1f]">Autor não encontrado</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-4 sm:pt-5">
      {/* Author Info */}
      <div className="relative h-[85vh] flex flex-col items-center justify-center px-4">
        <div className="max-w-[980px] w-full mx-auto relative z-10">
          <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-lg fade-in">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-96 w-full object-cover md:w-96"
                  src={author.photo}
                  alt={author.name}
                />
              </div>
              <div className="p-12">
                <h1 className="text-4xl font-semibold text-[#1d1d1f] mb-6">{author.name}</h1>
                <p className="text-[#86868b] text-lg leading-relaxed">{author.bio}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2341&q=80"
            alt="Library"
            className="w-full h-[40vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
        </div>
      </div>

      {/* Books Section */}
      <div className="max-w-[980px] mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-12 text-center">Obras Publicadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {author.books.map((book, index) => (
            <div key={index} className="bg-[#f5f5f7] rounded-2xl overflow-hidden">
              <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-[32rem] object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-5 w-5 text-[#0071e3] mr-2" />
                  <h3 className="text-xl font-semibold text-[#1d1d1f]">{book.title}</h3>
                </div>
                <p className="text-[#86868b]">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AuthorDetail;