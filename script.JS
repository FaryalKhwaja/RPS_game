let result = document.querySelector(".result");
let humanScoreSpan = document.querySelector(".user-score");
let computerScoreSpan = document.querySelector(".computer-score");
let reset = document.querySelector(".restart");
let buttons = document.querySelectorAll(".choice");

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

//playRound
let humanScore = 0;
let computerScore = 0;

let playRound = function (humanChoice, computerChoice) {
     humanChoice = humanChoice.toLowerCase();
     computerChoice = computerChoice.toLowerCase();



if (humanChoice === computerChoice) {
        result.textContent = "It's a tie";
    return;
}
if (  (humanChoice === "rock" && computerChoice === "scissors") 
   || (humanChoice === "scissors" && computerChoice == "paper")
   || (humanChoice === "paper" && computerChoice === "rock")) {
    humanScore++;
    humanScoreSpan.textContent = `User's Score: ${humanScore}`;
    result.textContent = (`YOU WIN! ${humanChoice} beats ${computerChoice}`);
   } else {
    computerScore++;
    computerScoreSpan.textContent = `Computer's Score: ${computerScore}`;
    result.textContent = (`YOU LOSE! ${computerChoice} beats ${humanChoice}`);
   }

if (humanScore === 5) {
    result.textContent = " You reached 5 points first! YOU WIN!";
    endGame(buttons, reset);

} else if (computerScore === 5) {
    result.textContent = "YOU LOSE!";
    endGame(buttons, reset);
}
}

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

reset.addEventListener("click", () => {
    location.reload();
});

function endGame (buttons, reset) {
    buttons.forEach((button) => {
        button.disabled = true;
    })
    reset.style.display = "inline-block";
}
