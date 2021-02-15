"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".close-modal");
const openModalButtons = document.querySelectorAll(".show-modal");

// Selectors
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const escKeyPressed = (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
};

// Setup
const setup = () => {
  for (let i = 0; i < openModalButtons.length; i++) {
    openModalButtons[i].addEventListener("click", openModal);
  }
  closeModalButton.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", escKeyPressed);
};

setup();
