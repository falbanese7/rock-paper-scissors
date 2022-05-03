let ties = 0;
let wins = 0;
let losses = 0;

const options = ["r", "s", "p"]

window.alert("Welcome to Rock, Paper, Scissors!");

const startGame = function() {
   let playerChoice = window.prompt("Enter r, p, or s");

   if (!playerChoice) {
    return;
   }

    const randomChoice = Math.floor(Math.random() * 3);
    const compChoice = options[randomChoice];

    window.alert("The computer chose " + compChoice);

    if (playerChoice === compChoice) {
    ties++;
    window.alert("You tied!");
    } else if (
        (playerChoice === "r" && compChoice === "s") ||
        (playerChoice === "p" && compChoice === "r") ||
        (playerChoice === "s" && compChoice === "p")
    )   { 
        wins++;
        window.alert("You win!");
    } else {
        losses++;
        window.alert("You lose!");
    }

    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    const playAgain = window.confirm("Play again?")

    if (playAgain) {
        startGame();
    }
}

startGame();