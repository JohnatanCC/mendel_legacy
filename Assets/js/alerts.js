
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

  
 