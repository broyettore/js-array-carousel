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

const imgs = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"] // images array
let itemsContent = "";
let active = 0;
const selectSlider = document.querySelector(".slider"); // select slider div

// Loops into displaying the images in the array
for (let i = 0; i < imgs.length; i++) {
    itemsContent += `<div class="item"><img src="assets/img/${imgs[i]}" alt=""></div>`;
}

slider.innerHTML += itemsContent; // concat the array images
document.querySelector(".item").classList.add("show");

// Scroll image event
const prev = document.querySelector(".prev"); // select btnPrev
const next = document.querySelector(".next"); // select btnNext

const items = document.querySelectorAll(".item"); // selects all images containers

prev.addEventListener("click", () => {
    if (active > 0) {
        items[active].classList.remove("show");
        active--;
        items[active].classList.add("show");
    }
})

next.addEventListener("click", () => {
    if (active < items.length - 1) {
        items[active].classList.remove("show");
        active++;
        items[active].classList.add("show");
    }
})