let result = document.querySelector(".result");



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

// //getHumanChoice
// let getHumanChoice = function () {
//     let userInput = prompt("Enter your move: Rock, Paper, or Scissors!!");
//     return userInput;
// }

//playRound
let humanScore = 0;
let computerScore = 0;

let playRound = function (humanChoice, computerChoice) {
     humanChoice = humanChoice.toLowerCase();
     computerChoice = computerChoice.toLowerCase();


if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    result.textContent = "Invalid move! Please enter Rock or Paper or Scissors!";
    return;
}

if (humanChoice === computerChoice) {
        result.textContent = "It's a tie";
    return;
}
if (  (humanChoice === "rock" && computerChoice === "scissors") 
   || (humanChoice === "scissors" && computerChoice == "paper")
   || (humanChoice === "paper" && computerChoice === "rock")) {
    humanScore++;
    result.textContent = (`YOU WIN! ${humanChoice} beats ${computerChoice}`);
   } else {
    computerScore++;
    result.textContent = (`YOU LOSE! ${computerChoice} beats ${humanChoice}`);
   }
}

let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})


