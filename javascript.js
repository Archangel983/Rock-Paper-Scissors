let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "Rock";
    }
    else if (randomNum === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
function getHumanChoice() {
    let num = prompt("Welcome to the Rock Paper Scissors game!\nEnter 1 for Rock\nEnter 2 for Paper\nEnter 3 for Scissors");
    let choice = null;
    if (num == 1) {
        choice = "Rock";
    }
    else if (num == 2) {
        choice = "Paper";
    }
    else if (num == 3) {
        choice = "Scissors";
    }
    else {
        console.log("Enter valid number");
    }
    return choice;

}

function playGame() {
    function playRound(getHumanChoice, getComputerChoice) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        if (humanChoice == computerChoice) {
            console.log("Draw!");
        }
        else if (humanChoice == "Rock" && computerChoice == "Paper") {
            console.log("Computer wins :( " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            console.log("You win!! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else if (humanChoice == "Scissors" && computerChoice == "Rock") {
            console.log("Computer wins :( " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            console.log("You win!! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else if (humanChoice == "Paper" && computerChoice == "Rock") {
            console.log("You win!! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else if (humanChoice == "Paper" && computerChoice == "Scissors") {
            console.log("Computer wins :( " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
    }
    playRound(getHumanChoice,getComputerChoice);
    playRound(getHumanChoice,getComputerChoice);
    playRound(getHumanChoice,getComputerChoice);
    playRound(getHumanChoice,getComputerChoice);
    playRound(getHumanChoice,getComputerChoice);
    if(humanScore>computerScore){
        console.log("You won!!!");
    }
    else if (computerScore>humanScore){
        console.log("Computer won!!!");
    }
    else{
        console.log("Its a draw");
    }
}
playGame();