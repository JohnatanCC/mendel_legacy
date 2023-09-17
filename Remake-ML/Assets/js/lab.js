
const close = document.querySelector(".close");
const alert = document.querySelector(".alert");

close.addEventListener("click", function () {
    alert.parentElement.removeChild(alert);
});

document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll(".gene-option-item");
    const tableCells = document.querySelectorAll(".table div");
    let selectedImg = null;

    options.forEach(option => {
        const img = option.querySelector("img");
        img.addEventListener("click", () => {
            options.forEach(opt => {
                opt.classList.remove("selected");
                opt.querySelector("img").classList.remove("selected");
            });

            option.classList.add("selected");
            img.classList.add("selected");
            selectedImg = img.cloneNode(true);
        });
    });

    tableCells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (selectedImg) {
                const clonedImg = selectedImg.cloneNode(true);
                cell.innerHTML = '';
                cell.appendChild(clonedImg);
                cell.classList.add("active");
            }
        });
    });

    const checkButton = document.getElementById("checkButton");
    checkButton.addEventListener("click", () => {
        tableCells.forEach((cell, index) => {
            const gene = cell.getAttribute("data-gene");
            const img = cell.querySelector("img");

            if (img) {
                const imgGene = img.getAttribute("data-gene");
                if (gene === imgGene) {
                    cell.style.backgroundColor = "#90ce90";
                } else {
                    cell.style.backgroundColor = "#e06f6f";
                }
            }
        });
    });
});
