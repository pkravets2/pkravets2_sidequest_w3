// ------------------------------
// Tiny click-target game
// ------------------------------

// helper to move target + timer
function updateGame() {
  // timer
  game.timeLeft -= deltaTime / 1000;

  // move target
  game.targetX += game.vx;
  game.targetY += game.vy;

  // bounce off walls
  if (game.targetX < game.targetR || game.targetX > width - game.targetR)
    game.vx *= -1;
  if (game.targetY < game.targetR || game.targetY > height - game.targetR)
    game.vy *= -1;

  // time over -> decide win/lose based on score
  if (game.timeLeft <= 0) {
    currentScreen = game.score >= game.goal ? "win" : "lose";
  }

  // out of lives -> lose
  if (game.lives <= 0) {
    currentScreen = "lose";
  }
}

function drawGame() {
  background(240, 230, 140);

  updateGame();

  // HUD
  fill(0);
  textAlign(LEFT, TOP);
  textSize(20);
  text(`Level: ${game.level}`, 20, 20);
  text(`Score: ${game.score} / ${game.goal}`, 20, 50);
  text(`Lives: ${game.lives}`, 20, 80);
  text(`Time: ${max(0, game.timeLeft).toFixed(1)}s`, 20, 110);

  textAlign(CENTER, TOP);
  textSize(18);
  text(
    "Click the moving circle. Miss = -1 life. Reach the goal before time runs out.",
    width / 2,
    150,
  );

  // target
  noStroke();
  fill(80, 170, 255);
  circle(game.targetX, game.targetY, game.targetR * 2);

  // cursor feedback
  const hovering =
    dist(mouseX, mouseY, game.targetX, game.targetY) <= game.targetR;
  cursor(hovering ? HAND : ARROW);
}

function gameMousePressed() {
  const hit = dist(mouseX, mouseY, game.targetX, game.targetY) <= game.targetR;

  if (hit) {
    game.score += 1;

    // ✅ WIN IMMEDIATELY when you reach the goal
    if (game.score >= game.goal) {
      currentScreen = "win";
      return;
    }

    // reposition target
    game.targetX = random(game.targetR, width - game.targetR);
    game.targetY = random(game.targetR, height - game.targetR);

    // tiny speed-up each hit
    game.vx *= 1.03;
    game.vy *= 1.03;
  } else {
    game.lives -= 1;

    // (optional) lose immediately if you hit 0 lives
    if (game.lives <= 0) {
      currentScreen = "lose";
    }
  }
}

function gameKeyPressed() {
  // ESC back to menu
  if (keyCode === ESCAPE) currentScreen = "start";

  // R = restart the current level
  if (key === "r" || key === "R") resetRound();
}
