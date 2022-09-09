var timerEl = document.getElementById("timer")
var startBtnEl = document.getElementById("startBtn")
var questionEl = document.getElementById("question")
var answerEl = document.getElementById("answer")

const myQuestions = [{
    question: 'Which of the following is NOT a primitive data type?',
    answers: ['number', 'boolean', 'class', 'string'],
    correctAnswer: 3
},
{
    question: 'Javascript arrays are used to store what?',
    answers: ['arrays', 'numbers', 'strings', 'all of the above'],
    correctAnswer: 4
},
{
    question: 'Inside which HTML element do we link the Javascript file?',
    answers: ['script', 'div', 'html', 'body'],
    correctAnswer: 1
},
{
    question: 'Which operator is used to assign a value to a variable?',
    answers: ['-', '=', '*', 'x'],
    correctAnswer: 2
},
{
    question: 'The conditions of an if/else statement are inclosed in ______.',
    answers: ['curly brackets', 'square brackets', 'parenthesis', 'quotation marks'],
    correctAnswer: 3
},
]






function startGame() {
    startTimer()

    


}


function startTimer() {
    var counter = 60;
    timerEl.textContent = counter + (" seconds left");

    var timer = setInterval(function(){
        counter--;
        timerEl.textContent = counter + (" seconds left");

        if (counter === 0) {
            timerEl.textContent = ("TIME'S UP");
            clearInterval(timer);
            gameStart = false;
        }
        
    }, 1000);
}

document.getElementById("startBtn").
addEventListener("click", startGame);