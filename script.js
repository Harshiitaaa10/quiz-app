const questions = [
    {
        prompt: "What is the capital of France?",
        options: ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
        answer: "A"
    },
    {
        prompt: "Which language is primarily spoken in Brazil?",
        options: ["A. Spanish", "B. Portuguese", "C. English", "D. French"],
        answer: "B"
    },
    {
        prompt: "What is the smallest prime number?",
        options: ["A. 1", "B. 2", "C. 3", "D. 5"],
        answer: "B"
    },
    {
        prompt: "Who wrote 'To Kill a Mockingbird'?",
        options: ["A. Harper Lee", "B. Mark Twain", "C. J.K. Rowling", "D. Ernest Hemingway"],
        answer: "A"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    questionElement.innerText = questions[currentQuestionIndex].prompt;
    optionsContainer.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "option";
        button.onclick = () => selectOption(option[0]);
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        showPopup("Correct!");
        score++;
    } else {
        alert(`Wrong! The correct answer was ${correctAnswer}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const scoreElement = document.getElementById("score");

    scoreElement.innerText = `You got ${score} out of ${questions.length} questions correct.`;
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    loadQuestion();
}

function showPopup(message) {
    document.getElementById("popup-message").innerText = message;
    document.getElementById("popup").style.display = "block";
    document.getElementById("backdrop").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("backdrop").style.display = "none";
    loadQuestion();
}

window.onload = loadQuestion;
