'use strict';

// Creates slider div inside main > .container
const mainContainer = document.querySelector("main > .container");
const slider = document.createElement("div");
slider.classList.add("slider");
mainContainer.append(slider)

// Created previous button inside slider div
const btnPrev = document.createElement("button");
btnPrev.classList.add("prev");
slider.append(btnPrev);

// Created next button inside slider div
const btnNext = document.createElement("button");
btnNext.classList.add("next");
slider.append(btnNext);


