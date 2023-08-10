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
      "A genética é a área da biologia que estuda os fenômenos da hereditariedade, podendo ser usada em investigação de paternidade, soluções de crimes, elucidação de grau de parentesco entre espécies, desenvolvimento de vacinas e aconselhamento genético.      ",
    img: "Assets/imgs/sticker-practice.png",
  },
  {
    title: "Gregor Mendel",
    content:
      "Os estudos de Mendel sobre as ervilhas envolveram conhecimentos de biologia e matemática. A ervilha foi usada como material de estudo por ter ciclo de vida curto, ser fácil de cultivar, ter características contrastantes e autofecundação.      ",
    img: "Assets/imgs/sticker-practice.png",
  },
  {
    title: "A Metodologia de Mendel - parte I ",
    content:
      "<p>Mendel realizou cruzamentos entre plantas de linhagem pura com características contrastantes (Parental ou P), sendo uma com sementes verdes e a outra com sementes amarelas, gerando assim a Geração F1, composta 100% com sementes amarelas.</p><br><p>Após isso, foi realizada uma autofecundação, gerando a Geração F2, sendo composta 75% com sementes amarelas e 25% com sementes verdes.</p><br><p><bold>1º Lei de Mendel</bold></p><br><p>Cada característica hereditária é determinada por 2 fatores, um herdado do genitor materno e outro do genitor paterno; os fatores de cada par separam-se no momento da formação dos gametas.</p>",
    img: "Assets/imgs/sticker-practice.png",
  },
  {
    title: "Cruzamento Teste",
    content:
      "<p>Quando observamos um indivíduo com característica dominante é impossível saber se ele é homozigótico dominante(BB) ou heterozigótico(Bb), para ter certeza é necessário que faça um cruzamento com um outro indivíduo com característica recessiva(bb), caso os descendentes sejam 100% com características dominantes, o indivíduo é homozigótico dominante, ou seja, puro, mas caso os descendentes sejam 50% com características recessivas, o indivíduo é heterozigótico.</p>      ",
    img: "Assets/imgs/sticker-practice.png",
    
  },
  {
    title: "A Metodologia de Mendel - parte II ",
    content:
      "<p>Mendel continuou estudando as ervilhas, usando a mesma metodologia, fez cruzamentos para observação da transmissão de duas ou mais características, como cor e textura. Sendo “V” para cor e “R” para textura, após isso foi gerado o seguinte resultado:</p><br><p>1.Geração P: Amarela Lisa(VVRR) X Verde Rugosa(vvrr);</p><br><p>2.Geração F1: 100% Amarela Lisa(VvRr);</p><br><p>Geração F2: 25% Amarela Lisa(V_R_), 25% Amarela Rugosa(V_rr), 25% Verde Lisa(vvR_), 25% Verde Rugosa(vvrr).</p>      ",
    img: "Assets/imgs/sticker-practice.png",
    
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
        <div class="gap-20 d-centered-no-align">
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
