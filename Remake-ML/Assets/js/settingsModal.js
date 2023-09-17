const settingsModal = document.getElementById("settings-modal");
const settingsButton = document.querySelector("#settingsButton");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const volumeSlider = document.getElementById("volume-slider");

// Elemento de áudio único para todas as músicas
const audio = new Audio();
let isPlaying = false; // Variável para controlar o estado de reprodução da música

// Botões de música
const musicButtons = document.querySelectorAll(".music-button");
let currentButton = null; // Botão da música atualmente reproduzida

let buttonsDisabled = false; // Variável para controlar se os botões estão desativados

function disableButtons() {
    // Desativa todos os botões
    musicButtons.forEach((button) => {
        button.classList.add("disabled");
    });
    buttonsDisabled = true;

    // Reativa os botões após 1 segundo
    setTimeout(() => {
        musicButtons.forEach((button) => {
            button.classList.remove("disabled");
        });
        buttonsDisabled = false;
    }, 1000); // 1000 milissegundos = 1 segundo
}

musicButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (buttonsDisabled) {
            // Se os botões estiverem desabilitados, não faz nada
            return;
        }

        const musicSrc = button.getAttribute("data-src");

        if (isPlaying) {
            audio.pause();
            isPlaying = false;

            if (currentButton === button) {
                // Se o mesmo botão for clicado novamente, pausa a música
                currentButton = null;
                button.textContent = "Play";
                button.style.backgroundColor = "";
                return; // Sai da função para evitar que a música seja reiniciada
            }
        }

        audio.src = musicSrc;
        audio.loop = true; // Ativa o loop da música
        audio.play();
        isPlaying = true;

        if (currentButton) {
            // Se outra música estava sendo reproduzida, redefine seu botão para "Play"
            currentButton.textContent = "Play";
            currentButton.style.backgroundColor = "";
        }

        currentButton = button; // Define o novo botão atual
        button.textContent = "Pause";
        button.style.backgroundColor = "red";

        disableButtons(); // Desativa temporariamente os botões
    });
});

// Evento de clique para mostrar/ocultar o modal
settingsButton.addEventListener("click", () => {
    settingsModal.style.display = "block";
});

// Evento de clique no botão "X" para fechar o modal
document.querySelector(".close").addEventListener("click", () => {
    settingsModal.style.display = "none";
});

// Evento de clique fora do modal para fechar
window.addEventListener("click", (event) => {
    if (event.target === settingsModal) {
        settingsModal.style.display = "none";
    }
});

// Evento para ajustar o volume globalmente
volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value / 100;
    audio.volume = volume;
});
