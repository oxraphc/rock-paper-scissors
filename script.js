let humanSelection = getHumanChoice().toLowerCase();
let computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

function capitalize(text) {
    return String(text).charAt(0).toUpperCase() + String(text).slice(1);
}

function humanWins() {
    console.log(`You win! ${capitalize(humanSelection)} beats ${capitalize(computerSelection)}`);
    humanScore++;
}

function computerWins() {
    console.log(`You lose! ${capitalize(computerSelection)} beats ${capitalize(humanSelection)}`);
    computerScore++;
}


function playGame() {

    let playRound = function (humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper") {
            computerWins();
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerWins();
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerWins();
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanWins();
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanWins();
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanWins();
        } else {
            console.log("It\'s a tie!");
        }
    }

    for (let round = 1; round <= 5; round++) {
        playRound(humanSelection, computerSelection);
        humanSelection = getHumanChoice().toLowerCase();
        computerSelection = getComputerChoice();
    }
}


function getComputerChoice() {
    selectionIndex = Math.floor(Math.random() * 100);
    if (selectionIndex <= 33) {
        return "paper"
    } else if (selectionIndex <= 66) {
        return "rock"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Enter your move. (rock, paper, scissors)");
}

playGame();
console.log("=========================")

if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (humanScore < computerScore) {
    console.log("You lose the game!");
} else {
    console.log("Neither of you win!");
}
console.log(`Your score was ${humanScore} and the computer score was ${computerScore}`);