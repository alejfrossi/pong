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

const paddleAcceleration = 0.8;
const paddleFriction = 0.8;
const maxPaddleSpeed = 6;

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
