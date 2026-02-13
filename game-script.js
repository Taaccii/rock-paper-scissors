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

// Round logic
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'tie';

  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    return 'win';

  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return 'win';

  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    return 'win';

  } else return 'lose';
}


let playerScore = 0;
let computerScore = 0;

// DOM Elements selection 
const buttons = document.querySelectorAll('.btn[data-choice]');
const playerScoreText = document.getElementById('playerScore');
const computerScoreText = document.getElementById('computerScore');
const playerChoiceSign = document.getElementById('playerChoice');
const computerChoiceSign = document.getElementById('computerChoice');
const scoreInfo = document.querySelector('.score-info');
const scoreMessage = document.querySelector('.score-message');
const resetBtn = document.getElementById('resetBtn');

// Helper function for convert choice in signs
function getSign(choice) {
  if (choice === 'rock') return '👊';
  if (choice === 'paper') return '🤚';
  if (choice === 'scissors') return '✌️';
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Buttons and game logic
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);

    if (result === 'win') {
      playerScore++;
      scoreInfo.textContent = `${capitalize(playerChoice)} beats ${capitalize(computerChoice)}!`;
      scoreMessage.textContent = 'You win this round!';

    } else if (result === 'lose') {
      computerScore++;
      scoreInfo.textContent = `${capitalize(computerChoice)} beats ${capitalize(playerChoice)}!`;
      scoreMessage.textContent = 'CPU wins this round!';

    } else if (result === 'tie') {
      scoreInfo.textContent = `Both chose ${capitalize(playerChoice)}!`;
      scoreMessage.textContent = "It's a tie!";
    }

    playerScoreText.textContent = `PLAYER: ${playerScore}`;
    computerScoreText.textContent = `CPU: ${computerScore}`;

    playerChoiceSign.textContent = getSign(playerChoice);
    computerChoiceSign.textContent = getSign(computerChoice);

    if (playerScore === 5 || computerScore === 5){
      buttons.forEach(btn => btn.disabled = true);

      if (playerScore === 5) {
        scoreInfo.textContent = '🎉 YOU WIN THE GAME! 🎉';
        scoreMessage.textContent = 'Congratulations!';
      } else {
        scoreInfo.textContent = '💔 COMPUTER WINS! 💔';
        scoreMessage.textContent = 'Better luck next time!';
      }

      resetBtn.style.display = 'block';
    }

    // Game reset logic
    resetBtn.addEventListener('click', () => {
      playerScore = 0;
      computerScore = 0;

      playerScoreText.textContent = 'PLAYER: 0';
      computerScoreText.textContent = 'CPU: 0';
      playerChoiceSign.textContent = '🤜';
      computerChoiceSign.textContent = '🤛';
      scoreInfo.textContent = 'First to 5 wins the game.'
      scoreMessage.textContent = 'Make your choice!';

      buttons.forEach(btn => btn.disabled = false);
      resetBtn.style.display = 'none';
    })
  });
});


