const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ==========================
// Configuración del juego
// ==========================

const paddleWidth = 10;
const paddleHeight = 100;

const ballSize = 10;

const keys = {
  w: false,
  s: false,
};

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
  speed: 6,
};

// ==========================
// Pelota
// ==========================

const ball = {
  x: canvas.width / 2 - ballSize / 2,
  y: canvas.height / 2 - ballSize / 2,
  width: ballSize,
  height: ballSize,
  velocityX: 5,
  velocityY: 3,
};

// ==========================
// Marcador
// ==========================

let player1Score = 0;
let player2Score = 0;

// ==========================
// Actualizar pelota
// ==========================

function updateBall() {
  // Mover la pelota
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  // Colisión con el borde superior
  if (ball.y <= 0) {
    ball.y = 0;
    ball.velocityY *= -1;
  }

  // Colisión con el borde inferior
  if (ball.y + ball.height >= canvas.height) {
    ball.y = canvas.height - ball.height;
    ball.velocityY *= -1;
  }
}

// ==========================
// Actualizar player
// ==========================

function updatePlayer1() {
  if (keys.w) {
    player1.y -= player1.speed;
  }

  if (keys.s) {
    player1.y += player1.speed;
  }

  // Límite superior
  if (player1.y < 0) {
    player1.y = 0;
  }

  // Límite inferior
  if (player1.y + player1.height > canvas.height) {
    player1.y = canvas.height - player1.height;
  }
}

// ==========================
// Dibujar cancha
// ==========================

function drawCourt() {
  ctx.fillStyle = "white";

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
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCourt();
  drawPaddles();
  drawBall();
  drawScore();
}

// ==========================
// Updates
// ==========================

function update() {
  updateBall();
  updatePlayer1();
}

// ==========================
// Game Loop
// ==========================

function gameLoop() {
  update();
  draw();

  requestAnimationFrame(gameLoop);
}

gameLoop();
