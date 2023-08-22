// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Function to generate computer's choice
function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to handle the game logic
function playGame(playerChoice) {
  const computerChoice = generateComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  const txtWinner = document.getElementById("txtWinner");
  txtWinner.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

// Event listeners for the game buttons
const btnRock = document.getElementById("btnRock");
btnRock.addEventListener("click", function () {
  playGame("rock");
});

const btnPaper = document.getElementById("btnPaper");
btnPaper.addEventListener("click", function () {
  playGame("paper");
});

const btnScissors = document.getElementById("btnScissors");
btnScissors.addEventListener("click", function () {
  playGame("scissors");
});

// Reset button functionality
const btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", function () {
  const txtWinner = document.getElementById("txtWinner");
  txtWinner.textContent = "";
});

// Exit button functionality
const btnExit = document.getElementById("btnExit");
btnExit.addEventListener("click", function () {
  Window.close();  
});
