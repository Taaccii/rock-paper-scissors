//Random CPU Choice for rock, paper and scissors 

function getComputerChoice() {

  let randomChoice = Math.random();

  if (randomChoice < 1/3) {
    return "rock";
  } else if (randomChoice < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
  

}


//Human choice

function getHumanChoice() {

  let choice = prompt("Rock, paper or scissors?", "Insert only rock paper or scissors")

  if (choice.toLowerCase() === "rock" ) {
    return "rock";
  } else if (choice.toLocaleLowerCase() === "paper") {
    return "paper";
  } else if (choice.toLocaleLowerCase() === "scissors") {
    return "scissors";
  } else return getHumanChoice();
  
}


let humanScore = 0;
let computerScore = 0;

const umanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


// First round logic
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You Win! Paper beats Rock")
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You Win! Rock beats Scissors")
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You Win! Scissors beats Paper")
  } else {
    computerScore++;
    console.log("Youe Lose!")
  }
}

playRound(umanSelection, computerSelection)

console.log(playRound())