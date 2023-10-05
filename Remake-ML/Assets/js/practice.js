
// Adicione este código onde você lida com o envio do formulário (após a filtragem)
const classificationTitle = document.getElementById("classification-title");
const selectedOrganism = organismSelect.options[organismSelect.selectedIndex].text;




function toggleInfo(button) {
    const infoDiv = button.nextElementSibling; // Pega a próxima div após o botão

    if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
        infoDiv.style.display = "flex"; // Mostra as informações
    } else {
        infoDiv.style.display = "none"; // Oculta as informações
    }
}


//tabela 1


function createCard(data) {
    const { organism, characteristic1, characteristic2, headerGenes, footerContent } = data;

    const tableCard = document.createElement("div");
    tableCard.classList.add("table-card");
    tableCard.setAttribute("data-organism", organism);
    tableCard.setAttribute("data-characteristic1", characteristic1);


    // Crie a estrutura do card usando innerHTML, incluindo os genes dos headers
    tableCard.innerHTML = `
        <div class="table event-none">
            <div class="empty"></div>
            <div class="header">${headerGenes[0]}</div>
            <div class="header">${headerGenes[1]}</div>
            <div class="header">${headerGenes[2]}</div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="header">${headerGenes[5]}</div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
        
          <div class="card-footer">
            ${footerContent}
        </div>
    `;

    return tableCard;
}

//Tabela 2 

function createCard2(data) {
    const { organism, characteristic1, characteristic2, headerGenes, footerContent } = data;

    const tableCard = document.createElement("div");
    tableCard.classList.add("table-card");
    tableCard.setAttribute("data-organism", organism);
    tableCard.setAttribute("data-characteristic1", characteristic1);

    // Crie a estrutura da segunda tabela usando innerHTML, incluindo os genes dos headers
    tableCard.innerHTML = `
        <div class="table2 d-grid event-none">
            <div class="empty"></div>
            <div class="header">${headerGenes[0]}</div>
            <div class="header">${headerGenes[1]}</div>
            <div class="header">${headerGenes[2]}</div>
            <div class="header">${headerGenes[3]}</div>
            <div class="header">${headerGenes[4]}</div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="header">${headerGenes[9]}</div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="header">${headerGenes[14]}</div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="header">${headerGenes[19]}</div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
        
          <div class="card-footer">
            ${footerContent}
        </div>
    `;

    return tableCard;
}





// Função para criar os cards e adicioná-los ao HTML
function createAndAddCards(filteredData) {


    // Limpe o conteúdo existente no container de cards
    cardContainer.innerHTML = "";

    // Itere sobre os dados filtrados e crie os cards
    filteredData.forEach(data => {
        const card = createCard(data);

        cardContainer.appendChild(card);

    });
}

function createAndAddCards2(filteredData) {
    const cardContainer = document.querySelector(".table-cards-content");

    // Limpe o conteúdo existente no container de cards
    cardContainer.innerHTML = "";

    // Itere sobre os dados filtrados e crie os cards
    filteredData.forEach(data => {
        const card2 = createCard2(data);
        cardContainer.appendChild(card2);
    });
}



// Função para filtrar os cards com base nos valores do formulário
function filterCards(e) {
    e.preventDefault(); // Impede o envio do formulário padrão

    const organismSelect = document.getElementById("organismSelect");

    const characteristic1Select = document.getElementById("characteristic1Select");
    const characteristic2Select = document.getElementById("characteristic2Select");

    const selectedOrganism = organismSelect.value;

    const selectedCharacteristic1 = characteristic1Select.value;
    const selectedCharacteristic2 = characteristic2Select.value;

    console.log("Selected Organism:", selectedOrganism);

    console.log("Selected Characteristic 1:", selectedCharacteristic1);
    console.log("Selected Characteristic 2:", selectedCharacteristic2);

    // Filtrar os cards com base nos valores do formulário
    const filteredCards = cardData.filter(data => {
        return (
            (selectedOrganism === "Todos" || data.organism === selectedOrganism) &&

            (selectedCharacteristic1 === "Todas" || data.characteristic1 === selectedCharacteristic1) &&
            (selectedCharacteristic2 === "Todas" || data.characteristic2 === selectedCharacteristic2)
        );
    });

    console.log("Filtered Cards:", filteredCards);

    // Atualizar os cards com os dados filtrados


    if (selectedCharacteristic2 !== "Vazio" && selectedCharacteristic2 !== "Todas") {
        createAndAddCards2(filteredCards);

    } else {
        createAndAddCards(filteredCards);

    }



    // Obtenha os valores selecionados nos selects
    const selectedOrganismOption = organismSelect.options[organismSelect.selectedIndex];
    const selectedCharacteristic1Option = characteristic1Select.options[characteristic1Select.selectedIndex];

    // Obtenha os textos dos valores selecionados

    // Atualize os espaços reservados no título
    const selectedOrganismElement = document.getElementById("selected-organism");
    selectedOrganismElement.textContent = selectedOrganism;

}

