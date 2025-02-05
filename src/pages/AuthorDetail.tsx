import React from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const authorData = {
  1: {
    name: 'Amauri Menezes Filho',
    photo: 'src/assets/authors/Amaury/amaury_p.png',
    bio: 'Punk, dissidente; trabalha como professor, artista e marketing. Nasceu em 17/08/1987 na periferia da zona leste de São Paulo. Formação acadêmica como Tradutor e Intérprete da Língua Inglesa. Descobriu nas palavras a forma de ganhar a vida. Agitador cultural, participa intensamente de eventos e discussões de caráter político e social.',
    books: [
      { title: 'Iracemeando', cover: '../dist/assets/Amauri Menezes Filho/iracemeando_g.jpg' },
    ],
  },
  2: {
    name: 'Ana Maris de Figueiredo Ribeiro',
    photo: '../dist/assets/Ana Maris de Figueiredo Ribeiro/ana-maris.jpg',
    bio: 'Poetisa, escritora e historiadora, Ana Maris de Figueiredo Ribeiro nasceu em São Paulo, mas pode ser considerada natural de Angra dos Reis...',
    books: [
      { title: 'Revoada de Sonhos I', cover: '../dist/assets/Ana Maris de Figueiredo Ribeiro/revoada-vol-i-g.jpg' },
      { title: 'Revoada de Sonhos II', cover: '../dist/assets/Ana Maris de Figueiredo Ribeiro/revoada-vol-ii-g.jpg' },
      { title: 'Revoada de Sonhos III', cover: '../dist/assets/Ana Maris de Figueiredo Ribeiro/revoada-de-sonhos3-g.jpg' },
      { title: 'Revoada de Sonhos IV', cover: '../dist/assets/Ana Maris de Figueiredo Ribeiro/revoada-IV_g.jpg' },
    ],
  },
  3: {
    name: 'Ary Abrantes',
    photo: '',
    bio: 'Ary Abrantes Gomes é natural de Teixeiras/MG. Mudou-se para São Paulo no mês de agosto de 1961. Aposentado, dedica-se ao trabalho voluntário em atividades espirituais...',
    books: [
      { title: 'Revoada de Sonhos I', cover: '' },
      { title: 'Revoada de Sonhos II', cover: '' },
      { title: 'Pausa para meditação', cover: '' },
    ],
  },
  4: {
    name: 'Billy da Nove',
    photo: '',
    bio: 'Valdeli da Silva nasceu em 13 de janeiro de 1965. Escritor, poeta e compositor, começou no samba em meados de 1980...',
    books: [
      { title: 'Poemas, canções & melodias', cover: '' },
    ],
  },
  5: {
    name: 'Bruno Rodrigues',
    photo: '',
    bio: 'Estudante de Direito pela USCS, acumula um pequeno, porém já importante material literário...',
    books: [
      { title: 'Revoada de sonhos IV', cover: '' },
      { title: 'Em seu cálido olhar', cover: '' },
    ],
  },
  6: {
    name: 'Caetano de Almeida',
    photo: '',
    bio: 'Empresário do setor de mercado varejo, sentiu grande necessidade de buscar alicerces fora da esfera física...',
    books: [
      { title: 'Sempre é tempo de amar', cover: '' },
    ],
  },
  7: {
    name: 'Clauni Barbosa',
    photo: '',
    bio: 'Professora, apaixonada pela profissão e por seus alunos, é voluntária na ONG “Fraternidade Sem Fronteiras”.',
    books: [
      { title: 'Entre Borboletas e Girassóis', cover: '' },
    ],
  },
  8: {
    name: 'Cyntia H. Rossini',
    photo: '',
    bio: 'Cyntia Henriques Rossini nasceu e mora em São Paulo, capital...',
    books: [
      { title: '21 Dias – Memórias de uma ocupação estudantil', cover: '' },
    ],
  },
  9: {
    name: 'Delson Soares Silva',
    photo: '',
    bio: 'Nasceu em 1961, em Brumado/BA e mudou-se para São Paulo em 1985...',
    books: [
      { title: 'Jesus o amigo que ensina', cover: '' },
    ],
  },
  10: {
    name: 'Dilo Guasque',
    photo: '',
    bio: 'Dilo Mestrinho Guasque nasceu em Manaus – AM, no dia 8 de janeiro de 1932...',
    books: [
      { title: 'De algumas coisas, um pouco', cover: '' },
      { title: 'Revoada de Sonhos IV', cover: '' },
      { title: 'Troços, troças & trompaços', cover: '' },
      { title: 'Estórias contadas e recontadas', cover: '' },
    ],
  },
  11: {
    name: 'Dirce Biscuola de Pinho',
    photo: '',
    bio: 'Nasceu em Monte Sião (MG) e mora em São Paulo desde 1970...',
    books: [
      { title: 'Gotas de Luz', cover: '' },
    ],
  },
  12: {
    name: 'Edmur De Lucca',
    photo: '',
    bio: 'Edmur de Lucca nasceu no dia 19 de dezembro de 1956, em São Paulo...',
    books: [
      { title: 'Amor e ambição', cover: '' },
      { title: 'Amor e caridade', cover: '' },
      { title: 'Escolhas e consequências', cover: '' },
      { title: 'Mãos que semeiam luz', cover: '' },
    ],
  },
  13: {
    name: 'Eliana da Costa R Tosi',
    photo: '',
    bio: 'Nascida em Angra dos Reis/RJ, é professora formada...',
    books: [
      { title: 'Sementes poéticas', cover: '' },
    ],
  },
  14: {
    name: 'Eliana Irena',
    photo: '',
    bio: 'Nasceu em São Paulo em 14/05/1963. Educadora, formada em Pedagogia...',
    books: [
      { title: 'Iracemeando', cover: '' },
    ],
  },
  15: {
    name: 'Eli Gonçalves',
    photo: '',
    bio: 'Elizette – ou Eli Gonçalves – é pedagoga, tendo atuado na área de Educação...',
    books: [
      { title: 'Revoada de Sonhos I', cover: '' },
      { title: 'Revoada de Sonhos II', cover: '' },
      { title: 'Revoada de Sonhos III', cover: '' },
      { title: 'O Papagaio e a Sereiazinha', cover: '' },
    ],
  },
  16: {
    name: 'Eliseu Labigalini',
    photo: '',
    bio: 'Nasceu no dia 31 de janeiro de 1943, em Monte Sião – MG...',
    books: [
      { title: 'O jogo da vida!', cover: '' },
      { title: 'Santo e José Labegalini', cover: '' },
    ],
  },
  17: {
    name: 'Elizabeth Carolina',
    photo: '',
    bio: 'Elizabeth Carolina Mathias de Araújo nasceu em Volta Redonda (RJ)...',
    books: [
      { title: 'Palavras que tecem poemas', cover: '' },
    ],
  },
  18: {
    name: 'Elza Fernandes',
    photo: '',
    bio: 'Elza Fernandes Pereira, maranhense, Assistente Social, Profa., espírita, Palestrante...',
    books: [
      { title: 'Reza, minha gente, reza!...', cover: '' },
      { title: 'Revoada de Sonhos III', cover: '' },
      { title: 'Nos cristalinos braços de Jesus', cover: '' },
      { title: 'Parnaso de amor', cover: '' },
      { title: 'Parnaso de amor 2', cover: '' },
      { title: 'O Cântico do "Pedir, Louvar e Agradecer"', cover: '' },
      { title: 'Reflexos de amor', cover: '' },
      { title: 'Porque amo e sou amada', cover: '' },
      { title: 'Acrósticos da filha de Deus', cover: '' },
      { title: 'Revoada de Sonhos IV', cover: '' },
      { title: 'Vibrantes outros contos', cover: '' },
      { title: 'Confiantes preces', cover: '' },
      { title: 'Mãe, pérola de amor', cover: '' },
      { title: 'Deus, somente Deus', cover: '' },
      { title: 'Ave, amor', cover: '' },
      { title: 'Amorosos contos', cover: '' },
      { title: 'Confiantes preces', cover: '' },
      { title: 'Amor, muito amor!', cover: '' },
      { title: 'Sob a luz da oração', cover: '' },
      { title: 'Sob o brilho do amor', cover: '' },
      { title: 'Sob o fulgor de outras amorosas realidades', cover: '' },
      { title: 'Sob a bênção da oração', cover: '' },
      { title: 'Pedir, louvar e agradecer', cover: '' },
    ],
  },
  19: {
    name: 'Érico da Fonseca',
    photo: '',
    bio: 'Angrense de nascimento, foi diplomado em Medicina...',
    books: [
      { title: 'Sementes poéticas', cover: '' },
    ],
  },
  20: {
    name: 'Etna Lacerda',
    photo: '',
    bio: 'É professora e há alguns anos se descobriu escrevendo história para crianças e adolescentes...',
    books: [
      { title: 'A Fada do conto', cover: '' },
    ],
  },
  21: {
    name: 'Fabiano Mendes',
    photo: '',
    bio: 'Nasceu em 17 de junho de 1983, em São Bernardo do Campo/SP...',
    books: [
      { title: 'O método eu', cover: '' },
    ],
  },
  22: {
    name: 'Fábio Cirello',
    photo: '',
    bio: 'Professor e locutor, Fábio Cirello tornou-se o orador de seu grupo...',
    books: [
      { title: 'Simplificando Kardec para o Evangelho no Lar', cover: '' },
    ],
  },
  23: {
    name: 'Fátima Nakamatsu',
    photo: '',
    bio: 'Nascida em São Paulo, é moradora do bairro de Itaquera...',
    books: [
      { title: 'Convite para colorir', cover: '' },
    ],
  },
  24: {
    name: 'Francisca Gomes',
    photo: '',
    bio: 'Nasceu em Crateús-CE, em 14 de agosto de 1971...',
    books: [
      { title: 'As aventuras de Zuíla', cover: '' },
    ],
  },
  25: {
    name: 'Gioconda Labecca',
    photo: '',
    bio: 'Poetisa, escritora e declamadora, Gioconda Labecca nasceu em Campanha/MG...',
    books: [
      { title: 'Entardecer', cover: '' },
    ],
  },
  26: {
    name: 'Guerino Crepaldi',
    photo: '',
    bio: 'Neto de imigrante italiano, é casado e tem quatro filhos...',
    books: [
      { title: 'Conheça a verdade', cover: '' },
    ],
  },
  27: {
    name: 'Jessé Nascimento',
    photo: '',
    bio: 'Nascido em Ibiraçu/ES, morou mais de 50 anos na Cidade do Rio de Janeiro...',
    books: [
      { title: 'Sementes poéticas', cover: '' },
    ],
  },
  28: {
    name: 'João Galvani',
    photo: '',
    bio: 'Escritor, músico e artista cênico, João Galvani nasceu em Marília/SP...',
    books: [
      { title: 'Revoada de Sonhos I', cover: '' },
    ],
  },
  29: {
    name: 'João Mainsel',
    photo: '',
    bio: 'É casado e tem dois filhos. Nasceu em 1976, em Malange-Angola...',
    books: [
      { title: 'A Travessia', cover: '' },
      { title: 'A Travessia – livro 2', cover: '' },
    ],
  },
  30: {
    name: 'Joelmir Carvalho',
    photo: '',
    bio: 'Nasceu em São Caetano do Sul – SP, em 1977...',
    books: [
      { title: 'Santa Rita de Caldas', cover: '' },
    ],
  },
  31: {
    name: 'Jonas Barros',
    photo: '',
    bio: 'Nasceu em 30/12/1968, na cidade de São João/PE...',
    books: [
      { title: 'Mistérios e segredos', cover: '' },
      { title: 'Revoada de Sonhos IV', cover: '' },
      { title: 'Versos soltos', cover: '' },
    ],
  },
  32: {
    name: 'Jorge Ferreira',
    photo: '',
    bio: 'Nasceu no dia 16 de janeiro de 1963 na cidade de São Paulo, capital...',
    books: [
      { title: 'O Início', cover: '' },
    ],
  },
  33: {
    name: 'José Célio da Silva',
    photo: '',
    bio: 'Nasceu em Santa Rita de Caldas, em 1956...',
    books: [
      { title: 'Santa Rita de Caldas', cover: '' },
    ],
  },
  34: {
    name: 'José Edison Bergamin',
    photo: '',
    bio: '',
    books: [
      { title: 'Pescadores de Amor', cover: '' },
    ],
  },
  35: {
    name: 'Katia Bueno',
    photo: '',
    bio: 'Nascida em São Paulo, em 12 de janeiro de 1944...',
    books: [
      { title: 'Vozes do céu', cover: '' },
    ],
  },
  36: {
    name: 'Kátia Regina de Oliveira',
    photo: '',
    bio: 'Formada em pedagogia, Kátia Regina de Oliveira nasceu no município de São Paulo...',
    books: [
      { title: 'Quando se perde a inocência', cover: '' },
    ],
  },
  37: {
    name: 'Lauriano dos Santos',
    photo: '',
    bio: 'O poeta, escritor e orador Lauriano dos Santos nasceu no dia 22 de outubro de 1944, em Registro (SP)...',
    books: [
      { title: 'Revoada de Sonhos I', cover: '' },
      { title: 'Revoada de Sonhos II', cover: '' },
      { title: 'Revoada de Sonhos III', cover: '' },
      { title: 'Pense comigo sobre a Bíblia', cover: '' },
      { title: 'Recanto do poeta', cover: '' },
      { title: 'Noções evangélicas', cover: '' },
      { title: 'Jesus: messias ou Deus?', cover: '' },
      { title: 'Por quê?', cover: '' },
      { title: 'Indagações oportunas', cover: '' },
    ],
  },
  38: {
    name: 'Lélia Miguel M de Lima',
    photo: '',
    bio: 'Filha de libaneses, nasceu em Angra dos Reis onde vive até hoje...',
    books: [
      { title: 'Sementes poéticas', cover: '' },
    ],
  },
  39: {
    name: 'Lina Calil',
    photo: '',
    bio: 'Nasceu numa sexta-feira 13, em pleno carnaval do Rio de Janeiro...',
    books: [
      { title: 'Revoada de Sonhos II', cover: '' },
      { title: 'Revoada de Sonhos III', cover: '' },
    ],
  },
  40: {
    name: 'Lívia Fiedler',
    photo: '',
    bio: 'Nasceu em São Paulo, Capital, em 1992...',
    books: [
      { title: 'A Guardiã do Fogo', cover: '' },
    ],
  },
  41: {
    name: 'Luana S. de A. Esposito',
    photo: '',
    bio: 'Autora de várias obras, nasceu em São Paulo...',
    books: [
      { title: 'Barracão de luz', cover: '' },
    ],
  },
  42: {
    name: 'Luiz Sass',
    photo: '',
    bio: 'Luiz Henrique Sass, nascido em 1931 numa fazenda do interior do Estado de São Paulo...',
    books: [
      { title: 'Uma Casinha de Luz', cover: '' },
    ],
  },
  43: {
    name: 'Luiza Grigini Martins',
    photo: '',
    bio: 'Nasceu no interior do Paraná e aos quinze anos de idade mudou-se para São Paulo...',
    books: [
      { title: 'Rosario dos sete misterios', cover: '' },
    ],
  },
  44: {
    name: 'Luiza Viegas Rathsam',
    photo: '',
    bio: 'Luiza Viegas Rathsam nasceu em 1996 e estuda no Colégio São Domingos – SP...',
    books: [
      { title: 'O Peru Matraca', cover: '' },
    ],
  },
  45: {
    name: 'Márcia Chavan Guasque',
    photo: '',
    bio: 'Moradora da Barra desde o ano de 1980, Marcia Guasque morava anteriormente na Tijuca...',
    books: [
      { title: 'Da Barra à Ilha da Gipoia', cover: '' },
    ],
  },
  46: {
    name: 'Marcus Vinicius Kray',
    photo: '',
    bio: 'Marcus Vinicius Kray nasceu em Santo André no dia 02/05/1996...',
    books: [
      { title: 'Revoada de sonhos IV', cover: '' },
    ],
  },
  47: {
    name: 'Maria Antônia dos Santos',
    photo: '',
    bio: 'Maria Antonia dos Santos Marcolino, nasceu na cidade de São Paulo...',
    books: [
      { title: 'Revoada de Sonhos I', cover: '' },
      { title: 'Revoada de Sonhos III', cover: '' },
    ],
  },
  48: {
    name: 'Maria Helena U C da Fonseca',
    photo: '',
    bio: 'Maria Helena Ururahy Campos da Fonseca é Acadêmica Fundadora do Ateneu Angrense de Letras e Artes...',
    books: [
      { title: 'Revoada de Sonhos I', cover: '' },
      { title: 'Revoada de Sonhos II', cover: '' },
      { title: 'Sementes poéticas', cover: '' },
    ],
  },
  49: {
    name: 'Maria José M Dias',
    photo: '',
    bio: 'Angrense, professora aposentada, morou em Petrópolis e estudou na Universidade Católica de Petrópolis – PUC...',
    books: [
      { title: 'Sementes poéticas', cover: '' },
    ],
  },
  50: {
    name: 'Maria Manuela Corujo',
    photo: '',
    bio: 'Atual vice-presidente da Associação Beneficente Fraternitas Nosso Lar, Maria Manuela Corujo nasceu em Angola...',
    books: [
      { title: 'Gabriel', cover: '' },
    ],
  },
  51: {
    name: 'Marina Cristaldo',
    photo: '',
    bio: 'Paulistana de alma e coração, nasceu em Julho de 1992...',
    books: [
      { title: 'Revoada de Sonhos III', cover: '' },
    ],
  },
  52: {
    name: 'Marzio Labigalini',
    photo: '',
    bio: 'Descendente, por parte de pai, de italianos e por parte de mãe, de indígenas e portugueses...',
    books: [
      { title: 'Pra poucos olhos...', cover: '' },
    ],
  },
  53: {
    name: 'Meire Márcia Marins',
    photo: '',
    bio: '',
    books: [
      { title: 'Pescadores de Amor', cover: '' },
    ],
  },
  54: {
    name: 'Neusa Aparecida M Maia',
    photo: '',
    bio: 'Membro do Ateneu Angrense de Letras e Artes e da União Brasileira de Trovadores...',
    books: [
      { title: 'Sementes poéticas', cover: '' },
    ],
  },
  55: {
    name: 'Nicholas Augustus Grigoragi',
    photo: '',
    bio: 'Descendente de italianos da região da Calábria, nasceu no dia 2 de janeiro de 1981...',
    books: [
      { title: 'Diário de uma pombagira menina', cover: '' },
    ],
  },
  56: {
    name: 'Nívia Ribeiro da Silva Ferreira',
    photo: '',
    bio: 'Nívia Ribeiro da Silva Ferreira é natural de Esmeraldas/MG...',
    books: [
      { title: 'Viva Gabi!', cover: '' },
    ],
  },
  57: {
    name: 'Oscar Jorge Moysés',
    photo: '',
    bio: 'Nasceu no dia 3 de setembro de 1942, em Porto Alegre/RS...',
    books: [
      { title: 'Os gêmeos', cover: '' },
    ],
  },
  58: {
    name: 'Poliana Coelho Barbosa Fernandes',
    photo: '',
    bio: 'Poliana é profissional de Marketing e Coaching...',
    books: [
      { title: 'Luz de outono', cover: '' },
    ],
  },
  59: {
    name: 'Rita Lopes',
    photo: '',
    bio: 'Rita de Cássia Lopes Dardengo prefere assinar seus trabalhos como Rita Lopes...',
    books: [
      { title: 'Revoada de Sonhos I', cover: '' },
      { title: 'Revoada de Sonhos II', cover: '' },
      { title: 'Revoada de Sonhos III', cover: '' },
    ],
  },
  60: {
    name: 'Roberta Teixeira da Silva',
    photo: '',
    bio: 'Nasceu em 1979 em São Paulo. É funcionária pública e Bacharel em Direito...',
    books: [
      { title: 'Revoada de sonhos IV', cover: '' },
    ],
  },
  61: {
    name: 'Roberto de Carvalho',
    photo: '',
    bio: 'Nasceu no dia 2 de março de 1964, em Liberdade/MG e mora em São Paulo...',
    books: [
      { title: 'Celebração', cover: '' },
      { title: 'Quando a vida convida', cover: '' },
      { title: 'Andarilhando', cover: '' },
      { title: 'A cotovia dos pinheiros', cover: '' },
      { title: 'Vale dos sonhadores', cover: '' },
    ],
  },
  62: {
    name: 'Rodrigo Alves',
    photo: '',
    bio: 'Nascido na madrugada do dia 25 de abril de 1983, na cidade de Ribeirão Pires - SP...',
    books: [
      { title: 'Lua de vinho', cover: '' },
    ],
  },
  63: {
    name: 'Romildo Labigalini',
    photo: '',
    bio: 'Com formação em Direito, nasceu em 11 de setembro de 1938, em Jacutinga-MG...',
    books: [
      { title: 'Cronicâncias', cover: '' },
    ],
  },
  64: {
    name: 'Rosangela Bonizolli',
    photo: '',
    bio: 'A autora é pedagoga, formada pela Universidade de São Paulo...',
    books: [
      { title: 'A libertação de Susana', cover: '' },
      { title: 'Florescer', cover: '' },
    ],
  },
  65: {
    name: 'Rose Lopes',
    photo: '',
    bio: 'É de Angra dos Reis (RJ). Descobriu sua veia artística ainda na infância...',
    books: [
      { title: 'Revoada de Sonhos II', cover: '' },
      { title: 'Revoada de Sonhos III', cover: '' },
    ],
  },
  66: {
    name: 'Sá de Carvalho',
    photo: '',
    bio: 'Nascida em Lavras (MG), chegou a Angra dos Reis (RJ), em 1947...',
    books: [
      { title: 'Revoada de Sonhos I', cover: '' },
      { title: 'Revoada de Sonhos II', cover: '' },
      { title: 'Chronos', cover: '' },
      { title: 'Mosaico', cover: '' },
      { title: 'Sementes poéticas', cover: '' },
    ],
  },
  67: {
    name: 'Saulo Panham',
    photo: '',
    bio: 'Nasceu no interior do estado de São Paulo. Em 1945, com seis anos de idade, mudou-se com a família...',
    books: [
      { title: 'Revoada de Sonhos III', cover: '' },
      { title: 'Pensamentos de Saulo', cover: '' },
      { title: 'Revoada de Sonhos IV', cover: '' },
    ],
  },
  68: {
    name: 'Sebastião Isidro de Araújo',
    photo: '',
    bio: 'Nasceu em 19/01/1925, em Bacamarte/PB...',
    books: [
      { title: 'Sementes poéticas', cover: '' },
    ],
  },
  69: {
    name: 'Sérgio Pereira',
    photo: '',
    bio: 'Sérgio Pereira nasceu em São Paulo, no dia 6 de janeiro de 1957...',
    books: [
      { title: 'Provérbios de Salomão à luz do Espiritismo', cover: '' },
    ],
  },
  70: {
    name: 'Sibeles Maria De Mais',
    photo: '',
    bio: 'Nasceu em 1939, na cidade de Cedral...',
    books: [
      { title: 'Zuvi entre os ciganos', cover: '' },
      { title: 'Caterine', cover: '' },
      { title: 'As várias faces de Frei Gustav', cover: '' },
      { title: 'Higley', cover: '' },
    ],
  },
  71: {
    name: 'Tânia Redigolo',
    photo: '',
    bio: 'Advogada, atua na área cível...',
    books: [
      { title: 'O caminho da casa de cristal', cover: '' },
    ],
  },
  72: {
    name: 'Teresinha B. Penteado',
    photo: '',
    bio: 'Teresinha Bueno Penteado é casada com Plínio Penteado Jr; tem dois filhos e uma netinha...',
    books: [
      { title: 'A incrível jornada cósmica do ser', cover: '' },
    ],
  },
  73: {
    name: 'Valderez Escobar',
    photo: '',
    bio: 'Valderez Escobar nasceu em Cedral/SP...',
    books: [
      { title: 'Devaneios', cover: '' },
      { title: 'Revoada de Sonhos I', cover: '' },
      { title: 'Revoada de Sonhos II', cover: '' },
      { title: 'Folhas Soltas', cover: '' },
      { title: 'Os macaquinhos Sapecas', cover: '' },
      { title: 'Livre como poeta', cover: '' },
      { title: 'Pra frente, Brasil', cover: '' },
      { title: 'Pedacinhos do céu', cover: '' },
      { title: 'As borboletinhas do espaço', cover: '' },
      { title: 'Crônicas da madrugada', cover: '' },
    ],
  },
  74: {
    name: 'Valentina Antonini da Silva',
    photo: '',
    bio: '',
    books: [
      { title: 'Orgulho', cover: '' },
    ],
  },
  75: {
    name: 'Vinícius Gouvêa de Carvalho',
    photo: '',
    bio: 'Nascido e criado em 2000, na cidade de Angra dos Reis, RJ...',
    books: [
      { title: 'Poesia, porque não posso te dar beijinho', cover: '' },
    ],
  },
  76: {
    name: 'Yuri Dinalli',
    photo: '',
    bio: 'Yuri Dinalli (Dentinho) nasceu em São Paulo - SP, no dia 12 de junho de 1995...',
    books: [
      { title: 'A cidade dos óculos sem Sol', cover: '' },
    ],
  },
  77: {
    name: 'Yuriko Yamamoto',
    photo: '',
    bio: 'Nasceu no dia 2 de maio de 1950, em Bilac – SP...',
    books: [
      { title: 'Como conquistar o seu trabalho para sempre!', cover: '' },
    ],
  },
  78: {
    name: 'Yvone Russeau',
    photo: '',
    bio: 'Nascida em Brotas/SP, Yvone Rousseau mudou-se com a família para a capital paulista aos cinco anos de idade e voltou a viver, décadas mais tarde, em sua cidade natal...',
    books: [
      { title: 'Memórias de minha cidade natal - Brotas', cover: '' },
    ],
  },
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
      {/* Informações do Autor */}
      <div className="relative h-[85vh] flex flex-col items-center justify-center px-4">
        <div className="max-w-[980px] w-full mx-auto relative z-10">
          <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-lg fade-in">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-96 w-full object-cover md:w-96"
                  src={author.photo || 'https://via.placeholder.com/150'}
                  alt={author.name}
                />
              </div>
              <div className="p-12">
                <h1 className="text-4xl font-semibold text-[#1d1d1f] mb-6">{author.name}</h1>
                <p className="text-[#86868b] text-lg leading-relaxed">
                  {author.bio || 'Biografia não disponível.'}
                </p>
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

      {/* Seção de Livros */}
      <div className="max-w-[980px] mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-12 text-center">Obras Publicadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {author.books.map((book, index) => (
            <div key={index} className="bg-[#f5f5f7] rounded-2xl overflow-hidden">
              <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                <img
                  src={book.cover || 'https://via.placeholder.com/300x400'}
                  alt={book.title || 'Título não disponível'}
                  className="w-full h-[32rem] object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-5 w-5 text-[#0071e3] mr-2" />
                  <h3 className="text-xl font-semibold text-[#1d1d1f]">
                    {book.title || 'Título não disponível'}
                  </h3>
                </div>
                <p className="text-[#86868b]">
                  {book.description || 'Descrição não disponível.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorDetail;
