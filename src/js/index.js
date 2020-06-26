import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */


const addGlass = document.querySelector(".button--js");
const removeGlass = document.querySelector(".secondary-button--js");
const counter = document.querySelector(".glass__number--js");

let glassCounter = 0;

addGlass.addEventListener('click', () => {
glassCounter++;
counter.innerHTML = glassCounter;
})

removeGlass.addEventListener('click', () => {
    glassCounter--;
    counter.innerHTML = glassCounter;

    })
