
var quizContent = document.getElementById("quiz-content")
var startButton = document.getElementById("startButton")
var question = document.getElementById("question")
var answer1 = document.getElementById("answer-1")
var answer2 = document.getElementById("answer-2")
var answer3 = document.getElementById("answer-3")
var answer4 = document.getElementById("answer-4")

quizContent.style.display = "none"

var qno = 0;
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
        question: "HTML latest is",
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





}
