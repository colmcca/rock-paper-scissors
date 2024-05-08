var wins = 0;

var losses = 0;

var ties = 0;

var computerChoice = ["R", "P", "S"]

var randomComputerChoice = Math.floor(Math.random() * computerChoice);

var userChoice;

function startGame() {
    userChoice = window.prompt("Please choose R, P, or S");
    if (userChoice === "R" || userChoice === "P" || userChoice === "S" || userChoice === "r" || userChoice === "p" || userChoice === "s") {
userChoice.toUpperCase();
if (userChoice === randomComputerChoice) {
    ties++;
showScore();
}
else if (userChoice === "R" && randomComputerChoice === "S" || userChoice === "S" && randomComputerChoice === "P" || userChoice === "P" && randomComputerChoice === "R") {
    wins++;
    showScore();
}
else if (userChoice === "R" && randomComputerChoice === "P" || userChoice === "S" && randomComputerChoice === "R" || userChoice === "P" && randomComputerChoicecomputerChoice === "S") {
    showScore();
}

    }

    else  {
        window.alert("Please enter a valid choice")
startGame();
    }
}

function showScore() {
    window.alert("You choose " + userChoice + " and the computer choose " + randomComputerChoice)
    window.alert("Wins: " + wins + ", Losses: " + losses + ", Ties: " + ties);
    var playAgain = window.confirm("Do you want to play again?");
    if (playAgain) {
        startGame();
    }
    else {
        return;
    }
}

startGame();