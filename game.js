const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ==========================
// Configuración del juego
// ==========================

const paddleWidth = 10;
const paddleHeight = 100;

const ballSize = 10;

// ==========================
// Jugadores
// ==========================

const player1 = {
  x: 20,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
};

const player2 = {
  x: canvas.width - 20 - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
};

// ==========================
// Pelota
// ==========================

const ball = {
  x: canvas.width / 2 - ballSize / 2,
  y: canvas.height / 2 - ballSize / 2,
  width: ballSize,
  height: ballSize,
};

// ==========================
// Marcador
// ==========================

let player1Score = 0;
let player2Score = 0;

// ==========================
// Dibujar cancha
// ==========================

function drawCourt() {
  ctx.fillStyle = "white";

  // Línea central
  const lineWidth = 4;
  const lineHeight = 20;
  const gap = 15;

  for (let y = 0; y < canvas.height; y += lineHeight + gap) {
    ctx.fillRect(canvas.width / 2 - lineWidth / 2, y, lineWidth, lineHeight);
  }
}

// ==========================
// Dibujar paletas
// ==========================

function drawPaddles() {
  ctx.fillStyle = "white";

  ctx.fillRect(player1.x, player1.y, player1.width, player1.height);

  ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
}

// ==========================
// Dibujar pelota
// ==========================

function drawBall() {
  ctx.fillStyle = "white";

  ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
}

// ==========================
// Dibujar marcador
// ==========================

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "48px Arial";
  ctx.textAlign = "center";

  ctx.fillText(player1Score, canvas.width / 2 - 50, 60);

  ctx.fillText(player2Score, canvas.width / 2 + 50, 60);
}

// ==========================
// Renderizar juego
// ==========================

function draw() {
  // Limpiar canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCourt();
  drawPaddles();
  drawBall();
  drawScore();
}

// ==========================
// Game Loop
// ==========================

function gameLoop() {
  draw();

  requestAnimationFrame(gameLoop);
}

gameLoop();
