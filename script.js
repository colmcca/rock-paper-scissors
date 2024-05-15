var wins = 0;

var losses = 0;

var ties = 0;

var computerChoice = ["R", "P", "S"]


var userChoice;

function startGame() {
    var randomComputerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    userChoice = window.prompt("Please choose R, P, or S");
    if (userChoice === "R" || userChoice === "P" || userChoice === "S" || userChoice === "r" || userChoice === "p" || userChoice === "s") {
var capitalUserChoice = userChoice.toUpperCase();
if (capitalUserChoice === randomComputerChoice) {
    ties++;
    window.alert("You chose " + capitalUserChoice + " and the computer chose " + randomComputerChoice)
    window.alert("Wins: " + wins + ", Losses: " + losses + ", Ties: " + ties);
    var playAgain = window.confirm("Do you want to play again?");
    if (playAgain) {
        startGame();
    }
    else {
        return;
    }
}
else if (capitalUserChoice === "R" && randomComputerChoice === "S" || capitalUserChoice === "S" && randomComputerChoice === "P" || capitalUserChoice === "P" && randomComputerChoice === "R") {
    wins++;
    window.alert("You choose " + capitalUserChoice + " and the computer choose " + randomComputerChoice)
    window.alert("Wins: " + wins + ", Losses: " + losses + ", Ties: " + ties);
    var playAgain = window.confirm("Do you want to play again?");
    if (playAgain) {
        startGame();
    }
    else {
        return;
    }
}
else if (capitalUserChoice === "R" && randomComputerChoice === "P" || capitalUserChoice === "S" && randomComputerChoice === "R" || capitalUserChoice === "P" && randomComputerChoice === "S") {
    losses++;
    window.alert("You choose " + capitalUserChoice + " and the computer choose " + randomComputerChoice)
    window.alert("Wins: " + wins + ", Losses: " + losses + ", Ties: " + ties);
    var playAgain = window.confirm("Do you want to play again?");
    if (playAgain) {
        startGame();
    }
    else {
        return;
    }
}
    }

    else  {
        window.alert("Please enter a valid choice")
startGame();
    }
}


startGame();