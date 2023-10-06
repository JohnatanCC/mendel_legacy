document.addEventListener("DOMContentLoaded", function () {
    const dialogBox = document.querySelector(".dialog-box");
    const nextButton = document.getElementById("next-button");
      const closeButton = document.getElementById("close-button");
    const introContainer = document.querySelector(".intro-container");
    const blurEffect = document.querySelector(".blur-effect");
 const body = document.body;
    const introductionText = [
        "Olá! Eu sou Eve, a ervilha. Bem-vindo ao Mendel's Legacy (Beta). Aqui você aprenderá sobre as leis de Mendel e também poderá praticar seus conhecimentos sobre as suas Leis.",
        "Em Mendel's Legacy você verá as seguintes funcionalidades:",
        "A Teoria, onde você aprenderá os princípios básicos das leis de Mendel.",
        "O Quiz, onde você poderá testar seus conhecimentos por meio de questionários de níveis variados.",
        "O Laboratório, onde configurará suas tabelas escolhendo os organismos disponíveis, selecionando as características e classificando os genes paternos e maternos. Ao final, será gerada uma tabela automaticamente com base nas definições.",
        "A Prática, onde você classificará as características dos organismos.",
        "Utilize o menu de navegação para transitar entre as diferentes páginas. Acesse as configurações para personalizar a aparência de acordo com suas preferências.",
        "Explore este incrível mundo da genética e aprenda mais sobre as leis hereditárias!"
    ];

    let currentPart = 0;

       function closeIntroduction() {
        introContainer.style.opacity = "0";
        setTimeout(function() {
            introContainer.style.display = "none";
            body.classList.remove("no-scroll");
              blurEffect.classList.remove("blur-effect");
        }, 0);
    }

    function loadNextPart() {
        if (currentPart < introductionText.length) {
            dialogBox.style.transform = "scaleX(0)";

            setTimeout(function () {
                dialogBox.querySelector("p").textContent = introductionText[currentPart];
                dialogBox.style.transform = "scaleX(1)";
                currentPart++;
            }, 400); 
        } else {
            introContainer.style.opacity = "0";

            setTimeout(function () {
                introContainer.style.display = "none";
                 body.classList.remove("no-scroll");
                blurEffect.classList.remove("blur-effect");
            }, 0); 
        }
    }

    nextButton.addEventListener("click", loadNextPart);
    closeButton.addEventListener('click', closeIntroduction)
    introContainer.addEventListener("click", function (e) {
        if (e.target === introContainer) {
            introContainer.style.opacity = "0";
            setTimeout(function () {
                introContainer.style.display = "none";
                 body.classList.remove("no-scroll");
                 blurEffect.classList.remove("blur-effect");
            }, 0); 
        }
    });

    // Inicialmente, carregue o primeiro item do array
    loadNextPart();
});