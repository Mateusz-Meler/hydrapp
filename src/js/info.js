import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const date = document.querySelector(".date--js");
const value = document.querySelector(".value--js");

let currentValue = localStorage.getItem(window.localStorage.key(1));
if (currentValue) {
value.innerHTML = currentValue;
}

let currentKey = window.localStorage.key(1);
if (currentKey) {
date.innerHTML = currentKey;
}


//--------------------------------------------------------------------------------//

const date2 = document.querySelector(".date2--js");
const value2 = document.querySelector(".value2--js");

let currentValue2 = localStorage.getItem(window.localStorage.key(2));
if (currentValue2) {
value2.innerHTML = currentValue2;
}

let currentKey2 = window.localStorage.key(2);
if (currentKey2) {
date2.innerHTML = currentKey2;
}


//--------------------------------------------------------------------------------//

const date3 = document.querySelector(".date3--js");
const value3 = document.querySelector(".value3--js");

let currentValue3 = localStorage.getItem(window.localStorage.key(3));
if (currentValue3) {
value3.innerHTML = currentValue3;
}

let currentKey3 = window.localStorage.key(3);
if (currentKey3) {
date3.innerHTML = currentKey3;
}


//--------------------------------------------------------------------------------//

const date4 = document.querySelector(".date4--js");
const value4 = document.querySelector(".value4--js");

let currentValue4 = localStorage.getItem(window.localStorage.key(4));
if (currentValue4) {
value4.innerHTML = currentValue4;
}

let currentKey4 = window.localStorage.key(4);
if (currentKey4) {
date4.innerHTML = currentKey4;
}


//--------------------------------------------------------------------------------//

const date5 = document.querySelector(".date5--js");
const value5 = document.querySelector(".value5--js");

let currentValue5 = localStorage.getItem(window.localStorage.key(5));
if (currentValue5) {
value5.innerHTML = currentValue5;
}

let currentKey5 = window.localStorage.key(5);
if (currentKey5) {
date5.innerHTML = currentKey5;
}


//--------------------------------------------------------------------------------//

const date6 = document.querySelector(".date6--js");
const value6 = document.querySelector(".value6--js");

let currentValue6 = localStorage.getItem(window.localStorage.key(6));
if (currentValue6) {
value6.innerHTML = currentValue6;
}

let currentKey6 = window.localStorage.key(6);
if (currentKey6) {
date6.innerHTML = currentKey6;
}


//--------------------------------------------------------------------------------//

const date7 = document.querySelector(".date7--js");
const value7 = document.querySelector(".value7--js");

let currentValue7 = localStorage.getItem(window.localStorage.key(7));
if (currentValue7) {
value7.innerHTML = currentValue7;
}

let currentKey7 = window.localStorage.key(7);
if (currentKey7) {
date7.innerHTML = currentKey7;
}


//--------------------------------------------------------------------------------//

const date8 = document.querySelector(".date8--js");
const value8 = document.querySelector(".value8--js");

let currentValue8 = localStorage.getItem(window.localStorage.key(8));
if (currentValue8) {
value8.innerHTML = currentValue8;
}

let currentKey8 = window.localStorage.key(8);
if (currentKey8) {
date8.innerHTML = currentKey8;
}


//--------------------------------------------------------------------------------//

const date9 = document.querySelector(".date9--js");
const value9 = document.querySelector(".value9--js");

let currentValue9 = localStorage.getItem(window.localStorage.key(9));
if (currentValue9) {
value9.innerHTML = currentValue9;
}

let currentKey9 = window.localStorage.key(9);
if (currentKey9) {
date9.innerHTML = currentKey9;
}


//--------------------------------------------------------------------------------//

const date10 = document.querySelector(".date10--js");
const value10 = document.querySelector(".value10--js");

let currentValue10 = localStorage.getItem(window.localStorage.key(10));
if (currentValue10) {
value10.innerHTML = currentValue10;
}

let currentKey10 = window.localStorage.key(10);
if (currentKey10) {
date10.innerHTML = currentKey10;
}

