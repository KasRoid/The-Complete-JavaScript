"use strict";

// Score Elements
const score1El = document.querySelector("#score--0");
const score2El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

// Start Conditions
score1El.textContent = "0";
score2El.textContent = "0";
diceEl.classList.add("hidden");
