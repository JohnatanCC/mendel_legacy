const cardData = [
    {
        id: 1,
        organism: "Ervilhas",
        numCharacteristics: 1,
        characteristic1: "Altura das flores (TT)",
        characteristic2: "Vazio",
        headerGenes: ["T", "T", "T", "", "", "T", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Homozigótico</span>
                <span>Mãe: Homozigótico</span>
                <span>Classificar: Altura das flores (TT)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId1()" class="card-btn">Classificar</a>
        `
    },
    {
        id: 2,
        organism: "Ervilhas",
        numCharacteristics: 1,
        characteristic1: "Altura das flores (TT)",
        characteristic2: "Vazio",
        headerGenes: ["?", "?", "?", "", "", "?", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Heterozigótico</span>
                <span>Mãe: Homozigótico</span>
                <span>Classificar: Altura das flores (TT)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId2()" class="card-btn">Classificar</a>
        `
    },
    {
        id: 3,
        organism: "Ervilhas",
        numCharacteristics: 1,
        characteristic1: "Cor da flor (PP)",
        characteristic2: "Vazio",
        headerGenes: ["P", "P", "P", "", "", "P", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Homozigótico</span>
                <span>Mãe: Homozigótico</span>
                <span>Classificar: Posição das flores (AA)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId3()" class="card-btn">Classificar</a>
        `
    },

];


const classificationData = [
    {
        cardDataId: 1, // Índice do objeto correspondente em cardData
        gene: "tall",
        imageSrc: "../Assets/imgs/tall_plant.png",
        imageAlt: "Planta Alta",
        characteristic: "Planta Alta"
    },
    {
        cardDataId: 1, 
        gene: "small",
        imageSrc: "../Assets/imgs/small_plant.png",
        imageAlt: "Planta Pequena",
        characteristic: "Planta Baixa"
    },
    // Adicione mais objetos com os dados das imagens e tabelas aqui
];



