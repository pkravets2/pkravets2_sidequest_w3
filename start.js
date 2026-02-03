// start.js
let startBtn;

function drawStart() {
  background(180, 220, 220);

  fill(40);
  textAlign(CENTER, CENTER);
  textSize(64);
  text("Win or Lose", width / 2, 200);

  textSize(20);
  text("Press ENTER to start\nPress I for instructions", width / 2, 270);

  startBtn = { x: width / 2, y: 520, w: 420, h: 120 };
  drawButton(startBtn, "START");

  cursor(isHover(startBtn) ? HAND : ARROW);
}

function startMousePressed() {
  if (isHover(startBtn)) {
    resetGame();
    currentScreen = "game";
  }
}

function startKeyPressed() {
  if (keyCode === ENTER) {
    resetGame();
    currentScreen = "game";
  }

  if (key === "i" || key === "I") {
    currentScreen = "instr";
  }
}
