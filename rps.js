let wins = 0;
let losses = 0;
let ties = 0;

const options = ["rock", "paper", "scissors"]

window.alert("Welcome to rock, paper, scissors!");

const startGame = function() {

    let playerChoice = window.prompt("Please type one option: " + options);

    if(!playerChoice){
        return;
    }

    const randomChoice = Math.floor(Math.random() * 3)
    const compChoice = options[randomChoice];

    window.alert("The computer chose " + compChoice)

    if (compChoice === playerChoice) {
        ties++;
        window.alert("You tied");
    } else if (
        (playerChoice === "rock" && compChoice === "scissors") ||
        (playerChoice === "scissors" && compChoice === "paper") ||
        (playerChoice === "paper" && compChoice === "rock")) 
        { wins++;
          window.alert("You win! :)")
    } else {
        losses++;
        window.alert("You lose :(")
    }

    let score = window.alert(
        "Score: \nWins " + wins + "\nLosses " + losses + "\nTies " + ties
    )
    
   const playAgain = window.confirm("Play again?")

   if (playAgain){
       startGame();
   }
}

startGame();