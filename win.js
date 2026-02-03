function drawWin() {
  background(200, 255, 200);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(40);
  text("Level Cleared!", width / 2, 280);

  textSize(20);
  text(`You hit ${game.score} / ${game.goal}`, width / 2, 340);

  textSize(18);
  text(
    "Click or press ENTER for next level.\nPress R to go to Start.",
    width / 2,
    410,
  );
}

function winMousePressed() {
  game.level += 1;
  resetRound();
  currentScreen = "game";
}

function winKeyPressed() {
  if (keyCode === ENTER) {
    game.level += 1;
    resetRound();
    currentScreen = "game";
  }
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
