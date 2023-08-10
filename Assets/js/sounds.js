const clickSound = document.getElementById("click-sound");
const errorSound = document.getElementById('error-sound');
const specificInputs = document.querySelectorAll(".playable-sound"); // Substitua pela classe correta dos inputs desejados

specificInputs.forEach((input) => {
  input.addEventListener("click", () => {
    clickSound.play();
  });
});

clickSound.volume = 0.3;
errorSound.volume = 0.5;