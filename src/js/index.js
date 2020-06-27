import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const addGlass = document.querySelector(".button--js");
const removeGlass = document.querySelector(".secondary-button--js");
const counter = document.querySelector(".glass__number--js");
const key = new Date().toLocaleString().slice(0, 10);
let glassCounter = 0;
const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  glassCounter = localStorageValue;
  counter.innerHTML = glassCounter;
} else {
  localStorage.setItem(key, 0);
}


addGlass.addEventListener("click", () => {
  glassCounter++;
  counter.innerHTML = glassCounter;
  localStorage.setItem(key, glassCounter);
});

removeGlass.addEventListener("click", () => {
  if (glassCounter > 0) {
    glassCounter--;
  }
  counter.innerHTML = glassCounter;
  localStorage.setItem(key, glassCounter);
});

