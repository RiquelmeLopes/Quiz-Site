const quizData = [
    {
        question : "what is 1 plus 3",
        a: "7",
        b: "51",
        c: "4",
        d: "20",
        correct: "c",
    }, {
        question: "what is 7 multiplied by 2",
        a: "14",
        b: "11",
        c: "30",
        d: "20",
        correct: "a",
    }, {
        question: "what is 3 minus 1",
        a: "4",
        b: "3",
        c: "2",
        d: "9",
        correct: "c",
    }, {
        question: "what number is not a prime number",
        a: "7",
        b: "13",
        c: "5",
        d: "20",
        correct: "d",
    }, {
        question: "what is the integral of 1/x dx",
        a: "ln x + c",
        b: "cos x + c",
        c: "sen x + c",
        d: "cos x + sen x + c",
        correct: "a",
    }
]

let currentQuiz = 0
let score = 0

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text= document.getElementById("d_text")
const submitBtn = document.getElementById("submit");


loadQuiz()

function loadQuiz() {
    deselect()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function getSelected() {
    
    let answer = undefined

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    });

    return answer

}

function deselect() {
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answerEl.checked = false
        }
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++
        
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = 
            `<h2> You answered correctly at ${score} / ${quizData.length} questions <h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }

})