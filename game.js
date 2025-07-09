let number = 0;
let computerChoice = "";
let humanChoice = "";
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    // Generate a random number between 0 and 2
    number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper"
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            console.log("The computer seems to be indecisive!")
    }

    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt("Enter your choice!");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
    } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore += 1;
    } else {
        console.log("It's a tie!");
    }
}

playRound(getHumanChoice(), getComputerChoice());
console.log(`You: ${humanScore} Computer: ${computerScore}`);
