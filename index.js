import {questionsList,letters,ranking}from "./variables.js"


const gameTitle = document.getElementsByClassName("game-title");
const sectionRules = document.getElementsByClassName("game-rules-section");
const formPlayerName = document.getElementById("form-player-name");
const inputPlayerName = document.getElementById("player-name");
const gameContainer = document.getElementsByClassName("game-container");
const container = document.getElementById("rosco-container");
const questionsParagraph = document.querySelector(".questions");
const input = document.getElementById("input");
const formAnswers = document.getElementById("form-answers");
const letterCircle = document.getElementsByClassName("circle");
const displayCorrectAnswered = document.getElementById("correctAnswered");
const rankingTable = document.getElementsByClassName("ranking-table");
const labelTimer = document.querySelector(".timer");
const timeOverSection = document.getElementsByClassName("time-over-section");
const timeOverMessage = document.getElementById("time-over-message");
const buttonPlayAgain = document.getElementsByClassName("button-play-again");

let newPLayer = {
  playerName: "",
  points: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};



let position = 0;
let correctAnswer = 0;
let wrongAnswer = 0;
let totalAnswered = 0;
let answerPlayer;

let questions = questionsList[parseInt(Math.random() * (3 - 0))];

const startGame = () => {
  sectionRules[0].classList.remove("game-rules-section");
  gameContainer[0].classList.remove("hidden");
  showQuestions();
  gameTimer();
};

const createRanking = (points) => {
  const fragment = document.createDocumentFragment();
  points.forEach((player, index) => {
    const rowTable = document.createElement("tr");
    const columnPosition = document.createElement("td");
    const columnPoints = document.createElement("td");
    const columnName = document.createElement("td");
    const columnCorrect = document.createElement("td");
    const columnWrong = document.createElement("td");
    columnPosition.textContent = index + 1;
    columnName.textContent = player.playerName;
    columnPoints.textContent = player.points;
    columnCorrect.textContent = player.correctAnswers;
    columnWrong.textContent = player.wrongAnswers;

    rowTable.appendChild(columnPosition);
    rowTable.appendChild(columnName);
    rowTable.appendChild(columnPoints);
    rowTable.appendChild(columnCorrect);
    rowTable.appendChild(columnWrong);
    fragment.appendChild(rowTable)
  });
  rankingTable[0].appendChild(fragment);
};

formAnswers.addEventListener("submit", (e) => {
  e.preventDefault();
  answerPlayer = input.value;
  nextQuestion(answerPlayer.toLowerCase());
});

formPlayerName.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = inputPlayerName.value;
  if (userName === "") {
    return;
  }
  newPLayer.playerName = userName;
  startGame();
});

displayCorrectAnswered.textContent = `Correct answers : ${correctAnswer}`;

const nextQuestion = (answerPlayer) => {
  checkAnswer(answerPlayer);
  if (position < questions.length) {
    position++;
  }
  if (position === questions.length || totalAnswered === questions.length) {
    checkTotalAnswered();
  }

  input.value = "";
  showQuestions();
};

const createLetters = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < letters.length; i++) {
    let circle = document.createElement("div");
    circle.textContent = letters[i];
    circle.classList.add("circle");
    fragment.appendChild(circle)
  }
  container.appendChild(fragment);
};

const showQuestions = () => {
  for (let i = position; i < questions.length; i++) {
    if (questions[i].status === 0) {
      questionsParagraph.textContent = questions[i].question;
      break;
    }
    if (questions[i].status === 3) {
      position = i;
      questionsParagraph.textContent = questions[i].question;
      break;
    }
  }
};

const checkAnswer = (answerPlayer) => {
  if (answerPlayer === questions[position].answer) {
    questions[position].status = 1;
    letterCircle[position].classList.add("green");
    totalAnswered++;
    newPLayer.correctAnswers += 1;
    displayCorrectAnswered.textContent = `Correct answers : ${newPLayer.correctAnswers}`;
  } else if (answerPlayer === "pasapalabra") {
    questions[position].status = 3;
  } else if (answerPlayer === "end") {
    gameContainer[0].classList.add("hidden");
    gameTitle[0].textContent = "You have left the game";
    timeOverMessage.textContent = `The player ${newPLayer.playerName} has ${newPLayer.correctAnswers} correct answers and made ${newPLayer.wrongAnswers} mistakes`;
    buttonPlayAgain[0].classList.remove("hidden");
  } else {
    questions[position].status = 1;
    letterCircle[position].classList.add("red");
    totalAnswered++;
    newPLayer.wrongAnswers += 1;
  }
};

const saveRankingLocalStorage = (ranking) => {
  localStorage.setItem("ranking", JSON.stringify(ranking));
};

const getRankingFromLocalStorage = (ranking) => {
  ranking = JSON.parse(localStorage.getItem("ranking"));

  return ranking;
};

const checkTotalAnswered = () => {
  if (totalAnswered === questions.length) {
    let totalPoints = playerPoints(newPLayer.correctAnswers);
    gameContainer[0].classList.replace("game-container", "hidden");
    rankingTable[0].classList.replace("hidden", "ranking-table");
    let rankingFromLocalStorage = getRankingFromLocalStorage(totalPoints);
    gameTitle[0].textContent = "Ranking";
    createRanking(rankingFromLocalStorage);
    buttonPlayAgain[0].classList.remove("hidden");
  } else {
    position = 0;
  }
};

const playerPoints = (correctAnswers) => {
  newPLayer.points = correctAnswers;
  ranking.push(newPLayer);
  const rankingSorted = ranking.sort(function (a, b) {
    return b.points - a.points;
  });

  saveRankingLocalStorage(rankingSorted);

  return rankingSorted;
};

const gameTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `Time : ${min}:${sec}`;
    time--;

    if (time === 0) {
      clearInterval(timer);
      gameTitle[0].textContent = "Time over";
      timeOverMessage.textContent = `The player ${newPLayer.playerName} has ${newPLayer.correctAnswers} correct answers and made ${newPLayer.wrongAnswers} mistakes`;
      gameContainer[0].classList.replace("game-container", "hidden");
      timeOverSection[0].classList.remove("hidden");
      buttonPlayAgain[0].classList.remove("hidden");
    }
  };

  let time = 120;
  tick();

  const timer = setInterval(tick, 1000);
};

const restartGame = () => {
  location.reload();
};

buttonPlayAgain[0].addEventListener("click", restartGame);

createLetters();
showQuestions();
