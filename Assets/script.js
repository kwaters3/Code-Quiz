const questions = [
  {
    question: "What is JavaScript?",
    answers: [
      {text: "The World Wide Web", correct: false},
      {text: "The Matrix", correct: false},
      {text: "A Programming Language", correct: true},
      {text: "A Functional Language", correct: false},
    ]
  },

  {
    question: "Which of these is not a variable in JavaScript?",
    answers: [
      {text: "var", correct: false},
      {text: "let", correct: false},
      {text: "const", correct: false},
      {text: "function", correct: true},
    ]
  },

  {
    question: "JavaScript has several data types, which of the following is not a JavaScript data type?",
    answers: [
      {text: "Number", correct: false},
      {text: "Array", correct: true},
      {text: "Boolean", correct: false},
      {text: "String", correct: false},
    ]
  },

  {
    question: "How do you check the type of variable?",
    answers: [
      {text: "document.type", correct: false},
      {text: "console.log", correct: false},
      {text: "typeof", correct: true},
      {text: "windows.type", correct: false},
    ]
  },

  {
    question: "What does the === operator do in JavaScript",
    answers: [
      {text: "Assigns a value to a variable", correct: false},
      {text: "Compares values for loose equality", correct: false},
      {text: "Creates a new variable", correct: false},
      {text: "Compares values for strict equality", correct: true},
    ]
  },

  {
    question: "What is the output of the following code: console.log(typeof null)?",
    answers: [
      {text: "object", correct: false},
      {text: "null", correct: true},
      {text: "undefined", correct: true},
      {text: "string", correct: false},
    ]
  },

  {
    question: "What does the NaN value represent in JavaScript?",
    answers: [
      {text: "Not a Number", correct: true},
      {text: "Null value", correct: false},
      {text: "Negative number", correct: false},
      {text: "New Array Now", correct: false},
    ]
  },

  {
    question: "What is the purpose of the document.getElementById() function in JavaScript?",
    answers: [
      {text: " It adds a new HTML element to the document", correct: false},
      {text: "It retrieves an HTML element from the document by its ID", correct: true},
      {text: "It changes the font style of an element", correct: false},
      {text: "It removes an HTML element from the document", correct: false},
    ]
  }
];

const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
  currentQuestionIndex = 0;
  score
}
