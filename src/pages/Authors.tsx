import React from 'react';
import { Link } from 'react-router-dom';

export const authors = [
  { id: 1, name: 'Amauri Menezes Filho', photo: '/authors/Amaury/amaury.jpg', genre: '', books: 1 },
  { id: 2, name: 'Ana Maris de Figueiredo Ribeiro', photo: '/authors/Anamaris/anamaris.jpg', genre: '', books: 4 },
  { id: 3, name: 'Ary Abrantes', photo: '/authors/Ary/aryabrantes.jpg', genre: '', books: 3 },
  { id: 4, name: 'Billy da Nove', photo: '/authors/Billy/Billy.jpg', genre: '', books: 1 },
  { id: 5, name: 'Bruno Rodrigues', photo: '/authors/Bruno/Bruno.jpg', genre: '', books: 2 },
  { id: 6, name: 'Caetano de Almeida', photo: '/authors/Caetano/caetano.jpg', genre: '', books: 1 },
  { id: 7, name: 'Clauni Barbosa', photo: '/authors/Clauni/Clauni.jpg', genre: '', books: 1 },
  { id: 8, name: 'Cyntia H. Rossini', photo: '/authors/Cynthia/Cyntia.jpg', genre: '', books: 1 },
  { id: 9, name: 'Delson Soares Silva', photo: '/authors/Delson/Delson.jpg', genre: '', books: 1 },
  { id: 10, name: 'Dilo Guasque', photo: '/authors/Dilo p/Dilo_p.jpg', genre: '', books: 4 },
  { id: 11, name: 'Dirce Biscuola de Pinho', photo: '/authors/Dirce/dirce_pinho_p.jpg', genre: '', books: 1 },
  { id: 12, name: 'Edmur De Lucca', photo: '/authors/Edmur/edmur_lucca_p.jpg', genre: '', books: 4 },
  { id: 13, name: 'Eliana da Costa R Tosi', photo: '/authors/elianacosta/eliana.png', genre: '', books: 4 },
  { id: 14, name: 'Eliana Irena', photo: '/authors/Eliana/eliana.jpg', genre: '', books: 1 },
  { id: 15, name: 'Eli Gonçalves', photo: '/authors/Eli/eli.jpg', genre: '', books: 1 },
  { id: 16, name: 'Eliseu Labigalini', photo: '/authors/Eliseu/eliseu.jpg', genre: '', books: 2 },
  { id: 17, name: 'Elizabeth Carolina', photo: '/authors/Elizabeth/elizabeth.jpg', genre: '', books: 1 },
  { id: 18, name: 'Elza Fernandes', photo: '/authors/Elzafernandes/elza.jpg', genre: '', books: 22 },
  { id: 19, name: 'Érico da Fonseca', photo: '/authors/Erico/erico.jpg', genre: '', books: 1 },
  { id: 20, name: 'Etna Lacerda', photo: '/authors/etnalacerda/etna.jpg', genre: '', books: 1 },
  { id: 21, name: 'Fabiano Mendes', photo: '/authors/Fabiano/Fabiano_p.jpg', genre: '', books: 1 },
  { id: 22, name: 'Fábio Cirello', photo: '/authors/Fabiocirello/fabio.jpg', genre: '', books: 1 },
  { id: 23, name: 'Fátima Nakamatsu', photo: '/authors/FAtima/fatima.jpg', genre: '', books: 1 },
  { id: 24, name: 'Francisca Gomes', photo: '/authors/Francisca/francisca.jpg', genre: '', books: 1 },
  { id: 25, name: 'Gioconda Labecca', photo: '/authors/gioconda/gioconda_p.jpg', genre: '', books: 1 },
  { id: 26, name: 'Guerino Crepaldi', photo: '/authors/Guerino/Guerino_p.jpg', genre: '', books: 1 },
  { id: 27, name: 'Jessé Nascimento', photo: '/authors/Jesse/Jesse.jpg', genre: '', books: 1 },
  { id: 28, name: 'João Galvani', photo: '/authors/Joaogalvani/joao-galvani_p.jpg', genre: '', books: 1 },
  { id: 29, name: 'João Mainsel', photo: '/authors/joaomainsel/joao-mainsel_p.jpg', genre: '', books: 2 },
  { id: 30, name: 'Joelmir Carvalho', photo: '/authors/sem_foto.jpg', genre: '', books: 1 },
  { id: 31, name: 'Jonas Barros', photo: '/authors/Jonasbarros/jonas-barros_p.jpg', genre: '', books: 1 },
  { id: 32, name: 'Jorge Ferreira', photo: '/authors/Jorge/Jorge.jpg', genre: '', books: 1 },
  { id: 33, name: 'José Célio da Silva', photo: '/authors/sem_foto.jpg', genre: '', books: 1 },
  { id: 34, name: 'José Edison Bergamin', photo: '/authors/Joseedson/jose-edson-bergamin_p.jpg', genre: '', books: 1 },
  { id: 35, name: 'Katia Bueno', photo: '/authors/Katia/katia.jpg', genre: '', books: 1 },
  { id: 36, name: 'Kátia Regina de Oliveira', photo: '/authors/Katiaregina/katia-regina_p.jpg', genre: '', books: 1 },
  { id: 37, name: 'Lauriano dos Santos', photo: '/authors/LaurianoSantos/lauriano-santos_p.jpg', genre: '', books: 9 },
  { id: 38, name: 'Lélia Miguel M de Lima', photo: '/authors/Lelia/lelia.jpg', genre: '', books: 1 },
  { id: 39, name: 'Lina Calil', photo: '/authors/Linacalil/lina-calil_p.jpg', genre: '', books: 2 },
  { id: 40, name: 'Lívia Fiedler', photo: '/authors/LiviaFieldler/livia-fiedler_p.jpg', genre: '', books: 1 },
  { id: 41, name: 'Luana S. de A. Esposito', photo: '/authors/Luana/Luana.jpg', genre: '', books: 1 },
  { id: 42, name: 'Luiz Sass', photo: '/authors/Luizsass/luiz-sass_p.jpg', genre: '', books: 1 },
  { id: 43, name: 'Luiza Grigini Martins', photo: '/authors/Luiza/luiza_p.jpg', genre: '', books: 1 },
  { id: 44, name: 'Luiza Viegas Rathsam', photo: '/authors/sem_foto.jpg', genre: '', books: 1 },
  { id: 45, name: 'Márcia Chavan Guasque', photo: '/authors/Marcia/Marcia_p.jpg', genre: '', books: 1 },
  { id: 46, name: 'Marcus Vinicius Kray', photo: '/authors/MArcus/marcus_p.jpg', genre: '', books: 1 },
  { id: 47, name: 'Maria Antônia dos Santos', photo: '/authors/Mariaantonia/maria-antonia_p.jpg', genre: '', books: 2 },
  { id: 48, name: 'Maria Helena U C da Fonseca', photo: '/authors/Mariahelena/maria-helena_p.jpg', genre: '', books: 5 },
  { id: 49, name: 'Maria José M Dias', photo: '/authors/Mariajose/maria_jose.jpg', genre: '', books: 1 },
  { id: 50, name: 'Maria Manuela Corujo', photo: '/authors/MariaManuela/Maria_Manuela_p.jpg', genre: '', books: 1 },
  { id: 51, name: 'Marina Cristaldo', photo: '/authors/Marinacristaldo/marina-cristaldo_p.jpg', genre: '', books: 1 },
  { id: 52, name: 'Marzio Labigalini', photo: '/authors/Marzio/marzio.jpg', genre: '', books: 1 },
  { id: 53, name: 'Meire Márcia Marins', photo: '/authors/Meire/meire-marins_p.jpg', genre: '', books: 1 },
  { id: 54, name: 'Neusa Aparecida M Maia', photo: '/authors/Neusa/neusa.jpg', genre: '', books: 1 },
  { id: 55, name: 'Nicholas Augustus Grigoragi', photo: '/authors/Nicholas/Nicholas Grigoragi_p.jpg', genre: '', books: 1 },
  { id: 56, name: 'Nívia Ribeiro da Silva Ferreira', photo: '/authors/Nivia/nivia_p.jpg', genre: '', books: 1 },
  { id: 57, name: 'Oscar Jorge Moysés', photo: '/authors/OscarJorge/oscar-jorge.jpg', genre: '', books: 1 },
  { id: 58, name: 'Poliana Coelho Barbosa Fernandes', photo: '/authors/Poliana/poliana-p.jpg', genre: '', books: 1 },
  { id: 59, name: 'Rita Lopes', photo: '/authors/RitaLopes/rita-lopes_p.jpg', genre: '', books: 3 },
  { id: 60, name: 'Roberta Teixeira da Silva', photo: '/authors/roberta/roberta_p.jpg', genre: '', books: 1 },
  { id: 61, name: 'Roberto de Carvalho', photo: '/authors/RobertoCarvalho/roberto-de-carvalho_p.jpg', genre: '', books: 5 },
  { id: 62, name: 'Rodrigo Alves', photo: '/authors/Rodrigo/Rodrigo_p.jpg', genre: '', books: 1 },
  { id: 63, name: 'Romildo Labigalini', photo: '/authors/Romildo/romildo.jpg', genre: '', books: 1 },
  { id: 64, name: 'Rosangela Bonizolli', photo: '/authors/Rosangela/Rosangela_p.jpg', genre: '', books: 2 },
  { id: 65, name: 'Rose Lopes', photo: '/authors/Rose Lopes/rose-lopes_p.jpg', genre: '', books: 2 },
  { id: 66, name: 'Sá de Carvalho', photo: '/authors/sadecarvalho/sa-de-carvalho_p.jpg', genre: '', books: 5 },
  { id: 67, name: 'Saulo Panham', photo: '/authors/Saulopanham/saulo-panham_p.jpg', genre: '', books: 3 },
  { id: 68, name: 'Sebastião Isidro de Araújo', photo: '/authors/Sabastiao/sebastiao.jpg', genre: '', books: 1 },
  { id: 69, name: 'Sérgio Pereira', photo: '/authors/Sergiopereira/sergio_pereira_p.jpg', genre: '', books: 1 },
  { id: 70, name: 'Sibeles Maria De Mais', photo: '/authors/Sibeles/Sibeles_p.jpg', genre: '', books: 4 },
  { id: 71, name: 'Tânia Redigolo', photo: '/authors/Tania/tania.jpg', genre: '', books: 1 },
  { id: 72, name: 'Teresinha B. Penteado', photo: '/authors/Teresinha/Teresinha_p.jpg', genre: '', books: 1 },
  { id: 73, name: 'Valderez Escobar', photo: '/authors/Valderez/valderez-escobar_p.jpg', genre: '', books: 10 },
  { id: 74, name: 'Valentina Antonini da Silva', photo: '/authors/Valentinaantonini/valentina-antonini_p.jpg', genre: '', books: 1 },
  { id: 75, name: 'Vinícius Gouvêa de Carvalho', photo: '/authors/Viniciuscarvalho/Vinicius.jpg', genre: '', books: 1 },
  { id: 76, name: 'Yuri Dinalli', photo: '/authors/Yuri/yuri-p.jpg', genre: '', books: 1 },
  { id: 77, name: 'Yuriko Yamamoto', photo: '/authors/Yuriko/Yuriko.jpg', genre: '', books: 1 },
  { id: 78, name: 'Yvone Russeau', photo: '/authors/Ivone/ivone.jpg', genre: '', books: 1 }
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
              className="group bg-[#f5f5f7] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative pt-[100%]">
                <img
                  src={author.photo || 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d'}
                  alt={author.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3 group-hover:text-[#0071e3] transition-colors">
                  {author.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-[#1d1d1f] font-medium">Livros publicados:</span>
                  <span className="text-[#86868b]">{author.books}</span>
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