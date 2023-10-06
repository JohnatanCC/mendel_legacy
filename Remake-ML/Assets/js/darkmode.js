const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const logo = document.querySelector('#logo-img');
let isDarkMode = localStorage.getItem('darkMode') === 'enabled';

function enableDarkMode() {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    body.style.background = 'var(--background-color)'; // Defina o background do body
    localStorage.setItem('darkMode', 'enabled');
    logo.classList.add('icon');
    
}

function enableLightMode() {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    body.style.background = 'var(--background-color)'; // Defina o background do body
    localStorage.setItem('darkMode', 'disabled');
    logo.classList.remove('icon');
}

if (isDarkMode) {
    enableDarkMode();
} else {
    enableLightMode();
}

toggleButton.addEventListener('click', () => {
    if (isDarkMode) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
    isDarkMode = !isDarkMode; // Inverta o valor de isDarkMode
});