"use strict";

// Score Elements
const player0E = document.querySelector(".player--0");
const player1E = document.querySelector(".player--1");
const score1El = document.querySelector("#score--0");
const score2El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const newButton = document.querySelector(".btn--new");
const rollButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const didClickRollButton = () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0E.classList.toggle("player--active");
    player1E.classList.toggle("player--active");
  }
};

// Start Conditions
score1El.textContent = "0";
score2El.textContent = "0";
diceEl.classList.add("hidden");

// Rolling dice functionality
rollButton.addEventListener("click", didClickRollButton);
