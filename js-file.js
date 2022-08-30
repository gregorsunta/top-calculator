"use strict";

let firNumber = "";
let secNumber = "";
let curOperator = "";
let shouldClearInput = false;
let shouldClearCalculation = false;
let screen = document.getElementById("display");

const sumBtn = document.querySelector(".btn-sum");
const operatorBtns = document.getElementsByClassName("btn-operator");
const numberBtns = document.getElementsByClassName("btn-num");

screen.textContent = "";

const operate = function (btnContent) {
  console.log(curOperator + "passed the cur operator to operate");
  curOperator === "+" && add(firNumber, secNumber);
  curOperator === "-" && substract(firNumber, secNumber);
  curOperator === "*" && multiply(firNumber, secNumber);
  curOperator === "/" && divide(firNumber, secNumber);
  shouldClearInput = true;
  //and other buttons
};

//assign functions /////////////////
const assignNumbers = function (btnContent) {
  screen.textContent = btnContent;
  firNumber === "" ? (firNumber = btnContent) : (secNumber = btnContent);
  console.log(firNumber + " This is the first number");
  console.log(secNumber + " This is the second number");
};

const assignOperator = function (btnContent) {
  curOperator = btnContent;
};

//operators and clear functions /////////////////

const add = function (firParam, secParam) {
  console.log("passed into add function");
  screen.textContent = firNumber = parseInt(firParam) + parseInt(secParam);
  shouldClearInput = true;
  clear();
};
const substract = function (firParam, secParam) {
  screen.textContent = firNumber = parseInt(firParam) - parseInt(secParam);
  shouldClearInput = true;
  clear();
};
const multiply = function (firParam, secParam) {
  screen.textContent = firNumber = parseInt(firParam) * parseInt(secParam);
  shouldClearInput = true;
  clear();
};
const divide = function (firParam, secParam) {
  screen.textContent = firNumber = parseInt(firParam) / parseInt(secParam);
  shouldClearInput = true;
  clear();
};

const clear = function () {
  if (shouldClearInput && shouldClearCalculation) {
    firNumber = "";
    secNumber = "";
    curOperator = "";
    shouldClearInput = false;
    shouldClearCalculation = false;
  } else if (shouldClearInput) {
    secNumber = "";
    curOperator = "";
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
