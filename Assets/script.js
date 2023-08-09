// variables defined
const startButton = document.getElementById("start-button");
const introSection = document.querySelector(".intro");
const quizSection = document.querySelector(".quiz");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timeRemainingElement = document.getElementById("time-remaining");


let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 60


// when you click the start quiz button, this will take you to the question page
// this generates the onclick for the start button
startButton.addEventListener("click", startQuiz);
function startQuiz() {
  introSection.style.display = "none";
  quizSection.style.display = "block";
  countDown();
  showQuestion();
}

// This is the Question button
function showQuestion() {
  resetState();
  nextButton.innerHTML = "Next Question"
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(function (answer) {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}


function countDown() {
  const timer = setInterval(function () {
    if (timeRemaining > 0 && currentQuestionIndex < questions.length) {
      timeRemaining--;
      timeRemainingElement.textContent = timeRemaining;
    }

    if (timeRemaining <= 0 || currentQuestionIndex >= questions.length) {
      showScore();
      clearInterval(timer);
      timeRemaining = 0; // Set the timer to 0 when the quiz is over
      timeRemainingElement.textContent = timeRemaining;
    }
  }, 1000);
}



function pressNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}


nextButton.addEventListener("click", () => {
  pressNextButton();
});


// This removes the Answer 1,2,3,4 choices from the HTML
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}


function selectAnswer(event) {
  const selectedBtn = event.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
    timeRemaining -= 10;
  }

  Array.from(answerButtons.children).forEach(function (button) {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  })
  nextButton.style.display = "block";
}



function showScore() {
  resetState();
  questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!<br>Enter your initials to save your score: <input type="text" id="initials"><br>
  <button type="button" id="initialbtn">submit</button>`;

  
  const initialSubmitButton = document.getElementById("initialbtn");
  initialSubmitButton.addEventListener("click", saveScore);
}

function saveScore() {
  const initialsInput = document.getElementById("initials");
  const initials = initialsInput.value;
  questionElement.innerHTML = "Score saved! Thank you.";
  initialsInput.value = "";
}



//////////////////////////////////////////////////////////////
// Question Elements
const questions = [
  {
    question: "What is JavaScript?",
    answers: [
      { text: "The World Wide Web", correct: false },
      { text: "The Matrix", correct: false },
      { text: "A Programming Language", correct: true },
      { text: "A Functional Language", correct: false },
    ]
  },

  {
    question: "Which of these is not a variable in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "function", correct: true },
    ]
  },

  {
    question: "JavaScript has several data types, which of the following is not a JavaScript data type?",
    answers: [
      { text: "Number", correct: false },
      { text: "Array", correct: true },
      { text: "Boolean", correct: false },
      { text: "String", correct: false },
    ]
  },

  {
    question: "How do you check the type of variable?",
    answers: [
      { text: "document.type", correct: false },
      { text: "console.log", correct: false },
      { text: "typeof", correct: true },
      { text: "windows.type", correct: false },
    ]
  },

  {
    question: "What does the === operator do in JavaScript",
    answers: [
      { text: "Assigns a value to a variable", correct: false },
      { text: "Compares values for loose equality", correct: false },
      { text: "Creates a new variable", correct: false },
      { text: "Compares values for strict equality", correct: true },
    ]
  },

  {
    question: "What is the output of the following code: console.log(typeof null)?",
    answers: [
      { text: "object", correct: false },
      { text: "null", correct: true },
      { text: "undefined", correct: false },
      { text: "string", correct: false },
    ]
  },

  {
    question: "What does the NaN value represent in JavaScript?",
    answers: [
      { text: "Not a Number", correct: true },
      { text: "Null value", correct: false },
      { text: "Negative number", correct: false },
      { text: "New Array Now", correct: false },
    ]
  },

  {
    question: "What is the purpose of the document.getElementById() function in JavaScript?",
    answers: [
      { text: " It adds a new HTML element to the document", correct: false },
      { text: "It retrieves an HTML element from the document by its ID", correct: true },
      { text: "It changes the font style of an element", correct: false },
      { text: "It removes an HTML element from the document", correct: false },
    ]
  }
];