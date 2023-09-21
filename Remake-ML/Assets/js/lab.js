function toggleInfo(button) {
    const infoDiv = button.nextElementSibling; // Pega a próxima div após o botão

    if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
        infoDiv.style.display = "flex"; // Mostra as informações
    } else {
        infoDiv.style.display = "none"; // Oculta as informações
    }
}
