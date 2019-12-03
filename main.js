const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
import { myQuestions } from "./data.js";

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
