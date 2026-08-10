const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ==========================
// Jugadores
// ==========================

const player1 = {
  x: 20,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  speed: 6,
  velocityY: 0,
};

const player2 = {
  x: canvas.width - 20 - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  velocityY: 0,
};

// ==========================
// Pelota
// ==========================

const ball = {
  x: canvas.width / 2 - ballSize / 2,
  y: canvas.height / 2 - ballSize / 2,
  width: ballSize,
  height: ballSize,
  velocityX: initialBallSpeed,
  velocityY: 3,
};

// ==========================
// Marcador
// ==========================

let player1Score = 0;
let player2Score = 0;
