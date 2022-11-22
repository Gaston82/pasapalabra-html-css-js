const questionsList = [[
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
],[
  { letter: "a", answer: "alicia", status: 0, pasapalabra: false, question: "CON LA A. Niña que fue al pais de las maravillas" },
  { letter: "b", answer: "bambi", status: 0, pasapalabra: false, question: "CON LA B. Cervatillo de pelicula que se queda sin su madre" },
  { letter: "c", answer: "caperucita", status: 0, pasapalabra: false, question: "CON LA C. Personaje de cuento que le lleva una cesta a su abuela" },
  { letter: "d", answer: "donald", status: 0, pasapalabra: false, question: "CON LA D. Pato amigo de Mickey" },
  { letter: "e", answer: "elefante", status: 0, pasapalabra: false, question: "CON LA E. Animal que era Dumbo" },
  { letter: "f", answer: "felices", status: 0, pasapalabra: false, question: "CON LA F. Los animales de cuento comen perdices y viven..." },
  { letter: "g", answer: "genio", status: 0, pasapalabra: false, question: "CON LA G.  Lo que sale al frotar una lampara magica" },
  { letter: "h", answer: "heidi", status: 0, pasapalabra: false, question: "CON LA H. Vivia en los Alpes con su abuelito" },
  { letter: "i", answer: "increibles", status: 0, pasapalabra: false, question: "CON LA I. Familia de superheroes" },
  { letter: "j", answer: "jones", status: 0, pasapalabra: false, question: "CON LA J. Apellido de Indiana" },
  { letter: "k", answer: "king-kong", status: 0, pasapalabra: false, question: "CON LA K. Gorila gigante que vive en Nueva York" },
  { letter: "l", answer: "lobo", status: 0, pasapalabra: false, question: "CON LA L. Animal del bosque que en los cuentos es el malo" },
  { letter: "m", answer: "madagascar", status: 0, pasapalabra: false, question: "CON LA M. Isla africana donde llegan animales que se escapan del zoo" },
  { letter: "n", answer: "nemo", status: 0, pasapalabra: false, question: "CON LA N. Dory y Marlin lo buscan" },
  { letter: "enye", answer: "araña", status: 0, pasapalabra: false, question: "CON LA Ñ. Animal que le da superpoderes a un heroe" },
  { letter: "o", answer: "ogro", status: 0, pasapalabra: false, question: "CON LA O. Lo que era Shreck." },
  { letter: "p", answer: "peter pan", status: 0, pasapalabra: false, question: "CON LA P. Niño que nunca creia y que vivia en Nunca Jamas" },
  { letter: "q", answer: "mcqueen", status: 0, pasapalabra: false, question: "CONTIENE LA Q. Apellido de Rayo, coche de carreras" },
  { letter: "r", answer: "ratatouille", status: 0, pasapalabra: false, question: "CON LA R. Pelicula de una rata cocinera" },
  { letter: "s", answer: "setas", status: 0, pasapalabra: false, question: "CON LA S. Las casas de los pitufos" },
  { letter: "t", answer: "teletubbies", status: 0, pasapalabra: false, question: "CON LA T. Cuatro personajes que son de color: morado, amarillo, verde y rojo" },
  { letter: "u", answer: "ursula", status: 0, pasapalabra: false, question: "CON LA U. Malvada de la Sirenita, tiene cuerpo de pulpo" },
  { letter: "v", answer: "vikingo", status: 0, pasapalabra: false, question: "CON LA V. Vickie, ademas de inteligente y astuto era..." },
  { letter: "w", answer: "whinnie", status: 0, pasapalabra: false, question: "CON LA W. Osito del bosque de los Cien Arces al que le encanta la miel" },
  { letter: "x", answer: "x-men", status: 0, pasapalabra: false, question: "CON LA X. Grupo de superhéroes del que forman parte Lobezno, Tormenta,..." },
  { letter: "y", answer: "yasmine", status: 0, pasapalabra: false, question: "CON LA Y. La princesa que Aladdin quiere conquistar" },
  { letter: "z", answer: "zipi-zape", status: 0, question: "CON LA Z. Hermanos gemelos de los tebeos" }
],[
  { letter: "a", answer: "abecedario", status: 0, pasapalabra: false, question: "CON LA A. Conjunto de las letras de un idioma puestas en orden" },
  { letter: "b", answer: "babero", status: 0, pasapalabra: false, question: "CON LA B. Tela que se pone a los bebés en el pecho para que no se manchen al comer" },
  { letter: "c", answer: "cabeza", status: 0, pasapalabra: false, question: "CON LA C. Parte superior del cuerpo" },
  { letter: "d", answer: "dormir", status: 0, pasapalabra: false, question: "CON LA D. Accion. Forma de descanso que hacemos por las noches o en la siesta con los ojos cerrados" },
  { letter: "e", answer: "elefante", status: 0, pasapalabra: false, question: "CON LA E. Animal mamifero enorme que vive en Asia o Africa. Con grandes orejas y trompa " },
  { letter: "f", answer: "fiebre", status: 0, pasapalabra: false, question: "CON LA F. Augmento de la temperatura del cuerpo cuando estamos enfermos" },
  { letter: "g", answer: "globo", status: 0, pasapalabra: false, question: "CON LA G. Especie de pelota de goma que se hincha con aire. Les gusta mucho a los niños" },
  { letter: "h", answer: "humo", status: 0, pasapalabra: false, question: "CON LA H. Lo que sale cuando se hace fuego." },
  { letter: "i", answer: "inflar", status: 0, pasapalabra: false, question: "CON LA I. Llenar algo de aire" },
  { letter: "j", answer: "jardin", status: 0, pasapalabra: false, question: "CON LA J. Zona que rodea algunas casas o edificios y que está lleno de césped, flores, árboles…" },
  { letter: "k", answer: "kilo", status: 0, pasapalabra: false, question: "CON LA K. Medida de peso que es igual que 1000 gramos" },
  { letter: "l", answer: "luna", status: 0, pasapalabra: false, question: "CON LA L. Satélite de la Tierra, de color blanco, que se ve por la noche" },
  { letter: "m", answer: "mantel", status: 0, pasapalabra: false, question: "CON LA M. Tela que se pone en las mesas a la hora de comer" },
  { letter: "n", answer: "nido", status: 0, pasapalabra: false, question: "CON LA N. Tipo de casa que construyen los pájaros para poner sus huevos" },
  { letter: "enye", answer: "ñu", status: 0, pasapalabra: false, question: "CON LA Ñ. Mamífero africano de color marrón parecido a un toro con los cuernos curvos" },
  { letter: "o", answer: "ojo", status: 0, pasapalabra: false, question: "CON LA O. Órgano del sentido de la vista. Lo que usamos para ver" },
  { letter: "p", answer: "peces", status: 0, pasapalabra: false, question: "CON LA P. Animales que viven en el agua, cubiertos de escamas, con aletas para nadar" },
  { letter: "q", answer: "quieto", status: 0, pasapalabra: false, question: "CON LA Q. Que no se mueve" },
  { letter: "r", answer: "rapido", status: 0, pasapalabra: false, question: "CON LA R. Veloz" },
  { letter: "s", answer: "sacapuntas", status: 0, pasapalabra: false, question: "CON LA S. Lo que usas para que tus lápices tengan la punta afilada" },
  { letter: "t", answer: "tenedor", status: 0, pasapalabra: false, question: "CON LA T. Objeto que se usa para pinchar los alimentos y comérselos" },
  { letter: "u", answer: "uña", status: 0, pasapalabra: false, question: "CON LA U. Parte dura que está en la punta de los dedos, que cortamos cuando crece y que las personas se pintan a veces" },
  { letter: "v", answer: "verano", status: 0, pasapalabra: false, question: "CON LA V. Estación del año en la que hace mucho calor" },
  { letter: "w", answer: "windsurf", status: 0, pasapalabra: false, question: "CON LA W. Deporte que se practica en el mar, de pie sobre una tabla alargada que lleva una vela triangular" },
  { letter: "x", answer: "taxi", status: 0, pasapalabra: false, question: "CONTIENE LA X. Coche con conductor que lleva a las personas donde quieren ir. En Barcelona son negros y amarillos" },
  { letter: "y", answer: "yate", status: 0, pasapalabra: false, question: "CON LA Y. Barco de lujo" },
  { letter: "z", answer: "zoo", status: 0, pasapalabra: false, question: "CON LA Z. Parque en el que hay todo tipo de animales de todo el mundo que se pueden visitar por el público" }
],];

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

const gameTitle = document.getElementsByClassName("game-title");
const sectionRules = document.getElementsByClassName("game-rules-section");
const buttonStartGame = document.getElementsByClassName("button");
const formPlayerName = document.getElementById("form-player-name");
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

let questions = questionsList[parseInt(Math.random() * (3-0))]

const startGame = () => {
  sectionRules[0].classList.remove("game-rules-section");
  gameContainer[0].classList.remove("hidden");
  showQuestions()
  gameTimer();
};


const createRanking = (points) => {
  points.forEach((player, index) => {
    let rowTable = document.createElement("tr");
    let columnPosition = document.createElement("td");
    let columnPoints = document.createElement("td");
    let columnName = document.createElement("td");
    let columnCorrect = document.createElement("td");
    let columnWrong = document.createElement("td");
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
    rankingTable[0].appendChild(rowTable);
  });
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
  for (let i = 0; i < letters.length; i++) {
    let circle = document.createElement("div");
    circle.textContent = letters[i];
    circle.classList.add("circle");
    container.appendChild(circle);
  }
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
