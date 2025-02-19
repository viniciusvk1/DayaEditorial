import React from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const authorData = {
  1: {
    name: 'Amauri Menezes Filho',
    photo: '/authors/Amaury/amaury.jpg',
    books: [
      { title: 'Iracemeando', cover: '/authors/Amaury/iracemeando_g.jpg' },
    ],
  },
  2: {
    name: 'Ana Maris de Figueiredo Ribeiro',
    photo: '/authors/Anamaris/anamaris.jpg',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/authors/Anamaris/revoada-vol-I-g.jpg' },
      { title: 'Revoada de Sonhos II', cover: '/authors/Anamaris/revoada-vol-II-g.jpg' },
      { title: 'Revoada de Sonhos III', cover: '/authors/Anamaris/revoada-de-sonhos3-g.jpg' },
      { title: 'Revoada de Sonhos IV', cover: '/authors/Anamaris/revoada-IV_g.jpg' },
    ],
  },
  3: {
    name: 'Ary Abrantes',
    photo: '/authors/Ary/aryabrantes.jpg',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/authors/Ary/revoada-vol-I-g (1).jpg' },
      { title: 'Revoada de Sonhos II', cover: '/authors/Ary/revoada-vol-II-g (1).jpg' },
      { title: 'Pausa para meditação', cover: '/authors/Ary/pausa-para-med_resized.jpg' },
      { title: 'Pausa para meditação', cover: '/authors/Ary/Minhas memórias.jpg' }
    ],
  },
  4: {
    name: 'Billy da Nove',
    photo: '/authors/Billy/Billy.jpg',
    books: [
      { title: 'Poemas, canções & melodias', cover: '/authors/Billy/poemas,cancoes_g.jpg' },
    ],
  },
  5: {
    name: 'Bruno Rodrigues',
    photo: '/authors/Bruno/bruno.jpg',
    books: [
      { title: 'Revoada de sonhos IV', cover: '/authors/Bruno/revoada-IV_g.jpg' },
      { title: 'Em seu cálido olhar', cover: '/authors/Bruno/em-seu-calido_g.jpg' },
    ],
  },
  6: {
    name: 'Caetano de Almeida',
    photo: '/authors/Caetano/caetano.jpg',
    books: [
      { title: 'Sempre é tempo de amar', cover: '/authors/Caetano/sempre e tempo-g.jpg' },
    ],
  },
  79: {
    name: 'Cibele Bernardo',
    photo: '/authors/CibeleBernardo/Foto Cibele.jpg',
    books: [
      { title: 'As multiplas faces do amor', cover: '/authors/CibeleBernardo/As múltiplas faces do amor e do ódio.jpg' },
    ],
  },
  7: {
    name: 'Clauni Barbosa',
    photo: '/authors/Clauni/clauni.jpg',
    books: [
      { title: 'Entre Borboletas e Girassóis', cover: '/authors/Clauni/entre-borboletas_resized.jpg' },
      { title: 'Esse é meu jeito', cover: '/authors/Clauni/Esse e meu jeito.jpg' },
    ],
  },
  8: {
    name: 'Cyntia H. Rossini',
    photo: '/authors/Cynthia/Cyntia.jpg',
    books: [
      { title: '21 Dias – Memórias de uma ocupação estudantil', cover: '/authors/Cynthia/21 dias_g.jpg' },
    ],
  },
  9: {
    name: 'Delson Soares Silva',
    photo: '/authors/Delson/Delson.jpg',
    books: [
      { title: 'Jesus o amigo que ensina', cover: '/authors/Delson/Jesus-o-amigo-que-ensina_g.jpg' },
    ],
  },
  10: {
    name: 'Dilo Guasque',
    photo: '/authors/Dilo p/dilo_p.jpg',
    books: [
      { title: 'De algumas coisas, um pouco', cover: '/authors/Dilo p/de-algumas-coisas-g.jpg' },
      { title: 'Revoada de Sonhos IV', cover: '/authors/Dilo p/revoada-IV_g.jpg' },
      { title: 'Troços, troças & trompaços', cover: '/authors/Dilo p/trocas-trocas_g.jpg' },
      { title: 'Estórias contadas e recontadas', cover: '/authors/Dilo p/estorias-contadas_g.jpg' },
    ],
  },
  11: {
    name: 'Dirce Biscuola de Pinho',
    photo: '/authors/Dirce/dirce_pinho_p.jpg',
    books: [
      { title: 'Gotas de Luz', cover: '/authors/Dirce/gotas-g.jpg' },
      { title: 'Pouso para o repouso.jpg', cover: '/authors/Dirce/Pouso para o repouso.jpg' },
    ],
  },
  12: {
    name: 'Edmur De Lucca',
    photo: '/authors/Edmur/edmur_lucca_p.jpg',
    books: [
      { title: 'Amor e ambição', cover: '/authors/Edmur/amor-e-ambicao-g.jpg' },
      { title: 'Amor e caridade', cover: '/authors/Edmur/amor e caridade_g.jpg' },
      { title: 'Escolhas e consequências', cover: '/authors/Edmur/escolhas-e-consequencias_g.jpg' },
      { title: 'Mãos que semeiam luz', cover: '/authors/Edmur/maos-luz_g.jpg' },
      { title: 'Caminhos de amor e luz', cover: '/authors/Edmur/Caminhos de amor e luz.jpg' },
    ],
  },
  13: {
    name: 'Eliana da Costa R Tosi',
    photo: '/authors/elianacosta/eliana.png',
    books: [
      { title: 'Sementes poéticas', cover: '/authors/elianacosta/sementes_g.jpg' },
    ],
  },
  14: {
    name: 'Eliana Irena',
    photo: '/authors/Eliana/eliana.jpg',
    books: [
      { title: 'Iracemeando', cover: '/authors/Eliana/iracemeando_g.jpg' },
    ],
  },
  15: {
    name: 'Eli Gonçalves',
    photo: '/authors/Eli/eli.jpg',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/authors/Eli/revoada-vol-I-g.jpg' },
      { title: 'Revoada de Sonhos II', cover: '/authors/Eli/revoada-vol-II-g.jpg' },
      { title: 'Revoada de Sonhos III', cover: '/authors/Eli/revoada-de-sonhos3-g.jpg' },
      { title: 'O Papagaio e a Sereiazinha', cover: '/authors/Eli/livro-papagaio-g.png' },
    ],
  },
  16: {
    name: 'Eliseu Labigalini',
    photo: '/authors/Eliseu/eliseu.jpg',
    books: [
      { title: 'O jogo da vida!', cover: '/authors/Eliseu/jogo-da-vida_g.jpg' },
      { title: 'Santo e José Labegalini', cover: '/authors/Eliseu/santo-e-jose_g.jpg' },
      { title: 'Santo e José Labegalini', cover: '/authors/Eliseu/chico.jpg' },
    ],
  },
  17: {
    name: 'Elizabeth Carolina',
    photo: '/authors/Elizabeth/elizabeth.jpg',
    books: [
      { title: 'Palavras que tecem poemas', cover: '/authors/Elizabeth/palavras-que-tecem-g.jpg' },
    ],
  },
  18: {
    name: 'Elza Fernandes',
    photo: '/authors/Elzafernandes/elza.jpg',
    books: [
      { title: 'Reza, minha gente, reza!...', cover: '/authors/Elzafernandes/reza.jpg' },
      { title: 'Revoada de Sonhos III', cover: '/authors/Elzafernandes/revoada-de-sonhos3-g.jpg' },
      { title: 'Nos cristalinos braços de Jesus', cover: '/authors/Elzafernandes/nos-cristalinos-g.jpg' },
      { title: 'Parnaso de amor', cover: '/authors/Elzafernandes/parnaso-de-amor-g.jpg' },
      { title: 'Parnaso de amor 2', cover: '/authors/Elzafernandes/parnasoII-g.jpg' },
      { title: 'O Cântico do "Pedir, Louvar e Agradecer"', cover: '/authors/Elzafernandes/pedir-louvar_g.jpg' },
      { title: 'Reflexos de amor', cover: '/authors/Elzafernandes/reflexos-g.jpg' },
      { title: 'Porque amo e sou amada', cover: '/authors/Elzafernandes/porque-amo_g.jpg' },
      { title: 'Acrósticos da filha de Deus', cover: '/authors/Elzafernandes/acrosticos_g.jpg' },
      { title: 'Revoada de Sonhos IV', cover: '/authors/Elzafernandes/revoada-IV_g.jpg' },
      { title: 'Vibrantes outros contos', cover: '/authors/Elzafernandes/vibrantes_g.jpg' },
      { title: 'Confiantes preces', cover: '/authors/Elzafernandes/confiantes_g.jpg' },
      { title: 'Mãe, pérola de amor', cover: '/authors/Elzafernandes/mae-perola_g.jpg' },
      { title: 'Deus, somente Deus', cover: '/authors/Elzafernandes/deus-somente_g.jpg' },
      { title: 'Ave, amor', cover: '/authors/Elzafernandes/ave amor_g.jpg' },
      { title: 'Amorosos contos', cover: '/authors/Elzafernandes/amorosos-contos_g.jpg' },
      { title: 'Confiantes preces', cover: '/authors/Elzafernandes/confiantes_g.jpg' },
      { title: 'Amor, muito amor!', cover: '/authors/Elzafernandes/amor-muito-amor_g.jpg' },
      { title: 'Sob a luz da oração', cover: '/authors/Elzafernandes/sob-a-luz_g.jpg' },
      { title: 'Sob o brilho do amor', cover: '/authors/Elzafernandes/sob-o-brilho-do-amor_g.jpg' },
      { title: 'Sob o fulgor de outras amorosas realidades', cover: '/authors/Elzafernandes/sob-o-fulgor_g.jpg' },
      { title: 'Sob a bênção da oração', cover: '/authors/Elzafernandes/sob-a-bencao_g.jpg' },
      { title: 'Pedir, louvar e agradecer', cover: '/authors/Elzafernandes/pedir-louvar_g.jpg' },
    ],
  },
  19: {
    name: 'Érico da Fonseca',
    photo: '/authors/Erico/erico.jpg',
    books: [
      { title: 'Sementes poéticas', cover: '/authors/Erico/sementes_g.jpg' },
      { title: 'Sementes poéticas', cover: '/authors/Erico/Santa Casa de Angra dos Reis.jpg' },
    ],
  },
  20: {
    name: 'Etna Lacerda',
    photo: '/authors/etnalacerda/etna.jpg',
    books: [
      { title: 'A Fada do conto', cover: '/authors/etnalacerda/fada-livro.png' },
    ],
  },
  21: {
    name: 'Fabiano Mendes',
    photo: '/authors/Fabiano/Fabiano_p.jpg',
    books: [
      { title: 'O método eu', cover: '/authors/Fabiano/metodo-g.jpg' },
    ],
  },
  22: {
    name: 'Fábio Cirello',
    photo: '/authors/Fabiocirello/fabio.jpg',
    books: [
      { title: 'Simplificando Kardec para o Evangelho no Lar', cover: '/authors/Fabiocirello/simplificando-g.jpg' },
    ],
  },
  23: {
    name: 'Fátima Nakamatsu',
    photo: '/authors/FAtima/fatima.jpg',
    books: [
      { title: 'Convite para colorir', cover: '/authors/FAtima/convite-para-colorir_g.jpg' },
    ],
  },
  80: {
    name: 'Fernando Fabião',
    photo: '/authors/FernandoFabiao/Foto Fernando Fabiao.jpg',
    books: [
      { title: 'Gotas de Regeneração', cover: '/authors/FernandoFabiao/gotas de reg.jpg' },
    ],
  },
  24: {
    name: 'Francisca Gomes',
    photo: '/authors/Francisca/francisca.jpg',
    books: [
      { title: 'As aventuras de Zuíla', cover: '/authors/Francisca/aventuras de zuila_g.jpg' },
    ],
  },
  25: {
    name: 'Gioconda Labecca',
    photo: '/authors/gioconda/gioconda_p.jpg',
    books: [
      { title: 'Entardecer', cover: '/authors/gioconda/entardecer-g.jpg' },
    ],
  },
  26: {
    name: 'Guerino Crepaldi',
    photo: '/authors/Guerino/Guerino_p.jpg',
    books: [
      { title: 'Conheça a verdade', cover: '/authors/Guerino/conheca-g.jpg' },
    ],
  },
  27: {
    name: 'Jessé Nascimento',
    photo: '/authors/Jesse/Jesse.jpg',
    books: [
      { title: 'Sementes poéticas', cover: '/authors/Jesse/sementes_g.jpg' },
    ],
  },
  81: {
    name: 'Jesualdo Costa',
    photo: '/authors/JesualdoCosta/Foto Jesualdo.jpg',
    books: [
      { title: 'Deus, espírito universal supremo', cover: '/authors/JesualdoCosta/Deus, espirito universal supremo.jpg' },
    ],
  },
  28: {
    name: 'João Galvani',
    photo: '/authors/Joaogalvani/joao-galvani_p.jpg',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/authors/Joaogalvani/revoada-vol-I-g.jpg' },
    ],
  },
  29: {
    name: 'João Mainsel',
    photo: '/authors/Joaomainsel/joao-mainsel_p.jpg',
    books: [
      { title: 'A Travessia', cover: '/authors/Joaomainsel/a-travessia-g.jpg' },
      { title: 'A Travessia – livro 2', cover: '/authors/Joaomainsel/travessia-2_g.jpg' },
    ],
  },
  30: {
    name: 'Joelmir Carvalho',
    photo: '/authors/sem_foto.jpg',
    books: [
      { title: 'Santa Rita de Caldas', cover: '/authors/Joemircarvalho/santa-rita-g.jpg' },
    ],
  },
  31: {
    name: 'Jonas Barros',
    photo: '/authors/Jonasbarros/jonas-barros_p.jpg',
    books: [
      { title: 'Mistérios e segredos', cover: '/authors/Jonasbarros/misterios-e-segredos-g.jpg' },
      { title: 'Revoada de Sonhos IV', cover: '/authors/Jonasbarros/revoada-IV_g.jpg' },
      { title: 'Versos soltos', cover: '/authors/Jonasbarros/versos soltos_g.jpg' },
    ],
  },
  32: {
    name: 'Jorge Ferreira',
    photo: '/authors/Jorge/Jorge.jpg',
    books: [
      { title: 'O Início', cover: '/authors/Jorge/O_inicio_g.jpg' },
    ],
  },
  33: {
    name: 'José Célio da Silva',
    photo: '/authors/sem_foto.jpg',
    books: [
      { title: 'Santa Rita de Caldas', cover: '/authors/Jose/santa-rita-g.jpg' },
    ],
  },
  34: {
    name: 'José Edison Bergamin',
    photo: '/authors/Joseedson/jose-edson-bergamin_p.jpg',
    books: [
      { title: 'Pescadores de Amor', cover: '/authors/Joseedson/pescadores-g.jpg' },
    ],
  },
  35: {
    name: 'Katia Bueno',
    photo: '/authors/Katia/katia.jpg',
    books: [
      { title: 'Vozes do céu', cover: '/authors/Katia/vozes-do-ceu_resized.jpg' },
      { title: 'Histórias Infantis', cover: '/authors/Katia/historias inf.jpg' },
    ],
  },
  36: {
    name: 'Kátia Regina de Oliveira',
    photo: '/authors/Katiaregina/katia-regina_p.jpg',
    books: [
      { title: 'Quando se perde a inocência', cover: '/authors/Katiaregina/inocencia-g.jpg' },
    ],
  },
  37: {
    name: 'Lauriano dos Santos',
    photo: '/authors/LaurianoSantos/lauriano-santos_p.jpg',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/authors/LaurianoSantos/coletanea-revoada-g.png' },
      { title: 'Revoada de Sonhos II', cover: '/authors/LaurianoSantos/coletanea-revoadaII-g.png' },
      { title: 'Revoada de Sonhos III', cover: '/authors/LaurianoSantos/revoada-de-sonhos3-g.jpg' },
      { title: 'Pense comigo sobre a Bíblia', cover: '/authors/LaurianoSantos/pense-comigo-g.jpg' },
      { title: 'Recanto do poeta', cover: '/authors/LaurianoSantos/recanto-do-poeta-g.jpg' },
      { title: 'Noções evangélicas', cover: '/authors/LaurianoSantos/nocoes-evang-g.jpg' },
      { title: 'Jesus: messias ou Deus?', cover: '/authors/LaurianoSantos/jesus-messias_g.jpg' },
      { title: 'Por quê?', cover: '/authors/LaurianoSantos/por que_g.jpg' },
      { title: 'Indagações oportunas', cover: '/authors/LaurianoSantos/indagacoes-oportunas_g.jpg' },
      { title: 'Vivência Espírita', cover: '/authors/LaurianoSantos/vivencia espirita.jpg' },
    ],
  },
  38: {
    name: 'Lélia Miguel M de Lima',
    photo: '/authors/Lelia/lelia.jpg',
    books: [
      { title: 'Sementes poéticas', cover: '/authors/Lelia/sementes_g.jpg' },
    ],
  },
  39: {
    name: 'Lina Calil',
    photo: '/authors/Linacalil/lina-calil_p.jpg',
    books: [
      { title: 'Revoada de Sonhos II', cover: '/authors/Linacalil/coletanea-revoadaII-g.png' },
      { title: 'Revoada de Sonhos III', cover: '/authors/Linacalil/revoada-de-sonhos3-g.jpg' },
    ],
  },
  40: {
    name: 'Lívia Fiedler',
    photo: '/authors/LiviaFieldler/livia-fiedler_p.jpg',
    books: [
      { title: 'A Guardiã do Fogo', cover: '/authors/LiviaFieldler/guardia-g.jpg' },
    ],
  },
  41: {
    name: 'Luana S. de A. Esposito',
    photo: '/authors/Luana/Luana.jpg',
    books: [
      { title: 'Barracão de luz', cover: '/authors/Luana/barracao_g.jpg' },
      { title: 'Historias e poesias dos espiritos', cover: '/authors/Luana/Historias e poesias dos espiritos.jpg' },
    ],
  },
  42: {
    name: 'Luiz Sass',
    photo: '/authors/Luizsass/luiz-sass_p.jpg',
    books: [
      { title: 'Uma Casinha de Luz', cover: '/authors/Luizsass/uma-casinha-g.jpg' },
    ],
  },
  43: {
    name: 'Luiza Grigini Martins',
    photo: '/authors/Luiza/Luiza_p.jpg',
    books: [
      { title: 'Rosario dos sete misterios', cover: '/authors/Luiza/rosario-dos-sete-misterios_g.jpg' },
    ],
  },
  44: {
    name: 'Luiza Viegas Rathsam',
    photo: '/authors/sem_foto.jpg',
    books: [
      { title: 'O Peru Matraca', cover: '/authors/Luizaviegas/peru-matraca-g.jpg' },
    ],
  },
  45: {
    name: 'Márcia Chavan Guasque',
    photo: '/authors/Marcia/Marcia_p.jpg',
    books: [
      { title: 'Da Barra à Ilha da Gipoia', cover: '/authors/Marcia/da-barra-g.jpg' },
    ],
  },
  46: {
    name: 'Marcus Vinicius Kray',
    photo: '/authors/MArcus/marcus_p.jpg',
    books: [
      { title: 'Revoada de sonhos IV', cover: '/authors/MArcus/revoada-IV_g.jpg' },
    ],
  },
  47: {
    name: 'Maria Antônia dos Santos',
    photo: '/authors/Mariaantonia/maria-antonia_p.jpg',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/authors/Mariaantonia/coletanea-revoada-g.png' },
      { title: 'Revoada de Sonhos III', cover: '/authors/Mariaantonia/revoada-de-sonhos3-g.jpg' },
    ],
  },
  82: {
    name: 'Maria Eduarda',
    photo: '/authors/MariaEduarda/Foto Maria Eduarda.jpg',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/authors/MariaEduarda/branquinho.jpg' },
    ],
  },
  83: {
    name: 'Maria Elisabete Perez Simoni',
    photo: '/authors/MariaElisabete/Maria Elisabete Perez Simoni.jpg',
    books: [
      { title: 'Aluanã', cover: '/authors/MariaElisabete/Aluana.png' },
    ],
  },
  48: {
    name: 'Maria Helena U C da Fonseca',
    photo: '/authors/Mariahelena/maria-helena_p.jpg',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/authors/Mariahelena/coletanea-revoada-g (1).png' },
      { title: 'Revoada de Sonhos II', cover: '/authors/Mariahelena/coletanea-revoadaII-g.png' },
      { title: 'Sementes poéticas', cover: '/authors/Mariahelena/sementes_g.jpg' },
    ],
  },
  49: {
    name: 'Maria José M Dias',
    photo: '/authors/MariaJose/maria_jose.jpg',
    books: [
      { title: 'Sementes poéticas', cover: '/authors/MariaJose/sementes_g.jpg' },
    ],
  },
  50: {
    name: 'Maria Manuela Corujo',
    photo: '/authors/MariaManuela/Maria_Manuela_p.jpg',
    books: [
      { title: 'Gabriel', cover: '/authors/MariaManuela/gabriel_g.jpg' },
    ],
  },
  51: {
    name: 'Marina Cristaldo',
    photo: '/authors/Marinacristaldo/marina-cristaldo_p.jpg',
    books: [
      { title: 'Revoada de Sonhos III', cover: '/authors/Marinacristaldo/revoada-de-sonhos3-g.jpg' },
    ],
  },
  52: {
    name: 'Marzio Labigalini',
    photo: '/authors/Marzio/marzio.jpg',
    books: [
      { title: 'Pra poucos olhos...', cover: '/authors/Marzio/pra_poucos_olhos_g.jpg' },
      { title: 'Curtaceos', cover: '/authors/Marzio/curtaceos.jpg' },
      { title: 'Obsclarecências', cover: '/authors/Marzio/obsclarecencia.jpg' },
    ],
  },
  84: {
    name: 'Mauricélia',
    photo: '/authors/Mauricelia/Foto Mauricelia.jpeg',
    books: [
      { title: 'Palavras e sentimentos', cover: '/authors/Mauricelia/Palavras e sentimentos.jpg' },
    ],
  },
  53: {
    name: 'Meire Márcia Marins',
    photo: '/authors/Meire/meire-marins_p.jpg',
    books: [
      { title: 'Pescadores de Amor', cover: '/authors/Meire/pescadores-g.jpg' },
    ],
  },
  54: {
    name: 'Neusa Aparecida M Maia',
    photo: '/authors/Neusa/neusa.jpg',
    books: [
      { title: 'Sementes poéticas', cover: '/authors/Neusa/sementes_g.jpg' },
    ],
  },
  55: {
    name: 'Nicholas Augustus Grigoragi',
    photo: '/authors/Nicholas/Nicholas Grigoragi_p.jpg',
    books: [
      { title: 'Diário de uma pombagira menina', cover: '/authors/Nicholas/diario-de-uma_g.jpg' },
    ],
  },
  56: {
    name: 'Nívia Ribeiro da Silva Ferreira',
    photo: '/authors/Nivia/nivia_p.jpg',
    books: [
      { title: 'Viva Gabi!', cover: '/authors/Nivia/Viva-gabi-g.jpg' },
    ],
  },
  57: {
    name: 'Oscar Jorge Moysés',
    photo: '/authors/OscarJorge/oscar-jorge.jpg',
    books: [
      { title: 'Os gêmeos', cover: '/authors/OscarJorge/os-gemeos_g.jpg' },
    ],
  },
  58: {
    name: 'Poliana Coelho Barbosa Fernandes',
    photo: '/authors/Poliana/poliana-p.jpg',
    books: [
      { title: 'Luz de outono', cover: '/authors/Poliana/luz-outono-g.jpg' },
    ],
  },
  59: {
    name: 'Rita Lopes',
    photo: '/authors/RitaLopes/rita-lopes_p.jpg',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/authors/RitaLopes/coletanea-revoada-g.png' },
      { title: 'Revoada de Sonhos II', cover: '/authors/RitaLopes/coletanea-revoadaII-g.png' },
      { title: 'Revoada de Sonhos III', cover: '/authors/RitaLopes/revoada-de-sonhos3-g.jpg' },
    ],
  },
  60: {
    name: 'Roberta Teixeira da Silva',
    photo: '/authors/roberta/roberta_p.jpg',
    books: [
      { title: 'Revoada de sonhos IV', cover: '/authors/roberta/revoada-IV_g.jpg' },
    ],
  },
  61: {
    name: 'Roberto de Carvalho',
    photo: '/authors/RobertoCarvalho/roberto-de-carvalho_p.jpg',
    books: [
      { title: 'Celebração', cover: '/authors/RobertoCarvalho/celebracao-g.jpg' },
      { title: 'Quando a vida convida', cover: '/authors/RobertoCarvalho/quando-a-vida_g.jpg' },
      { title: 'Andarilhando', cover: '/authors/RobertoCarvalho/andarilhando_g.jpg' },
      { title: 'A cotovia dos pinheiros', cover: '/authors/RobertoCarvalho/cotovia-dos-pinheiros_g.jpg' },
      { title: 'Vale dos sonhadores', cover: '/authors/RobertoCarvalho/vale-dos-s_g.jpg' },
    ],
  },
  62: {
    name: 'Rodrigo Alves',
    photo: '/authors/Rodrigo/Rodrigo_p.jpg',
    books: [
      { title: 'Lua de vinho', cover: '/authors/Rodrigo/lua-de-vinho-g.jpg' },
    ],
  },
  63: {
    name: 'Romildo Labigalini',
    photo: '/authors/Romildo/romildo.jpg',
    books: [
      { title: 'Cronicâncias', cover: '/authors/Romildo/cronicancias_resized.jpg' },
    ],
  },
  85: {
    name: 'Ronel Barbosa',
    photo: '/authors/RonelBarbosa/Foto Ronel.jpg',
    books: [
      { title: 'Palavras que edificam o coração', cover: '/authors/RonelBarbosa/Palavras que edificam o coracao.jpg' },
      { title: 'Transformados pelos desafios', cover: '/authors/RonelBarbosa/Transformados pelos desafios.jpg' },
      { title: 'Um novo olhar', cover: '/authors/RonelBarbosa/Um novo olhar.jpg' },
    ],
  },
  64: {
    name: 'Rosangela Bonizolli',
    photo: '/authors/Rosangela/Rosangela_p.jpg',
    books: [
      { title: 'A libertação de Susana', cover: '/authors/Rosangela/libertacao-de-susana_g.jpg' },
      { title: 'Florescer', cover: '/authors/Rosangela/florescer_g.jpg' },
    ],
  },
  65: {
    name: 'Rose Lopes',
    photo: '/authors/Rose Lopes/rose-lopes_p.jpg',
    books: [
      { title: 'Revoada de Sonhos II', cover: '/authors/Rose Lopes/coletanea-revoadaII-g.png' },
      { title: 'Revoada de Sonhos III', cover: '/authors/Rose Lopes/revoada-de-sonhos3-g.jpg' },
    ],
  },
  66: {
    name: 'Sá de Carvalho',
    photo: '/authors/adecarvalho/sa-de-carvalho_p.jpg',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/authors/Sadecarvalho/coletanea-revoada-g.png' },
      { title: 'Revoada de Sonhos II', cover: '/authors/Sadecarvalho/coletanea-revoadaII-g.png' },
      { title: 'Chronos', cover: '/authors/Sadecarvalho/chronos-g.jpg' },
      { title: 'Mosaico', cover: '/authors/Sadecarvalho/mosaico-g.jpg' },
      { title: 'Sementes poéticas', cover: '/authors/Sadecarvalho/sementes_g.jpg' },
      { title: 'Branquinho', cover: '/authors/Sadecarvalho/branquinho.jpg' },
      { title: 'A fonte da água mágica', cover: '/authors/Sadecarvalho/fonte.jpg' },
    ],
  },
  67: {
    name: 'Saulo Panham',
    photo: '/authors/Saulopanham/saulo-panham_p.jpg',
    books: [
      { title: 'Revoada de Sonhos III', cover: '/authors/Saulopanham/revoada-de-sonhos3-g.jpg' },
      { title: 'Pensamentos de Saulo', cover: '/authors/Saulopanham/pensamentos-de-saulo-g.jpg' },
      { title: 'Revoada de Sonhos IV', cover: '/authors/Saulopanham/revoada-IV_g.jpg' },
    ],
  },
  68: {
    name: 'Sebastião Isidro de Araújo',
    photo: '/authors/Sabastiao/sebastiao.jpg',
    books: [
      { title: 'Sementes poéticas', cover: '/authors/Sabastiao/sementes_g.jpg' },
    ],
  },
  69: {
    name: 'Sérgio Pereira',
    photo: '/authors/Sergiopereira/sergio_pereira_p.jpg',
    books: [
      { title: 'Provérbios de Salomão à luz do Espiritismo', cover: '/authors/Sergiopereira/sergio_pereira_p.jpg' },
    ],
  },
  70: {
    name: 'Sibeles Maria De Mais',
    photo: '/authors/Sibeles/Sibeles_p.jpg',
    books: [
      { title: 'Zuvi entre os ciganos', cover: '/authors/Sibeles/zuvi_g.jpg' },
      { title: 'Caterine', cover: '/authors/Sibeles/caterine_g.jpg' },
      { title: 'As várias faces de Frei Gustav', cover: '/authors/Sibeles/frei-gustav_g.jpg' },
      { title: 'Higley', cover: '/authors/Sibeles/higley_g.jpg' },
    ],
  },
  71: {
    name: 'Tânia Redigolo',
    photo: '/authors/Tania/tania.jpg',
    books: [
      { title: 'O caminho da casa de cristal', cover: '/authors/Tania/caminho-da-casa_g.jpg' },
    ],
  },
  72: {
    name: 'Teresinha B. Penteado',
    photo: '/authors/Teresinha/Teresinha_p.jpg',
    books: [
      { title: 'A incrível jornada cósmica do ser', cover: '/authors/Teresinha/incrivel-jorn-g.jpg' },
    ],
  },
  73: {
    name: 'Valderez Escobar',
    photo: '/authors/Valderez/valderez-escobar_p.jpg',
    books: [
      { title: 'Devaneios', cover: '/authors/Valderez/devaneios_cronicas-g.jpg' },
      { title: 'Revoada de Sonhos I', cover: '/authors/Valderez/coletanea-revoada-g.png' },
      { title: 'Revoada de Sonhos II', cover: '/authors/Valderez/coletanea-revoadaII-g.png' },
      { title: 'Folhas Soltas', cover: '/authors/Valderez/folhas-soltas-g.jpg' },
      { title: 'Os macaquinhos Sapecas', cover: '/authors/Valderez/livro-macaquinhos-g.jpg' },
      { title: 'Livre como poeta', cover: '/authors/Valderez/livre-como-poeta-g.jpg' },
      { title: 'Pra frente, Brasil', cover: '/authors/Valderez/pra frente brasil_g.jpg' },
      { title: 'Pedacinhos do céu', cover: '/authors/Valderez/pedacinhos-do-ceu_g.jpg' },
      { title: 'As borboletinhas do espaço', cover: '/authors/Valderez/borboletinhas-do-espaco_g.jpg' },
      { title: 'Crônicas da madrugada', cover: '/authors/Valderez/cronicas-madrugada.jpg' },
      { title: 'Crepúsculo', cover: '/authors/Valderez/crepusculo.jpg' },
    ],
  },
  86: {
    name: 'Valter Farid',
    photo: '/authors/ValterFarid/Foto Valter.jpg',
    books: [
      { title: 'A Consulta', cover: '/authors/ValterFarid/A consulta.jpg' },
      { title: 'Orgulho', cover: '/authors/ValterFarid/dody.jpg' },
      { title: 'Um menino a procura de sua Alma', cover: '/authors/ValterFarid/Um menino a procura de sua Alma.jpg' },
    ],
  },
  74: {
    name: 'Valentina Antonini da Silva',
    photo: '/authors/Valentinaantonini/valentina-antonini_p.jpg',
    books: [
      { title: 'Orgulho', cover: '/authors/Valentinaantonini/orgulho-g.jpg' },
    ],
  },
  75: {
    name: 'Vinícius Gouvêa de Carvalho',
    photo: '/authors/Viniciuscarvalho/Vinicius.jpg',
    books: [
      { title: 'Poesia, porque não posso te dar beijinho', cover: '/authors/Viniciuscarvalho/poesia-porque_g.jpg' },
    ],
  },
  76: {
    name: 'Yuri Dinalli',
    photo: '/authors/Yuri/yuri-p.jpg',
    books: [
      { title: 'A cidade dos óculos sem Sol', cover: '/authors/Yuri/cidade-oculos-g.jpg' },
    ],
  },
  77: {
    name: 'Yuriko Yamamoto',
    photo: '/authors/Yuriko/Yuriko.jpg',
    books: [
      { title: 'Como conquistar o seu trabalho para sempre!', cover: '/authors/Yuriko/como-conquistar_g.jpg' },
    ],
  },
  78: {
    name: 'Yvone Russeau',
    photo: '/authors/Ivone/ivone.jpg',
    books: [
      { title: 'Memórias de minha cidade natal - Brotas', cover: '/authors/Ivone/memorias-de-minha_g.jpg' },
    ]
  },
}

