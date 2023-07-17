//DOM manipulation
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");

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

let playerSelection; //= String(prompt("choose either rock | paper | scissors")).toLowerCase();
let computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;
let scoreToWin = 5;

function getPlayerChoice(element) {
    playerSelection = String(element.textContent).toLowerCase();
    console.log(playerSelection);
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
        console.log(round());

        result.textContent = `result: 
        \nyou: ${playerSelection}
        \ncomputer: ${computerSelection}
        \nplayer score: ${playerScore}
        \ncomputer score: ${computerScore}`;
    } else {
        result.textContent = `result: 
        \nyou: ${playerSelection}
        \ncomputer: ${computerSelection}
        \nplayer score: ${playerScore}
        \ncomputer score: ${computerScore}
        \nGame ended. 
        \n${playerScore > computerScore ? "You won" : "You lost"}`
    }
}

// function game() {
//     while (playerScore < scoreToWin && computerScore < scoreToWin) {
//         playerSelection = String(prompt("choose either rock | paper | scissors")).toLowerCase();
//         computerSelection = getComputerChoice();

//         console.log(round());

//         result.textContent = `result:
//         you: ${playerSelection}
//         computer: ${computerSelection}
//         player score: ${playerScore}
//         computer score: ${computerScore}`;
//     }
// }

// console.log(game());
// alert(`Game ended.
// ${playerScore > computerScore ? "You won" : "You lost"}`);