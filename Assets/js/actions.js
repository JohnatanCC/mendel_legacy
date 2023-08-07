// Seleciona o ícone de expansão e a div de navegação
const expandIcon = document.getElementById("expand-icon");
const navigation = document.querySelector(".navigation");
const menuExpand = document.querySelector('.menu-expand ')

let rotated = false;
let expanded = false;
// Adiciona um ouvinte de evento ao ícone para expandir o menu
menuExpand.addEventListener("click", () => {
    if (!rotated) {
     
        expandIcon.style.transform = "rotate(180deg)";
      } else {
     
        expandIcon.style.transform = ""; // Remover a transformação para voltar ao estado original
      }
      if (!expanded) {
        navigation.style.opacity = "1";
        navigation.classList.add('expanded')
      } else {
        navigation.style.opacity = "0";
        navigation.classList.remove('expanded')
      }
      
      rotated = !rotated;
      expanded = !expanded;
});

const clickSound = document.getElementById("click-sound");

const specificInputs = document.querySelectorAll(".playable-sound"); // Substitua pela classe correta dos inputs desejados

specificInputs.forEach((input) => {
  input.addEventListener("click", () => {
    clickSound.play();
  });
});

clickSound.volume = 0.3;
errorSound.volume = 0.5;

//   Erro Window


const messageBox = document.getElementById("message-box");
const closeMessageButton = document.getElementById("close-message");
const overlay = document.getElementById("overlay");
  // Oculta a mensagem quando o botão "Fechar" é clicado
  closeMessageButton.addEventListener('click', () => {
    overlay.style.transform = 'scale(0)';
  });

    overlay.addEventListener('click', () => {
    overlay.style.transform = 'scale(0)';
  });