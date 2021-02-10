'use strict';

// Properties
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let gameCleared = false;

// Setup
setBasics();

// Methods
function setBasics() {
  document.querySelector('.score').textContent = score;
  document
    .querySelector('.again')
    .addEventListener('click', didClickAgainButton);
  document
    .querySelector('.check')
    .addEventListener('click', didClickCheckButton);
}

function didClickAgainButton() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

function didClickCheckButton() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // when there is no input
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    // when player wins
    showWinScreen();
  } else if (guess > secretNumber && score > 0) {
    // when guess is too high
    decreaseScore('Too high!');
  } else if (guess < secretNumber && score > 0) {
    // when guess is too low
    decreaseScore('Too low!');
  }

  if (score === 0 && !gameCleared) {
    document.querySelector('.message').textContent = 'You lost the game!';
  }
}

function showWinScreen() {
  gameCleared = true;
  document.querySelector('.message').textContent = 'Correct Number!';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
}

function decreaseScore(message) {
  score--;
  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score;
}
