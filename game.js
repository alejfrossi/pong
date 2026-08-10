const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ==========================
// Configuración del juego
// ==========================

const paddleWidth = 10;
const paddleHeight = 100;

const ballSize = 10;

const initialBallSpeed = 5;
const ballSpeedIncrement = 0.5;
const maxBallSpeed = 15;

const minBounceSpeed = 1.5;

const difficulty = {
  easy: {
    speed: 3,
    error: 45,
    reactionDistance: 250,
  },

  normal: {
    speed: 4,
    error: 25,
    reactionDistance: 400,
  },

  hard: {
    speed: 5,
    error: 10,
    reactionDistance: 550,
  },
};

const ai = difficulty.normal;

let aiError = 0;

// ==========================
// Controles
// ==========================

const keys = {
  w: false,
  s: false,
};

document.addEventListener("keydown", (event) => {
  if (event.key === "w" || event.key === "W") {
    keys.w = true;
  }

  if (event.key === "s" || event.key === "S") {
    keys.s = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "w" || event.key === "W") {
    keys.w = false;
  }

  if (event.key === "s" || event.key === "S") {
    keys.s = false;
  }
});

// ==========================
// Jugadores
// ==========================

const player1 = {
  x: 20,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  speed: 6,
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
  velocityX: initialBallSpeed,
  velocityY: 3,
};

// ==========================
// Marcador
// ==========================

let player1Score = 0;
let player2Score = 0;

// ==========================
// Velocidad de la pelota
// ==========================

function setBallSpeed(speed) {
  const magnitude = Math.sqrt(ball.velocityX ** 2 + ball.velocityY ** 2);

  ball.velocityX = (ball.velocityX / magnitude) * speed;

  ball.velocityY = (ball.velocityY / magnitude) * speed;
}

// ==========================
// Aumentar velocidad de la pelota
// ==========================

function increaseBallSpeed() {
  const currentSpeed = Math.sqrt(ball.velocityX ** 2 + ball.velocityY ** 2);

  const newSpeed = Math.min(currentSpeed + ballSpeedIncrement, maxBallSpeed);

  setBallSpeed(newSpeed);
}

// ==========================
// Actualizar pelota
// ==========================

function updateBall() {
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  // Rebote contra el borde superior
  if (ball.y <= 0) {
    ball.y = 0;
    ball.velocityY = Math.abs(ball.velocityY);
  }

  // Rebote contra el borde inferior
  if (ball.y + ball.height >= canvas.height) {
    ball.y = canvas.height - ball.height;
    ball.velocityY = -Math.abs(ball.velocityY);
  }
}

// ==========================
// Obtener precisión de la IA
// ==========================

function getAIAccuracy() {
  return (Math.random() * 2 - 1) * ai.error;
}

// ==========================
// Generar error de la IA
// ==========================

function generateAIError() {
  aiError = (Math.random() * 2 - 1) * ai.error;
}

// ==========================
// Actualizar jugador 1
// ==========================

function updatePlayer1() {
  if (keys.w) {
    player1.y -= player1.speed;
  }

  if (keys.s) {
    player1.y += player1.speed;
  }

  if (player1.y < 0) {
    player1.y = 0;
  }

  if (player1.y + player1.height > canvas.height) {
    player1.y = canvas.height - player1.height;
  }
}

// ==========================
// Actualizar jugador 2 (IA)
// ==========================

function updateAI() {
  const paddleCenter = player2.y + player2.height / 2;

  const distanceToAI = player2.x - ball.x;

  if (ball.velocityX > 0 && distanceToAI < ai.reactionDistance) {
    const predictedY = predictBallY() + aiError;

    if (paddleCenter < predictedY) {
      player2.y += ai.speed;
    }

    if (paddleCenter > predictedY) {
      player2.y -= ai.speed;
    }
  }

  if (player2.y < 0) {
    player2.y = 0;
  }

  if (player2.y + player2.height > canvas.height) {
    player2.y = canvas.height - player2.height;
  }
}

// ==========================
// Detectar colisión
// ==========================

function checkCollision(ball, paddle) {
  return (
    ball.x < paddle.x + paddle.width &&
    ball.x + ball.width > paddle.x &&
    ball.y < paddle.y + paddle.height &&
    ball.y + ball.height > paddle.y
  );
}

// ==========================
// Predecir posición de la pelota
// ==========================

function predictBallY() {
  const distance = player2.x - ball.x;

  const time = distance / ball.velocityX;

  let predictedY = ball.y + ball.velocityY * time;

  const ballHeight = ball.height;

  const maxY = canvas.height - ballHeight;

  while (predictedY < 0 || predictedY > maxY) {
    if (predictedY < 0) {
      predictedY = -predictedY;
    }

    if (predictedY > maxY) {
      predictedY = maxY - (predictedY - maxY);
    }
  }

  return predictedY;
}

// ==========================
// Rebote de la pelota
// ==========================

function bounceOffPaddle(paddle) {
  const ballCenter = ball.y + ball.height / 2;

  const paddleCenter = paddle.y + paddle.height / 2;

  const relativeIntersectY = ballCenter - paddleCenter;

  const normalizedIntersect = relativeIntersectY / (paddle.height / 2);

  const maxBounceSpeed = 5;
  const minBounceSpeed = 1.5;

  ball.velocityY = normalizedIntersect * maxBounceSpeed;

  if (Math.abs(ball.velocityY) < minBounceSpeed) {
    ball.velocityY = ball.velocityY < 0 ? -minBounceSpeed : minBounceSpeed;
  }

  ball.velocityX *= -1;

  increaseBallSpeed();

  if (ball.velocityX > 0) {
    generateAIError();
  }
}

// ==========================
// Colisiones con paletas
// ==========================

function checkPaddleCollisions() {
  // Jugador 1
  if (ball.velocityX < 0 && checkCollision(ball, player1)) {
    ball.x = player1.x + player1.width;

    bounceOffPaddle(player1);
  }

  // Jugador 2
  if (ball.velocityX > 0 && checkCollision(ball, player2)) {
    ball.x = player2.x - ball.width;

    bounceOffPaddle(player2);
  }
}

// ==========================
// Reiniciar pelota
// ==========================

function resetBall(direction) {
  ball.x = canvas.width / 2 - ball.width / 2;

  ball.y = canvas.height / 2 - ball.height / 2;

  ball.velocityX = direction * initialBallSpeed;

  ball.velocityY = 3;

  setBallSpeed(initialBallSpeed);

  generateAIError();
}

// ==========================
// Sistema de puntuación
// ==========================

function checkScore() {
  // Pelota sale por la izquierda
  if (ball.x + ball.width < 0) {
    player2Score++;

    resetBall(1);
  }

  // Pelota sale por la derecha
  if (ball.x > canvas.width) {
    player1Score++;

    resetBall(-1);
  }
}

// ==========================
// Actualizar juego
// ==========================

function update() {
  updateBall();
  updatePlayer1();
  updateAI();
  checkPaddleCollisions();
  checkScore();
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
// Game Loop
// ==========================

function gameLoop() {
  update();
  draw();

  requestAnimationFrame(gameLoop);
}

gameLoop();