// Adicione um ouvinte de evento de envio de formulário
const filterForm = document.getElementById("filter-form");
const characteristicsSection = document.getElementById("characteristics-section");
const cardContainer = document.querySelector(".table-cards-content");


filterForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio do formulário padrão
    filterCards(e); // Chama a função de filtragem e passe o evento como argumento
    const tables = document.getElementById('tables');
    tables.classList.remove('d-none');
});


//plant

// Função para classificar um gene


function classifyOneGeneId1() {
    const cardDataId = 1;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar
    const tableHTML = `
    <div class="table">
        <div class="empty"></div>
        <div class="cell-header event-none">T</div>
        <div class="cell-header event-none">T</div>
        <div class="cell-header event-none">T</div>
        <div data-gene="tall" class="cell"></div>
        <div data-gene="tall" class="cell"></div>
        <div class="cell-header event-none">T</div>
        <div data-gene="tall" class="cell"></div>
        <div data-gene="tall" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}


function classifyOneGeneId2() {
    const cardDataId = 2;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar
    const tableHTML = `
    <div class="table">
        <div class="empty"></div>
        <div class="cell-header event-none">T</div>
        <div class="cell-header event-none">t</div>
        <div class="cell-header event-none">T</div>
        <div data-gene="tall" class="cell"></div>
        <div data-gene="tall" class="cell"></div>
        <div class="cell-header event-none">t</div>
        <div data-gene="tall" class="cell"></div>
        <div data-gene="small" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}

function classifyOneGeneId3() {
    const cardDataId = 3;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar
    const tableHTML = `
    <div class="table">
        <div class="empty"></div>
        <div class="cell-header event-none">A</div>
        <div class="cell-header event-none">A</div>
        <div class="cell-header event-none">A</div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div class="cell-header event-none">A</div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}

function classifyOneGeneId4() {
    const cardDataId = 4;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar
    const tableHTML = `
    <div class="table">
        <div class="empty"></div>
        <div class="cell-header event-none">A</div>
        <div class="cell-header event-none">a</div>
        <div class="cell-header event-none">A</div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div class="cell-header event-none">a</div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="terminal" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}
function classifyOneGeneId5() {
    const cardDataId = 5;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar
    const tableHTML = `
    <div class="table">
        <div class="empty"></div>
        <div class="cell-header event-none">P</div>
        <div class="cell-header event-none">P</div>
        <div class="cell-header event-none">P</div>
        <div data-gene="rose" class="cell"></div>
        <div data-gene="rose" class="cell"></div>
        <div class="cell-header event-none">P</div>
        <div data-gene="rose" class="cell"></div>
        <div data-gene="rose" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}

function classifyOneGeneId6() {
    const cardDataId = 6;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar
    const tableHTML = `
    <div class="table">
        <div class="empty"></div>
        <div class="cell-header event-none">P</div>
        <div class="cell-header event-none">a</div>
        <div class="cell-header event-none">P</div>
        <div data-gene="rose" class="cell"></div>
        <div data-gene="rose" class="cell"></div>
        <div class="cell-header event-none">a</div>
        <div data-gene="rose" class="cell"></div>
        <div data-gene="purple" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}

