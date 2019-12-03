const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const myQuestions = [
  {
    question:
      "What type of 'ware' is how different applications talk to each other?",
    answers: {
      a: "serviceware",
      b: "mediumware",
      c: "software",
      d: "middleware"
    },
    correctAnswer: "d"
  },
  {
    question: "What 'aas' is aws an example of?",
    answers: {
      a: "SaaS",
      b: "Paas",
      c: "Iaas",
      d: "Baas"
    },
    correctAnswer: "c"
  },
  {
    question:
      "Hashing is a way of encrypting things. Is it one way or two way?",
    answers: {
      a: "one way",
      b: "two way"
    },
    correctAnswer: "a"
  },
  {
    question:
      "What do you tell yarn when downloading things, to obtain that precise version of the thing?",
    answers: {
      a: "--exact",
      b: "--precise",
      c: "--this",
      d: "--version"
    },
    correctAnswer: "a"
  },
  {
    question:
      "What is the name for a highly structured database, wherein some data is connected with other data, often represented in a table?",
    answers: {
      a: "Non-Relational",
      b: "Risotto",
      c: "Relational",
      d: "Comparative"
    },
    correctAnswer: "c"
  },
  {
    question: "What does the P stand for in PaaS?",
    answers: {
      a: "Penne",
      b: "Platform",
      c: "Portal",
      d: "Packages"
    },
    correctAnswer: "b"
  },
  {
    question: "Things outside of our app are accessed...",
    answers: {
      a: "synchronously",
      b: "syntactically",
      c: "spaghetti",
      d: "asynchronously"
    },
    correctAnswer: "d"
  },
  {
    question:
      "In promises, then is used when things go right. What is used when things go wrong?",
    answers: {
      a: "Seize",
      b: "Fettucine",
      c: "Catch",
      d: "Fetch"
    },
    correctAnswer: "c"
  }
];

function buildQuiz() {
  const output = [];
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    let letter;
    let nextQuestion = questionNumber + 1;
    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }
    if (nextQuestion < myQuestions.length) {
      output.push(
        `<section id="no${questionNumber}">
        <div class="question">${currentQuestion.question}</div>
        <div class="answers">${answers.join("")}</div>
        </section>
        <a class="next" href="#no${nextQuestion}">Next Question</a>`
      );
    } else {
      output.push(
        `<section id="no${questionNumber}">
      <div class="question">${currentQuestion.question}</div>
      <div class="answers">${answers.join("")}</div>
      </section>`
      );
    }
  });
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let numCorrect = 0;
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = "input[name=question" + questionNumber + "]:checked";
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
    }
  });
  resultsContainer.innerHTML =
    "Congratulations! You got " + numCorrect + " out of " + myQuestions.length;
}

buildQuiz();

submitButton.addEventListener("click", showResults);
