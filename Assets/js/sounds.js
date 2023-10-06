
const clickSound = document.getElementById("click-sound");
const errorSound = document.getElementById('error-sound');
const specificInputs = document.querySelectorAll(".playable-sound"); // Substitua pela classe correta dos inputs desejados

let volume = 0.5; // Valor inicial do volume

specificInputs.forEach((input) => {
  
  input.addEventListener("click", () => {
    clickSound.volume = volume ;
    clickSound.play();
  });
});

// Seletor para todas as tags <button> na página
const buttons = document.querySelectorAll("button");

