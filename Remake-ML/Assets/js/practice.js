
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
    // Função para criar os cards e adicioná-los ao HTML
    function createAndAddCards(filteredData) {
        const cardContainer = document.querySelector(".table-cards-content");

        // Limpe o conteúdo existente no container de cards
        cardContainer.innerHTML = "";

        // Itere sobre os dados filtrados e crie os cards
        filteredData.forEach(data => {
            const card = createCard(data);
            cardContainer.appendChild(card);
        });
    }


    // Função para filtrar os cards com base nos valores do formulário
    function filterCards(e) {
        e.preventDefault(); // Impede o envio do formulário padrão

        const organismSelect = document.getElementById("organismSelect");
        const numCharacteristicsInput = document.getElementById("numCharacteristicsInput1");
        const characteristic1Select = document.getElementById("characteristic1Select");
        const characteristic2Select = document.getElementById("characteristic2Select");

        const selectedOrganism = organismSelect.value;
        const selectedNumCharacteristics = numCharacteristicsInput.value;
        const selectedCharacteristic1 = characteristic1Select.value;
        const selectedCharacteristic2 = characteristic2Select.value;

        console.log("Selected Organism:", selectedOrganism);
        console.log("Selected Num Characteristics:", selectedNumCharacteristics);
        console.log("Selected Characteristic 1:", selectedCharacteristic1);
        console.log("Selected Characteristic 2:", selectedCharacteristic2);

        // Filtrar os cards com base nos valores do formulário
        const filteredCards = cardData.filter(data => {
            return (
                (selectedOrganism === "Todos" || data.organism === selectedOrganism) &&
                (selectedNumCharacteristics === "Todos" || data.numCharacteristics === selectedNumCharacteristics) &&
                (selectedCharacteristic1 === "Todas" || data.characteristic1 === selectedCharacteristic1) &&
                (selectedCharacteristic2 === "Todas" || data.characteristic2 === selectedCharacteristic2)
            );
        });

        console.log("Filtered Cards:", filteredCards);

        // Atualizar os cards com os dados filtrados
        createAndAddCards(filteredCards);


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
    filterForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio do formulário padrão
        filterCards(e); // Chama a função de filtragem e passe o evento como argumento
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

// Chame a função de classificação quando necessário



    function classificationOrganism() {
    
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

