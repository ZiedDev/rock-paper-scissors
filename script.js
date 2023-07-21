//DOM manipulationrock
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerChoiceImage = document.getElementById("player-choice-image");
const computerChoiceImage = document.getElementById("computer-choice-image");

const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");

const gameHeader = document.getElementById("game-header");
const resetButton = document.getElementById("reset-button");

rock.addEventListener("click", () => {
    getPlayerChoice(rock);
    game();
});

paper.addEventListener("click", () => {
    getPlayerChoice(paper);
    game();
});

scissors.addEventListener("click", () => {
    getPlayerChoice(scissors);
    game();
});

let playerSelection;
let computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;
let scoreToWin = 5;

function getPlayerChoice(element) {
    playerSelection = String(element.textContent).toLowerCase();
}

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return "rock";
    }
    else if (x == 1) {
        return "paper";
    }
    else if (x == 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // if user chose rock
    if (playerSelection == "rock") {
        if (computerSelection == "rock")
            return "tie";

        if (computerSelection == "paper")
            return "lose";


        if (computerSelection == "scissors")
            return "win";
    }
    // if user chose paper
    else if (playerSelection == "paper") {
        if (computerSelection == "rock")
            return "win";

        if (computerSelection == "paper")
            return "tie";

        if (computerSelection == "scissors")
            return "lose";
    }
    // if user chose scissors
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock")
            return "lose";

        if (computerSelection == "paper")
            return "win";

        if (computerSelection == "scissors")
            return "tie";
    }
}

function round() {
    if (playRound(playerSelection, computerSelection) == "win")
        return playerScore++;
    else if (playRound(playerSelection, computerSelection) == "lose")
        return computerScore++;
}

function game() {
    if (playerScore < scoreToWin && computerScore < scoreToWin) {
        computerSelection = getComputerChoice();
        round();

        playerChoiceImage.src = `./images/emojis/${playerSelection}.png`;

        computerChoiceImage.src = `./images/emojis/${computerSelection}.png`;

        playerScoreText.textContent = `Player: ${playerScore}`
        computerScoreText.textContent = `Computer: ${computerScore}`
    }
    if (playerScore == scoreToWin || computerScore == scoreToWin) {
        playerChoiceImage.src = `./images/emojis/${playerSelection}.png`;

        computerChoiceImage.src = `./images/emojis/${computerSelection}.png`;

        playerScoreText.textContent = `Player: ${playerScore}`
        computerScoreText.textContent = `Computer: ${computerScore}`

        playerScore > computerScore ? gameHeader.textContent = "You win" : gameHeader.textContent = "You lost";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerChoiceImage.src = ``;

    computerChoiceImage.src = ``;

    playerScoreText.textContent = `Player: ${playerScore}`
    computerScoreText.textContent = `Computer: ${computerScore}`

    gameHeader.textContent = "First to 5 wins"
}