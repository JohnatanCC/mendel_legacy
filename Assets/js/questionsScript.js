//Inital data
let selectedQuestions = [];
let currentQuestion = 0;
let correctAnswers = 0;
//Events
document
    .querySelector(".scoreArea button")
    .addEventListener("click", resetEvent);

//functions





const startButton = document.getElementById("startQuizButton");
const customSelect = document.querySelector(".custom-select");
const questionArea = document.querySelector(".questionArea");
const scoreArea = document.querySelector(".scoreArea");
const back = document.getElementById('back');
const selectStyled = document.querySelector('.select-styled');
const selectOptions = document.querySelectorAll('.select-option');

back.addEventListener('click', ()=> {
    customSelect.style.display = 'inline-block';
    questionArea.style.display = 'none';
    scoreArea.style.display = 'none'
    correctAnswers = 0;
    currentQuestion = 0;
})


function showQuestion() {
    const q = selectedQuestions[currentQuestion];
    if (currentQuestion < selectedQuestions.length) {
       
        let pct = Math.floor((currentQuestion / selectedQuestions.length) * 100);

        document.querySelector(".progress--bar").style.width = `${pct}%`;
        document.querySelector(".progress--bar").innerHTML = `${pct}%`;
        scoreArea.style.display = "none";
        document.querySelector(".questionArea").style.display = "block";
        document.querySelector(".question").innerHTML = q.questions;

        let optionsHtml = "";
        let optionLetters = ["a", "b", "c", "d", "e"];

        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${optionLetters[i]}</span>${q.options[i]}</div>`;
        }

        document.querySelector(".options").innerHTML = optionsHtml;
        
        // Atualizar a pergunta exibida
        document.querySelector(".question").innerHTML = q.question;
        
        // Remover ouvintes de eventos anteriores para evitar duplicações
        document.querySelectorAll(".options .option").forEach((item) => {
            item.removeEventListener("click", optionClickEvent);
        });

        // Adicionar novos ouvintes de eventos
        document.querySelectorAll(".options .option").forEach((item) => {
            item.addEventListener("click", optionClickEvent);
        });
    } else {
        finishQuiz();
    }
}



selectStyled.addEventListener('click', function() {
    this.parentNode.classList.toggle('open');
  });

  selectOptions.forEach(option => {
    option.addEventListener('click', function() {
        selectedDifficulty = this.getAttribute('value');
        selectStyled.textContent = this.textContent;
        selectStyled.parentNode.classList.remove('open');

        // Habilitar o botão de iniciar se um nível foi selecionado
        if (selectedDifficulty) {
            startButton.classList.remove('disabled');
        } else {
            startButton.classList.add('disabled');
        }
    });
});

   

    document.addEventListener('click', function(e) {
        if (!selectStyled.parentNode.contains(e.target)) {
          selectStyled.parentNode.classList.remove('open');
        }
      });
      
startButton.addEventListener('click', () => {
    
    selectedQuestions = questions.filter(q => q.difficulty === selectedDifficulty);


    if (selectedQuestions.length > 0) {
        customSelect.style.display = 'none';
        questionArea.style.display = 'flex';
        currentQuestion = 0;
        // shuffleArray(selectedQuestions); // Embaralhar as questões aleatoriamente
        showQuestion(); // Exibir a primeira questão
    } else {
        alert('Nenhuma pergunta encontrada para este nível.');
    }

});



function finishQuiz() {
    let totalQuestionsForDifficulty = selectedQuestions.length;
    let points = Math.floor((correctAnswers / totalQuestionsForDifficulty) * 100);

    if (points < 50) {
        document.querySelector(".scoreText1").innerHTML = "Vish tente denovo!";
        document.querySelector(".scorePct").style.color = "#DC3545";
    } else if (points >= 50 && points < 70) {
        document.querySelector(".scoreText1").innerHTML =
            "Bom mas pode ser melhor!";
        document.querySelector(".scorePct").style.color = "#FFC107";
    } else if (points >= 70) {
        document.querySelector(".scoreText1").innerHTML =
            "Parabéns, você tem potencial!";
        document.querySelector(".scorePct").style.color = "#198754";
    }

    document.querySelector(".scorePct").innerHTML = `Acertou ${points}%`;
    document.querySelector(
        ".scoreText2"
    ).innerHTML = `Você respondeu ${totalQuestionsForDifficulty} questões e acertou ${correctAnswers}`;

    document.querySelector(".scoreArea").style.display = "block";
    document.querySelector(".questionArea").style.display = "none";
    document.querySelector(".progress--bar").style.width = "100%";
    document.querySelector(".progress--bar").innerHTML = "100%";
}


function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute("data-op"));

    if (questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
    }

    currentQuestion++;
    showQuestion();
}

function resetEvent() {
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}


selectOptions.forEach(option => {
    option.addEventListener('click', function() {
        selectedDifficulty = this.getAttribute('value');
        selectStyled.textContent = this.textContent;
        selectStyled.parentNode.classList.remove('open');

        // Remover a classe 'disabled' do botão de iniciar quando uma dificuldade é selecionada
        if (selectedDifficulty) {
            startButton.classList.remove('disabled');
        }
    });
});

/*
Dados Iniciais:
currentQuestion mantém o índice da pergunta atual sendo exibida.
correctAnswers mantém o número de respostas corretas dadas pelo usuário.
Tratamento de Eventos:

Um ouvinte de evento é associado a um botão no DOM com a classe .scoreArea button. Esse botão serve para acionar um evento de reinício do quiz quando clicado.
Definições de Funções:

showQuestion(): Essa função é responsável por mostrar a pergunta atual na página. Ela calcula a porcentagem de progresso, atualiza a barra de progresso e exibe a pergunta junto com suas opções. Também são adicionados ouvintes de eventos a cada opção para interação do usuário.
finishQuiz(): Essa função é chamada quando todas as perguntas foram respondidas. Ela calcula a pontuação do usuário com base no número de respostas corretas e exibe mensagens e cores diferentes com base na pontuação obtida.
optionClickEvent(e): Essa função é acionada quando o usuário clica em uma opção. Ela verifica se a opção clicada é a resposta correta para a pergunta atual e atualiza o contador correctAnswers de acordo. Em seguida, avança para a próxima pergunta chamando showQuestion().
resetEvent(): Essa função está associada ao botão de reinício. Ela redefine tanto correctAnswers quanto currentQuestion para zero, reiniciando efetivamente o quiz.
Execução das Funções:

O script começa chamando a função showQuestion(), que inicia o quiz exibindo a primeira pergunta.
Lógica do Código:

O código utiliza declarações condicionais para determinar o desempenho do usuário e altera o texto exibido e as cores de acordo.
Manipulação do HTML:

O código interage com a estrutura HTML selecionando vários elementos usando document.querySelector() e manipulando suas propriedades de conteúdo e estilo.
Feedback e Pontuação:

A pontuação do usuário é calculada dividindo o número de respostas corretas pelo número total de perguntas e convertendo para uma porcentagem.
As mensagens de feedback e as cores dependem da porcentagem de pontuação do usuário.
De maneira geral, esse código cria uma experiência básica de quiz onde os usuários podem responder a perguntas, receber feedback e ver seu progresso por meio de uma barra de progresso. É importante observar que o código presume a existência de certos elementos HTML com classes específicas (por exemplo, .scoreArea, .questionArea, .progress--bar, .question, .options, etc.) para uma interação adequada.

*/
