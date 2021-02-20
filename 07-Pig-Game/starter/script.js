"use strict";

// Score Elements
const score1El = document.querySelector("#score--0");
const score2El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const newButton = document.querySelector(".btn--new");
const rollButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");

let currentScore = 0;

const didClickRollButton = () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
  }
};

// Start Conditions
score1El.textContent = "0";
score2El.textContent = "0";
diceEl.classList.add("hidden");

// Rolling dice functionality
rollButton.addEventListener("click", didClickRollButton);
