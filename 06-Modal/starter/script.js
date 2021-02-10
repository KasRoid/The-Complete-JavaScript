'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const openModalButtons = document.querySelectorAll('.show-modal');

for (let i = 0; i < openModalButtons.length; i++) {
  console.log(openModalButtons[i].textContent);
}
