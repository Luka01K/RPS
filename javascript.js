

const playerText = document.querySelector('.playerText');
const computerText = document.querySelector('.computerText');
const resultText = document.querySelector('.resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');
const roundCounter = document.querySelector('.roundCounter');

let playerSelection;
let computerSelection;
let result;
let numberOfRounds = 0;
let playerPoints = 0;
let computerPoints = 0;
let drawPoints = 0;


/* function activates when a button is clicked, updates the results*/
choiceBtns.forEach(button => button.addEventListener('click', () => {

    if (playerPoints || computerPoints < 5) {
        playerSelection = button.textContent;
        computerSelection = getComputerChoice();
        numberOfRounds++;

    /* console.log(playerSelection);
        console.log(computerSelection); */
    
        playerText.textContent = `Player: ${playerSelection}`;
        computerText.textContent = `Computer: ${computerSelection}`;
        resultText.textContent = "Result: " + playRound(playerSelection, computerSelection);
        roundCounter.textContent = `Number of rounds played: ${numberOfRounds}`
    }
}))









/* function generates a random number which determines computers choice */
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


/* function compares players choice with computers choice and returns the outcome */
function playRound(playerSelection, computerSelection) {

    if (playerSelection == "Rock" && computerSelection == "Rock" || playerSelection == "Paper" && computerSelection == "Paper" || playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "Its a draw. Nobody gets points."

    } else if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You win! You also get a point."

    } else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You loose! Computer gets a point, you get none."

    } else {
        return "The option you choose is invalid. You can only choose between: Rock, Paper and Scissors. Try again."
    }
};