const bodyEl = document.body;
const darkModeBtn = document.querySelector("#darkmode");
const c = (el) => document.querySelector(el);

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    if (bodyEl.classList.contains("dark-mode")) {
      bodyEl.classList.remove("dark-mode");
    } else {
      bodyEl.classList.add("dark-mode");
    }
  });
}

const sliders = [
  {
    title: "O que é génetica?",
    content:
      "A genética é o estudo da hereditariedade e da variação dos organismos vivos. Ela explora como as características são passadas de uma geração para outra, bem  como as diferenças genéticas podem levar a variações individuais e até mesmo a doenças. A genética também está envolvida em muitas áreas da biologia, incluindo evolução, biotecnologia e medicina. Os genes são a unidade básica da hereditariedade e são compostos de DNA, que contém as instruções para a produção de proteínas. A genética moderna usa ferramentas como sequenciamento de DNA e edição de genes para estudar e manipular o material genético de organismos vivos. ",
    img: "Assets/imgs/theory/img1.jpg",
  },
  {
    title: "A teoria de mendel",
    content:
      "A teoria de Mendel, também conhecida como leis da hereditariedade de Mendel, foi desenvolvida  pelo monge e botânico austríaco Gregor Mendel no século XIX. Ele realizou experimentos com ervilhas e formulou três leis fundamentais da hereditariedade: <br> <br>  1.Lei da Segregação: os dois alelos de um gene segregam-se durante a formação dos gametas, de modo que cada gameta recebe apenas um dos alelos.  <br>   <br>   2.Lei da Dominância: quando dois alelos diferentes estão presentes em um indivíduo, um deles (o alelo dominante) mascara o efeito do outro (o alelo recessivo). <br> <br> 3.Lei da Distribuição Independente: alelos de diferentes genes segregam-se independentemente uns dos outros durante a formação dos gametas, de modo que a presença de um alelo em um gene não afeta a presença de um alelo em outro gene.",
    img: "Assets/imgs/theory/img3.png",
  },
  {
    title: "Gene,Alelo,Fenótipo e Genótipo",
    content:
      "Essas leis explicam como as características são herdadas de uma geração para outra e por que algumas características são mais comuns em uma população do que em outra. Além das leis fundamentais da hereditariedade, a teoria de Mendel também introduziu os conceitos de gene, alelo, fenótipo e genótipo. <br> <br> Gene: é uma unidade hereditária que contém a informação genética para a produção de uma proteína ou outra molécula funcional. <br> <br> Alelo: é uma das diferentes formas de um gene que podem existir em um locus cromossômico específico.<br> <br> Fenótipo: é a aparência física ou características observáveis de um organismo, que são determinadas pela interação entre o genótipo e o ambiente.<br> <br> Genótipo: é a composição genética de um organismo, ou seja, os alelos que estão presentes em seus cromossomos.",
    img: "Assets/imgs/theory/img4.webp",
  },
  {
    title: "Experimentos com Ervilhas",
    content:
      "Gregor Mendel conduziu seus experimentos utilizando ervilhas pelos seguintes motivos: <br> <br>•  Planta de fácil cultivo e desenvolvimento em curto período;<Br>• Produção de muitas sementes;<br>• Rápido ciclo reprodutivo;<br>• Facilidade de controlar a fecundação das plantas; <br>• Capacidade de realizar autofecundação. <br> <br> <br>Os seus experimentos analisaram sete características das ervilhas: cor da flor, posição da flor no caule, cor da semente, textura da semente, forma da vagem, cor da vagem e altura da planta.",
    img: "Assets/imgs/theory/img2.jpg",
  },
];

//current slide
let i = 0;

//total slides
let j = sliders.length;

let slideContainer = c("#activeSlide");
let nextBtn = c("#next");
let prevBtn = c("#prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  c("#index").innerHTML = i + 1;
  displaySlide();
});

prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  c("#index").innerHTML = i + 1;

  displaySlide();
});

let displaySlide = () => {
  slideContainer.innerHTML = `
  <div class="theory-area">
        <div class="gap-20 d-centered">
       <div class="img-fluid">
          <img src="${sliders[i].img}" alt="image" />
       </div>
<div class="">
<header>
            <h1>${sliders[i].title}</h1>
          </header>
          <p class="text">
          ${sliders[i].content}
         </p>
          
             </div>
     </div>
  `;
};
window.onload = displaySlide;
