var prompt = require("prompt")

var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function boardLayout() {
  console.log("\n" + " " + board[0] + " " + "|" + " " + board[1] + " " + "|" + " " + board[2] + " " + "\n" + "-----------\n" + " " + board[3] + " " + "|" + " " + board[4] + " " + "|" + " " + board[5] + " " + "\n" + "-----------\n" + " " + board[6] + " " + "|" + " " + board[7] + " " + "|" + " " + board[8] + " " + "\n")};

boardLayout();

function turn(player) {
  prompt.start();
  prompt.get(['move'], (err, result) => {
    board[result.move - 1] = player;
    boardLayout();
    if (player === "X") {
      player = "O";
    } else if (player === "O") {
      player = "X";
    }
    turn(player);
  })
}

turn("X");
