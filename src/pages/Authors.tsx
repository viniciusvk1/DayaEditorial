import React from 'react';
import { Link } from 'react-router-dom';

export const authors = [
  { id: 1, name: 'Amauri Menezes Filho', photo: 'src/assets/authors/Amaury/amaury.jpg', genre: '', books: 1 },
  { id: 2, name: 'Ana Maris de Figueiredo Ribeiro', photo: 'src/assets/authors/Anamaris/anamaris.jpg', genre: '', books: 4 },
  { id: 3, name: 'Ary Abrantes', photo: 'src/assets/authors/Ary/aryabrantes.jpg', genre: '', books: 3 },
  { id: 4, name: 'Billy da Nove', photo: 'src/assets/authors/Billy/Billy.jpg', genre: '', books: 1 },
  { id: 5, name: 'Bruno Rodrigues', photo: 'src/assets/authors/Bruno/Bruno.jpg', genre: '', books: 2 },
  { id: 6, name: 'Caetano de Almeida', photo: 'src/assets/authors/Caetano/caetano.jpg', genre: '', books: 1 },
  { id: 7, name: 'Clauni Barbosa', photo: 'src/assets/authors/Clauni/Clauni.jpg', genre: '', books: 1 },
  { id: 8, name: 'Cyntia H. Rossini', photo: 'src/assets/authors/Cynthia/Cyntia.jpg', genre: '', books: 1 },
  { id: 9, name: 'Delson Soares Silva', photo: 'src/assets/authors/Delson/Delson.jpg', genre: '', books: 1 },
  { id: 10, name: 'Dilo Guasque', photo: 'src/assets/authors/Dilo p/Dilo_p.jpg', genre: '', books: 4 },
  { id: 11, name: 'Dirce Biscuola de Pinho', photo: 'src/assets/authors/Dirce/dirce_pinho_p.jpg', genre: '', books: 1 },
  { id: 12, name: 'Edmur De Lucca', photo: 'src/assets/authors/Edmur/edmur_lucca_p.jpg', genre: '', books: 4 },
  { id: 13, name: 'Eliana da Costa R Tosi', photo: 'src/assets/authors/elianacosta/eliana.png', genre: '', books: 4 },
  { id: 14, name: 'Eliana Irena', photo: 'src/assets/authors/Eliana/eliana.jpg', genre: '', books: 1 },
  { id: 15, name: 'Eli Gonçalves', photo: 'src/assets/authors/Eli/eli.jpg', genre: '', books: 1 },
  { id: 16, name: 'Eliseu Labigalini', photo: 'src/assets/authors/Eliseu/eliseu.jpg', genre: '', books: 2 },
  { id: 17, name: 'Elizabeth Carolina', photo: 'src/assets/authors/Elizabeth/elizabeth.jpg', genre: '', books: 1 },
  { id: 18, name: 'Elza Fernandes', photo: 'src/assets/authors/Elzafernandes/elza.jpg', genre: '', books: 22 },
  { id: 19, name: 'Érico da Fonseca', photo: 'src/assets/authors/Erico/erico.jpg', genre: '', books: 1 },
  { id: 20, name: 'Etna Lacerda', photo: 'src/assets/authors/etnalacerda/etna.jpg', genre: '', books: 1 },
  { id: 21, name: 'Fabiano Mendes', photo: 'src/assets/authors/Fabiano/Fabiano_p.jpg', genre: '', books: 1 },
  { id: 22, name: 'Fábio Cirello', photo: 'src/assets/authors/Fabiocirello/fabio.jpg', genre: '', books: 1 },
  { id: 23, name: 'Fátima Nakamatsu', photo: 'src/assets/authors/FAtima/fatima.jpg', genre: '', books: 1 },
  { id: 24, name: 'Francisca Gomes', photo: 'src/assets/authors/Francisca/francisca.jpg', genre: '', books: 1 },
  { id: 25, name: 'Gioconda Labecca', photo: 'src/assets/authors/gioconda/gioconda_p.jpg', genre: '', books: 1 },
  { id: 26, name: 'Guerino Crepaldi', photo: 'src/assets/authors/Guerino/Guerino_p.jpg', genre: '', books: 1 },
  { id: 27, name: 'Jessé Nascimento', photo: 'src/assets/authors/Jesse/Jesse.jpg', genre: '', books: 1 },
  { id: 28, name: 'João Galvani', photo: 'src/assets/authors/Joaogalvani/joao-galvani_p.jpg', genre: '', books: 1 },
  { id: 29, name: 'João Mainsel', photo: 'src/assets/authors/joaomainsel/joao-mainsel_p.jpg', genre: '', books: 2 },
  { id: 30, name: 'Joelmir Carvalho', photo: 'src/assets/authors/sem_foto.jpg', genre: '', books: 1 },
  { id: 31, name: 'Jonas Barros', photo: 'src/assets/authors/Jonasbarros/jonas-barros_p.jpg', genre: '', books: 1 },
  { id: 32, name: 'Jorge Ferreira', photo: 'src/assets/authors/Jorge/Jorge.jpg', genre: '', books: 1 },
  { id: 33, name: 'José Célio da Silva', photo: 'src/assets/authors/sem_foto.jpg', genre: '', books: 1 },
  { id: 34, name: 'José Edison Bergamin', photo: 'src/assets/authors/Joseedson/jose-edson-bergamin_p.jpg', genre: '', books: 1 },
  { id: 35, name: 'Katia Bueno', photo: 'src/assets/authors/Katia/katia.jpg', genre: '', books: 1 },
  { id: 36, name: 'Kátia Regina de Oliveira', photo: 'src/assets/authors/Katiaregina/katia-regina_p.jpg', genre: '', books: 1 },
  { id: 37, name: 'Lauriano dos Santos', photo: 'src/assets/authors/LaurianoSantos/lauriano-santos_p.jpg', genre: '', books: 9 },
  { id: 38, name: 'Lélia Miguel M de Lima', photo: 'src/assets/authors/Lelia/lelia.jpg', genre: '', books: 1 },
  { id: 39, name: 'Lina Calil', photo: 'src/assets/authors/Linacalil/lina-calil_p.jpg', genre: '', books: 2 },
  { id: 40, name: 'Lívia Fiedler', photo: 'src/assets/authors/LiviaFieldler/livia-fiedler_p.jpg', genre: '', books: 1 },
  { id: 41, name: 'Luana S. de A. Esposito', photo: 'src/assets/authors/Luana/Luana.jpg', genre: '', books: 1 },
  { id: 42, name: 'Luiz Sass', photo: 'src/assets/authors/Luizsass/luiz-sass_p.jpg', genre: '', books: 1 },
  { id: 43, name: 'Luiza Grigini Martins', photo: 'src/assets/authors/Luiza/luiza_p.jpg', genre: '', books: 1 },
  { id: 44, name: 'Luiza Viegas Rathsam', photo: 'src/assets/authors/sem_foto.jpg', genre: '', books: 1 },
  { id: 45, name: 'Márcia Chavan Guasque', photo: 'src/assets/authors/Marcia/Marcia_p.jpg', genre: '', books: 1 },
  { id: 46, name: 'Marcus Vinicius Kray', photo: 'src/assets/authors/MArcus/marcus_p.jpg', genre: '', books: 1 },
  { id: 47, name: 'Maria Antônia dos Santos', photo: 'src/assets/authors/Mariaantonia/maria-antonia_p.jpg', genre: '', books: 2 },
  { id: 48, name: 'Maria Helena U C da Fonseca', photo: 'src/assets/authors/Mariahelena/maria-helena_p.jpg', genre: '', books: 5 },
  { id: 49, name: 'Maria José M Dias', photo: 'src/assets/authors/Mariajose/maria_jose.jpg', genre: '', books: 1 },
  { id: 50, name: 'Maria Manuela Corujo', photo: 'src/assets/authors/MariaManuela/Maria_Manuela_p.jpg', genre: '', books: 1 },
  { id: 51, name: 'Marina Cristaldo', photo: 'src/assets/authors/Marinacristaldo/marina-cristaldo_p.jpg', genre: '', books: 1 },
  { id: 52, name: 'Marzio Labigalini', photo: 'src/assets/authors/Marzio/marzio.jpg', genre: '', books: 1 },
  { id: 53, name: 'Meire Márcia Marins', photo: 'src/assets/authors/Meire/meire-marins_p.jpg', genre: '', books: 1 },
  { id: 54, name: 'Neusa Aparecida M Maia', photo: 'src/assets/authors/Neusa/neusa.jpg', genre: '', books: 1 },
  { id: 55, name: 'Nicholas Augustus Grigoragi', photo: 'src/assets/authors/Nicholas/Nicholas Grigoragi_p.jpg', genre: '', books: 1 },
  { id: 56, name: 'Nívia Ribeiro da Silva Ferreira', photo: 'src/assets/authors/Nivia/nivia_p.jpg', genre: '', books: 1 },
  { id: 57, name: 'Oscar Jorge Moysés', photo: 'src/assets/authors/OscarJorge/oscar-jorge.jpg', genre: '', books: 1 },
  { id: 58, name: 'Poliana Coelho Barbosa Fernandes', photo: 'src/assets/authors/Poliana/poliana-p.jpg', genre: '', books: 1 },
  { id: 59, name: 'Rita Lopes', photo: 'src/assets/authors/RitaLopes/rita-lopes_p.jpg', genre: '', books: 3 },
  { id: 60, name: 'Roberta Teixeira da Silva', photo: 'src/assets/authors/roberta/roberta_p.jpg', genre: '', books: 1 },
  { id: 61, name: 'Roberto de Carvalho', photo: 'src/assets/authors/RobertoCarvalho/roberto-de-carvalho_p.jpg', genre: '', books: 5 },
  { id: 62, name: 'Rodrigo Alves', photo: 'src/assets/authors/Rodrigo/Rodrigo_p.jpg', genre: '', books: 1 },
  { id: 63, name: 'Romildo Labigalini', photo: 'src/assets/authors/Romildo/romildo.jpg', genre: '', books: 1 },
  { id: 64, name: 'Rosangela Bonizolli', photo: 'src/assets/authors/Rosangela/Rosangela_p.jpg', genre: '', books: 2 },
  { id: 65, name: 'Rose Lopes', photo: 'src/assets/authors/Rose Lopes/rose-lopes_p.jpg', genre: '', books: 2 },
  { id: 66, name: 'Sá de Carvalho', photo: 'src/assets/authors/sadecarvalho/sa-de-carvalho_p.jpg', genre: '', books: 5 },
  { id: 67, name: 'Saulo Panham', photo: 'src/assets/authors/Saulopanham/saulo-panham_p.jpg', genre: '', books: 3 },
  { id: 68, name: 'Sebastião Isidro de Araújo', photo: 'src/assets/authors/Sabastiao/sebastiao.jpg', genre: '', books: 1 },
  { id: 69, name: 'Sérgio Pereira', photo: 'src/assets/authors/Sergiopereira/sergio_pereira_p.jpg', genre: '', books: 1 },
  { id: 70, name: 'Sibeles Maria De Mais', photo: 'src/assets/authors/Sibeles/Sibeles_p.jpg', genre: '', books: 4 },
  { id: 71, name: 'Tânia Redigolo', photo: 'src/assets/authors/Tania/tania.jpg', genre: '', books: 1 },
  { id: 72, name: 'Teresinha B. Penteado', photo: 'src/assets/authors/Teresinha/Teresinha_p.jpg', genre: '', books: 1 },
  { id: 73, name: 'Valderez Escobar', photo: 'src/assets/authors/Valderez/valderez-escobar_p.jpg', genre: '', books: 10 },
  { id: 74, name: 'Valentina Antonini da Silva', photo: 'src/assets/authors/Valentinaantonini/valentina-antonini_p.jpg', genre: '', books: 1 },
  { id: 75, name: 'Vinícius Gouvêa de Carvalho', photo: 'src/assets/authors/Viniciuscarvalho/Vinicius.jpg', genre: '', books: 1 },
  { id: 76, name: 'Yuri Dinalli', photo: 'src/assets/authors/Yuri/yuri-p.jpg', genre: '', books: 1 },
  { id: 77, name: 'Yuriko Yamamoto', photo: 'src/assets/authors/Yuriko/Yuriko.jpg', genre: '', books: 1 },
  { id: 78, name: 'Yvone Russeau', photo: 'src/assets/authors/Ivone/ivone.jpg', genre: '', books: 1 }
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