'use strict';

const mainCtn = document.querySelector(".main > .container"); // selects main container

const ctnLeft = document.createElement("div"); // creates container left inside mainCtn
ctnLeft.classList.add("ctn-left");
mainCtn.append(ctnLeft);

const ctnRight = document.createElement("div"); // creates container right inside mainCtn
ctnRight.classList.add("ctn-right");
mainCtn.append(ctnRight);

const btnUp = document.createElement("button");
btnUp.classList.add("btn-up");
const btnDown = document.createElement("button");
btnDown.classList.add("btn-down");
ctnRight.append(btnUp);
ctnRight.append(btnDown);

const sliderLeft = document.querySelector(".ctn-left"); // selects container left
const sliderRight = document.querySelector(".ctn-right"); // selects container right

const imgs = [
    "trip.01",
    "trip.02",
    "trip.03",
    "trip.04",
    "trip.05"
];

let imgsList = "";
let current = 0;

// Loop div containing images
for (let i = 0; i < imgs.length; i++) {
    imgsList += `<div class="img-ctn"><img src="assets/img/${imgs[i]}.jpg" alt=""></div>`
}

// Concat and inserts images into their corresponding container
sliderLeft.innerHTML += imgsList;
sliderRight.innerHTML += imgsList;

document.querySelector(".ctn-left .img-ctn").classList.add("show");
document.querySelector(".ctn-right .img-ctn").classList.add("clear");

/********************* EVENT to scroll images on click ********************************/ 

const clickUp = document.querySelector(".btn-up");
const clickDown = document.querySelector(".btn-down");

const imgCtn = document.querySelectorAll(".ctn-left > .img-ctn");
const imgCtnRight = document.querySelectorAll(".ctn-right > .img-ctn");
 
clickUp.addEventListener("click", () => {
    imgCtn[current].classList.remove("show")
    imgCtnRight[current].classList.remove("clear")

    if (current > 0) {
        current--;
    } else {
        current += imgs.length - 1;
    };

    imgCtn[current].classList.add("show")
    imgCtnRight[current].classList.add("clear")
})

clickDown.addEventListener("click", () => {
    imgCtn[current].classList.remove("show")
    imgCtnRight[current].classList.remove("clear")

    if (current < imgs.length - 1) {
        current++;
    } else {
        current -= imgs.length - 1
    };

    imgCtn[current].classList.add("show")
    imgCtnRight[current].classList.add("clear")
})