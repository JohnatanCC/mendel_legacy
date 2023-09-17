// Seleciona o ícone de expansão e a div de navegação
const menuToggle = document.querySelector(".menu-toggle");
const marginDefault = document.querySelector(".margin-default");
const navigation = document.querySelector(".navigation");

let expanded = false;

// Adiciona um ouvinte de evento ao ícone para expandir o menu
menuToggle.addEventListener("click", () => {
    if (!expanded) {
        navigation.style.width = "100px";
        marginDefault.style.marginLeft = "90px";
    } else {
        navigation.style.width = "210px";
        marginDefault.style.marginLeft = "210px";
    }
    expanded = !expanded;
});
