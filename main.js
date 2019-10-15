const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const myQuestions = [
  {
    question: "Which week is it?",
    answers: {
      a: "1",
      b: "2",
      c: "4",
    },
    correctAnswer : "c"
  }, 
  {
    question: "What is Clara's gang name?",
    answers: {
      a: "Dev Team",
      b: "TTY",
      c: "IBM Clara"
    },
    correctAnswer: "c"
  },
  {
    question: "What is Liam's title?",
    answers: {
      a: "The Boss",
      b: "Mr Bossman",
      c: "Liam Bossman",
      d: "Bossman Liam",
    },
    correctAnswer: "d",
  }
];

function buildQuiz() {
  const output = [];
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }
    output.push(
      `<div class="question">${currentQuestion.question}</div>
      <div class="answers">${answers.join("")}</div>`
    );
    }
  );
  quizContainer.innerHTML = output.join("");
};

function showResults() {}

//display quiz straight away:

buildQuiz();

//on submit, show the results:

submitButton.addEventListener(click, showResults);
