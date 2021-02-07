'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 3;
document.querySelector('score').textContent = score;
let gameCleared = false;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    gameCleared = true;
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }

  if (score === 0 && !gameCleared) {
    document.querySelector('.message').textContent = 'You lost the game!';
  }
});

/*
console.log(document.querySelector('.message').textContent);
// DOM(Documnet Object Model) - Structured representation of HTML Documents. Allows JavaScript to access HTML elements and styles to manipulated them.

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '1';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
