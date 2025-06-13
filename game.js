let number = 0;
let computerChoice = "";
let playerChoice = "";

function getComputerrChoice() {
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
    playerChoice = prompt("Enter your choice!");
    return playerChoice;
}
