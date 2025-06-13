let number = 0;
let choice = "";

function getComputerChoice() {
    // Generate a random number between 0 and 2
    number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper"
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            console.log("The computer seems to be indecisive!")
    }

    return choice;
}