const AuthorDetail = () => {
  const { id } = useParams();
  const author = authorData[Number(id)];

  if (!author) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#1d1d1f]">Autor não encontrado</h2>
          <p className="mt-2 text-[#86868b]">O autor que você está procurando não existe em nossa base de dados.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-16 md:pt-20">
      {/* Author Info */}
      <div className="relative min-h-[60vh] md:min-h-[85vh] flex flex-col items-center justify-center px-4">
        <div className="max-w-[980px] w-full mx-auto relative z-10">
          <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-lg fade-in">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 lg:w-2/5">
                <div className="relative pb-[100%] md:pb-0 md:h-full">
                  <img
                    className="absolute inset-0 w-full h-full object-cover md:relative"
                    src={author.photo}
                    alt={author.name}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>
              </div>
              <div className="p-6 md:p-12 w-full md:w-1/2 lg:w-3/5 flex items-center">
                <h1 className="text-2xl md:text-4xl font-semibold text-[#1d1d1f]">{author.name}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2341&q=80"
            alt="Library"
            className="w-full h-[30vh] md:h-[40vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
        </div>
      </div>

      {/* Books Section */}
      <div className="max-w-[980px] mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] mb-8 md:mb-12 text-center">
          Obras Publicadas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {author.books.map((book, index) => (
            <div key={index} className="bg-[#f5f5f7] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative pb-[133%] overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-[#0071e3] mr-2 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-[#1d1d1f] line-clamp-2">{book.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AuthorDetail;