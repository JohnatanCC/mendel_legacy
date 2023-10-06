// Seleciona o ícone de expansão e a div de navegação
const menuToggle = document.querySelector(".menu-toggle");
const marginDefault = document.querySelector(".margin-default");
const navigation = document.querySelector(".navigation");
const expand = document.querySelector(".expanded");
const titles = document.querySelectorAll(".title")
const menuExtend = document.querySelector(".menu-toggle-extend")
let expanded = false;
menuExtend.addEventListener('click', () => {
    menuToggle.style.display = "none";
    if (!expanded) {
        navigation.style.width = "100%";
        navigation.style.borderRight = "var(--light) 10px solid"
    } else {
    navigation.style.width = "0px ";
    }        navigation.style.borderRight = "none"

     expanded = !expanded;
});




// Adiciona um ouvinte de evento ao ícone para expandir o menu
menuToggle.addEventListener("click", () => {
    if (!expanded) {
        navigation.style.width = "90px";
        marginDefault.style.marginLeft = "90px";
      
    } else {
        navigation.style.width = "210px";
        marginDefault.style.marginLeft = "210px";
    };

 
    expanded = !expanded;


    
});

