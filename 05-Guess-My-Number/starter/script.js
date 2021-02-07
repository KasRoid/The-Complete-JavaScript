'use strict';

console.log(document.querySelector('.message').textContent);
// DOM(Documnet Object Model) - Structured representation of HTML Documents. Allows JavaScript to access HTML elements and styles to manipulated them.

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '1';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
