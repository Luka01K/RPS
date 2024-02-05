//Make a function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
//

function getComputerChoice() {

    let computerNumber = Math.floor(Math.random() * 3) + 1
    //console.log(computerNumber);
    if (computerNumber === 1) {
        return "Rock"
    } else if (computerNumber === 2) {
        return "Paper"
    }   else {
        return "Scissors"
    }

};

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "Rock" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "Its a draw. Nobody gets points."

    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! You also get a point."

    } else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You loose! Computer gets a point, you get none."

    } else {
        return "The option you choose is invalid. You can only choose between: Rock, Paper and Scissors. Try again."
    }
};


let playerPoints = 0;
let computerPoints = 0;

function playGame() {

    let playerSelectionMessy = prompt("Whats you'r weapon of choice?");
    let playerSelection = playerSelectionMessy.toLowerCase().charAt(0).toUpperCase() + playerSelectionMessy.slice(1).toLowerCase();
    
    let computerSelection = getComputerChoice();
    console.log("Computer chose:", computerSelection);
    console.log("You chose:", playerSelection);
    console.log(playRound(playerSelection, computerSelection));

    if (playRound(playerSelection, computerSelection) === "You win! You also get a point.") {
        playerPoints++;
        console.log("Your points:", playerPoints);
        console.log("Computer points:", computerPoints);
    } else if (playRound(playerSelection, computerSelection) === "You loose! Computer gets a point, you get none.") {
        computerPoints++;
        console.log("Your points:", playerPoints);
        console.log("Computer points:", computerPoints);
    } else {
        console.log("Your points:", playerPoints);
        console.log("Computer points:", computerPoints);
    }

}

playGame()