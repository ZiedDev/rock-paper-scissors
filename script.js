let playerSelection = String(prompt("choose either rock | paper | scissors")).toLowerCase();
let computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;
let scoreToWin = 5;

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
    while (playerScore < scoreToWin && computerScore < scoreToWin) {
        playerSelection = String(prompt("choose either rock | paper | scissors")).toLowerCase();
        computerSelection = getComputerChoice();

        console.log(round());

        alert(`you: ${playerSelection}
computer: ${computerSelection}
player score: ${playerScore}
computer score: ${computerScore}`);
    }
}

console.log(game());
alert(`Game ended.
${playerScore > computerScore ? "You won" : "You lost"}`);