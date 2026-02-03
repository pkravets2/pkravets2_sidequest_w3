// start.js
// Start screen: ENTER = start game, I = instructions

let startBtn;

function drawStart() {
  background(30);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(46);
  text("Win or Lose", width / 2, 220);

  textSize(18);
  text("Press ENTER to start\nPress I for instructions", width / 2, 300);

  // One button only (Start)
  startBtn = { x: width / 2, y: 430, w: 240, h: 80 };
  drawButton(startBtn, "START");
}

function startMousePressed() {
  // Optional: keep clicking START if your mouse works sometimes
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

  // ✅ I opens instructions
  if (key === "i" || key === "I") {
    currentScreen = "instr";
  }
}
