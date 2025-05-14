let humanSelection = getHumanChoice().toLowerCase();
let computerSelection = getHumanChoice();
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
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
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock!");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper!");
        computerScore++;
    } else {
        console.log("It\'s a tie!")
    }
}

function getComputerChoice() {
    selectionIndex = Math.floor(Math.random() * 10);
    if (selectionIndex <= 3) {
        return "rock"
    } else if (selectionIndex <= 6) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Enter your move.");
}