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

const playerSelection = String(prompt("chose either rock | paper | scissors")).toLowerCase();
const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

// console.log(computerSelection);

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

alert(`you: ${playerSelection}
computer: ${computerSelection}
${playRound(playerSelection, computerSelection)}`);

function game() {

}