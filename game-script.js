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

// 5 Round logic
// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
    
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     const result = playRound(humanSelection, computerSelection);

//     if (result === 'win') {
//       humanScore++;
//       console.log(`Round ${i+1}: You Win! ${humanSelection} beats ${computerSelection} `);
//     } else if (result === 'lose') {
//       computerScore++;
//       console.log(`Round ${i+1}: You Lose! ${computerSelection} beats ${humanSelection} `);
//     } else if (result === 'tie') {
//       computerScore++;
//       humanScore++;
//       console.log(`Round ${i+1}: It's a Tie! ${humanSelection} = ${computerSelection} `);
//     }
//   }

// if (humanScore > computerScore) console.log('You Win the Game!');
// else if (computerScore > humanScore) console.log('You Lose the Game!');
// else console.log("It's a Tie Game!");

// }

console.log(playGame());