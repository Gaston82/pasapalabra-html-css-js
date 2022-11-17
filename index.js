const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

const sectionRules = document.getElementsByClassName("game-rules-section");
const buttonStartGame = document.getElementsByClassName("button");
const inputPlayerName = document.getElementById("player-name");
const gameContainer = document.getElementsByClassName("game-container");
const container = document.getElementById("rosco-container");
const displayQuestions = document.getElementById("display-questions");
const questionsParagraph = document.querySelector(".questions");
const input = document.getElementById("input");
const buttonAnswer = document.getElementById("buttonAnswer");
const pasapalabraButton = document.getElementById("pasapalabra");
const formAnswers = document.getElementById("form-answers");
const letterCircle = document.getElementsByClassName("circle");
const displayCorrectAnswered = document.getElementById("correctAnswered");
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let newPLayer = {
  playerName: "",
  points: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

const ranking = [
  {
    playerName: "Diego Armando",
    points: 22,
    correctAnswers: 22,
    wrongAnswers: 5,
  },
  {
    playerName: "Lionel",
    points: 21,
    correctAnswers: 21,
    wrongAnswers: 6,
  },
  {
    playerName: "Rubén Paz",
    points: 20,
    wrongAnswers: 7,
    correctAnswers: 20,
  },
];

let position = 0;
let correctAnswer = 0;
let wrongAnswer = 0;
let totalAnswered = 0;
let answerPlayer;


let rankingTable = document.getElementById("ranking-table");
function createRanking(){

  // const{name,playerName,points,correctAnswer,wrongAnswer}=ranking
  ranking.forEach((player,index)=>{
    let rowTable = document.createElement("tr");
    let columnPosition = document.createElement("td");
    let columnPoints = document.createElement("td");
    let columnName = document.createElement("td");
    let columnCorrect = document.createElement("td");
    let columnWrong = document.createElement("td");
    columnPosition.textContent=index+1;
    columnName.textContent=player.playerName;
    columnPoints.textContent=player.points;
    columnCorrect.textContent=player.correctAnswers;
    columnWrong.textContent=player.wrongAnswers;
    
    rowTable.appendChild(columnPosition);
    rowTable.appendChild(columnName);
    rowTable.appendChild(columnPoints);
    rowTable.appendChild(columnCorrect);
    rowTable.appendChild(columnWrong);
     rankingTable.appendChild(rowTable)
  })
  }
  
   createRanking();

// formAnswers.addEventListener("submit", (e) => {
//   e.preventDefault();
//   nextQuestion(input.value);
// });
// buttonStartGame[0].addEventListener("click", startGame);
// // pasapalabraButton.addEventListener("click", nextQuestion);
// displayCorrectAnswered.textContent = correctAnswer;

// function startGame() {
//   newPLayer.playerName = inputPlayerName.value;
//   sectionRules[0].classList.replace("game-rules-section", "hidden");
//   gameContainer[0].classList.remove("hidden");
// }

// function nextQuestion() {
//   checkAnswer();
//   if (position < questions.length) {
//     position++;
//   }
//   if (position === questions.length) {
//     checkTotalAnswered();
//   }

//   input.value = "";
//   showQuestions();
// }

// const createRosco = () => {
//   for (let i = 0; i < letters.length; i++) {
//     let circle = document.createElement("div");
//     circle.textContent = letters[i];
//     circle.classList.add("circle");
//     container.appendChild(circle);
//   }
// };

// const showQuestions = () => {
//   for (let i = position; i < questions.length; i++) {
//     if (questions[i].status === 0) {
//       questionsParagraph.textContent = questions[i].question;
//       break;
//     }
//     if (questions[i].status === 3) {
//       position = i;
//       questionsParagraph.textContent = questions[i].question;
//       break;
//     }
//   }
// };

// const checkAnswer = () => {
//   answerPlayer = input.value;
//   let pasapalabraOption = "";
//   // let pasapalabraOption = pasapalabraButton.textContent;

//   if (answerPlayer === questions[position].answer) {
//     questions[position].status = 1;
//     letterCircle[position].classList.add("green");
//     totalAnswered++;
//     newPLayer.correctAnswers+=1;
//     displayCorrectAnswered.textContent = correctAnswer;
//   } else if (answerPlayer === "pasapalabra") {
//     questions[position].status = 3;
//   } else {
//     questions[position].status = 1;
//     letterCircle[position].classList.add("red");
//     totalAnswered++;
//     newPLayer.wrongAnswers+=1;
//   }
// };


// const checkTotalAnswered = () => {
//   if (totalAnswered === questions.length) {
//     console.log("has terminado el juego");
//   } else {
//     position = 0;
//   }
// };

// const playerPoints = (correctAnswers) => {
//   newPLayer.points = correctAnswers;
//   ranking.push(newPLayer);
//   const rankingSorted = ranking.sort(function (a, b) {
//     return b.points - a.points;
//   });
 
//   saveRankingLocalStorage(rankingSorted);
  
//   return rankingSorted;
// };

// function saveRankingLocalStorage(ranking){

//   localStorage.setItem("ranking",JSON.stringify(ranking));
// }

// function getRankingFromLocalStorage(ranking){

//   let points = localStorage.getItem("ranking",JSON.parse(ranking));

//   console.log(showRanking(points));

// }



// const showRanking =(sortedRanking)=>{

//   sortedRanking.forEach((player,index)=>{
//     console.log(`Position ${index + 1}: ${player.playerName}\n Points: ${player.points}\n Correct Answers: ${player.correctAnswers} \n Wrong Answers: ${player.wrongAnswers}`)
//     })


// }

// const welcomePlayer = () => {};

// welcomePlayer();
// createRosco();
// showQuestions();
