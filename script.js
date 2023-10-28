"use strict";

const button = document.querySelector('.dark');
const main = document.querySelector('main');
const DARK = "#323031";
let darkmode = false;

button.addEventListener('click', () => {
  if (darkmode) {
    main.style.backgroundColor = "white";
    main.style.color = DARK;
    darkmode = false;
  } else {
    main.style.backgroundColor = DARK;
    main.style.color = "white";
    darkmode = true;
  }
});