function classifyOneGeneId7() {
    const cardDataId = 7;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar
    const tableHTML = `
    <div class="table">
        <div class="empty"></div>
        <div class="cell-header event-none">G</div>
        <div class="cell-header event-none">G</div>
        <div class="cell-header event-none">G</div>
        <div data-gene="yellow" class="cell"></div>
        <div data-gene="yellow" class="cell"></div>
        <div class="cell-header event-none">G</div>
        <div data-gene="yellow" class="cell"></div>
        <div data-gene="yellow" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}
function classifyOneGeneId8() {
    const cardDataId = 8;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar
    const tableHTML = `
    <div class="table">
        <div class="empty"></div>
        <div class="cell-header event-none">S</div>
        <div class="cell-header event-none">S</div>
        <div class="cell-header event-none">S</div>
        <div data-gene="smoth" class="cell"></div>
        <div data-gene="smoth" class="cell"></div>
        <div class="cell-header event-none">S</div>
        <div data-gene="smoth" class="cell"></div>
        <div data-gene="rough" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}

function classifyOneGeneId9() {
    const cardDataId = 9;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar
    const tableHTML = `
    <div class="table">
        <div class="empty"></div>
        <div class="cell-header event-none">S</div>
        <div class="cell-header event-none">S</div>
        <div class="cell-header event-none">S</div>
        <div data-gene="smooth" class="cell"></div>
        <div data-gene="smooth" class="cell"></div>
        <div class="cell-header event-none">S</div>
        <div data-gene="smooth" class="cell"></div>
        <div data-gene="smooth" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}
function classifyOneGeneId10() {
    const cardDataId = 10;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar
    const tableHTML = `
    <div class="table">
        <div class="empty"></div>
        <div class="cell-header event-none">S</div>
        <div class="cell-header event-none">s</div>
        <div class="cell-header event-none">S</div>
        <div data-gene="smooth" class="cell"></div>
        <div data-gene="smooth" class="cell"></div>
        <div class="cell-header event-none">s</div>
        <div data-gene="smooth" class="cell"></div>
        <div data-gene="rough" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}
function classifyOneGeneId11() {
    const cardDataId = 11;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar
    const tableHTML = `
    <div class="table">
        <div class="empty"></div>
        <div class="cell-header event-none">Y</div>
        <div class="cell-header event-none">Y</div>
        <div class="cell-header event-none">Y</div>
        <div data-gene="yellow" class="cell"></div>
        <div data-gene="yellow" class="cell"></div>
        <div class="cell-header event-none">Y</div>
        <div data-gene="yellow" class="cell"></div>
        <div data-gene="yellow" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}
function classifyOneGeneId12() {
    const cardDataId = 12;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar
    const tableHTML = `
    <div class="table">
        <div class="empty"></div>
        <div class="cell-header event-none">Y</div>
        <div class="cell-header event-none">y</div>
        <div class="cell-header event-none">Y</div>
        <div data-gene="yellow" class="cell"></div>
        <div data-gene="yellow" class="cell"></div>
        <div class="cell-header event-none">y</div>
        <div data-gene="yellow" class="cell"></div>
        <div data-gene="green" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}

