var wins = 0;

var losses = 0;

var ties = 0;

var computerChoice = ["R", "P", "S"]

var randomComputerChoice = Math.floor(Math.random() * computerChoice);

var userChoice;

function startGame() {
    userChoice = window.prompt("Please choose R, P, or S");
    if (userChoice == "R" || userChoice == "P" || userChoice == "S" || userChoice == "r" || userChoice == "p" || userChoice == "s") {
userChoice.toUpperCase();

    }

    else  {
        window.alert("Please enter a valid choice")
startGame();
    }
}

startGame();