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

let getHumanChoice = function () {
    let userInput = prompt("Enter your move: Rock, Paper, Scissors");
    console.log("You chose: " + userInput);
}
getHumanChoice();

let humanScore = 0;
let computerScore = 0;

let playRound = function (humanScore, computerScore) {
    humanScore = humanScore.toLowerCase();
    computerScore = computerScore.toLowerCase();

if (getHumanChoice === getComputerChoice) {
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