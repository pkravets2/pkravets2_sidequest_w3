// instructions.js
// Instructions screen: ESC or B to go back

function drawInstr() {
  background(240);

  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("Instructions", width / 2, 80);

  textSize(18);
  text(
    "Click the moving circle to score points.\n" +
      "Miss = lose 1 life.\n" +
      "Reach the goal before the timer hits 0.\n\n" +
      "Press ESC or B to go back.",
    width / 2,
    170,
  );
}

function instrMousePressed() {
  // no mouse needed
}

function instrKeyPressed() {
  if (keyCode === ESCAPE || key === "b" || key === "B") {
    currentScreen = "start";
  }
}
