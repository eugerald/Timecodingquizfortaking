
var quizContent = document.getElementById("quiz-content")
var endQuizContent = document.getElementById("end-quiz")
var scoreContent = document.getElementById("score-content")
var startButton = document.getElementById("startButton")
var question = document.getElementById("question")
var answer1 = document.getElementById("answer-1")
var answer2 = document.getElementById("answer-2")
var answer3 = document.getElementById("answer-3")
var answer4 = document.getElementById("answer-4")
var scoreEl = document.getElementById("score")
var resultEl = document.getElementById("result")
var subBtn = document.getElementById("submit-btn")
var initialsInput = document.getElementById("initials")
let tble = document.getElementById("t-content")

subBtn.addEventListener("click", () => {
    endQuizContent.style.display = "none"
    scoreContent.style.display = "block"

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    td1.innerText = initialsInput.value
    td2.innerText = score
    tr.appendChild(td1)
    tr.appendChild(td2)
    tble.appendChild(tr)
    
})

quizContent.style.display = "none"
endQuizContent.style.display = "none"
scoreContent.style.display = "none"

var qno = 0;
var score = 0;
var timerObj;
var timerCount =100;
var timerEl = document.getElementById("timer")
var questionsList = [
    {
        question: "HTML is",
        answer1:"Hyper text markup",
        answer2:"Hypertension Markup language",
        answer3:"Hightext markup list",
        answer4:"Hyper text Markup Language",
        answer:"answer-4"
    },
    {
        question: "HTML latest version",
        answer1:"Hyper text  4",
        answer2:"1",
        answer3:"100t",
        answer4:"5",
        answer:"answer-4"
    },
    {
        question: "display flex is",
        answer1:"Hyper text markup",
        answer2:"CSS property",
        answer3:"Hightext markup list",
        answer4:"JS property",
        answer:"answer-2"
    },
    {
        question: "CSS is",
        answer1:"Cascading style sheet",
        answer2:"Hypertension Markup language",
        answer3:"Hightext markup list",
        answer4:"Hyper text Markup Language",
        answer:"answer-1"
    }, {
        question: "JS is",
        answer1:"HJava s",
        answer2:"Hypertension Markup language",
        answer3:"Javascript",
        answer4:"Hyper text Markup Language",
        answer:"answer-3"
    }
]



startButton.addEventListener("click",function(){
    quizContent.style.display = "block"
    startButton.style.display = "none"
    displayQuiz()
})


function displayQuiz(){
    question.innerText = questionsList[qno].question
    answer1.innerText = questionsList[qno].answer1
    answer2.innerText = questionsList[qno].answer2
    answer3.innerText = questionsList[qno].answer3
    answer4.innerText = questionsList[qno].answer4
    timerEl.innerText = timerCount
    scoreEl.innerText = score





}




function proceedToNext(){
   var buttonID = this.getAttribute("id")
   if(buttonID === questionsList[qno].answer){
    score +=10
    resultEl.innerText = "Right!"
    scoreEl.innerText = score
   }else{
    resultEl.innerText = "Wrong!"
    scoreEl.innerText = score
    timerCount -= 50;
   }
   if(qno < questionsList.length-1){
    qno++
    displayQuiz()
   }else{
    endQuiz()
   }
   if(timerCount < 0){
    endQuiz()
   }
}

function endQuiz(){
    quizContent.style.display = "none" 
    endQuizContent.style.display = "block"
    var fScore = document.getElementById("final-score")
    fScore.innerText = score

}

answer1.addEventListener("click",proceedToNext)
answer2.addEventListener("click",proceedToNext)
answer3.addEventListener("click",proceedToNext)
answer4.addEventListener("click",proceedToNext)


function handleback() {
    endQuizContent.style.display = "none"
    scoreContent.style.display = "none"
    quizContent.style.display = "block"
    qno = 0
    score = 0
    timerCount = 100
    displayQuiz()
    
}

function handleClear() {
    tble.innerHTML = ""
}