function classifyOneGeneId13() {
    const cardDataId = 13;
    const characteristicImages = document.querySelector(".characteristic-images");
    const tableCard = document.querySelector(".table-card-classification");

    // Limpe o conteúdo existente nas imagens das características
    characteristicImages.innerHTML = "";

    // Encontre o objeto correspondente em cardData com base no cardDataId
    const cardDataItem = cardData.find(item => item.id === cardDataId);

    // Verifique se o objeto foi encontrado
    if (cardDataItem) {
        // Itere sobre os dados em classificationData e crie as imagens
        classificationData.forEach(data => {
            // Verifique se o cardDataId do objeto classificationData corresponde ao cardDataId atual
            if (data.cardDataId === cardDataId) {
                // Crie a imagem da característica
                const characteristicImage = document.createElement("div");
                characteristicImage.classList.add("characteristic-image");
                characteristicImage.innerHTML = `
                  <div class="characteristic-info-top">
                        <span>${data.type}</span>
                    </div>
                    <div class="gene-option-item">
                        <img src="${data.imageSrc}" class="anim-floating" alt="${data.imageAlt}" data-gene="${data.gene}">
                    </div>
                    <div class="characteristic-info">
                        <span>${data.characteristic}</span>
                    </div>
                `;

                characteristicImages.appendChild(characteristicImage);
            }
        });
    }


    //Tabela para classificar



    const tableHTML = `
    <div class="table2-classification">
        <div class="empty"></div>
        <div class="cell-header event-none">TA</div>
        <div class="cell-header event-none">TA</div>
        <div class="cell-header event-none">TA</div>
        <div class="cell-header event-none">TA</div>
        <div class="cell-header event-none">TA</div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div class="cell-header event-none">TA</div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div class="cell-header event-none">TA</div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div class="cell-header event-none">TA</div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
        <div data-gene="axial" class="cell"></div>
    </div>
    <div class="card-footer">
        <button class="card-btn verify-btn">Verificar</button>
        <button class="card-btn reset-btn">Reiniciar</button>
    </div>
    <!-- Contador de acertos e erros -->
    <div class="verification-results">
        <div class="result-item">
            <div class="result-circle green"></div>
            <span>Acertos: <span id="correct-count">0</span></span>
        </div>
        <div class="result-item">
            <div class="result-circle red"></div>
            <span>Erros: <span id="error-count">0</span></span>
        </div>
    </div>
`;

    // Adicione a tabela ao elemento "table-card"
    tableCard.innerHTML = tableHTML;

    // Agora, selecione o classificationTable após a geração da tabela
    const classificationTable = tableCard.querySelector(".table");

    // Chame a função de classificação de organismo
    classificationOrganism();
}

// Chame a função de classificação quando necessário



function classificationOrganism() {
    const characteristicsSection = document.getElementById("characteristics-section");

    characteristicsSection.style.display = "block";


    const options = document.querySelectorAll(".gene-option-item");
    const tableCells = document.querySelectorAll(".cell");
    let correctCount = 0;
    let errorCount = 0;


    options.forEach(option => {
        option.addEventListener("click", () => {
            const img = option.querySelector("img");

            options.forEach(opt => {
                opt.classList.remove("selected");
                opt.querySelector("img").classList.remove("selected");
            });

            option.classList.add("selected");
            img.classList.add("selected");
        });
    });

    tableCells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (document.querySelector(".selected")) {
                const selectedImg = document.querySelector(".selected img");
                const clonedImg = selectedImg.cloneNode(true);
                cell.innerHTML = '';
                cell.appendChild(clonedImg);
                cell.classList.add("active");
            }
        });
    });

    const checkButton = document.querySelector(".verify-btn");
    checkButton.addEventListener("click", () => {
        correctCount = 0;
        errorCount = 0;

        tableCells.forEach(cell => {
            const gene = cell.getAttribute("data-gene");
            const img = cell.querySelector("img");

            if (img) {
                const imgGene = img.getAttribute("data-gene");
                if (gene === imgGene) {
                    cell.style.border = "dashed 2px var(--bs-success)";
                    cell.style.background = "#adff2f36";
                    correctCount++;
                } else {
                    cell.style.border = " dashed 2px var(--bs-danger)";
                    cell.style.background = " #8b000075";
                    errorCount++;
                }
            }
        });

        // Atualiza os contadores de acertos e erros
        const correctCountElement = document.getElementById("correct-count");
        const errorCountElement = document.getElementById("error-count");
        correctCountElement.textContent = correctCount;
        errorCountElement.textContent = errorCount;
    });


    const resetButton = document.querySelector(".reset-btn");

    resetButton.addEventListener("click", () => {
        // Lógica para reiniciar a atividade
        tableCells.forEach(cell => {
            cell.innerHTML = ''; // Limpa o conteúdo das células da tabela
            cell.style.border = '2px solid transparent';
            cell.style.background = 'none'; // Limpa a cor de fundo das células
            cell.classList.remove("active"); // Remove a classe "active" das células
        });

        correctCount = 0; // Zera o contador de acertos
        errorCount = 0; // Zera o contador de erros

        // Atualiza os contadores de acertos e erros
        const correctCountElement = document.getElementById("correct-count");
        const errorCountElement = document.getElementById("error-count");
        correctCountElement.textContent = correctCount;
        errorCountElement.textContent = errorCount;
    });
}

