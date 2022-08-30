"use strict";

let firNumber = "";
let secNumber = "";
let curOperator = "";
let shouldClearInput = false;
let shouldClearCalculation = false;
let screen = document.getElementById("display");

const sumBtn = document.querySelector(".btn-sum");
const clearBtn = document.querySelector(".btn-clear");
const operatorBtns = document.getElementsByClassName("btn-operator");
const numberBtns = document.getElementsByClassName("btn-num");

screen.textContent = "";

const operate = function (btnContent) {
  curOperator === "+" && add(firNumber, secNumber);
  curOperator === "-" && substract(firNumber, secNumber);
  curOperator === "*" && multiply(firNumber, secNumber);
  curOperator === "/" && divide(firNumber, secNumber);
  shouldClearInput = true;
  //and other buttons
};

//assign functions /////////////////
const assignNumbers = function (btnContent) {
  if (curOperator === "") {
    shouldClearCalculation = true;
    shouldClearInput = true;
    clear();
  }
  screen.textContent = btnContent;
  firNumber === "" ? (firNumber = btnContent) : (secNumber = btnContent);
  console.log(firNumber + ".. this is the first number");
  console.log(secNumber + ".. this is the second number");
};

const assignOperator = function (btnContent) {
  curOperator !== "" && operate();
  curOperator = btnContent;
};

//operators and clear functions /////////////////

const add = function (firParam, secParam) {
  firNumber = parseInt(firParam) + parseInt(secParam);
  updateScreen();
};
const substract = function (firParam, secParam) {
  firNumber = parseInt(firParam) - parseInt(secParam);
  updateScreen();
};
const multiply = function (firParam, secParam) {
  firNumber = parseInt(firParam) * parseInt(secParam);
  updateScreen();
};
const divide = function (firParam, secParam) {
  firNumber = parseInt(firParam) / parseInt(secParam);
  updateScreen();
};

const updateScreen = function () {
  screen.textContent = firNumber;
};

const clear = function () {
  if (shouldClearInput && shouldClearCalculation) {
    firNumber = secNumber = curOperator = "";
    screen.textContent = firNumber;
    console.log("clear function called with first option");
    shouldClearInput = shouldClearCalculation = false;
  } else if (!shouldClearCalculation) {
    secNumber = curOperator = "";
    shouldClearInput = false;
  }
};

//event listeners

Array.from(operatorBtns).forEach((btn) =>
  btn.addEventListener("click", assignOperator.bind(this, btn.textContent))
);
Array.from(numberBtns).forEach((btn) =>
  btn.addEventListener("click", assignNumbers.bind(this, btn.textContent))
);

sumBtn.addEventListener("click", operate.bind(this, sumBtn.textContent));
clearBtn.addEventListener("click", function () {
  shouldClearCalculation = true;
  shouldClearInput = true;
  clear();
});
