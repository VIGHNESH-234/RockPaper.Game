let userScore = 0;
let compScore = 0;

// DOM Elements
const choices = document.querySelectorAll(".choice");
const resultText = document.querySelector("#result-text");
const userScoreDisplay = document.querySelector("#player-score");
const compScoreDisplay = document.querySelector("#computer-score");
const resetButton = document.querySelector("#reset");

// Function to generate computer's choice
const compChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

// Function to determine the winner
const determineWinner = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    return "draw";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    return "user";
  } else {
    return "comp";
  }
};

// Function to update the UI
const updateUI = (result, userChoice, compChoice) => {
  if (result === "user") {
    userScore++;
    userScoreDisplay.innerText = userScore;
    resultText.innerText = `You Win! ${userChoice} beats ${compChoice}`;
  } else if (result === "comp") {
    compScore++;
    compScoreDisplay.innerText = compScore;
    resultText.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
  } else {
    resultText.innerText = `It's a Draw!`;
  }
};

// Function to handle user choice
const playGame = (userChoice) => {
  const comp = compChoice();
  const result = determineWinner(userChoice, comp);
  updateUI(result, userChoice, comp);
};

// Event listeners for choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Reset game
resetButton.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScoreDisplay.innerText = userScore;
  compScoreDisplay.innerText = compScore;
  resultText.innerText = "Make your move!";
});