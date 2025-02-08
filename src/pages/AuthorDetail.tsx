import React from 'react';
import { useParams } from 'react-router-dom';

const authorData = {
  1: {
    name: 'Amauri Menezes Filho',
    photo: '/src/assets/authors/Amaury/amaury.jpg',
    bio: 'Punk, dissidente; trabalha como professor, artista e marketing. Nasceu em 17/08/1987 na periferia da zona leste de São Paulo. Formação acadêmica como Tradutor e Intérprete da Língua Inglesa. Descobriu nas palavras a forma de ganhar a vida. Agitador cultural, participa intensamente de eventos e discussões de caráter político e social.',
    books: [
      { title: 'Iracemeando', cover: '/src/assets/authors/Amaury/iracemeando_g.jpg' },
    ],
  },
  2: {
    name: 'Ana Maris de Figueiredo Ribeiro',
    photo: '/src/assets/authors/Anamaris/anamaris.jpg',
    bio: 'Poetisa, escritora e historiadora, Ana Maris de Figueiredo Ribeiro nasceu em São Paulo, mas pode ser considerada natural de Angra dos Reis, pois se tornou angrense logo após o nascimento. É formada em Letras, Turismo e Patrimônio Histórico, possuindo também formação como Professora de Primeiro Segmento, Técnica em Contabilidade e cursos de Pós Graduação em Psicopedagogia e História do Brasil. Exerce atualmente a função de Coordenadora de Patrimônio, Turismo e Memória na Secretaria Municipal de Educação de Angra dos Reis. Foi colaboradora por mais de 50 edições da coluna de Cultura e História do jornal Novo Rumo, da Costa Verde; e escreveu também para o Contato Art On Line. É membro, entre outras instituições, da Associação Brasil Soka Gakkai Internacional e do Ateneu Angrense de Letras e Artes. Possui várias publicações e diversas premiações e distinções honoríficas em reconhecimento à sua relevante atuação em diversos segmentos históricos e culturais.',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/src/assets/authors/Anamaris/revoada-vol-i-g.jpg' },
      { title: 'Revoada de Sonhos II', cover: '/src/assets/authors/Anamaris/revoada-vol-ii-g.jpg' },
      { title: 'Revoada de Sonhos III', cover: '/src/assets/authors/Anamaris/revoada-de-sonhos3-g.jpg' },
      { title: 'Revoada de Sonhos IV', cover: '/src/assets/authors/Anamaris/revoada-IV_g.jpg' },
    ],
  },
  3: {
    name: 'Ary Abrantes',
    photo: '/src/assets/authors/Ary/aryabrantes.jpg',
    bio: 'Ary Abrantes Gomes é natural de Teixeiras/MG. Mudou-se para São Paulo no mês de agosto de 1961. Aposentado, dedica-se ao trabalho voluntário em atividades espirituais na Federação Espírita do Estado de São Paulo (FEESP) e no Centro Espírita Discípulos de Jesus – Bela Vista; além de participar nas atividades da área Editorial na Aliança Distribuidora e Editora de Livros Espíritas; instituições localizadas na região central da Capital paulista. Tem contribuído com o Ateneu Angrense de Letras e Artes, como integrante da Comissão Julgadora de alguns concursos literários. Ary tem na escrita uma atividade lúdica, onde exercita sua inspiração desenvolvendo textos em prosa e versos e que muitas vezes são utilizados em preleções de cunho religioso e maçônico.',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/src/assets/authors/Ary/revoada-vol-i-g (1).jpg' },
      { title: 'Revoada de Sonhos II', cover: '/src/assets/authors/Ary/revoada-vol-ii-g (1).jpg' },
      { title: 'Pausa para meditação', cover: '/src/assets/authors/Ary/pausa-para-med_resized.jpg' },
    ],
  },
  4: {
    name: 'Billy da Nove',
    photo: '/src/assets/authors/Billy/Billy.jpg',
    bio: 'Valdeli da Silva nasceu em 13 de janeiro de 1965. Escritor, poeta e compositor, começou no samba em meados de 1980, lá pelas bandas da zona leste, no Jardim Coimbra, São Nicolau, Jardim Nordeste, e também samba no trem, todas as sextas-feiras, ida e volta do Brás a Artur Alvim, posteriormente até Ferraz. Conhecido como Billy, formou com seus irmãos e amigos o Grupo Raízes do Samba, apresentando-se na época na Praça do Batuque, Praça do Samba, Rua do Samba. Depois, firmando sua bandeira do samba em Ferraz de Vasconcelos, no Morro da Nove de Julho, onde adotou definitivamente o pseudônimo Billy da Nove.',
    books: [
      { title: 'Poemas, canções & melodias', cover: '/src/assets/authors/Billy/poemas,cancoes_g.jpg' },
    ],
  },
  5: {
    name: 'Bruno Rodrigues',
    photo: '/src/assets/authors/Bruno/Bruno.jpg',
    bio: 'Estudante de Direito pela USCS, acumula um pequeno, porém já importante material literário (fruto de alguns anos de desenvolvimento). Em agosto de 2017, Bruno começou os estudos da Doutrina Espírita na FEESP. O seu amor pela literatura começou aos 11 anos quando, pela primeira vez, leu o livro "Harry Potter e a Pedra Filosofal", o primeiro dos 7 volumes da saga do "Menino que Sobreviveu", escrita pela britânica J.K. Rowling. O mundo mágico de Rowling abriu-lhe as portas para a leitura, e desde então, mesmo depois de tanto tempo, é um apaixonado pelas histórias de Hogwarts. Neste universo, ele encontrou amigos, um lar... O seu primeiro livro, "Vida em Poesia" já está em fase de finalização e será lançado, no mais tardar, em 2018. Uma versão em e-book já está sendo vendida no site da Livraria Saraiva.',
    books: [
      { title: 'Revoada de sonhos IV', cover: '/src/assets/authors/Bruno/revoada-IV_g.jpg' },
      { title: 'Em seu cálido olhar', cover: '/src/assets/authors/Bruno/em-seu-calido_g.jpg' },
    ],
  },
  6: {
    name: 'Caetano de Almeida',
    photo: '/src/assets/authors/Caetano/caetano.jpg',
    bio: 'Empresário do setor de mercado varejo, sentiu grande necessidade de buscar alicerces fora da esfera física, onde os moldes da satisfação estenderam sob os limites da plenitude da alma. Foi assim que conheceu o movimento espírita e, desde então, atua em uma das coordenações da Casa que frequenta – o Grupo Espírita Fraternidade, em São Pedro da Aldeia/RJ. Médium de inspiração e psicofonia, aderiu-se aos estudos, tornando-se pesquisador e fundando em sua cidade a Livraria Reviva, voltada à filosofia espiritualista, onde diariamente distribui mensagens e oferece acervo de obras dos diversos autores espíritas e não espíritas, todos em busca do bem-estar interior e trazendo o conhecimento da vida futura, tão ensinada por Jesus, o nosso Mestre Amado.',
    books: [
      { title: 'Sempre é tempo de amar', cover: '/src/assets/authors/Caetano/sempre e tempo-g.jpg' },
    ],
  },
  7: {
    name: 'Clauni Barbosa',
    photo: '/src/assets/authors/Clauni/Clauni.jpg',
    bio: 'Professora, apaixonada pela profissão e por seus alunos, é voluntária na ONG "Fraternidade Sem Fronteiras". Sua essência são a fé em Deus, a paixão por crianças e pela vida, e o desafio diário da prática do evangelho através do amor ao próximo como a si mesma. Sempre teve muitos sonhos, e um dia os listou e colocou na porta do guarda-roupa; conforme vai realizando, vai grifando os mesmos. Entre Borboletas e Girassóis é um grifo carregado de muita felicidade.',
    books: [
      { title: 'Entre Borboletas e Girassóis', cover: '/src/assets/authors/Clauni/entre-borboletas_resized.jpg' },
    ],
  },
  8: {
    name: 'Cyntia H. Rossini',
    photo: '/src/assets/authors/Cynthia/Cyntia.jpg',
    bio: 'Cyntia Henriques Rossini nasceu e mora em São Paulo, capital. Tem 43 anos e é mãe de dois filhos. Foi estudante na E.E.P.S.G Caetano de Campos – Aclimação, no período de 1980 – 1993, onde, na condição de estudante secundarista, atuou como militante estudantil. Graduou-se em História e Pedagogia. Possui especialização em História, Sociedade e Cultura pela PUC/SP. Realizou curso de extensão em Oficinas de História e atua como professora na rede pública estadual. Realiza pesquisas independentes na área de História, Sociologia e correlacionadas.',
    books: [
      { title: '21 Dias – Memórias de uma ocupação estudantil', cover: '/src/assets/authors/Cynthia/21 dias_g.jpg' },
    ],
  },
  9: {
    name: 'Delson Soares Silva',
    photo: '/src/assets/authors/Delson/Delson.jpg',
    bio: 'Nasceu em 1961, em Brumado/BA e mudou-se para São Paulo em 1985. É casado, tem três filhos e uma neta. O interesse pela doutrina espírita surgiu por meio da leitura de romances e os cursos que realizou a seguir expandiram seus horizontes, levando-o a abraçar os preceitos do espiritismo. Desde 2005, é voluntário no Centro Espírita Aprendizes do Evangelho de Guaianases, na zona leste de São Paulo, onde atua nos trabalhos mediúnicos, atendimento fraterno e palestras. Jesus, o amigo que ensina é o segundo livro do autor.',
    books: [
      { title: 'Jesus o amigo que ensina', cover: '/src/assets/authors/Delson/Jesus-o-amigo-que-ensina_g.jpg' },
    ],
  },
  10: {
    name: 'Dilo Guasque',
    photo: '/src/assets/authors/Dilo p/Dilo_p.jpg',
    bio: 'Dilo Mestrinho Guasque nasceu em Manaus – AM, no dia 8 de janeiro de 1932. Antes de completar 1 ano de idade, sua família mudou-se para o Rio de Janeiro,onde Dilo se formou em Administração de Empresas, constituiu família e viveu até se aposentar, em 1984. A partir de então, passou a morar na Ilha da Gipóia, em Angra dos Reis – RJ. Atualmente, vive no Rio de Janeiro. Formado também em Belas Artes, é escritor e artista plástico bastante premiado nas duas modalidades artísticas. É membro do Ateneu Angrense de Letras e Artes. Tem vários livros publicados.',
    books: [
      { title: 'De algumas coisas, um pouco', cover: '/src/assets/authors/Dilo p/de-algumas-coisas-g.jpg' },
      { title: 'Revoada de Sonhos IV', cover: '/src/assets/authors/Dilo p/revoada-IV_g.jpg' },
      { title: 'Troços, troças & trompaços', cover: '/src/assets/authors/Dilo p/trocas-trocas_g.jpg' },
      { title: 'Estórias contadas e recontadas', cover: '/src/assets/authors/Dilo p/estorias-contadas_g.jpg' },
    ],
  },
  11: {
    name: 'Dirce Biscuola de Pinho',
    photo: '/src/assets/authors/Dirce/dirce_pinho_p.jpg',
    bio: 'Nasceu em Monte Sião (MG) e mora em São Paulo desde 1970. Formada em Pedagogia pela PUC, trabalhou como professora primária durante 28 anos. Desde a adolescência desejava conhecer o Espiritismo, mas foi em 1974 que o conheceu e iniciou seu desenvolvimento mediúnico. Estudou a Doutrina Espírita nos centros espíritas Pascoal Trovelle e Obreiros da Eternidade, ambos na zona norte de SP. Trabalhou como Evangelizadora infanto-juvenil durante 18 anos. Como médium intuitiva psicografou inúmeras mensagens em poemas e prosas de diversos espíritos. Atualmente, frequenta a Sociedade de Estudos Espíritas 3 de Outubro, na Lapa, São Paulo.',
    books: [
      { title: 'Gotas de Luz', cover: '/src/assets/authors/Dirce/gotas-g.jpg' },
    ],
  },
  12: {
    name: 'Edmur De Lucca',
    photo: '/src/assets/authors/Edmur/edmur_lucca_p.jpg',
    bio: 'Edmur de Lucca nasceu no dia 19 de dezembro de 1956, em São Paulo. Originário de família católica, conheceu o espiritismo aos 15 anos, no Centro Espírita Casa da Beneficência, localizado no bairro Vila Matilde, zona leste de São Paulo. Ali iniciou seus estudos e permaneceu por cerca de trinta anos. Ao longo desse tempo, Edmur recebeu orientações do casal Vasco Pires de Freitas e Amélia Fialho de Freitas, dirigentes da instituição. Nessa ocasião, visitava semanalmente, junto aos demais trabalhadores da Casa, uma comunidade carente na Vila Nhocuné para levar orientação espiritual e ajuda material. Edmur continua estudando e trabalhando mediunicamente. Esse é o primeiro psicografado pelo Espírito Gerônimo da Paz, o qual somente se apresentou depois de terminada a escrita do livro.',
    books: [
      { title: 'Amor e ambição', cover: '/src/assets/authors/Edmur/amor-e-ambicao-g.jpg' },
      { title: 'Amor e caridade', cover: '/src/assets/authors/Edmur/amor e caridade_g.jpg' },
      { title: 'Escolhas e consequências', cover: '/src/assets/authors/Edmur/escolhas-e-consequencias_g.jpg' },
      { title: 'Mãos que semeiam luz', cover: '/src/assets/authors/Edmur/maos-luz_g.jpg' },
    ],
  },
  13: {
    name: 'Eliana da Costa R Tosi',
    photo: '/src/assets/authors/elianacosta/eliana.png',
    bio: 'Nascida em Angra dos Reis/RJ, é professora formada pela Faculdade de Filosofia Ciências e Letras de Barra Mansa, licenciada em Ciências Biológicas e aposentada. Sua relação com a escrita veio da época da adolescência, pois gostava de escrever num caderno, como se fosse um diário, os segredos de menina, foi aí que tudo começou. Atualmente é membro da União Brasileira de Trovadores de Angra dos Reis.',
    books: [
      { title: 'Sementes poéticas', cover: '/src/assets/authors/elianacosta/sementes_g.jpg' },
    ],
  },
  14: {
    name: 'Eliana Irena',
    photo: '/src/assets/authors/Eliana/eliana.jpg',
    bio: 'Nasceu em São Paulo em 14/05/1963. Educadora, formada em Pedagogia com especialização em Psicopedagogia, Neuroaprendizagem e Psicanálise. Funcionária pública, exerceu importantes funções no Centro de Referência de Assistência Social e na Diretoria Regional de Educação, na zona leste da capital paulista. Aposentou-se em 2018, após 39 anos de serviços prestados. Espírita há 28 anos, dedica parte de seu tempo às tarefas doutrinárias. Atualmente reside em Praia Grande/SP.',
    books: [
      { title: 'Iracemeando', cover: '/src/assets/authors/Eliana/iracemeando_g.jpg' },
    ],
  },
  15: {
    name: 'Eli Gonçalves',
    photo: '/src/assets/authors/Eli/eli.jpg',
    bio: 'Elizette – ou Eli Gonçalves – é pedagoga, tendo atuado na área de Educação durante trinta anos. Ao se aposentar, dedicou-se à tecelagem, às artes plásticas e à literatura. Participou de mostras individuais e coletivas, com tapetes e quadros seus. É também reikiana e praticante de Yoga, tendo participado do Curso de Capacitação, durante dois anos – na FMU e na USP, com o professor Marcos Rojo, o que lhe confere o direito de lecionar a Yoga. Publicou dois livros de Literatura Infantil "Quem disse que Papai Noel não existe?" e "O papagaio e a sereiazinha" e dois livros de poesias: "Tramas poéticas" e "Explosão de emoções". Participou de várias antologias e é membro da UBT (União Brasileira de Trovadores). Tem uma força interior tal, que, por certo, não há de parar por aí! Tem ainda uma vida prolífica pela frente!',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/src/assets/authors/Eli/revoada-vol-i-g.jpg' },
      { title: 'Revoada de Sonhos II', cover: '/src/assets/authors/Eli/revoada-vol-ii-g.jpg' },
      { title: 'Revoada de Sonhos III', cover: '/src/assets/authors/Eli/revoada-de-sonhos3-g.jpg' },
      { title: 'O Papagaio e a Sereiazinha', cover: '/src/assets/authors/Eli/livro-papagaio-g.png' },
    ],
  },
  16: {
    name: 'Eliseu Labigalini',
    photo: '/src/assets/authors/Eliseu/eliseu.jpg',
    bio: 'Nasceu no dia 31 de janeiro de 1943, em Monte Sião – MG. Quando tinha cinco anos de idade, seus pais mudaram-se para Marumbi – PR. Começou a trabalhar na adolescência, exercendo várias atividades. Fez o Curso Ginasial em Londrina – PR. Construiu sólida carreira como bancário, formando-se em Administração de Empresas e exercendo cargos de diretoria, já na idade de São Paulo. Atualmente está aposentado, mas continua trabalhando como administrador de uma clínica médica na capital paulista.',
    books: [
      { title: 'O jogo da vida!', cover: '/src/assets/authors/Eliseu/jogo-da-vida_g.jpg' },
      { title: 'Santo e José Labegalini', cover: '/src/assets/authors/Eliseu/santo-e-jose_g.jpg' },
    ],
  },
  17: {
    name: 'Elizabeth Carolina',
    photo: '/src/assets/authors/Elizabeth/elizabeth.jpg',
    bio: 'Elizabeth Carolina Mathias de Araújo nasceu em Volta Redonda (RJ), no dia 13 de janeiro de 1961. É médica formada pela Escola de Ciências Médicas de Volta Redonda, com especialização em otorrinolaringologia pelo Instituto de Assistência aos Servidores do Estado do Rio de Janeiro (IASERJ). O interesse pela leitura vem da infância, despertado pelos gibis que seu amado pai sempre lhe ofertava e dos livros de poesia que ganhava de sua querida mãe. Na escola, era sempre premiada em suas redações. Lançou a cartilha infantil O Carnaval das Letrinhas, devido ao seu grande amor pelo público infantil. Tem quatro livros infantis escritos, ainda não publicados. A poesia é a forma como encara os desafios diários da vida.',
    books: [
      { title: 'Palavras que tecem poemas', cover: '/src/assets/authors/Elizabeth/palavras-que-tecem-g.jpg' },
    ],
  },
  18: {
    name: 'Elza Fernandes',
    photo: '/src/assets/authors/Elzafernandes/elza.jpg',
    bio: 'Elza Fernandes Pereira, maranhense, Assistente Social, Profa., espírita, Palestrante nas Casas Espíritas – "Centro Espírita Paulo e Estevão", e "Casa de Francisco de Assis" – em São Paulo – SP – Esperantista – Profa. de Esperanto – Lingvo Internacia. Detentora de vasta obra literária, com 19 livros publicados e doze inéditos. Sob forma de quadras, sextilhas, sonetos, acrósticos e notáveis prosas, fala da grandiosidade do viver, do valor intrínseco de cada criatura, da necessidade do progresso moral de cada um e, essencialmente, fala de Deus, a quem devemos pedir, louvar e agradecer eternamente! Escreveu e publicou obras mediúnicas com páginas inspiradas por diversos Espíritos, entre os quais Eurípedes Barsanulfo e Thomaz Antônio Gonzaga. É octogenária, sentindo amor e gratidão pela longevidade dos seus dias e por sua nobre tarefa de levar ao público brasileiro sua maneira de pensar, sentir e agir, num expressar ameno, singular e, sem dúvida, valioso.',
    books: [
      { title: 'Reza, minha gente, reza!...', cover: '/src/assets/authors/Elzafernandes/reza.jpg' },
      { title: 'Revoada de Sonhos III', cover: '/src/assets/authors/Elzafernandes/revoada-de-sonhos3-g.jpg' },
      { title: 'Nos cristalinos braços de Jesus', cover: '/src/assets/authors/Elzafernandes/nos-cristalinos-g.jpg' },
      { title: 'Parnaso de amor', cover: '/src/assets/authors/Elzafernandes/parnaso-de-amor-g.jpg' },
      { title: 'Parnaso de amor 2', cover: '/src/assets/authors/Elzafernandes/parnasoII-g.jpg' },
      { title: 'O Cântico do "Pedir, Louvar e Agradecer"', cover: '/src/assets/authors/Elzafernandes/pedir-louvar_g.jpg' },
      { title: 'Reflexos de amor', cover: '/src/assets/authors/Elzafernandes/reflexos-g.jpg' },
      { title: 'Porque amo e sou amada', cover: '/src/assets/authors/Elzafernandes/porque-amo_g.jpg' },
      { title: 'Acrósticos da filha de Deus', cover: '/src/assets/authors/Elzafernandes/acrosticos_g.jpg' },
      { title: 'Revoada de Sonhos IV', cover: '/src/assets/authors/Elzafernandes/revoada-IV_g.jpg' },
      { title: 'Vibrantes outros contos', cover: '/src/assets/authors/Elzafernandes/vibrantes_g.jpg' },
      { title: 'Confiantes preces', cover: '/src/assets/authors/Elzafernandes/confiantes_g.jpg' },
      { title: 'Mãe, pérola de amor', cover: '/src/assets/authors/Elzafernandes/mae-perola_g.jpg' },
      { title: 'Deus, somente Deus', cover: '/src/assets/authors/Elzafernandes/deus-somente_g.jpg' },
      { title: 'Ave, amor', cover: '/src/assets/authors/Elzafernandes/ave amor_g.jpg' },
      { title: 'Amorosos contos', cover: '/src/assets/authors/Elzafernandes/amorosos-contos_g.jpg' },
      { title: 'Confiantes preces', cover: '/src/assets/authors/Elzafernandes/confiantes_g.jpg' },
      { title: 'Amor, muito amor!', cover: '/src/assets/authors/Elzafernandes/amor-muito-amor_g.jpg' },
      { title: 'Sob a luz da oração', cover: '/src/assets/authors/Elzafernandes/sob-a-luz_g.jpg' },
      { title: 'Sob o brilho do amor', cover: '/src/assets/authors/Elzafernandes/sob-o-brilho-do-amor_g.jpg' },
      { title: 'Sob o fulgor de outras amorosas realidades', cover: '/src/assets/authors/Elzafernandes/sob-o-fulgor_g.jpg' },
      { title: 'Sob a bênção da oração', cover: '/src/assets/authors/Elzafernandes/sob-a-bencao_g.jpg' },
      { title: 'Pedir, louvar e agradecer', cover: '/src/assets/authors/Elzafernandes/pedir-louvar_g.jpg' },
    ],
  },
  19: {
    name: 'Érico da Fonseca',
    photo: '/src/assets/authors/Erico/erico.jpg',
    bio: 'Angrense de nascimento, foi diplomado em Medicina, no ano de 1953, pela Faculdade Fluminense de Medicina. É Sócio Titular (fundador) do Ateneu Angrense de Letras e Artes (AALA), agraciado com a Comenda "Colar de Cunhambebe", do AALA e presidente do AALA no período de setembro de 2009 a fevereiro de 2013. Sócio Fundador da Associação Médica de Angra dos Reis, cuja presidência exerceu por dois mandatos. É Sócio da Delegacia da UBT de Angra dos Reis/RJ.',
    books: [
      { title: 'Sementes poéticas', cover: '/src/assets/authors/Erico/sementes_g.jpg' },
    ],
  },
  20: {
    name: 'Etna Lacerda',
    photo: '/src/assets/authors/etnalacerda/etna.jpg',
    bio: 'É professora e há alguns anos se descobriu escrevendo história para crianças e adolescentes. Essa descoberta lhe proporcionou momentos de muita alegria e realização. Seu objetivo é deixar uma marca de paz e de amor nos corações juvenis. Tem seis livros editados. São eles: Os Dois Franciscos (Editora FEB); Mel-mel e Sem-mel (Editora IDE; Os Duendes e um Natal Diferente (Editora IDE); Zulu, o Peixinho Orgulhoso (Editora CELD); O Girassol que não acompanhava o Sol (Editora Boa Nova).',
    books: [
      { title: 'A Fada do conto', cover: '/src/assets/authors/etnalacerda/fada-livro.png' },
    ],
  },
  21: {
    name: 'Fabiano Mendes',
    photo: '/src/assets/authors/Fabiano/Fabiano_p.jpg',
    bio: 'Nasceu em 17 de junho de 1983, em São Bernardo do Campo/SP. É casado com Suelen V C Mendes e tem dois Filhos: Henrique e Mayara. Filho de pais separados, ele e seus seis irmãos foram criados pela mãe, Dona Gil. Fabiano sempre foi sonhador e idealista. Aos sete anos, já trabalhava como vendedor de sorvete. Ao longo de sua história, cometeu equívocos, como todo ser humano e, aos trinta anos, decidiu engajar em uma mudança radical, para se tornar um homem melhor. Assim, desenvolveu "O método eu", livro que é uma verdadeira ferramenta de perseverança e sucesso existencial.',
    books: [
      { title: 'O método eu', cover: '/src/assets/authors/Fabiano/metodo-g.jpg' },
    ],
  },
  22: {
    name: 'Fábio Cirello',
    photo: '/src/assets/authors/Fabiocirello/fabio.jpg',
    bio: 'Professor e locutor, Fábio Cirello tornou-se o orador de seu grupo que semanalmente pratica o Evangelho no Lar. Ao perceber a dificuldade de entendimento dos que ouviam, passou a reescrever os capítulos de O Evangelho segundo o Espiritismo com palavras e frases mais simples de ler e entender. Assim, da prática semanal, nasceu "Simplificando Kardec para o Evangelho no Lar", para que as barreiras da linguagem não impeçam o bom espírita de aprender e compartilhar os ensinamentos de Jesus Cristo ali narrados.',
    books: [
      { title: 'Simplificando Kardec para o Evangelho no Lar', cover: '/src/assets/authors/Fabiocirello/simplificando-g.jpg' },
    ],
  },
  23: {
    name: 'Fátima Nakamatsu',
    photo: '/src/assets/authors/FAtima/fatima.jpg',
    bio: 'Nascida em São Paulo, é moradora do bairro de Itaquera, na zona leste. Sempre gostou de atividades artesanais como pintura, desenho, bordados, modelagens, origamis, assim como o cultivo de plantas em geral. É desse modo, diz ela, que recarrega as energias de que necessita para as pequenas lutas diárias.',
    books: [
      { title: 'Convite para colorir', cover: '/src/assets/authors/FAtima/convite-para-colorir_g.jpg' },
    ],
  },
  24: {
    name: 'Francisca Gomes',
    photo: '/src/assets/authors/Francisca/francisca.jpg',
    bio: 'Nasceu em Crateús-CE, em 14 de agosto de 1971, é formada em Pedagogia, especialista no Ensino da Língua Portuguesa, especialista em Atendimento Educacional Especializado, estudante de Psicologia, escritora, poetisa, idealizadora (em parceria) do grupo de escritores Os Tramaturgos e do Canal Poesia que Edifica (no YouTube), professora da sala do AEE em uma escola municipal de Fortaleza-CE e mãe de cinco gatos (Lulu, Nina, Tom, Sofia e Miguel). Obras publicadas: - A Cidade dos Animais (conto infantil), 1a edição – Editoras Ludis e Portfólio. 2015. - Assim como a Fênix (romance) - Editora IDE. 2018. - Fragmentos – Vidas, Amores e Verdades (poemas e crônicas) – Editora Travassos. 2018. - Os Tramaturgos – Poemas, Contos e Crônicas (coletânea) – Editora Travassos. 2020.',
    books: [
      { title: 'As aventuras de Zuíla', cover: '/src/assets/authors/Francisca/aventuras de zuila_g.jpg' },
    ],
  },
  25: {
    name: 'Gioconda Labecca',
    photo: '/src/assets/authors/gioconda/gioconda_p.jpg',
    bio: 'Poetisa, escritora e declamadora, Gioconda Labecca nasceu em Campanha/MG e atualmente vive em São Paulo. Possui dezenas de obras publicadas, é membro de várias instituições literárias e foi agraciada com importantes distinções de mérito cultural. Suas obras foram elogiadas por grandes vultos da literatura brasileira como Manuel Bandeira e Agripino Grieco. Gioconda foi Presidente da Academia de Letras da Grande São Paulo no período de 2008 a 2014.',
    books: [
      { title: 'Entardecer', cover: '/src/assets/authors/gioconda/entardecer-g.jpg' },
    ],
  },
  26: {
    name: 'Guerino Crepaldi',
    photo: '/src/assets/authors/Guerino/Guerino_p.jpg',
    bio: 'Neto de imigrante italiano, é casado e tem quatro filhos. Nasceu na cidade de Rafard (antigo distrito do município de Capivari), no estado de São Paulo, no dia 5 de setembro de 1934. Em 1949, já com quinze anos, mudou-se com a família para São Paulo. Trabalhou como aprendiz de encadernador, tornando-se profissional na arte de encadernar; fez o curso técnico de rádio. Depois fez o curso de televisão. Trabalhou como técnico de rádio e TV, durante quatro anos, na Telefunken do Brasil, em São Paulo. Fez o curso de eletrotécnico. Cursou durante seis meses o curso de relojoeiro. Em 1968, montou seu próprio negócio no bairro da Santa Efigênia, de compra e venda de eletroeletrônicos, trabalhando neste comércio até o ano 2.000. Depois, deixando o comércio para os filhos tomarem conta , passou a se dedicar a um produto por ele inventado: o travesseiro anti-ronco, MD. 2000, que está no mercado até os dias de hoje.',
    books: [
      { title: 'Conheça a verdade', cover: '/src/assets/authors/Guerino/conheca-g.jpg' },
    ],
  },
  27: {
    name: 'Jessé Nascimento',
    photo: '/src/assets/authors/Jesse/Jesse.jpg',
    bio: 'Nascido em Ibiraçu/ES, morou mais de 50 anos na Cidade do Rio de Janeiro e reside atualmente em Angra dos Reis. É formado em Comunicação Social pela UFRJ e trabalhou na Rádio JB AM, Jornal do Brasil e jornal O DIA, além de Assessoria de Imprensa. Sócio fundador do GLAN – Grêmio Literário de Autores Novos, em Volta Redonda. Membro da União Brasileira de Trovadores – Seção do Rio de Janeiro, da Delegacia da UBT em Angra dos Reis e Sócio Efetivo do Ateneu Angrense de Letras.',
    books: [
      { title: 'Sementes poéticas', cover: '/src/assets/authors/Jesse/sementes_g.jpg' },
    ],
  },
  28: {
    name: 'João Galvani',
    photo: '/src/assets/authors/Joaogalvani/joao-galvani_p.jpg',
    bio: 'Escritor, músico e artista cênico, João Galvani nasceu em Marília/SP. Aos 20 anos de idade, mudou-se para o Rio de Janeiro. Fez Escola de Arte Dramática, Curso de Edição e Editoração Independente, e participou de algumas antologias de poesias. Tendo iniciado suas atividades literárias aos quinze anos de idade, é autor de três romances, alguns contos, peças de teatro e diversas poesias. Seus escritos permanecem inéditos, aguardando a oportunidade de serem publicados. Colaborou com uma poesia no livro Pai um amigo, um Herói, da Lítteris Editora, no ano de 2001. No segmento musical, Galvani é violonista e já fez parceria em dupla sertaneja. Como artista cênico, durante duas décadas atuou nos palcos de teatro. É casado, tem duas filhas (Suzy Mara e Kátia Cilene) e dois netos (Vinícius e Maria Eduarda).',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/src/assets/authors/Joaogalvani/revoada-vol-I-g.jpg' },
    ],
  },
  29: {
    name: 'João Mainsel',
    photo: '/src/assets/authors/joaomainsel/joao-mainsel_p.jpg',
    bio: 'É casado e tem dois filhos. Nasceu em 1976, em Malange-Angola, e cresceu no Huambo, onde passou os primeiros dezesseis anos de sua vida. Licenciou-se em Ciências Sociais, na especialidade de Ciência Política e Administrativa, pela Universidade Aberta de Lisboa; pós-graduou-se em Administração com ênfase em Gestão pela Fundação Getúlio Vargas no Brasil; e fez o seu Mestrado e Doutorado em Administração de Empresas pela Florida Christian University, nos Estados Unidos da América. Nos últimos quinze anos, tem atuado como empresário e empreendedor e dedica-se à pesquisa aplicada, atividade que tem conciliado com o ramo empresarial.',
    books: [
      { title: 'A Travessia', cover: '/src/assets/authors/Joaomainsel/a-travessia-g.jpg' },
      { title: 'A Travessia – livro 2', cover: '/src/assets/authors/Joaomainsel/travessia-2_g.jpg' },
    ],
  },
  30: {
    name: 'Joelmir Carvalho',
    photo: '/src/assets/authors/sem_foto.jpg',
    bio: 'Nasceu em São Caetano do Sul – SP, em 1977. Mudou-se definitivamente para Santa Rita de Caldas em 1982. Formou-se em Jornalismo pela Universidade de Pouso Alegre − MG, sendo pós-graduado pela Universidade Federal de Itajubá − MG. É um dos fundadores do Projeto Resgate. Atualmente exerce o cargo de Gestor Educacional do centro de ensino da Rede Nowtech.',
    books: [
      { title: 'Santa Rita de Caldas', cover: '/src/assets/authors/Joemircarvalho/santa-rita-g.jpg' },
    ],
  },
  31: {
    name: 'Jonas Barros',
    photo: '/src/assets/authors/Jonasbarros/jonas-barros_p.jpg',
    bio: 'Nasceu em 30/12/1968, na cidade de São João/PE e ainda criança mudou-se com a família para São Paulo. A poesia e a música sempre fizeram parte da sua vida. Em 2006, lançou o seu primeiro livro de versos, intitulado Histórias de Vida. Jonas considera a escrita um hobby maravilhoso, que o conecta com a mais sensível das emoções: sentir a presença de Deus em suas inspirações. Algumas de suas poesias foram musicadas, dando mais vida às suas criações literárias. Este livro, tal como o primeiro, é um trabalho despretensioso, elaborado de maneira simples (como é o seu caráter e a sua vida), pois Jonas Barros anda por aí, distribuindo sorrisos e registrando em poesias a sua mais pura essência.',
    books: [
      { title: 'Mistérios e segredos', cover: '/src/assets/authors/Jonasbarros/misterios-e-segredos-g.jpg' },
      { title: 'Revoada de Sonhos IV', cover: '/src/assets/authors/Jonasbarros/revoada-IV_g.jpg' },
      { title: 'Versos soltos', cover: '/src/assets/authors/Jonasbarros/versos soltos_g.jpg' },
    ],
  },
  32: {
    name: 'Jorge Ferreira',
    photo: '/src/assets/authors/Jorge/Jorge.jpg',
    bio: 'Nasceu no dia 16 de janeiro de 1963 na cidade de São Paulo, capital. Casado com Ionara, é pai de cinco filhos: Jéssica, Jorge, Yuri, Raíssa e Rafael. Iniciou sua caminhada no espiritismo ainda jovem, mas só em idade madura sua sensibilidade mediúnica floresceu e, aos 54 anos, a espiritualidade se fez presente, quando psicografou este primeiro livro de forma totalmente inconsciente, levando três anos para concluir a obra. Já está nos planos de seus mentores um segundo livro para psicografar.',
    books: [
      { title: 'O Início', cover: '/src/assets/authors/Jorge/O_inicio_g.jpg' },
    ],
  },
  33: {
    name: 'José Célio da Silva',
    photo: '/src/assets/authors/sem_foto.jpg',
    bio: 'Nasceu em Santa Rita de Caldas, em 1956. Bacharel pela Faculdade de Direito do Sul de Minas e técnico em Telecomunicações, trabalhou em várias emissoras de rádio e televisão. É um dos fundadores do Projeto Resgate. Atualmente exerce o cargo de Técnico em Telecomunicações da Rede Nowtech.',
    books: [
      { title: 'Santa Rita de Caldas', cover: '/src/assets/authors/Jose/santa-rita-g.jpg' },
    ],
  },
  34: {
    name: 'José Edison Bergamin',
    photo: '/src/assets/authors/Joseedson/jose-edson-bergamin_p.jpg',
    bio: '',
    books: [
      { title: 'Pescadores de Amor', cover: '/src/assets/authors/Joseedson/pescadores-g.jpg' },
    ],
  },
  35: {
    name: 'Katia Bueno',
    photo: '/src/assets/authors/Katia/katia.jpg',
    bio: 'Nascida em São Paulo, em 12 de janeiro de 1944, tem formação em Letras, Pedagogia e Biblioteconomia. Fez Mestrado e Doutorado na Faculdade de Filosofia, Ciências e Letras da Universidade de São Paulo. Teve suas faculdades mediúnicas despontadas na adolescência e iniciou estudos doutrinários na FEESP. Tendo concluído os Cursos Teóricos e de Prática Mediúnica, dedicou-se ao trabalho de assistência espiritual, atuando também na Área de Ensino. Em 2013, recebeu dos Amigos Espirituais a orientação de dedicar-se também à psicografia, serviço este prestado no Centro Espírita Zilda Gama no contato com Espíritos de entes queridos que trazem mensagens consoladoras a seus familiares e amigos.',
    books: [
      { title: 'Vozes do céu', cover: '/src/assets/authors/Katia/vozes-do-ceu_resized.jpg' },
    ],
  },
  36: {
    name: 'Kátia Regina de Oliveira',
    photo: '/src/assets/authors/Katiaregina/katia-regina_p.jpg',
    bio: 'Formada em pedagogia, Kátia Regina de Oliveira nasceu no município de São Paulo, no dia 26 de outubro. Começou a frequentar a Casa Espírita Deus Cristo e Caridade como assistida e logo foi convidada para fazer parte dos trabalhos mediúnicos ali realizados. Iniciou seus estudos espirituais na Casa Espírita Irmã Jacira, onde teve despertada a faculdade da psicografia. Com o tempo, começou a receber orientações de amigos espirituais para escrever romances. Hoje, dedica três dias da semana para os trabalhos psicográficos e já conta com um bom número de histórias escritas, esperando o momento de serem publicadas. Quando se Perde a Inocência é o seu romance de estreia.',
    books: [
      { title: 'Quando se perde a inocência', cover: '/src/assets/authors/Katiaregina/inocencia-g.jpg' },
    ],
  },
  37: {
    name: 'Lauriano dos Santos',
    photo: '/src/assets/authors/LaurianoSantos/lauriano-santos_p.jpg',
    bio: 'O poeta, escritor e orador Lauriano dos Santos nasceu no dia 22 de outubro de 1944, em Registro (SP). Funcionário público aposentado, foi eleito vereador por dois mandatos consecutivos em sua cidade natal, tendo assumido a presidência da Câmara Municipal no biênio 1977/79. É licenciado em Letras pela Faculdade de Filosofia, Ciências e Letras de Registro. Foi Diretor Administrativo da Prefeitura Municipal de Cananeia do início de 1993 ao final de 1996. Foi Assessor Legislativo da Câmara Municipal de Registro nos períodos de 1991 a 1992 e 1997 a 2000. Ocupa, atualmente, o cargo de Chefe de Gabinete da Câmara Municipal de Registro. Na área literária, Lauriano possui vários livros publicados, tanto em prosa quanto em versos.',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/src/assets/authors/LaurianoSantos/coletanea-revoada-g.png' },
      { title: 'Revoada de Sonhos II', cover: '/src/assets/authors/LaurianoSantos/coletanea-revoadaII-g.png' },
      { title: 'Revoada de Sonhos III', cover: '/src/assets/authors/LaurianoSantos/revoada-de-sonhos3-g.jpg' },
      { title: 'Pense comigo sobre a Bíblia', cover: '/src/assets/authors/LaurianoSantos/pense-comigo-g.jpg' },
      { title: 'Recanto do poeta', cover: '/src/assets/authors/LaurianoSantos/recanto-do-poeta-g.jpg' },
      { title: 'Noções evangélicas', cover: '/src/assets/authors/LaurianoSantos/nocoes-evang-g.jpg' },
      { title: 'Jesus: messias ou Deus?', cover: '/src/assets/authors/LaurianoSantos/jesus-messias_g.jpg' },
      { title: 'Por quê?', cover: '/src/assets/authors/LaurianoSantos/por que_g.jpg' },
      { title: 'Indagações oportunas', cover: '/src/assets/authors/LaurianoSantos/indagacoes-oportunas_g.jpg' },
    ],
  },
  38: {
    name: 'Lélia Miguel M de Lima',
    photo: '/src/assets/authors/Lelia/lelia.jpg',
    bio: 'Filha de libaneses, nasceu em Angra dos Reis onde vive até hoje. Comerciante de moda feminina, promoveu vários desfiles beneficentes para a ORAR – Organização Assistencial de Angra dos Reis – nos quais se apresentaram diversas modelos conhecidas internacionalmente. O gosto pelo saber levou-a ao estudo de inglês e espanhol, mas, principalmente, ao piano – paixão de uma vida inteira. É membro da União Brasileira dos Trovadores de Angra dos Reis. Foi premiada algumas vezes em concursos literários.',
    books: [
      { title: 'Sementes poéticas', cover: '/src/assets/authors/Lelia/sementes_g.jpg' },
    ],
  },
  39: {
    name: 'Lina Calil',
    photo: '/src/assets/authors/Linacalil/lina-calil_p.jpg',
    bio: 'Nasceu numa sexta-feira 13, em pleno carnaval do Rio de Janeiro. Criada em Nilópolis, graduou-se em Odontologia pela UFF. Especializou-se em Odontopediatria e fez a pós-graduação em Arteterapia, na Cândido Mendes, onde apresentou um trabalho monográfico que uniu as áreas da Saúde, Educação e Arte, intitulado: "Música, Um Caminho para a Saúde e Educação de Crianças, Jovens e Adultos". Dedicou-se à sua clínica particular e a outras, além de trabalhar por 30 anos no Serviço de Assistência Escolar de Nilópolis. Em 1982, recebeu o "Diploma de Bons Serviços Prestados", pelo governador Chagas Freitas. Aos sete anos, ingressou na Academia Brasileira de Artes Mário Mascarenhas, conveniada com o CBM, para estudar Canto, Teoria Musical e Acordeom. Depois vieram o desenho e a pintura, pelo SESC. Em meados dos anos 90, mudou-se para Angra dos Reis, onde foi solista contralto e vice-presidente do Coral da Cidade. Foi julgadora do I Festival de Música de Angra e expôs desenhos e pinturas na Casa da Cultura. Atualmente participa de Seminários, Conferências Municipais, Encontros de Educação Sanitária e Projetos itinerantes, além de colaborar com trabalhos caritativos em todo o país. Suas histórias e poemas dão continuidade ao legado do pai, poeta JF, que tinha uma visão romântica da vida.',
    books: [
      { title: 'Revoada de Sonhos II', cover: '/src/assets/authors/Linacalil/coletanea-revoadaII-g.png' },
      { title: 'Revoada de Sonhos III', cover: '/src/assets/authors/Linacalil/revoada-de-sonhos3-g.jpg' },
    ],
  },
  40: {
    name: 'Lívia Fiedler',
    photo: '/src/assets/authors/LiviaFieldler/livia-fiedler_p.jpg',
    bio: 'Nasceu em São Paulo, Capital, em 1992. É acadêmica do curso de Psicologia. Participou das coletâneas literárias Amores (im)possíveis, Ponto reverso e Utopia, todas da Andross Editora.',
    books: [
      { title: 'A Guardiã do Fogo', cover: '/src/assets/authors/LiviaFieldler/guardia-g.jpg' },
    ],
  },
  41: {
    name: 'Luana S. de A. Esposito',
    photo: '/src/assets/authors/Luana/Luana.jpg',
    bio: 'Autora de várias obras, nasceu em São Paulo. É psicopedagoga, terapeuta floral, artesã com símbolos ciganos em sua descendência familiar e espírita há mais de 30 anos. Atual Presidente do Centro Espírita Kardecista Barracão de Luz e Cura, atua mediunicamente em psicofonia e psicografia nos atendimentos da instituição espírita.',
    books: [
      { title: 'Barracão de luz', cover: '/src/assets/authors/Luana/barracao_g.jpg' },
    ],
  },
  42: {
    name: 'Luiz Sass',
    photo: '/src/assets/authors/Luizsass/luiz-sass_p.jpg',
    bio: 'Luiz Henrique Sass, nascido em 1931 numa fazenda do interior do Estado de São Paulo, vindo de uma família que conheceu o espiritismo por meio de Cairbar Schutel. Frequentou escola rural em Falcão Filho. Teve o privilégio de aos doze anos de idade, aprender e iniciar o ofício de alfaiate, trabalho que exerceu até oitenta anos de idade. Em Novembro de 1987, fundou o Centro Espírita Casinha de Luz, no bairro do Jaraguá em São Paulo. Este livro representa a sua intenção em homenagear esta singela Casinha, fruto de árduo trabalho a vinte e cinco anos.',
    books: [
      { title: 'Uma Casinha de Luz', cover: '/src/assets/authors/Luizsass/uma-casinha-g.jpg' },
    ],
  },
  43: {
    name: 'Luiza Grigini Martins',
    photo: '/src/assets/authors/Luiza/luiza_p.jpg',
    bio: 'Nasceu no interior do Paraná e aos quinze anos de idade mudou-se para São Paulo. Descobriu a mediunidade quando criança e desde então lida com conselhos e revelações de seus mentores espirituais, que expressam pensamentos e mensagens por meios telepáticos e pela psicografia. É a Yalorixá do Núcleo Espiritual "Tenda Espiritualista de Umbanda Arcanjos Miguel, Gabriel e Rafael", onde conta com centenas de médiuns e seguidores. A psicografia entrou em sua vida como um desafio. A primeira obra, "Senzala do Espaço", pelo Espírito Antonio Benedito, começou a surgir em 2002.',
    books: [
      { title: 'Rosario dos sete misterios', cover: '/src/assets/authors/Luiza/rosario-dos-sete-misterios_g.jpg' },
    ],
  },
  44: {
    name: 'Luiza Viegas Rathsam',
    photo: '/src/assets/authors/sem_foto.jpg',
    bio: 'Luiza Viegas Rathsam nasceu em 1996 e estuda no Colégio São Domingos – SP. Escreveu esta história quando tinha oito anos. Ela gosta de ler, andar a cavalo e viajar. No futuro, pretende ser "treinadora de cachorros". Gosta de músicas e seu instrumento preferido é "bateria".',
    books: [
      { title: 'O Peru Matraca', cover: '/src/assets/authors/Luizaviegas/peru-matraca-g.jpg' },
    ],
  },
  45: {
    name: 'Márcia Chavan Guasque',
    photo: '/src/assets/authors/Marcia/Marcia_p.jpg',
    bio: 'Moradora da Barra desde o ano de 1980, Marcia Guasque morava anteriormente na Tijuca, ambos os bairros no Rio de Janeiro. Trabalhou como Assistente Executiva por trinta anos e, ao se aposentar, decidiu procurar um hobby prazeroso, optando por ser fotógrafa, pois desde adolescente se interessa por fotografia. Em 2016, mais precisamente a partir de setembro, resolveu colocar em prática a realização desse sonho. Fez cursos como a ABAF e Ateliê da Imagem e Cultura e, neste ano de 2017, lança o seu livro de estreia "Da Barra à Ilha da Gipoia".',
    books: [
      { title: 'Da Barra à Ilha da Gipoia', cover: '/src/assets/authors/Marcia/da-barra-g.jpg' },
    ],
  },
  46: {
    name: 'Marcus Vinicius Kray',
    photo: '/src/assets/authors/MArcus/marcus_p.jpg',
    bio: 'Marcus Vinicius Kray nasceu em Santo André no dia 02/05/1996, vivendo desde então na zona leste de São Paulo. Escreve poesias, romances e roteiros em busca de profissionalizar o seu trabalho aliando sua escrita com fotografias, vídeos e músicas em projetos audiovisuais de curta metragens, videoclipes, documentários e afins. Estudante de Rádio TV e Internet, cursou durante certo período cursos como Ciências Sociais e Jornalismo. Atualmente vem atuando como freelancer no mercado videográfico. Sua paixão pela literatura e filosofia transparecem em suas poesias de caráter muitas vezes metafórico e enigmático. Nesta participação na Coletânea Revoadas de Sonhos - Vol. IV, buscou trazer as poesias que mais enaltecem suas particularidades ideológicas e poéticas.',
    books: [
      { title: 'Revoada de sonhos IV', cover: '/src/assets/authors/MArcus/revoada-IV_g.jpg' },
    ],
  },
  47: {
    name: 'Maria Antônia dos Santos',
    photo: '/src/assets/authors/Mariaantonia/maria-antonia_p.jpg',
    bio: 'Maria Antonia dos Santos Marcolino, nasceu na cidade de São Paulo e atualmente reside em São Sebastião no Litoral Norte.Trabalha como Professora especialista na Educação Inclusiva da Rede Municipal de Ensino e participa do Projeto de Musicoterapia LM Mensageiros do bem, com o objetivo de levar alegria e harmonização através das Mensagens de Jesus, Palestras Cantadas e Poesias, sob a luz da Doutrina Espírita.',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/src/assets/authors/Mariaantonia/coletanea-revoada-g.png' },
      { title: 'Revoada de Sonhos III', cover: '/src/assets/authors/Mariaantonia/revoada-de-sonhos3-g.jpg' },
    ],
  },
  48: {
    name: 'Maria Helena U C da Fonseca',
    photo: '/src/assets/authors/Mariahelena/maria-helena_p.jpg',
    bio: 'Maria Helena Ururahy Campos da Fonseca é Acadêmica Fundadora do Ateneu Angrense de Letras e Artes e da Delegacia da União Brasileira de Trovadores (UBT) de Angra dos Reis, onde continua participando ativamente. Presidiu o Ateneu Angrense de Letras e Artes por dezesseis anos. Pertence, ainda, a várias outras instituições culturais. Integrou o Conselho de Cultura de Angra dos Reis de 1978 a 1991. Em 2007, retornou ao Conselho de Cultura, representando a setorial de Literatura. Professora efetiva do Estado do Rio de Janeiro e do Município do Rio de Janeiro na área de Língua e Literatura Portuguesa. Exerceu o Magistério por 47 anos. Durante a trajetória profissional dedicada ao Magistério, participou de cursos de especialização nas áreas pedagógica, linguística, literária e cultural. No momento, aposentada, continua atualizando-se. Participa do Curso de Extensão Cultural da Mulher, no Clube Militar do Rio de Janeiro. Reside em Angra dos Reis. É angrense de nascimento e de coração.',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/src/assets/authors/Mariahelena/coletanea-revoada-g (1).png' },
      { title: 'Revoada de Sonhos II', cover: '/src/assets/authors/Mariahelena/coletanea-revoadaII-g.png' },
      { title: 'Sementes poéticas', cover: '/src/assets/authors/Mariahelena/sementes_g.jpg' },
    ],
  },
  49: {
    name: 'Maria José M Dias',
    photo: '/src/assets/authors/Mariajose/maria_jose.jpg',
    bio: 'Angrense, professora aposentada, morou em Petrópolis e estudou na Universidade Católica de Petrópolis – PUC. Desenvolveu o gosto pela poesia desde a época da infância. Formada em Pedagogia, Filosofia, Psicologia, Didática e Educação Artística. Pós-graduada pela UFRJ e UFF em Psicopedagogia, Planejamento e Técnicas de Ensino. É artista plástica, poetisa e trovadora. Membro do Ateneu Angrense de Letras e Artes e da União Brasileira de Trovadores de Angra dos Reis. Possui várias premiações em concursos de pintura, poesia e trovas.',
    books: [
      { title: 'Sementes poéticas', cover: '/src/assets/authors/MariaJose/sementes_g.jpg' },
    ],
  },
  50: {
    name: 'Maria Manuela Corujo',
    photo: '/src/assets/authors/MariaManuela/Maria_Manuela_p.jpg',
    bio: 'Atual vice-presidente da Associação Beneficente Fraternitas Nosso Lar, Maria Manuela Corujo nasceu em Angola, quando o país ainda era Colônia Portuguesa, e chegou ao Brasil com apenas 11 anos, quando foi para um colégio interno católico no Rio de Janeiro. Nessa época, começou a ouvir "vozes", que ela chamava de "Anjos", devido à sua formação católica. Com o tempo, aprendeu que falava com seu mentor espiritual, Efigênio, que passou a lhe ditar mensagens, pedindo a ela para divulgá-las.',
    books: [
      { title: 'Gabriel', cover: '/src/assets/authors/MariaManuela/gabriel_g.jpg' },
    ],
  },
  51: {
    name: 'Marina Cristaldo',
    photo: '/src/assets/authors/Marinacristaldo/marina-cristaldo_p.jpg',
    bio: 'Paulistana de alma e coração, nasceu em Julho de 1992. Desde nova (porque continua pequena) é apaixona por livros e teatro, dos mais diferentes gêneros e autores. Esse amor lhe rendeu um prêmio, aos seis anos de idade: Escrever um livro sobre ecologia em parceria com o escritor e cartunista Ziraldo. Desde então começou a escrever de tudo um pouco. Crônicas, contos, poesias; sem nunca sair da temática cotidiana, mostrando um pouco do que vivencia e sente. Agora, dá seus primeiros passos como autora de fato, para um dia ter um best-seller para chamar de seu!',
    books: [
      { title: 'Revoada de Sonhos III', cover: '/src/assets/authors/Marinacristaldo/revoada-de-sonhos3-g.jpg' },
    ],
  },
  52: {
    name: 'Marzio Labigalini',
    photo: '/src/assets/authors/Marzio/marzio.jpg',
    bio: 'Descendente, por parte de pai, de italianos e por parte de mãe, de indígenas (bugres) e portugueses, nasceu em junho de 1962 em Jacutinga – MG, e foi registrado como Márcio Roberto, em Monte Sião – MG. Na adolescência participou de alguns festivais de música no sul de Minas, quando estudava engenharia em Itajubá-MG. No período entre a adolescência e o casamento, compôs diversas poesias e algumas músicas. Em 1992 passou em concurso para engenheiro na Unicamp em Campinas – SP, onde está até a presente data. A partir de 2015, retornou à arte de escrever e compor músicas. O poeta se escondeu por cerca de 20 anos, até que a mente reclamou do poeta dormente. Amadurecido, ressurgiu mais ácido e contemplativo, admirado e incrédulo com o poeta que havia.',
    books: [
      { title: 'Pra poucos olhos...', cover: '/src/assets/authors/Marzio/pra_poucos_olhos_g.jpg' },
    ],
  },
  53: {
    name: 'Meire Márcia Marins',
    photo: '/src/assets/authors/Meire/meire-marins_p.jpg',
    bio: '',
    books: [
      { title: 'Pescadores de Amor', cover: '/src/assets/authors/Meire/pescadores-g.jpg' },
    ],
  },
  54: {
    name: 'Neusa Aparecida M Maia',
    photo: '/src/assets/authors/Neusa/neusa.jpg',
    bio: 'Membro do Ateneu Angrense de Letras e Artes e da União Brasileira de Trovadores (Delegacia de Angra dos Reis), é angrense de nascimento. Professora de Língua Portuguesa, as palavras a encantaram e levaram-na às Letras, à Literatura… Tornou-se sonetista e trovadora. Agraciada com a Medalha Cunhambebe, possui várias premiações em concursos literários.',
    books: [
      { title: 'Sementes poéticas', cover: '/src/assets/authors/Neusa/sementes_g.jpg' },
    ],
  },
  55: {
    name: 'Nicholas Augustus Grigoragi',
    photo: '/src/assets/authors/Nicholas/Nicholas Grigoragi_p.jpg',
    bio: 'Descendente de italianos da região da Calábria, nasceu no dia 2 de janeiro de 1981, em Guarulhos/SP. Caçula de cinco irmãos, ele e uma irmã foram criados pela avó paterna, após o falecimento de sua mãe. Umbandista, a avó o criou com muita reza, benzimentos e banhos de ervas. Atualmente Nicholas é Sacerdote de Umbanda Sagrada, dirigente e fundador do Grupo de Umbanda Sagrada Casa de Ogum, localizado na região da Mooca, em São Paulo, juntamente com sua companheira /esposa, seus amigos e irmãos de fé. Com a ajuda de seus guias e mentores espirituais, realiza o sonho de trazer a público sua primeira obra, cuja escrita contou com a ajuda da guardiã e mentora espiritual Pombagira Menina.',
    books: [
      { title: 'Diário de uma pombagira menina', cover: '/src/assets/authors/Nicholas/diario-de-uma_g.jpg' },
    ],
  },
  56: {
    name: 'Nívia Ribeiro da Silva Ferreira',
    photo: '/src/assets/authors/Nivia/nivia_p.jpg',
    bio: 'Nívia Ribeiro da Silva Ferreira é natural de Esmeraldas/MG. Graduada em Letras pela Pontifícia Universidade Católica de Minas Gerais, atua, a mais de vinte anos, como professora nas Redes Municipais de Esmeraldas e Betim/MG. Ama o universo literário desde muito cedo, pois nasceu na zona rural e aprendeu com o pai, professor leigo, a ver nos livros o encantamento da vida! Eles também constituem uma oportunidade inesgotável de absorção de cultura. Acredita que a leitura tem o poder de transformar a realidade das pessoas e, principalmente, pode contribuir em transportar as crianças para a dimensão da magia!',
    books: [
      { title: 'Viva Gabi!', cover: '/src/assets/authors/Nivia/Viva-gabi-g.jpg' },
    ],
  },
  57: {
    name: 'Oscar Jorge Moysés',
    photo: '/src/assets/authors/OscarJorge/oscar-jorge.jpg',
    bio: 'Nasceu no dia 3 de setembro de 1942, em Porto Alegre/RS. Ainda muito pequeno mudou-se para São Paulo e, há 10 anos, reside nos municípios de São Caetano do Sul e Piracaia, ambos pertencentes ao estado de São Paulo. Economista com extensão em Administração Financeira, trabalhou em grandes empresas na capital paulista. Atualmente aposentado, dedica-se, principalmente, à música. É formado em acordeon desde os 20 anos de idade. Hoje, Oscar e a esposa Maria Salete formam um duo de acordeonistas.',
    books: [
      { title: 'Os gêmeos', cover: '/src/assets/authors/OscarJorge/os-gemeos_g.jpg' },
    ],
  },
  58: {
    name: 'Poliana Coelho Barbosa Fernandes',
    photo: '/src/assets/authors/Poliana/poliana-p.jpg',
    bio: 'Poliana é profissional de Marketing e Coaching. Pós-graduada em Gestão de Pessoas e Projetos e em Gestão Empresarial com Ênfase em Saúde. Seu maior orgulho é ser mãe de Giovana e Paloma, filhas de um casamento construído com amor e fé. Tem imensa gratidão à família. Por tudo que tem e é dá graças aos seus pais e à irmã. Sua maior dedicação: ser agente da Pastoral Familiar. Sua grande alegria é poder evangelizar ao mesmo tempo em que está sendo evangelizada.',
    books: [
      { title: 'Luz de outono', cover: '/src/assets/authors/Poliana/luz-outono-g.jpg' },
    ],
  },
  59: {
    name: 'Rita Lopes',
    photo: '/src/assets/authors/RitaLopes/rita-lopes_p.jpg',
    bio: 'Rita de Cássia Lopes Dardengo prefere assinar seus trabalhos como Rita Lopes. Poetisa, contista, musicista e artista plástica é membro do Ateneu Angrense de Letras e Artes, e da UBT-União Brasileira de Trovadores, seção Angra dos Reis. Rita nasceu em Angra dos Reis, no sul do Estado do Rio de Janeiro. Seu amor pela Literatura começou na adolescência. Com 13 anos escreveu seu primeiro poema. É formada em Pedagogia com pós-graduação em Ensino de Artes e Educação Musical. Porém, seu interesse maior sempre foi a Literatura. Também estudou dança, música, desenho e pintura. É casada com Wemerson Lins Dardengo, com quem tem um casal de filhos. Possui trabalhos publicados em antologias, jornais, Revistas do AALA e na Internet. É ex-integrante do Coral da Cidade de Angra dos Reis, onde começou seus estudos de canto com o saudoso Maestro Gerard Galloway. Tem participado de concursos literários, tendo sido em muitos deles premiada. Participa também de exposições de pinturas, coletivas e individuais.',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/src/assets/authors/RitaLopes/coletanea-revoada-g.png' },
      { title: 'Revoada de Sonhos II', cover: '/src/assets/authors/RitaLopes/coletanea-revoadaII-g.png' },
      { title: 'Revoada de Sonhos III', cover: '/src/assets/authors/RitaLopes/revoada-de-sonhos3-g.jpg' },
    ],
  },
  60: {
    name: 'Roberta Teixeira da Silva',
    photo: '/src/assets/authors/roberta/roberta_p.jpg',
    bio: 'Nasceu em 1979 em São Paulo. É funcionária pública e Bacharel em Direito. Nasceu em uma família espiritualista e desde a infância descobriu sua ligação com o Espiritismo, por meio da mediunidade de audiência. Atualmente trabalha com a psicografia e tem dois romances espíritas publicados, além de outras obras que estão sendo psicografadas. Roberta segue estudando as obras de Allan Kardec que, segundo seus conceitos, constitui a base doutrinária para o exercício de qualquer tarefa espírita, sob a égide do Evangelho de Cristo.',
    books: [
      { title: 'Revoada de sonhos IV', cover: '/src/assets/authors/roberta/revoada-IV_g.jpg' },
    ],
  },
  61: {
    name: 'Roberto de Carvalho',
    photo: '/src/assets/authors/RobertoCarvalho/roberto-de-carvalho_p.jpg',
    bio: 'Nasceu no dia 2 de março de 1964, em Liberdade/MG e mora em São Paulo. Poeta e escritor várias vezes premiado, é membro da Academia Guanabarina de Letras, do Ateneu Angrense de Letras e Artes e da Academia de Letras da Grande São Paulo. Escritor de sensível inspiração, possui obras próprias e mediúnicas, sendo seus romances espíritas publicados pela Editora Aliança e editora Boa Nova. Sua lavra literária engloba: poesias, romances, biografias, artigos jornalísticos, infanto-juvenis, contos e crônicas. Por sua atuação no campo literário recebeu as seguintes distinções culturais: Comenda do Mérito Cultural Brasil dos Reis. Láurea Cultural Colar de Cunhambebe. Moção de Aplausos pela Câmara Municipal de Angra dos Reis, além de premiações em diversos concursos literários de abrangência nacional.',
    books: [
      { title: 'Celebração', cover: '/src/assets/authors/RobertoCarvalho/celebracao-g.jpg' },
      { title: 'Quando a vida convida', cover: '/src/assets/authors/RobertoCarvalho/quando-a-vida_g.jpg' },
      { title: 'Andarilhando', cover: '/src/assets/authors/RobertoCarvalho/andarilhando_g.jpg' },
      { title: 'A cotovia dos pinheiros', cover: '/src/assets/authors/RobertoCarvalho/cotovia-dos-pinheiros_g.jpg' },
      { title: 'Vale dos sonhadores', cover: '/src/assets/authors/RobertoCarvalho/vale-dos-s_g.jpg' },
    ],
  },
  62: {
    name: 'Rodrigo Alves',
    photo: '/src/assets/authors/Rodrigo/Rodrigo_p.jpg',
    bio: 'Nascido na madrugada do dia 25 de abril de 1983, na cidade de Ribeirão Pires - SP. Amante dos compositores de samba de outrora e admirador confesso de seus contemporâneos. O sambista Rodrigo Alves é compositor integrante do extenso e belo repertório do Terreiro de Compositores de São Paulo e também faz parte da rica discografia da Academia do Samba SP. Atualmente está em fase de término de seu primeiro CD, intitulado: Distribuir Felicidade.',
    books: [
      { title: 'Lua de vinho', cover: '/src/assets/authors/Rodrigo/lua-de-vinho-g.jpg' },
    ],
  },
  63: {
    name: 'Romildo Labigalini',
    photo: '/src/assets/authors/Romildo/romildo.jpg',
    bio: 'Com formação em Direito, nasceu em 11 de setembro de 1938, em Jacutinga-MG, e mudou-se em 1946 para Monte Sião-MG. Sobre a arte de escrever, começou tarde suas "escrivinhanças", principalmente motivadas pelo Jornal Monte Sião, o qual, ao lado do Ugo Labegalini, foi (e ainda é) um grande incentivador. Com a chegada da internet, adaptou-se ao novo mundo virtual e publica algumas de suas crônicas no facebook. Cronicâncias é o seu primeiro livro.',
    books: [
      { title: 'Cronicâncias', cover: '/src/assets/authors/Romildo/cronicancias_resized.jpg' },
    ],
  },
  64: {
    name: 'Rosangela Bonizolli',
    photo: '/src/assets/authors/Rosangela/Rosangela_p.jpg',
    bio: 'A autora é pedagoga, formada pela Universidade de São Paulo, pós-graduada em Psicopedagogia e Docência do Ensino Superior. Trabalhou em sala de aula na rede pública estadual e municipal, vindo a aposentar-se na rede municipal em São Paulo, onde nasceu e vive até os dias atuais. Participou de diversos cursos de formação, atualização e Congressos na área de Educação. “A libertação de Susana” é seu livro de estreia.',
    books: [
      { title: 'A libertação de Susana', cover: '/src/assets/authors/Rosangela/libertacao-de-susana_g.jpg' },
      { title: 'Florescer', cover: '/src/assets/authors/Rosangela/florescer_g.jpg' },
    ],
  },
  65: {
    name: 'Rose Lopes',
    photo: '/src/assets/authors/Rose Lopes/rose-lopes_p.jpg',
    bio: 'É de Angra dos Reis (RJ). Descobriu sua veia artística ainda na infância, quando seus desenhos encantavam a todos. Mais tarde, aperfeiçoou-se em desenho e pintura. Hoje, expõe seus trabalhos artísticos em salões de sua cidade. Também foi na infância que a literatura entrou em sua vida; seus textos chamaram a atenção de um professor que a incentivou a participar de concursos literários, despertando sua paixão pela escrita. Também se aventurou no teatro e na dança, mas sua paixão é mesmo a literatura. É membro do Ateneu Angrense de Letras e Artes, onde tem uma participação ativa em concursos de contos e poesias. Rose busca inspiração para escrever no mundo a sua volta. Para ela “a vida é uma grande inspiração”. Encontrou nas artes a forma de expressar e extravasar seus sentimentos. Conseguimos perceber isso em seus sonetos, que são um retrato de sua alma. Publicou o livro “Poemas de Imensidão”, com a irmã Rita Lopes, editado em 2000. Participou da segunda edição do “Revoada de Sonhos” e continua nos encantando com sua escrita, nos emocionando e nos levando para mundos inimagináveis que só os que escrevem com a alma conseguem encontrar.',
    books: [
      { title: 'Revoada de Sonhos II', cover: '/src/assets/authors/Rose Lopes/coletanea-revoadaII-g.png' },
      { title: 'Revoada de Sonhos III', cover: '/src/assets/authors/Rose Lopes/revoada-de-sonhos3-g.jpg' },
    ],
  },
  66: {
    name: 'Sá de Carvalho',
    photo: '/src/assets/authors/sadecarvalho/sa-de-carvalho_p.jpg',
    bio: 'Nascida em Lavras (MG), chegou a Angra dos Reis (RJ), em 1947. Ali cresceu, estudou, formou-se, constituiu família: marido, filhos, filha, netos, netas, bisnetos, bisnetas, genro e noras. Católica e cidadã angrense de coração, dedicou-se, lá pelos anos 80, a colaborar na organização da sociedade e servir à Igreja. A autora ainda se dedica à arte da pintura e do artesanato, além de gostar muito de fotografia. Participa de exposições, dando sua colaboração com seus quadros e fotografias. Com o texto As Mudanças Dentro dos Tempos de Mudanças, a autora foi selecionada para integrar a coletânea Histórias e Imagens de Angra dos Reis (1ª edição – 2012); projeto que reúne escritores residentes em Angra dos Reis e que é promovido pela empresa Ampla, com apoio da Câmara Municipal, em parceria com a Prefeitura e patrocínio do Governo do Estado do Rio de Janeiro. É membro do Ateneu Angrense de Letras e Artes (AALA) e da União Brasileira de Trovadores – Delegacia de Angra dos Reis (UBT-AR).',
    books: [
      { title: 'Revoada de Sonhos I', cover: '/src/assets/authors/Sadecarvalho/coletanea-revoada-g.png' },
      { title: 'Revoada de Sonhos II', cover: '/src/assets/authors/Sadecarvalho/coletanea-revoadaII-g.png' },
      { title: 'Chronos', cover: '/src/assets/authors/Sadecarvalho/chronos-g.jpg' },
      { title: 'Mosaico', cover: '/src/assets/authors/Sadecarvalho/mosaico-g.jpg' },
      { title: 'Sementes poéticas', cover: '/src/assets/authors/Sadecarvalho/sementes_g.jpg' },
    ],
  },
  67: {
    name: 'Saulo Panham',
    photo: '/src/assets/authors/Saulopanham/saulo-panham_p.jpg',
    bio: 'Nasceu no interior do estado de São Paulo. Em 1945, com seis anos de idade, mudou-se com a família para a capital, tornando-se paulistano de coração. Por influência de seu pai, iniciou no espiritismo aos doze anos de idade. Toda sua vida foi voltada para assuntos e estudos transcendentais, visando a evolução espiritual contínua. Hoje, aposentado, é expositor de aulas nas Casas Espíritas da Aliança Espírita Evangélica (AEE).',
    books: [
      { title: 'Revoada de Sonhos III', cover: '/src/assets/authors/Saulopanham/revoada-de-sonhos3-g.jpg' },
      { title: 'Pensamentos de Saulo', cover: '/src/assets/authors/Saulopanham/pensamentos-de-saulo-g.jpg' },
      { title: 'Revoada de Sonhos IV', cover: '/src/assets/authors/Saulopanham/revoada-IV_g.jpg' },
    ],
  },
  68: {
    name: 'Sebastião Isidro de Araújo',
    photo: '/src/assets/authors/Sabastiao/sebastiao.jpg',
    bio: 'Nasceu em 19/01/1925, em Bacamarte/PB. Em 1946 mudou-se para o Rio de Janeiro, onde trabalhou por algum tempo na Embaixada Francesa. Entre 1947 e 1948, esteve incorporado ao serviço militar. Retornando à vida civil, foi aprovado em concurso público federal, tendo se transferido para Angra dos Reis/RJ no ano de 1961. Sua vocação poética floresceu em tenra idade, mas somente depois de aposentado pôde se dedicar à escrita, sendo atualmente membro do Ateneu Angrense de Letras e Artes e União Brasileira de Trovadores.',
    books: [
      { title: 'Sementes poéticas', cover: '/src/assets/authors/Sabastiao/sementes_g.jpg' },
    ],
  },
  69: {
    name: 'Sérgio Pereira',
    photo: '/src/assets/authors/Sergiopereira/sergio_pereira_p.jpg',
    bio: 'Sérgio Pereira nasceu em São Paulo, no dia 6 de janeiro de 1957. Teve o primeiro contato com a Doutrina Espírita aos 18 anos, mas a sua adesão ao Espiritismo ocorreu aos 24 anos. Aos 29 anos foi estudar Medicina na faculdade de Medicina de Marília, onde se formou médico no ano de 1992.',
    books: [
      { title: 'Provérbios de Salomão à luz do Espiritismo', cover: '/src/assets/authors/Sergiopereira/sergio_pereira_p.jpg' },
    ],
  },
  70: {
    name: 'Sibeles Maria De Mais',
    photo: '/src/assets/authors/Sibeles/Sibeles_p.jpg',
    bio: 'Nasceu em 1939, na cidade de Cedral, no interior do estado de São Paulo e tem uma vida simples de dona de casa. Desde 1985, frequenta e trabalha no Grupo Assistencial Espírita Frei Anselmo. Ainda na infância, possuía sonhos continuados das vidas pregressas; ficava confusa, pois as duas realidades se misturavam. Após contar para sua irmã – que frequentava e fazia os cursos na Federação Espírita do Estado de São Paulo (FEESP) – esta disse que também tinha sonhos, nos quais certos fatos se confirmavam em ambas as lembranças. A irmã deu a ideia de que as escrevesse. Então, em 1974, Sibeles começou a passá-las para o papel.',
    books: [
      { title: 'Zuvi entre os ciganos', cover: '/src/assets/authors/Sibeles/zuvi_g.jpg' },
      { title: 'Caterine', cover: '/src/assets/authors/Sibeles/caterine_g.jpg' },
      { title: 'As várias faces de Frei Gustav', cover: '/src/assets/authors/Sibeles/frei-gustav_g.jpg' },
      { title: 'Higley', cover: '/src/assets/authors/Sibeles/higley_g.jpg' },
    ],
  },
  71: {
    name: 'Tânia Redigolo',
    photo: '/src/assets/authors/Tania/tania.jpg',
    bio: 'Advogada, atua na área cível. Começou na Doutrina Espírita em setembro de 1985, no Grupo Espírita Casa do Caminho, onde atua na área de Assistência Espiritual e de Educação.',
    books: [
      { title: 'O caminho da casa de cristal', cover: '/src/assets/authors/Tania/caminho-da-casa_g.jpg' },
    ],
  },
  72: {
    name: 'Teresinha B. Penteado',
    photo: '/src/assets/authors/Teresinha/Teresinha_p.jpg',
    bio: 'Teresinha Bueno Penteado é casada com Plínio Penteado Jr; tem dois filhos (Fábio e Daniel) e uma netinha, Carolina. Seus pais (já desencarnados) eram espíritas; assim, foi educada na doutrina de Kardec desde a infância. Professora, formada pela Faculdade de Ciências e Letras, com especialização em Literatura na PUC; terapeuta, pesquisadora, expositora e escritora (livro: Uma Ponte Para A Eternidade, Editora Aliança). Lecionou em escola pública e desenvolveu projetos na área da Educação: Teatro na escola e “Alfabetização emocional” (livro: seminários e oficinas para o autoconhecimento e a administração pessoal; ainda não publicado).',
    books: [
      { title: 'A incrível jornada cósmica do ser', cover: '/src/assets/authors/Teresinha/incrivel-jorn-g.jpg' },
    ],
  },
  73: {
    name: 'Valderez Escobar',
    photo: '/src/assets/authors/Valderez/valderez-escobar_p.jpg',
    bio: 'Valderez Escobar nasceu em Cedral/SP e estudou em São José do Rio Preto/SP e em São Paulo capital. Foi professora em Piracicaba e São Paulo. Tem 15 livros de crônicas, poesias e frases publicados pelas editoras Scortecci, Phoenix e Daya (SP). Foi associada à União Brasileira de Escritores (UBE). Pertence ao Grupo Ecumênico da Paz (GEP - SP). Participou de inúmeras antologias de crônicas e poesias. Alguns livros seus fazem parte dos acervos das Bibliotecas Mario de Andrade e Alceu Amoroso Lima, em São Paulo, e da Biblioteca Gustavo Teixeira, em são Pedro / SP. É sócia correspondente da Academia de Letras José de Alencar, de Curitiba/PR. Tem quatro filhos biológicos: Selma, Silvio, Saulo e Suzel. E onze filhos do coração: Sergio, Mauricio, Pedro, Luciana, Cristina, Lívia, Flávia, Denise, Klaus e Brigit. E muitos netos espalhados pelo mundo.',
    books: [
      { title: 'Devaneios', cover: '/src/assets/authors/Valderez/devaneios_cronicas-g.jpg' },
      { title: 'Revoada de Sonhos I', cover: '/src/assets/authors/Valderez/coletanea-revoada-g.png' },
      { title: 'Revoada de Sonhos II', cover: '/src/assets/authors/Valderez/coletanea-revoadaII-g.png' },
      { title: 'Folhas Soltas', cover: '/src/assets/authors/Valderez/folhas-soltas-g.jpg' },
      { title: 'Os macaquinhos Sapecas', cover: '/src/assets/authors/Valderez/livro-macaquinhos-g.jpg' },
      { title: 'Livre como poeta', cover: '/src/assets/authors/Valderez/livre-como-poeta-g.jpg' },
      { title: 'Pra frente, Brasil', cover: '/src/assets/authors/Valderez/pra frente brasil_g.jpg' },
      { title: 'Pedacinhos do céu', cover: '/src/assets/authors/Valderez/pedacinhos-do-ceu_g.jpg' },
      { title: 'As borboletinhas do espaço', cover: '/src/assets/authors/Valderez/borboletinhas-do-espaco_g.jpg' },
      { title: 'Crônicas da madrugada', cover: '/src/assets/authors/Valderez/cronicas-madrugada.jpg' },
    ],
  },
  74: {
    name: 'Valentina Antonini da Silva',
    photo: '/src/assets/authors/Valentinaantonini/valentina-antonini_p.jpg',
    bio: '',
    books: [
      { title: 'Orgulho', cover: '/src/assets/authors/Valentinaantonini/orgulho-g.jpg' },
    ],
  },
  75: {
    name: 'Vinícius Gouvêa de Carvalho',
    photo: '/src/assets/authors/Viniciuscarvalho/Vinicius.jpg',
    bio: 'Nascido e criado em 2000, na cidade de Angra dos Reis, RJ. Sempre apaixonado, só em 2015 achou uma correspondente. Sempre curioso, se tornou um ávido por Ciência - especialmente pela Física. Sempre inquieto, já foi cristão, ateu, agnóstico e budista, atualmente com dificuldades de se definir. Sempre louco, se tornou poeta e roteirista.',
    books: [
      { title: 'Poesia, porque não posso te dar beijinho', cover: '/src/assets/authors/Vinicius/poesia-porque-g.jpg' },
    ],
  },
  76: {
    name: 'Yuri Dinalli',
    photo: '/src/assets/authors/Yuri/yuri-p.jpg',
    bio: 'Yuri Dinalli (Dentinho) nasceu em São Paulo - SP, no dia 12 de junho de 1995. Ainda pequeno, nos campinhos de futebol do bairro do Cambuci, antiga Várzea do Carmo, onde cresceu, ganhou o apelido de "Dentinho", que fora somado posteriormente à "Poesia", a fim de assinar seus textos e composições sob a então alcunha de Dentinho Poesia. Poeta, escritor, compositor e estudante de jornalismo, já teve textos e músicas premiadas em festivais e concursos regionais e nacionais. É membro do Terreiro de Compositores e sócio-educador na Fundação Casa, onde atua levando Saraus e oficinas de poesia. A obra "A cidade dos óculos sem Sol" é seu primeiro livro publicado.',
    books: [
      { title: 'A cidade dos óculos sem Sol', cover: '/src/assets/authors/Yuri/cidade-oculos-g.jpg' },
    ],
  },
  77: {
    name: 'Yuriko Yamamoto',
    photo: '/src/assets/authors/Yuriko/Yuriko.jpg',
    bio: 'Nasceu no dia 2 de maio de 1950, em Bilac – SP. Aos 23 anos, Yuriko começou a trabalhar em prol da humanidade, sob a orientação espiritual elevada, e continua até hoje cumprindo a sua missão, com obediência e resignação, junto ao Pai criador, ao bondoso Jesus e a todos os santos e santas. Atualmente, exerce a função de diretora presidente da Associação Yuriko Yamamoto Infinitas Estrelas, junto com sua equipe de trabalhadores e associados.',
    books: [
      { title: 'Como conquistar o seu trabalho para sempre!', cover: '/src/assets/authors/Yuriko/como-conquistar_g.jpg' },
    ],
  },
  78: {
    name: 'Yvone Russeau',
    photo: '/src/assets/authors/Ivone/ivone.jpg',
    bio: 'Nascida em Brotas/SP, Yvone Rousseau mudou-se com a família para a capital paulista aos cinco anos de idade e voltou a viver, décadas mais tarde, em sua cidade natal. Faz pinturas em óleo (para distração apenas) e cursou dois anos de francês pela Aliança Francesa. Ganhou prêmio por um conto pela Revista Cláudia — Menção Honrosa por dois trabalhos apresentados no Concurso Mobral de Literatura Crônicas e Contos, com as obras “Crônicas de minha cidade natal — Brotas” e “A dura realidade”. Participou da antologia de Contos Paixões e Vícios, da Editora Soma com a obra ‘‘O ferro-velho’’, e da antologia de Contos da Editora Casa do Novo Autor, com a obra Chronique dAmor.',
    books: [
      { title: 'Memórias de minha cidade natal - Brotas', cover: '/src/assets/authors/Ivone/memorias-de-minha_g.jpg' },
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
                  
                  <h3 className="text-xl font-semibold text-[#1d1d1f]">
                    {book.title || 'Título não disponível'}
                  </h3>
                </div>
                <p className="text-[#86868b]">
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
