const cardData = [

    //Altura das flores
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
        headerGenes: ["T", "t", "T", "", "", "t", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Heterozigótico</span>
                <span>Mãe: Heterozigótico</span>
                <span>Classificar: Altura das flores (TT)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId1()" class="card-btn">Classificar</a>
        `
    },

    //Posição das flores 
    {
        id: 3,
        organism: "Ervilhas",
        numCharacteristics: 1,
        characteristic1: "Posição das flores (AA)",
        characteristic2: "Vazio",
        headerGenes: ["A", "A", "A", "", "", "A", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Homozigótico</span>
                <span>Mãe: Homozigótico</span>
                <span>Classificar: Posição das flores (AA)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId2()" class="card-btn">Classificar</a>
        `
    },
  
    {
        id: 4,
        organism: "Ervilhas",
        numCharacteristics: 1,
        characteristic1: "Posição das flores (AA)",
        characteristic2: "Vazio",
        headerGenes: ["A", "a", "A", "", "", "a", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Heterozigótico</span>
                <span>Mãe: Heterozigótico</span>
                <span>Classificar: Posição das flores (AA)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId2()" class="card-btn">Classificar</a>
        `
    },
  
    //Cor da flor (PP)
    {
        id: 5,
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
                <span>Classificar: PCor da flor (PP)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId3()" class="card-btn">Classificar</a>
        `
    },
  
    {
        id: 6,
        organism: "Ervilhas",
        numCharacteristics: 1,
        characteristic1: "Cor da flor (PP)",
        characteristic2: "Vazio",
        headerGenes: ["P", "p", "P", "", "", "p", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Heterozigótico</span>
                <span>Mãe: Heterozigótico</span>
                <span>Classificar: Cor da flor (PP)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId3()" class="card-btn">Classificar</a>
        `
    },
  
    //Cor da vagem (GG)
    {
        id: 7,
        organism: "Ervilhas",
        numCharacteristics: 1,
        characteristic1: "Cor da vagem (GG)",
        characteristic2: "Vazio",
        headerGenes: ["G", "G", "G", "", "", "G", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Homozigótico</span>
                <span>Mãe: Homozigótico</span>
                <span>Classificar: Cor da vagem (GG)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId4()" class="card-btn">Classificar</a>
        `
    },
  
    {
        id: 8,
        organism: "Ervilhas",
        numCharacteristics: 1,
        characteristic1: "Cor da vagem (GG)",
        characteristic2: "Vazio",
        headerGenes: ["G", "g", "G", "", "", "g", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Heterozigótico</span>
                <span>Mãe: Heterozigótico</span>
                <span>Classificar: Cor da vagem (GG)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId4()" class="card-btn">Classificar</a>
        `
    },
  
    //Forma da vagem (SS)
    {
        id: 9,
        organism: "Ervilhas",
        numCharacteristics: 1,
        characteristic1: "Forma da vagem (SS)",
        characteristic2: "Vazio",
        headerGenes: ["S", "S", "S", "", "", "S", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Homozigótico</span>
                <span>Mãe: Homozigótico</span>
                <span>Classificar: Forma da vagem (SS)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId5()" class="card-btn">Classificar</a>
        `
    },
  
    {
        id: 10,
        organism: "Ervilhas",
        numCharacteristics: 1,
        characteristic1: "Forma da vagem (SS)",
        characteristic2: "Vazio",
        headerGenes: ["S", "s", "S", "", "", "s", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Heterozigótico</span>
                <span>Mãe: Heterozigótico</span>
                <span>Classificar: Forma da vagem (SS)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId5()" class="card-btn">Classificar</a>
        `
    },
  
    //Cor da semente (YY)
    {
        id: 11,
        organism: "Ervilhas",
        numCharacteristics: 1,
        characteristic1: "Cor da semente (YY)",
        characteristic2: "Vazio",
        headerGenes: ["Y", "Y", "Y", "", "", "Y", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Homozigótico</span>
                <span>Mãe: Homozigótico</span>
                <span>Classificar: Cor da semente (YY)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId6()" class="card-btn">Classificar</a>
        `
    },
  
    {
        id: 12,
        organism: "Ervilhas",
        numCharacteristics: 1,
        characteristic1: "Cor da semente (YY)",
        characteristic2: "Vazio",
        headerGenes: ["Y", "y", "Y", "", "", "y", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Heterozigótico</span>
                <span>Mãe: Heterozigótico</span>
                <span>Classificar: Cor da semente (YY)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId6()" class="card-btn">Classificar</a>
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
    {
        //dominate
        cardDataId: 3, // Índice do objeto correspondente em cardData
        gene: "tall",
        imageSrc: "../Assets/imgs/tall_plant.png",
        imageAlt: "Planta Alta",
        characteristic: "Planta Alta"
    },
    {//recessivo 
        cardDataId: 3, 
        gene: "small",
        imageSrc: "../Assets/imgs/small_plant.png",
        imageAlt: "Planta Pequena",
        characteristic: "Planta Baixa"
    },
    // Adicione mais objetos com os dados das imagens e tabelas aqui
];



