'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const resetGame = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.again').addEventListener('click', resetGame);

let gameCleared = false;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // when there is no input
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    // when player wins
    gameCleared = true;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  } else if (guess > secretNumber && score > 0) {
    // when guess is too high
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber && score > 0) {
    // when guess is too low
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }

  if (score === 0 && !gameCleared) {
    document.querySelector('.message').textContent = 'You lost the game!';
  }
});
