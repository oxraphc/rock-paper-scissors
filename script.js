let humanSelection = getHumanChoice().toLowerCase();
let computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;


function playGame() { 
    
    let playRound = function (humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper!");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock!");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats paper!");
            humanScore++;
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