var timerEl = document.getElementById("timer")
var startBtnEl = document.getElementById("startBtn")
var questionEl = document.getElementById("question")
var answerEl = document.getElementById("answer")
var initialsEl = document.getElementById("highscores")
var inputEl = document.getElementById("scoreInitials")
var buttonEl = document.getElementById("scoreBtn")

var myQuestions = [{
    question: 'Which of the following is NOT a primitive data type?',
    answers: ['number', 'boolean', 'class', 'string'],
    correctAnswer: 'class'
},
{
    question: 'Javascript arrays are used to store what?',
    answers: ['arrays', 'numbers', 'strings', 'all of the above'],
    correctAnswer: 'all of the above'
},
{
    question: 'Inside which HTML element do we link the Javascript file?',
    answers: ['script', 'div', 'html', 'body'],
    correctAnswer: 'script'
},
{
    question: 'Which operator is used to assign a value to a variable?',
    answers: ['-', '=', '*', 'x'],
    correctAnswer: '='
},
{
    question: 'The conditions of an if/else statement are inclosed in ______.',
    answers: ['curly brackets', 'square brackets', 'parenthesis', 'quotation marks'],
    correctAnswer: 'parenthesis'
},
];

// var index = 0
// var counter
// var timer

// function getQuestion() {

//     questionEl.textContent = myQuestions[index].question;
//     answerEl.innerHTML = ""

//     for (i = 0; i < myQuestions[index].answers.length; i++) {
//        var button = document.createElement("button") 
//        button.addEventListener("click", checkAnswer)
//        button.innerText = myQuestions[index].answers[i]
//        answerEl.appendChild(button)
//     }
    

// }

// function checkAnswer(event) {

//     if (index === myQuestions.length - 1) {
//         answerEl.style.display = "none"
//         questionEl.style.display = "none"
//         clearInterval(timer)
//         initialsEl.style.display="block"
//         buttonEl.addEventListener("click", saveScores)
//         return
//     }

//     var choice = event.target.innerText
//     console.log(choice)

//     if (choice === myQuestions[index].correctAnswer) {
//         index = index + 1
//         getQuestion()
//     } else {
//         counter = counter - 5
//         index = index + 1
//         getQuestion()
//     }



// }

// function saveScores() {

// var initials = inputEl.value 
// console.log(initials)
// var scores = JSON.parse(localStorage.getItem("scores")) || []

// scores.push({score:counter, name:initials})

// localStorage.setItem("scores", JSON.stringify(scores))

// window.location.reload()

// }


// function startGame() {
//     startBtnEl.style.display = "none"

//     getQuestion()

//     startTimer()
// }


function startTimer() {
    counter = 60;
    timerEl.textContent = counter + (" seconds left");

    timer = setInterval(function(){
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