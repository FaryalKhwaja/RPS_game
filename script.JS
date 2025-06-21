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

