function drawLose() {
  background(255, 210, 210);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(40);
  text("Game Over", width / 2, 280);

  textSize(20);
  text(`You got ${game.score} / ${game.goal}`, width / 2, 340);

  textSize(18);
  text(
    "Click or press ENTER to retry this level.\nPress R to go to Start.",
    width / 2,
    410,
  );
}

function loseMousePressed() {
  resetRound();
  currentScreen = "game";
}

function loseKeyPressed() {
  if (keyCode === ENTER) {
    resetRound();
    currentScreen = "game";
  }
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
