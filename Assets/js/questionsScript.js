//Inital data
let currentQuestion = 0;
let correctAnswers = 0;

//Events
    document.querySelector('.scoreArea button').addEventListener('click', resetEvent)
//functions

showQuestion();

function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100);

        document.querySelector('.progress--bar').style.width = `${pct}%`;
        document.querySelector('.progress--bar').innerHTML = `${pct}%`;
        document.querySelector('.scoreArea').style.display = "none"
        document.querySelector('.questionArea').style.display = "block"

        document.querySelector('.question').innerHTML = q.question;

        let optionsHtml = '';

        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`;
        }

        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        })
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    let points = Math.floor((correctAnswers / questions.length) * 100);

    if (points < 50) {
        document.querySelector('.scoreText1').innerHTML = "Vish tente denovo!";
        document.querySelector('.scorePct').style.color = "#FF0000";
    } else if (points >= 50 && points < 70) {
        document.querySelector('.scoreText1').innerHTML = "Bom mas pode ser melhor!";
        document.querySelector('.scorePct').style.color = "#FF0";
    } else if (points >= 70) {
        document.querySelector('.scoreText1').innerHTML = "Parabéns vc tem potencial!";
        document.querySelector('.scorePct').style.color = "#0D630D";
    }

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}`

    document.querySelector('.scoreArea').style.display = "block"
    document.querySelector('.questionArea').style.display = "none"
    document.querySelector('.progress--bar').style.width = '100%';
    document.querySelector('.progress--bar').innerHTML = '100%';

}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if (questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
    }

    currentQuestion++;
    showQuestion();
}

function  resetEvent() {
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}
