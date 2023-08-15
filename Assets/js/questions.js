let questions = [
    //Easy questions
    {
        question: 'A Genética é responsável pelo estudo da hereditariedade. Considera-se que essa ciência tenha iniciado seu desenvolvimento após experimentos aplicados por um monge chamado:',
        options: [
            'Darwin',
            'Lamarck',
            'Mendel',
            'Morgan',
            'Dawkins',
        ],
        answer: 2,
        difficulty: 'easy'
    },
    {
        question: 'O que é o Cruzamento Teste?',
        options: [
            'Um teste para saber o indivíduo é um coelho chinchila recessivo',
            'Um teste para saber se o indivíduo é fértil',
            'Isso não existe',
            'Um teste para saber o segundo alelo de um indivíduo dominante',
            'N.D.A',
        ],
        answer: 3,
        difficulty: 'easy'
    },
    {
        question: 'Por que Mendel escolheu a ervilha como objeto de estudo?',
        options: [
            'Ciclo de vida curto, fácil cultivo, ter características contrastantes e autofecundação',
            'Ciclo de vida longo, fácil cultivo, ter características contrastantes e autofecundação',
            'Ciclo de vida curto, difícil cultivo, ter características parecidas e autofecundação',
            'Ciclo de vida curto, difícil cultivo, ter características contrastantes e reprodução assexuada',
            'Porque ele gosta de ervilhas',
        ],
        answer: 0,
        difficulty: 'easy'
    },
    {
        question: 'Qual é o nome da área da biologia que estuda os fenômenos da hereditariedade?',
        options: [
            'Botânica',
            'Zoologia',
            'Genômica',
            'Ecologia',
            'Genética',
        ],
        answer: 4,
        difficulty: 'easy'
    },
    {
        question: 'O que é uma linhagem pura em termos genéticos?',
        options: [
            'Um organismo com muitas variações genéticas',
            'Um organismo com mutações genéticas',
            'Um organismo que sempre produz descendentes com as mesmas características',
            'Um organismo com uma única característica genética',
            'Um organismo que não se reproduz',
        ],
        answer: 2,
        difficulty: 'easy'
    },
    {
        question: 'Qual foi a contribuição mais significativa de Mendel para a genética?',
        options: [
            'Descoberta do DNA',
            'Mapeamento do genoma humano',
            'Leis da hereditariedade',
            'Descoberta da evolução das espécies',
            'Invenção da clonagem',
        ],
        answer: 2,
        difficulty: 'easy'
    },
    {
        question: 'O que são alelos?',
        options: [
            'Indivíduos com características recessivas',
            'Células de reprodução',
            'Variações no ambiente',
            'Diferentes versões de um gene para uma mesma característica',
            'Mistura de características de dois indivíduos',
        ],
        answer: 3,
        difficulty: 'easy'
    },
    {
        question: 'Como é chamado um indivíduo com dois alelos iguais para uma característica específica?',
        options: [
            'Heterozigoto',
            'Homozigoto dominante',
            'Homozigoto recessivo',
            'Homozigoto recessivo',
            'Dominante',
        ],
        answer: 1,
        difficulty: 'easy'
    },
    {
        question: 'Como é chamado um indivíduo com dois alelos diferentes para uma característica específica?',
        options: [
            'Heterozigoto recessivo',
            'Heterozigoto dominante',
            'Homozigoto dominante',
            'X-man',
            'Recessivo',
        ],
        answer: 1,
        difficulty: 'easy'
    },
    {
        question: 'O que é a primeira lei de Mendel?',
        options: [
            'A presença de um alelo recessivo sempre resulta em características recessivas',
            'Cada característica hereditária é determinada por dois alelos do genitor paterno',
            'Cada característica hereditária é determinada por dois alelos, que se separam na formação dos gametas',
            'Características recessivas são mais comuns em uma população',
            'Características dominantes são sempre prejudiciais',
        ],
        answer: 2,
        difficulty: 'easy'
    },

    //Medium questions

    {
        question: 'Marque a alternativa que indica corretamente o nome da unidade básica da hereditariedade.',
        options: [
            'gene',
            'cromossomo',
            ' alelos',
            'RNA',
            'nucléolo',
        ],
        answer: 0,
        difficulty: 'medium'
    },
    {
        question: 'O que é fenótipo?',
        options: [
            'É o conjunto de características decorrentes da ação do ambiente',
            'Influi no genótipo, transmitindo a este as suas características',
            'É o conjunto de características decorrentes da ação do genótipo',
            'É o conjunto de características de um indivíduo.',
            'É o conjunto de características exteriores de um indivíduo.',
        ],
        answer: 4,
        difficulty: 'medium'
    },
    {
        question: 'A planta maravilha apresenta indivíduos com flores vermelhas, brancas e rosas. O cruzamento de plantas com flores vermelhas e brancas gera plantas com flores rosas, sendo esse um exemplo claro de:',
        options: [
            'dominância e recessividade',
            'dominância completa',
            'dominância incompleta',
            'codominância',
            'alelos letais',
        ],
        answer: 2,
        difficulty: 'medium'
    },
    {
        question: "Se um casal heterozigótico para altura (Tt) tem 4 filhos, qual é a probabilidade de que exatamente 2 deles tenham altura alta?",
        options: ["6.25%", "12.5%", "18.75%", "25%", "31.25%"],
        answer: 1,
        difficulty: 'medium'
      },
      {
        question: "Um homem e uma mulher ambos heterozigóticos para daltonismo (XDXd) têm uma filha. Qual é a probabilidade de que ela seja portadora do alelo para daltonismo?",
        options: ["12.5%", "25%", "37.5%", "50%", "75%"],
        answer: 3,
        difficulty: 'medium'
      },
      {
        question: "Um casal heterozigótico para fibrose cística (Aa) tem 5 filhos. Qual é a probabilidade de que pelo menos 2 deles tenham fibrose cística (aa)?",
        options: ["6.25%", "12.5%", "18.75%", "25%", "31.25%"],
        answer: 4,
        difficulty: 'medium'
      },
      {
        question: "Se dois heterozigotos para altura (Tt) têm um filho, qual é a probabilidade de que ele tenha altura baixa (tt)?",
        options: ["12.5%", "25%", "37.5%", "50%", "75%"],
        answer: 4,
        difficulty: 'medium'
      },
      {
        question: "Uma mulher heterozigótica para cor dos olhos (Bb) casa-se com um homem homozigótico recessivo para cor dos olhos (bb). Qual é a probabilidade de que seus filhos tenham olhos castanhos?",
        options: ["0%", "25%", "50%", "75%", "100%"],
        answer: 2,
        difficulty: 'medium'
      },
      {
        question: "Um homem heterozigótico para daltonismo (XDXd) casa-se com uma mulher portadora do alelo para daltonismo (XDXd). Qual é a probabilidade de que eles tenham um filho com daltonismo?",
        options: ["0%", "25%", "50%", "75%", "100%"],
        answer: 1,
        difficulty: 'medium'
      },
      {
        question: "Um casal heterozigótico para fibrose cística (Aa) tem 3 filhos. Qual é a probabilidade de que todos os três filhos sejam portadores do alelo para fibrose cística?",
        options: ["12.5%", "25%", "37.5%", "50%", "75%"],
        answer: 0,
        difficulty: 'medium'
      },
    //Hard questions
    {
        question: 'João e Dávila, ambos positivos para o caráter pigmentação da pele, casaram-se e tiveram dois filhos positivos para essa característica e um filho albino. João e Dávila ficaram surpresos com o nascimento do filho albino e questionaram se ele poderia ser mesmo um filho do casal. Qual deve ser o genótipo dos pais para que possa ter nascido um filho albino?',
        options: [
            'AA e aa',
            'AA e Aa',
            'aa e Aa',
            'Aa e Aa',
            'aa e aa',
        ],
        answer: 4,
        difficulty: 'hard'
    },
    {
        question: 'Mendel realizou cruzamentos entre plantas de linhagem pura com características contrastantes (Parental ou P), sendo uma com sementes verdes e a outra com sementes amarelas, gerando assim a Geração F1, composta 100% com sementes amarelas.Após isso, foi realizada uma autofecundação, gerando a Geração F2. Qual a proporção de ervilhas amarelas e verdes respectivamente?',
        options: [
            '74% e 26%',
            '25% e 75%',
            '26% e 74%',
            '75% e 25%',
            'N.D.A',
        ],
        answer: 3,
        difficulty: 'hard'
    },
    {
        question: "Se dois indivíduos heterozigóticos para um gene letal autossômico (Aa) se casam, qual é a proporção esperada de filhos vivos para filhos mortos?",
        options: ["1:2", "2:1", "1:1", "3:1", "1:3"],
        answer: 0,
        difficulty: 'hard'
      },
      {
        question: "Um casal com genótipo heterozigótico para albinismo (Aa) e genótipo homozigótico recessivo para daltonismo (XDXd) tem um filho. Qual é a probabilidade de que o filho seja heterozigótico para ambos os genes?",
        options: ["25%", "50%", "75%", "0%", "100%"],
        answer: 2,
        difficulty: 'hard'
      },
      {
        question: "Um homem homozigótico recessivo para um gene ligado ao cromossomo X (aa) e uma mulher homozigótica recessiva para um gene autossômico (bb) têm uma filha. Qual é a probabilidade de que a filha tenha o fenótipo aaBB?",
        options: ["25%", "50%", "75%", "0%", "100%"],
        answer: 2,
        difficulty: 'hard'
      },
      {
        question: "Um casal homozigótico recessivo para dois genes autossômicos (aaBb) tem uma filha. Qual é a probabilidade de que a filha seja heterozigótica para ambos os genes?",
        options: ["1/4", "1/8", "1/16", "1/32", "1/64"],
        answer: 3,
        difficulty: 'hard'
      },
      {
        question: "Dois indivíduos heterozigóticos para um gene ligado ao cromossomo X (XDXd) têm uma filha. Qual é a probabilidade de que a filha seja homozigótica recessiva para esse gene?",
        options: ["25%", "50%", "75%", "0%", "100%"],
        answer: 0,
        difficulty: 'hard'
      },
      {
        question: "Um casal heterozigótico para um gene letal autossômico (Aa) tem 4 filhos. Qual é a probabilidade de que todos os quatro filhos sejam portadores do alelo para o gene letal?",
        options: ["12.5%", "25%", "37.5%", "50%", "75%"],
        answer: 3,
        difficulty: 'hard'
      }
   
];

// Função para embaralhar as questões aleatoriamente
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// Embaralhar as questões aleatoriamente
// shuffleArray(questions);