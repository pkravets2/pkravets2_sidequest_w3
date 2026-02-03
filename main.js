// ------------------------------------------------------------
// main.js = router + shared game data
// ------------------------------------------------------------

let currentScreen = "start"; // "start" | "instr" | "game" | "win" | "lose"
let game = null;

// Reset EVERYTHING (back to level 1)
function resetGame() {
  game = {
    level: 1,
    score: 0,
    lives: 3,
    timeLeft: 30, // seconds

    // target
    targetX: 400,
    targetY: 400,
    targetR: 40,
    vx: 4,
    vy: 3,

    // goal increases each level
    goal: 6,
  };

  resetRound();
}

// Reset the round (keep the current level)
function resetRound() {
  game.score = 0;
  game.lives = 3;
  game.timeLeft = 30;

  game.goal = 6 + (game.level - 1) * 2;

  const spd = 3 + game.level * 0.8;
  game.vx = random([-1, 1]) * spd;
  game.vy = random([-1, 1]) * (spd * 0.8);

  game.targetR = max(18, 42 - game.level * 2);
  game.targetX = random(game.targetR, width - game.targetR);
  game.targetY = random(game.targetR, height - game.targetR);
}

function setup() {
  createCanvas(800, 800);
  textFont("sans-serif");
  resetGame();
}

function draw() {
  if (currentScreen === "start") drawStart();
  else if (currentScreen === "instr") drawInstr();
  else if (currentScreen === "game") drawGame();
  else if (currentScreen === "win") drawWin();
  else if (currentScreen === "lose") drawLose();
}

function mousePressed() {
  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "instr") instrMousePressed();
  else if (currentScreen === "game") gameMousePressed();
  else if (currentScreen === "win") winMousePressed?.();
  else if (currentScreen === "lose") loseMousePressed?.();
  return false;
}

function keyPressed() {
  if (currentScreen === "start") startKeyPressed();
  else if (currentScreen === "instr") instrKeyPressed();
  else if (currentScreen === "game") gameKeyPressed?.();
  else if (currentScreen === "win") winKeyPressed?.();
  else if (currentScreen === "lose") loseKeyPressed?.();
}

// Shared helper (buttons use rectMode(CENTER))
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}
