const quizData = [
    {
        question: "How many days do we have in a week?",
        a: "8",
        b: "7",
        c: "6",
        d: "10",
        correct: "b",
    },
    {
        question: "How many days are there in a year? ",
        a: "365 (not a leap year)",
        b: "366",
        c: "367",
        d: "340",
        correct: "a",
    },
    {
        question: "How many colors are there in a rainbow?",
        a: "6",
        b: "5",
        c: "7",
        d: "10",
        correct: "c",
    },
    {
        question: "How many letters are there in the English alphabet?",
        a: "20",
        b: "25",
        c: "26",
        d: "10",
        correct: "c",
    },
    {
        question: "Which month of the year has the least number of days?",
        a: "January",
        b: "May",
        c: "June",
        d: "February",
        correct: "d",
    },



];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2 class="fw-bold text-center py-3 mx-4 mb-4">You answered ${score}/${quizData.length} questions correctly</h2>
           <button class = "btn btn-lg btn-dark mx-4" onclick="location.reload()">Reload</button>
           
           <h1 class="fw-bold text-center py-5 mb-1 mt-5">Thank You !</h1>
           `
       }
    }
})