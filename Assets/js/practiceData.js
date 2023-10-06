const cardData = [

    //Altura das flores
    {
        id: 1,
        organism: "Ervilhas",
        characteristic1: "Altura das flores (TT)",
        characteristic2: "Vazio",
        headerGenes: ["T", "T", "T", "", "", "T", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Homozigótico (Dominante)</span>
                <span>Mãe: Homozigótico (Dominante)</span>
                <span>Classificar: Altura das flores (TT)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId1()" class="card-btn">Classificar</a>
        `
    },
    {
        id: 2,
        organism: "Ervilhas",
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
            <a href="#characteristics-section" onclick="classifyOneGeneId2()" class="card-btn">Classificar</a>
        `
    },

    //Posição das flores 
    {
        id: 3,
        organism: "Ervilhas",
        characteristic1: "Posição das flores (AA)",
        characteristic2: "Vazio",
        headerGenes: ["A", "A", "A", "", "", "A", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Homozigótico (Dominante)</span>
                <span>Mãe: Homozigótico (Dominante)</span>
                <span>Classificar: Posição das flores (AA)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId3()" class="card-btn">Classificar</a>
        `
    },

    {
        id: 4,
        organism: "Ervilhas",
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
            <a href="#characteristics-section" onclick="classifyOneGeneId4()" class="card-btn">Classificar</a>
        `
    },

    //Cor da flor (PP)
    {
        id: 5,
        organism: "Ervilhas",
        characteristic1: "Cor da flor (PP)",
        characteristic2: "Vazio",
        headerGenes: ["P", "P", "P", "", "", "P", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Homozigótico (Dominante)</span>
                <span>Mãe: Homozigótico (Dominante)</span>
                <span>Classificar: PCor da flor (PP)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId5()" class="card-btn">Classificar</a>
        `
    },

    {
        id: 6,
        organism: "Ervilhas",
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
            <a href="#characteristics-section" onclick="classifyOneGeneId6()" class="card-btn">Classificar</a>
        `
    },

    //Cor da vagem (GG)
    {
        id: 7,
        organism: "Ervilhas",
        characteristic1: "Cor da vagem (GG)",
        characteristic2: "Vazio",
        headerGenes: ["G", "G", "G", "", "", "G", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Homozigótico (Dominante)</span>
                <span>Mãe: Homozigótico (Dominante)</span>
                <span>Classificar: Cor da vagem (GG)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId7()" class="card-btn">Classificar</a>
        `
    },

    {
        id: 8,
        organism: "Ervilhas",
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
            <a href="#characteristics-section" onclick="classifyOneGeneId8()" class="card-btn">Classificar</a>
        `
    },

    //Forma da vagem (SS)
    {
        id: 9,
        organism: "Ervilhas",
        characteristic1: "Forma da vagem (SS)",
        characteristic2: "Vazio",
        headerGenes: ["S", "S", "S", "", "", "S", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Homozigótico (Dominante)</span>
                <span>Mãe: Homozigótico (Dominante)</span>
                <span>Classificar: Forma da vagem (SS)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId9()" class="card-btn">Classificar</a>
        `
    },

    {
        id: 10,
        organism: "Ervilhas",
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
            <a href="#characteristics-section" onclick="classifyOneGeneId10()" class="card-btn">Classificar</a>
        `
    },

    //Cor da semente (YY)
    {
        id: 11,
        organism: "Ervilhas",
        characteristic1: "Cor da semente (YY)",
        characteristic2: "Vazio",
        headerGenes: ["Y", "Y", "Y", "", "", "Y", "", ""],
        footerContent: `
            <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
            <div class="card-info anim-entrance">
                <span>Pai: Homozigótico (Dominante)</span>
                <span>Mãe: Homozigótico (Dominante)</span>
                <span>Classificar: Cor da semente (YY)</span>
            </div>
            <a href="#characteristics-section" onclick="classifyOneGeneId11()" class="card-btn">Classificar</a>
        `
    },

    {
        id: 12,
        organism: "Ervilhas",
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
            <a href="#characteristics-section" onclick="classifyOneGeneId12()" class="card-btn">Classificar</a>
        `
    },

    //duas caracteristicas
    {
        id: 2,
        organism: "Ervilhas",
        characteristic1: "Altura das flores (TT)",
        characteristic2: "Posição das flores (AA)",
        headerGenes: ["TA", "TA", "TA", "TA", "TA", "", "", "", "", "TA", "", "", "", "", "TA", "", "", "", "", "TA", "", "", "", ""],
        footerContent: `
        <button class="card-btn" onclick="toggleInfo(this)">Ver informações</button>
        <div class="card-info anim-entrance">
        <h5>1º característica</h5>
            <span>Pai: Homozigótico (Dominante)</span>
            <span>Mãe: Homozigótico (Dominante)</span>
            <span>Classificar: Altura das flores (TT)</span>
            <h5>2º característica</h5>
            <span>Pai: Homozigótico (Dominante)</span>
            <span>Mãe: Homozigótico (Dominante)</span>
            <span>Classificar: Posição das flores (AA)</span>
        </div>
        <a href="#characteristics-section" onclick="classifyOneGeneId13()" class="card-btn">Classificar</a>
    `
    },


];


const classificationData = [
    {
        cardDataId: 1, // Índice do objeto correspondente em cardData
        gene: "tall",
        imageSrc: "../Assets/imgs/pea/Altura-Alta.png",
        imageAlt: "Planta Alta",
        characteristic: "Planta Alta",
        type: "Dominante"
    },
    {
        cardDataId: 1,
        gene: "small",
        imageSrc: "../Assets/imgs/pea/Altura-Anã.png",
        imageAlt: "Planta Pequena",
        characteristic: "Planta Anã",
        type: "Recessivo"
    },

    {
        cardDataId: 2, // Índice do objeto correspondente em cardData
        gene: "tall",
        imageSrc: "../Assets/imgs/pea/Altura-Alta.png",
        imageAlt: "Planta Alta",
        characteristic: "Planta Alta",
        type: "Dominante"
    },
    {
        cardDataId: 2,
        gene: "small",
        imageSrc: "../Assets/imgs/pea/Altura-Anã.png",
        imageAlt: "Planta Pequena",
        characteristic: "Planta Anã",
        type: "Recessivo"
    },
    {//recessivo 
        cardDataId: 3,
        gene: "axial",
        imageSrc: "../Assets/imgs/pea/Posição-Axial.png",
        imageAlt: "Posição Axial",
        characteristic: "Posição Axial",
        type: "Dominante"
    },
    {//Dominante
        cardDataId: 3,
        gene: "terminal",
        imageSrc: "../Assets/imgs/pea/Posição-Terminal.png",
        imageAlt: "Posição Terminal",
        characteristic: "Posição Terminal",
        type: "Recessivo"
    },
    {
        cardDataId: 13, // Índice do objeto correspondente em cardData
        gene: "tall",
        imageSrc: "../Assets/imgs/pea/Altura-Alta.png",
        imageAlt: "Planta Alta",
        characteristic: "Planta Alta",
        type: "Dominante"
    },
    {
        cardDataId: 13,
        gene: "small",
        imageSrc: "../Assets/imgs/pea/Altura-Anã.png",
        imageAlt: "Planta Pequena",
        characteristic: "Planta Anã",
        type: "Recessivo"
    },
    {//recessivo 
        cardDataId: 13,
        gene: "axial",
        imageSrc: "../Assets/imgs/pea/Posição-Axial.png",
        imageAlt: "Posição Axial",
        characteristic: "Posição Axial",
        type: "Dominante"
    },
    {//Dominante
        cardDataId: 13,
        gene: "terminal",
        imageSrc: "../Assets/imgs/pea/Posição-Terminal.png",
        imageAlt: "Posição Terminal",
        characteristic: "Posição Terminal",
        type: "Recessivo"
    },
    {//recessivo 
        cardDataId: 4,
        gene: "axial",
        imageSrc: "../Assets/imgs/pea/Posição-Axial.png",
        imageAlt: "Posição Axial",
        characteristic: "Posição Axial",
        type: "Dominante"
    },
    {//Dominante
        cardDataId: 4,
        gene: "terminal",
        imageSrc: "../Assets/imgs/pea/Posição-Terminal.png",
        imageAlt: "Posição Terminal",
        characteristic: "Posição Terminal",
        type: "Recessivo"
    },
    {//recessivo 
        cardDataId: 5,
        gene: "rose",
        imageSrc: "../Assets/imgs/pea/CorFlor-Rosa.png",
        imageAlt: "Cor Rosa",
        characteristic: "Flor Rosa",
        type: "Dominante"
    },
    {//Dominante
        cardDataId: 5,
        gene: "purple",
        imageSrc: "../Assets/imgs/pea/CorFlor-Roxa.png",
        imageAlt: "Cor Roxa",
        characteristic: "Flor Roxa",
        type: "Recessivo"
    },
    {//recessivo 
        cardDataId: 6,
        gene: "rose",
        imageSrc: "../Assets/imgs/pea/CorFlor-Rosa.png",
        imageAlt: "Cor Rosa",
        characteristic: "Flor Rosa",
        type: "Dominante"
    },
    {//Dominante
        cardDataId: 6,
        gene: "purple",
        imageSrc: "../Assets/imgs/pea/CorFlor-Roxa.png",
        imageAlt: "Cor Roxa",
        characteristic: "Flor Roxa",
        type: "Recessivo"
    },
    {//recessivo 
        cardDataId: 7,
        gene: "yellow",
        imageSrc: "../Assets/imgs/pea/CorVag-Amarelo.png",
        imageAlt: "Vagen amarelo",
        characteristic: "Vagen amarelo",
        type: "Dominante"
    },
    {//Dominante
        cardDataId: 7,
        gene: "green",
        imageSrc: "../Assets/imgs/pea/CorVag-Verde.png",
        imageAlt: "Vagem verde",
        characteristic: "Vagem verde",
        type: "Recessivo"
    },
    {//recessivo 
        cardDataId: 8,
        gene: "yellow",
        imageSrc: "../Assets/imgs/pea/CorVag-Amarelo.png",
        imageAlt: "Vagen amarelo",
        characteristic: "Vagen amarelo",
        type: "Dominante"
    },
    {//Dominante
        cardDataId: 8,
        gene: "green",
        imageSrc: "../Assets/imgs/pea/CorVag-Verde.png",
        imageAlt: "Vagem verde",
        characteristic: "Vagem verde",
        type: "Recessivo"
    },
    {//recessivo 
        cardDataId: 9,
        gene: "smooth",
        imageSrc: "../Assets/imgs/pea/TexVag-Lisa.png",
        imageAlt: "Vagen lisa",
        characteristic: "Vagen lisa",
        type: "Dominante"
    },
    {//Dominante
        cardDataId: 9,
        gene: "rough",
        imageSrc: "../Assets/imgs/pea/TexVag-Rugosa.png",
        imageAlt: "Vagem rugosa",
        characteristic: "Vagem Rugosa",
        type: "Recessivo"
    },
    {//recessivo 
        cardDataId: 10,
        gene: "smooth",
        imageSrc: "../Assets/imgs/pea/TexVag-Lisa.png",
        imageAlt: "Vagen lisa",
        characteristic: "Vagen lisa",
        type: "Dominante"
    },
    {//Dominante
        cardDataId: 10,
        gene: "rough",
        imageSrc: "../Assets/imgs/pea/TexVag-Rugosa.png",
        imageAlt: "Vagem rugosa",
        characteristic: "Vagem Rugosa",
        type: "Recessivo"
    },
        {//recessivo 
        cardDataId: 11,
        gene: "yellow",
        imageSrc: "../Assets/imgs/pea/corSem-Amarelo.png",
        imageAlt: "Semente amarelo",
        characteristic: "Semente amarelo",
        type: "Dominante"
    },
    {//Dominante
        cardDataId: 11,
        gene: "green",
        imageSrc: "../Assets/imgs/pea/corSem-Verde.png",
        imageAlt: "Semente verde",
        characteristic: "Semente verde",
        type: "Recessivo"
    },
            {//recessivo 
        cardDataId: 12,
        gene: "yellow",
        imageSrc: "../Assets/imgs/pea/corSem-Amarelo.png",
        imageAlt: "Semente amarelo",
        characteristic: "Semente amarelo",
        type: "Dominante"
    },
    {//Dominante
        cardDataId: 12,
        gene: "green",
        imageSrc: "../Assets/imgs/pea/corSem-Verde.png",
        imageAlt: "Semente verde",
        characteristic: "Semente verde",
        type: "Recessivo"
    },
    

    // {
    //     cardDataId: 2, // Índice do objeto correspondente em cardData
    //     gene: "tall",
    //     imageSrc: "../Assets/imgs/pea/Altura-Alta.png",
    //     imageAlt: "Planta Alta",
    //     characteristic: "Planta Alta",
    //     type: "Dominante"
    // },
    // {
    //     cardDataId: 2,
    //     gene: "small",
    //     imageSrc: "../Assets/imgs/pea/Altura-Anã.png",
    //     imageAlt: "Planta Pequena",
    //     characteristic: "Planta Anã",
    //     type: "Recessivo"
    // },
    // {//recessivo 
    //     cardDataId: 2,
    //     gene: "axial",
    //     imageSrc: "../Assets/imgs/pea/Posição-Axial.png",
    //     imageAlt: "Posição Axial",
    //     characteristic: "Posição Axial",
    //     type: "Dominante"
    // },
    // {//recessivo 
    //     cardDataId: 2,
    //     gene: "terminal",
    //     imageSrc: "../Assets/imgs/pea/Posição-Terminal.png",
    //     imageAlt: "Posição Terminal",
    //     characteristic: "Posição Terminal",
    //      type: "Dominante"
    // },
    // Adicione mais objetos com os dados das imagens e tabelas aqui
];



