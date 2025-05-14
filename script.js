let winMessage;
let humanSelection = getHumanChoice().toLowerCase();
let computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

function capitalize(text) {
    return String(text).charAt(0).toUpperCase() + String(text).slice(1);
}

function declareWinner(winner) {
    if (winner == "human") {
        winMessage = `You win! ${capitalize(humanSelection)} beats ${capitalize(computerSelection)}.` 
        humanScore++;
    } else if (winner == "computer") {
        winMessage = `You lose! ${capitalize(computerSelection)} beats ${capitalize(humanSelection)}.`
        computerScore++;    
    } else {
        winMessage = "It's a tie!"
    }
    console.log(winMessage);
}

function playGame() {

    let playRound = function (humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "rock"
        ) {
            declareWinner("computer");
        } else if (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper"
        ) {
            declareWinner("human");
        } else {
            declareWinner("tie");
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
    if (winMessage) {
        return prompt(`${winMessage}\nEnter your move. (rock, paper, scissors)`)
    } else {
        return prompt("Enter your move. (rock, paper, scissors)");
    }
}

playGame();
console.log("=========================")

if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (humanScore < computerScore) {
    console.log("You lose the game!");
} else {
    console.log("Tie!");
}
console.log(`Your score was ${humanScore} and the computer score was ${computerScore}`);