//getComputerChoice 
let getComputerChoice = function () {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock"; 
    }
    else if (randomNumber === 1) {
        return "paper"; 
    }
    else {
        return "scissors";
    } 
}
getComputerChoice()

//getHumanChoice
let getHumanChoice = function () {
    let userInput = prompt("Enter your move: Rock, Paper, Scissors");
    return userInput;
}
getHumanChoice();

//playRound
let humanScore = 0;
let computerScore = 0;

let playRound = function (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

if (humanChoice === computerChoice) {
    return "It's a tie";
}
if (  (getHumanChoice === "rock" && getComputerChoice === "scissors") 
   || (getHumanChoice === "scissors" && getComputerChoice == "paper")
   || (getHumanChoice === "paper" && getComputerChoice === "rock")) {
    humanScore++;
    console.log(`YOU WIN! ${getHumanChoice} beats ${getComputerChoice}`);
   } else {
    computerScore++;
    console.log(`YOU LOSE! ${getComputerChoice} beats ${getHumanChoice}`);
   }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

let playGame = function () {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`SCORE: You -> ${humanScore}, Computer -> ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("YOU WIN!");
    } else if (humanScore < computerScore) {
        console.log("YOU LOSE!");
    } else {
        console.log("DRAW!");
    }
    }
}

playGame();







