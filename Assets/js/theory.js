const bodyEl = document.body;

const c = (el) => document.querySelector(el);


const sliders = [
  {
    title: "Genética",
    content: [
      "A genética é a área da biologia que estuda os fenômenos da hereditariedade, podendo ser usada em investigação de paternidade, soluções de crimes, elucidação de grau de parentesco entre espécies, desenvolvimento de vacinas e aconselhamento genético.",
    ],
    img: "Assets/imgs/sticker-practice.png",
  },
  {
    title: "Mendel",
    content: [
      "Os estudos de Mendel sobre as ervilhas envolveram conhecimentos de biologia e matemática. A ervilha foi usada como material de estudo por ter ciclo de vida curto, ser fácil de cultivar, ter características contrastantes e autofecundação.",
    ],
    img: "Assets/imgs/sticker-practice.png",
  },
  {
    title: "A Metodologia de Mendel - parte I",
    content: [
      "Mendel realizou cruzamentos entre plantas de linhagem pura com características contrastantes (Parental ou P), sendo uma com sementes verdes e a outra com sementes amarelas, gerando assim a Geração F1, composta 100% com sementes amarelas.",
      "Após isso, foi realizada uma autofecundação, gerando a Geração F2, sendo composta 75% com sementes amarelas e 25% com sementes verdes.",
      "<b>1º Lei de Mendel<b>",
      "Cada característica hereditária é determinada por 2 fatores, um herdado do genitor materno e outro do genitor paterno; os fatores de cada par separam-se no momento da formação dos gametas."
    ],
    img: "Assets/imgs/sticker-practice.png",
  },
  {
    title: "Cruzamento Teste",
    content: [
      "Quando observamos um indivíduo com característica dominante é impossível saber se ele é homozigótico dominante(BB) ou heterozigótico(Bb), para ter certeza é necessário que faça um cruzamento com um outro indivíduo com característica recessiva(bb), caso os descendentes sejam 100% com características dominantes, o indivíduo é homozigótico dominante, ou seja, puro, mas caso os descendentes sejam 50% com características recessivas, o indivíduo é heterozigótico.",
    ],
    img: "Assets/imgs/sticker-practice.png",

  },
  {
    title: "A Metodologia de Mendel - parte II",
    content: [
      "Mendel continuou estudando as ervilhas, usando a mesma metodologia, fez cruzamentos para observação da transmissão de duas ou mais características, como cor e textura. Sendo “V” para cor e “R” para textura, após isso foi gerado o seguinte resultado:",
      "•Geração P: Amarela Lisa(VVRR) X Verde Rugosa(vvrr);",
      "•Geração F1: 100% Amarela Lisa(VvRr);",
      "•Geração F2: 25% Amarela Lisa(V_R_), 25% Amarela Rugosa(V_rr), 25% Verde Lisa(vvR_), 25% Verde Rugosa(vvrr).",
      "<b>2º Lei de Mendel<b>",
      "Fatores hereditários para duas ou mais características se segregam de modo independente no momento da formação dos gametas."
    ],
    img: "Assets/imgs/sticker-practice.png",

  },
  {
    title: "Tipos de Alelos",
    content: [
      "Alelos Letais: Homozigóticos com o alelo letal morrem antes ou logo após o nascimento.",
      "Ex.: Camundongo Amarelo.",
      "Alelos Múltiplos: Três ou mais alelos para uma característica.",
      "Ex.: Coelhos(Selvagem, Chinchila, Himalaia, Albino).",
      "Dominância Incompleta: O indivíduo manifesta uma característica intermediária.",
      "Ex.: Flor boca de leão.",
      "Coodominância: Manifesta as características dos dois tipos de homozigotos.",
      "Ex.: Sistema MN sanguíneo",
      "Penetrância: Termo usado pelos cientistas para se referir a porcentagem de indivíduos de uma população que possuem fenótipo correspondente ao genótipo.",
      "Ex.: Feijão."
    ],
    img: "Assets/imgs/sticker-practice.png",

  },
  {
    title: "Meiose",
    content: [
      "É um processo de divisão celular que leva à formação de quatro células-filhas, ou gametas, com metade do número de cromossomos da célula parental.",
    ],
    img: "Assets/imgs/sticker-practice.png",

  },
  {
    title: "Glossário",
    content: [
      "DNA - Molécula responsável por conservar e transmitir informação genética entre as gerações. Ela é responsável pela hereditariedade de todas as características que nosso organismo apresenta.",
      "Cromossomo - DNA compactado visível durante a divisão celular.",
      "Gene - Trecho do DNA que possui a informação genética para uma característica específica.",
      "Alelo - Variação de um gene.",
      "Homozigoto - Par de alelos iguais (AA) ou (aa).",
      "Heterozigoto - Par de alelos diferentes (Aa).",
      "Fenótipo - Características observáveis de um indivíduo.",
      "Genótipo - Conjunto de genes de um indivíduo.",
      "Características contrastantes - são as características que se apresentam diferentes uma da outra.",
      "Autofecundação - Autofecundação é o processo que o gameta masculino fecunda o gameta feminino do próprio indivíduo que o produz.",
      "Duplo-heterozigóticos: Quando as duas duplas do genótipo são heterozigóticas."
    ],
    img: "Assets/imgs/sticker-practice.png",

  },

];


let currentSlideIndex = 0;
const totalSlides = sliders.length;

const slideContainer = document.querySelector("#activeSlide");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const indexDisplay = document.querySelector("#index");

nextBtn.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  updateSlideDisplay();
});

prevBtn.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
  updateSlideDisplay();
});

const updateSlideDisplay = () => {
  indexDisplay.textContent = currentSlideIndex + 1;

  const { title, content, img } = sliders[currentSlideIndex];
  const contentHTML = content.map(paragraph => `<p class="text">${paragraph}</p>`).join("");

  slideContainer.innerHTML = `
    <div class="theory-area">
      <div class="gap-20 d-centered-no-align">
        <div class="img-fluid">
          <img src="${img}" alt="image" />
        </div>
        <div>
          <header>
            <h1>${title}</h1>
          </header>
          ${contentHTML}
        </div>
      </div>
    </div>
  `;
};

window.onload = () => {
  updateSlideDisplay();
};