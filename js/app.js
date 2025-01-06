var paper_btn = document.getElementById("paper");
var rock_btn = document.getElementById("rock");
var scissor_btn = document.getElementById("scissors");

var insert_img = document.getElementById("image-area");
var insert_img_one = document.getElementById("image-area-one");
var updatePlayer = document.getElementById("player");
var updateComputer = document.getElementById("computer");
var wonMessage = document.getElementById("won");

var input_computer;
var input_player;
var player_score = 0;
var computer_score = 0;

function random_text() {
  var name_list = ["Rock", "Paper", "Scissors"];
  var list_item = ["rock", "paper", "scissors"];
  var ran_num = Math.floor(Math.random() * 3);
  insert_img_one.innerHTML = `<p class="insert-img">${name_list[ran_num]}</p>`;
  input_computer = list_item[ran_num];
}

paper_btn.addEventListener("click", function () {
  handlePlayerChoice("paper");
});
rock_btn.addEventListener("click", function () {
  handlePlayerChoice("rock");
});
scissor_btn.addEventListener("click", function () {
  handlePlayerChoice("scissors");
});

function handlePlayerChoice(choice) {
  input_player = choice;
  insert_img.innerHTML = `<p>${choice.charAt(0).toUpperCase() + choice.slice(1)}</p>`;
  random_text();
  updateScores();
  updateComputer.textContent = computer_score;
  updatePlayer.textContent = player_score;
  checkWinner();
}

function updateScores() {
  const winMatrix = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (input_player === input_computer) {
    // Tie condition; no score update needed
  } else if (winMatrix[input_player] === input_computer) {
    player_score++;
  } else {
    computer_score++;
  }
}

function checkWinner() {
  if (player_score >= 5 || computer_score >= 5) {
    paper_btn.disabled = true;
    rock_btn.disabled = true;
    scissor_btn.disabled = true;

    if (player_score > computer_score) {
      wonMessage.textContent = "Player (You) Won!!!";
    } else {
      wonMessage.textContent = "Computer Won!!!";
    }

    showReplayButton();
  }
}

function showReplayButton() {
  const replayButton = document.createElement("button");
  replayButton.textContent = "Play Again";
  replayButton.className = "replay-btn";
  replayButton.addEventListener("click", resetGame);
  document.body.appendChild(replayButton);
}

function resetGame() {
  player_score = 0;
  computer_score = 0;
  updatePlayer.textContent = player_score;
  updateComputer.textContent = computer_score;
  wonMessage.textContent = "";
  insert_img.innerHTML = "";
  insert_img_one.innerHTML = "";
  paper_btn.disabled = false;
  rock_btn.disabled = false;
  scissor_btn.disabled = false;

  const replayButton = document.querySelector(".replay-btn");
  if (replayButton) replayButton.remove();
}
