//variables linking to the HTML elements that will be used
var timerEl = document.getElementById("timer")
var startBtnEl = document.getElementById("startBtn")
var startMsgEl = document.getElementById("startMsg")
var questionEl = document.getElementById("question")
var answerEl = document.getElementById("answer")
var initialsEl = document.getElementById("highscores")
var scoreEl = document.getElementById("score")
var inputEl = document.getElementById("scoreInitials")
var buttonEl = document.getElementById("scoreBtn")

//the questions, answers, and correct answers in the form of an object
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

//global variables we will need in multiple functions
var index = 0
var counter
var timer
var totalScore = 100

//function that grabs each question and corresponding answers
function getQuestion() {
    //displays each question
    questionEl.textContent = myQuestions[index].question;
    answerEl.innerHTML = ""
    //for loop grabs each answer for each question
    for (i = 0; i < myQuestions[index].answers.length; i++) {
       var button = document.createElement("button") 
       button.addEventListener("click", checkAnswer)
       button.innerText = myQuestions[index].answers[i]
       answerEl.appendChild(button)
    }
    

}

//function logs users choices and compares them to the correct answers
function checkAnswer(event) {
    //if statement for when the user gets to the end of the quiz; timer stops, and the space to log initials amd score appears
    if (index === myQuestions.length - 1) {
        answerEl.style.display = "none"
        questionEl.style.display = "none"
        clearInterval(timer)
        scoreEl.textContent = ("Your final score is ") + totalScore;
        initialsEl.style.display="block"
        buttonEl.addEventListener("click", saveScores)
        return
    }

    var choice = event.target.innerText
    console.log(choice)
    // if/else statement to check if answers are correct. if correct it displays the next question, if wrong it deducts 5 seconds and displays the next question.
    if (choice === myQuestions[index].correctAnswer) {
        index = index + 1
        getQuestion()
    } else {
        counter = counter - 5
        totalScore = totalScore - 20
        index = index + 1
        getQuestion()
    }

}

//function to save scores to local storage;
function saveScores() {

    var initials = inputEl.value 
    console.log(initials)
    var scores = JSON.parse(localStorage.getItem("scores")) || []

    scores.push({score:totalScore, name:initials})

    localStorage.setItem("scores", JSON.stringify(scores))

    window.location.reload()

}

//initiates game and starts timer
function startGame() {

    startMsgEl.style.display = "none"
    startBtnEl.style.display = "none"

    getQuestion()

    startTimer()

}

//timer function
function startTimer() {
    counter = 60;
    timerEl.textContent = counter + (" seconds left");

    timer = setInterval(function(){
        counter--;
        timerEl.textContent = counter + (" seconds left");

        if (counter === 0) {
            timerEl.textContent = ("TIME'S UP");
            answerEl.style.display = "none"
            questionEl.style.display = "none"
            clearInterval(timer);
        }
        
    }, 1000);
}

document.getElementById("startBtn").
addEventListener("click", startGame);