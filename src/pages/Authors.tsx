import React from 'react';
import { Link } from 'react-router-dom';

export const authors = [
  { id: 1, name: 'Amauri Menezes Filho', photo: '../dist/assets/Amauri Menezes Filho/amaury.jpg', genre: '', books: 1 },
  { id: 2, name: 'Ana Maris de Figueiredo Ribeiro', photo: '../dist/assets/Ana Maris de Figueiredo Ribeiro/ana-maris.jpg', genre: '', books: 4 },
  { id: 3, name: 'Ary Abrantes', photo: '', genre: '', books: 3 },
  { id: 4, name: 'Billy da Nove', photo: '', genre: '', books: 1 },
  { id: 5, name: 'Bruno Rodrigues', photo: '', genre: '', books: 2 },
  { id: 6, name: 'Caetano de Almeida', photo: '', genre: '', books: 1 },
  { id: 7, name: 'Clauni Barbosa', photo: '', genre: '', books: 1 },
  { id: 8, name: 'Cyntia H. Rossini', photo: '', genre: '', books: 1 },
  { id: 9, name: 'Delson Soares Silva', photo: '', genre: '', books: 1 },
  { id: 10, name: 'Dilo Guasque', photo: '', genre: '', books: 4 },
  { id: 11, name: 'Dirce Biscuola de Pinho', photo: '', genre: '', books: 1 },
  { id: 12, name: 'Edmur De Lucca', photo: '', genre: '', books: 4 },
  { id: 13, name: 'Eliana da Costa R Tosi', photo: '', genre: '', books: 4 },
  { id: 14, name: 'Eliana Irena', photo: '', genre: '', books: 1 },
  { id: 15, name: 'Eli Gonçalves', photo: '', genre: '', books: 1 },
  { id: 16, name: 'Eliseu Labigalini', photo: '', genre: '', books: 2 },
  { id: 17, name: 'Elizabeth Carolina', photo: '', genre: '', books: 1 },
  { id: 18, name: 'Elza Fernandes', photo: '', genre: '', books: 22 },
  { id: 19, name: 'Érico da Fonseca', photo: '', genre: '', books: 1 },
  { id: 20, name: 'Etna Lacerda', photo: '', genre: '', books: 1 },
  { id: 21, name: 'Fabiano Mendes', photo: '', genre: '', books: 1 },
  { id: 22, name: 'Fábio Cirello', photo: '', genre: '', books: 1 },
  { id: 23, name: 'Fátima Nakamatsu', photo: '', genre: '', books: 1 },
  { id: 24, name: 'Francisca Gomes', photo: '', genre: '', books: 1 },
  { id: 25, name: 'Gioconda Labecca', photo: '', genre: '', books: 1 },
  { id: 26, name: 'Guerino Crepaldi', photo: '', genre: '', books: 1 },
  { id: 27, name: 'Jessé Nascimento', photo: '', genre: '', books: 1 },
  { id: 28, name: 'João Galvani', photo: '', genre: '', books: 1 },
  { id: 29, name: 'João Mainsel', photo: '', genre: '', books: 2 },
  { id: 30, name: 'Joelmir Carvalho', photo: '', genre: '', books: 1 },
  { id: 31, name: 'Jonas Barros', photo: '', genre: '', books: 1 },
  { id: 32, name: 'Jorge Ferreira', photo: '', genre: '', books: 1 },
  { id: 33, name: 'José Célio da Silva', photo: '', genre: '', books: 1 },
  { id: 34, name: 'José Edison Bergamin', photo: '', genre: '', books: 1 },
  { id: 35, name: 'Katia Bueno', photo: '', genre: '', books: 1 },
  { id: 36, name: 'Kátia Regina de Oliveira', photo: '', genre: '', books: 1 },
  { id: 37, name: 'Lauriano dos Santos', photo: '', genre: '', books: 9 },
  { id: 38, name: 'Lélia Miguel M de Lima', photo: '', genre: '', books: 1 },
  { id: 39, name: 'Lina Calil', photo: '', genre: '', books: 2 },
  { id: 40, name: 'Lívia Fiedler', photo: '', genre: '', books: 1 },
  { id: 41, name: 'Luana S. de A. Esposito', photo: '', genre: '', books: 1 },
  { id: 42, name: 'Luiz Sass', photo: '', genre: '', books: 1 },
  { id: 43, name: 'Luiza Grigini Martins', photo: '', genre: '', books: 1 },
  { id: 44, name: 'Luiza Viegas Rathsam', photo: '', genre: '', books: 1 },
  { id: 45, name: 'Márcia Chavan Guasque', photo: '', genre: '', books: 1 },
  { id: 46, name: 'Marcus Vinicius Kray', photo: '', genre: '', books: 1 },
  { id: 47, name: 'Maria Antônia dos Santos', photo: '', genre: '', books: 2 },
  { id: 48, name: 'Maria Helena U C da Fonseca', photo: '', genre: '', books: 5 },
  { id: 49, name: 'Maria José M Dias', photo: '', genre: '', books: 1 },
  { id: 50, name: 'Maria Manuela Corujo', photo: '', genre: '', books: 1 },
  { id: 51, name: 'Marina Cristaldo', photo: '', genre: '', books: 1 },
  { id: 52, name: 'Marzio Labigalini', photo: '', genre: '', books: 1 },
  { id: 53, name: 'Meire Márcia Marins', photo: '', genre: '', books: 1 },
  { id: 54, name: 'Neusa Aparecida M Maia', photo: '', genre: '', books: 1 },
  { id: 55, name: 'Nicholas Augustus Grigoragi', photo: '', genre: '', books: 1 },
  { id: 56, name: 'Nívia Ribeiro da Silva Ferreira', photo: '', genre: '', books: 1 },
  { id: 57, name: 'Oscar Jorge Moysés', photo: '', genre: '', books: 1 },
  { id: 58, name: 'Poliana Coelho Barbosa Fernandes', photo: '', genre: '', books: 1 },
  { id: 59, name: 'Rita Lopes', photo: '', genre: '', books: 3 },
  { id: 60, name: 'Roberta Teixeira da Silva', photo: '', genre: '', books: 1 },
  { id: 61, name: 'Roberto de Carvalho', photo: '', genre: '', books: 5 },
  { id: 62, name: 'Rodrigo Alves', photo: '', genre: '', books: 1 },
  { id: 63, name: 'Romildo Labigalini', photo: '', genre: '', books: 1 },
  { id: 64, name: 'Rosangela Bonizolli', photo: '', genre: '', books: 2 },
  { id: 65, name: 'Rose Lopes', photo: '', genre: '', books: 2 },
  { id: 66, name: 'Sá de Carvalho', photo: '', genre: '', books: 5 },
  { id: 67, name: 'Saulo Panham', photo: '', genre: '', books: 3 },
  { id: 68, name: 'Sebastião Isidro de Araújo', photo: '', genre: '', books: 1 },
  { id: 69, name: 'Sérgio Pereira', photo: '', genre: '', books: 1 },
  { id: 70, name: 'Sibeles Maria De Mais', photo: '', genre: '', books: 4 },
  { id: 71, name: 'Tânia Redigolo', photo: '', genre: '', books: 1 },
  { id: 72, name: 'Teresinha B. Penteado', photo: '', genre: '', books: 1 },
  { id: 73, name: 'Valderez Escobar', photo: '', genre: '', books: 10 },
  { id: 74, name: 'Valentina Antonini da Silva', photo: '', genre: '', books: 1 },
  { id: 75, name: 'Vinícius Gouvêa de Carvalho', photo: '', genre: '', books: 1 },
  { id: 76, name: 'Yuri Dinalli', photo: '', genre: '', books: 1 },
  { id: 77, name: 'Yuriko Yamamoto', photo: '', genre: '', books: 1 },
  { id: 78, name: 'Yvone Russeau', photo: '', genre: '', books: 1 }
];

const Authors = () => {
  return (
    <div className="bg-white pt-4 sm:pt-5">
      {/* Header */}
      <div className="relative h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="fade-in relative z-10">
          <h1 className="section-title mb-4">Nossos Autores</h1>
          <p className="section-subtitle">
            Conheça os talentos que fazem parte da nossa família editorial
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Books"
            className="w-full h-[40vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
        </div>
      </div>

      {/* Authors Grid */}
      <div className="max-w-[980px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <Link
              key={author.id}
              to={`/autores/${author.id}`}
              className="group bg-[#f5f5f7] rounded-2xl overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                <img
                  src={author.photo || 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d'}
                  alt={author.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4 group-hover:text-[#0071e3] transition-colors">
                  {author.name}
                </h3>
                <div className="space-y-2">
                  <p className="text-[#86868b]">
                    <span className="text-[#1d1d1f] font-medium">Livros publicados:</span> {author.books}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Authors;