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

//getHumanChoice
let getHumanChoice = function () {
    let userInput = prompt("Enter your move: Rock, Paper, or Scissors!!");
    return userInput;
}

//playRound
let humanScore = 0;
let computerScore = 0;

let playRound = function (humanChoice, computerChoice) {
     humanChoice = humanChoice.toLowerCase();
     computerChoice = computerChoice.toLowerCase();


if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    console.log("Invalid move! Please enter Rock or Paper or Scissors!");
    return;
}

if (humanChoice === computerChoice) {
    console.log("It's a tie");
    return;
}
if (  (humanChoice === "rock" && computerChoice === "scissors") 
   || (humanChoice === "scissors" && computerChoice == "paper")
   || (humanChoice === "paper" && computerChoice === "rock")) {
    humanScore++;
    console.log(`%c YOU WIN! ${humanChoice} beats ${computerChoice}`, "color: green; font-weight: bold;");
   } else {
    computerScore++;
    console.log(`%c YOU LOSE! ${computerChoice} beats ${humanChoice}`, "color: red; font-weight: bold;");
   }
}

//play Game:

let playGame = function () {
    humanScore = 0;
    computerScore = 0;
   
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`SCORE: You -> ${humanScore}, Computer -> ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log("YOU WIN!");
    } else if (humanScore < computerScore) {
        console.log("YOU LOSE!");
    } else {
        console.log("DRAW!");
    }
    }


playGame();







