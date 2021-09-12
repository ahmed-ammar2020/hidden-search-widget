"use strict";
let searchIcon = document.querySelector("i");
let input = document.querySelector("input");

searchIcon.addEventListener("click", function () {
  input.classList.toggle("hide");
});
