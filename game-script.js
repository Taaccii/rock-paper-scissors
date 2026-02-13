//Random CPU Choice for rock, paper and scissors

function getComputerChoice() {
  let randomChoice = Math.random();

  if (randomChoice < 1 / 3) {
    return 'rock';
  } else if (randomChoice < 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//Human choice

function getHumanChoice() {
  let choice = prompt(
    'Rock, paper or scissors?',
    'Insert only rock paper or scissors'
  );

  if (choice.toLowerCase() === 'rock') {
    return 'rock';
  } else if (choice.toLocaleLowerCase() === 'paper') {
    return 'paper';
  } else if (choice.toLocaleLowerCase() === 'scissors') {
    return 'scissors';
  } else return getHumanChoice();
}


// First round logic
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return 'tie';

  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    return 'win';

  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    return 'win';

  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    return 'win';

  } else return 'lose';
}


let humanScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === 'win') {
      humanScore++;
    } else if (result === 'lose') {
      computerScore++;
    } else if (result === 'tie') {
    }

    if (humanScore === 5 || computerScore === 5){

    }
  });
});


