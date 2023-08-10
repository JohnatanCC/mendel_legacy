const clickSound = document.getElementById("click-sound");
const errorSound = document.getElementById('error-sound');
const specificInputs = document.querySelectorAll(".playable-sound"); // Substitua pela classe correta dos inputs desejados

specificInputs.forEach((input) => {
  input.addEventListener("click", () => {
    clickSound.play();
  });
});

//Music

const audioElement = document.getElementById('audioElement');
let volume = 1.0; // Valor inicial do volume
const volumeDisplay = document.getElementById('volumeDisplay');

document.addEventListener('keydown', (event) => {
  if (event.key === 'm' || event.key === 'M') {
    audioElement.play();
  } else if (event.key === 's' || event.key === 'S') {
    audioElement.pause();
    audioElement.currentTime = 0;
  } else if (event.key === '+' || event.key === 'Add') {
    volume = Math.min(volume + 0.1, 1.0);
    audioElement.volume = volume;
    volumeDisplay.textContent = `Volume: ${Math.round(volume * 100)}%`;
    volumeDisplay.style.opacity = 1;
    setTimeout(() => {
      volumeDisplay.style.opacity = 0;
    }, 1000); // Após 1 segundo, o elemento de exibição de volume desaparece
  } else if (event.key === '-' || event.key === 'Subtract') {
    volume = Math.max(volume - 0.1, 0.0);
    audioElement.volume = volume;
    volumeDisplay.textContent = `Volume: ${Math.round(volume * 100)}%`;
    volumeDisplay.style.opacity = 1;
    setTimeout(() => {
      volumeDisplay.style.opacity = 0;
    }, 1000);
  }
});

//Mobile
const playMusic = document.getElementById('playMusic');
playMusic.addEventListener('click', () => {
  // Verifica se o áudio já está tocando, pausa se estiver, ou inicia se não estiver
  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
    audioElement.currentTime = 0; // Reinicia a reprodução para o início
  }
});