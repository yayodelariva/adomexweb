const logo1 = document.querySelector(".teamLogo1");
const logo2 = document.querySelector(".teamLogo2");
const match1Score = document.querySelector(
  ".logosAndScoresMatch1 > .matchScore"
);
const match1Logo1 = document.querySelector(
  ".logosAndScoresMatch1 > .teamLogo1"
);
const match1Logo2 = document.querySelector(
  ".logosAndScoresMatch1 > .teamLogo2"
);
const match2Score = document.querySelector(
  ".logosAndScoresMatch2 > .matchScore"
);
const match2Logo1 = document.querySelector(
  ".logosAndScoresMatch2 > .teamLogo1"
);
const match2Logo2 = document.querySelector(
  ".logosAndScoresMatch2 > .teamLogo2"
);
const match3Score = document.querySelector(
  ".logosAndScoresMatch3 > .matchScore"
);
const match3Logo1 = document.querySelector(
  ".logosAndScoresMatch3 > .teamLogo1"
);
const match3Logo2 = document.querySelector(
  ".logosAndScoresMatch3 > .teamLogo2"
);
const match4Score = document.querySelector(
  ".logosAndScoresMatch4 > .matchScore"
);
const match4Logo1 = document.querySelector(
  ".logosAndScoresMatch4 > .teamLogo1"
);
const match4Logo2 = document.querySelector(
  ".logosAndScoresMatch4 > .teamLogo2"
);
const match5Score = document.querySelector(
  ".logosAndScoresMatch5 > .matchScore"
);
const match5Logo1 = document.querySelector(
  ".logosAndScoresMatch5 > .teamLogo1"
);
const match5Logo2 = document.querySelector(
  ".logosAndScoresMatch5 > .teamLogo2"
);
const match6Score = document.querySelector(
  ".logosAndScoresMatch6 > .matchScore"
);
const match6Logo1 = document.querySelector(
  ".logosAndScoresMatch6 > .teamLogo1"
);
const match6Logo2 = document.querySelector(
  ".logosAndScoresMatch6 > .teamLogo2"
);
const logosAndScores = document.querySelector(".logosAndScores");

let logoLobos = document.createElement("img");
logoLobos.src = "img/logo-lobos.png";
let logoLobosCloned = logoLobos.cloneNode(true);
let logoLobosCloned1 = logoLobos.cloneNode(true);
let logoLobosCloned2 = logoLobos.cloneNode(true);
let logoLobosCloned3 = logoLobos.cloneNode(true);

let logoBJImg = document.createElement("img");
logoBJImg.src = "img/logo-bj.png";
let logoBJCloned = logoBJImg.cloneNode(true);
let logoBJCloned1 = logoBJImg.cloneNode(true);
let logoBJCloned2 = logoBJImg.cloneNode(true);
let logoBJCloned3 = logoBJImg.cloneNode(true);

//MATCH 1
match1Score.innerHTML = "5-2";
match1Logo1.appendChild(logoLobos);
match1Logo2.appendChild(logoBJImg);

match2Score.innerHTML = "1-3";
match2Logo1.appendChild(logoLobosCloned);
match2Logo2.appendChild(logoLobosCloned1);

match3Score.innerHTML = "7-6";
match3Logo1.appendChild(logoBJCloned);
match3Logo2.appendChild(logoLobosCloned2);

match4Score.innerHTML = "6-6";
match4Logo1.appendChild(logoBJCloned1);
match4Logo2.appendChild(logoBJCloned2);

match5Score.innerHTML = "6-6";
match5Logo1.appendChild(logoBJCloned3);
match5Logo2.appendChild(logoLobosCloned3);
