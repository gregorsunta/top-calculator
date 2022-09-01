"use strict";

const displayOfCurValue = document.querySelector("#calculationDisplay");
const displayOfPrevValue = document.querySelector("#prevCalculationDisplay");
const oppositeBtn = document.querySelector(".btn-opposite");
const clearBtn = document.querySelector(".btn-clear");
const operatorBtns = document.getElementsByClassName("btn-operator");
const numberBtns = document.getElementsByClassName("btn-num");
const fractionBtn = document.querySelector(".btn-fraction");

// let cur = "";
let prevValue = 0;
let operator = "";
let curValue = 0;

const operate = function (a, ope, b) {
  console.log("a: " + a + " ope: " + ope + " b: " + b);
  if (ope === "+") {
    prevValue = add(parseFloat(a), parseFloat(b));
  } else if (ope === "-") {
    prevValue = substract(parseFloat(a), parseFloat(b));
  } else if (ope === "*") {
    prevValue = multiply(parseFloat(a), parseFloat(b));
  } else if (ope === "/") {
    prevValue = divide(parseFloat(a), parseFloat(b));
  }
  operator = "";
  curValue = 0;
  updateDisplay();
  /*   console.log(
    "prevValue: " + prevValue + " ope: " + operator + " curValue: " + curValue
  ); */

  // console.log("operated..");
  console.log("operate()");
};

const displayNumber = function (btnValue) {
  operator === "" && (curValue = prevValue = 0);
  (curValue === " " || curValue === 0) && (displayOfCurValue.textContent = "");
  curValue = displayOfCurValue.textContent += parseFloat(btnValue);
  updateDisplay();
  // console.log("prevValue: " + prevValue + " curValue: " + curValue);
};

const changeOperator = function (ope) {
  //should reassign curValue to prevValue if there is no prevValue
  //should operate with previousOperator if both values exist
  if (prevValue === 0) {
    changeCurToPrev();
    updateDisplay();
  } else if (curValue === 0) {
    //do nothing - I should clean this up
  } else {
    operate(prevValue, operator, curValue);
  }
  operator = ope;
  // console.log("Selected operator: " + operator);
};
const changeCurToPrev = function () {
  prevValue = curValue;
  curValue = 0;
};

const oppositeNumber = function () {
  curValue = curValue * -1;
  updateDisplay();
};

const fractionNumber = function () {
  curValue = curValue * 0.01;
  console.log("percent button pressed");
  updateDisplay();
};

const add = function (a, b) {
  return a + b;
};
prevValue;
const substract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};
const updateDisplay = function () {
  //if float, round to two decimals
  curValue % 1 === 0 && (displayOfCurValue.textContent = parseFloat(curValue));
  prevValue % 1 === 0 &&
    (displayOfPrevValue.textContent = parseFloat(prevValue));
  curValue % 1 !== 0 &&
    (displayOfCurValue.textContent = parseFloat(curValue).toFixed(2));
  prevValue % 1 !== 0 &&
    (displayOfPrevValue.textContent = parseFloat(prevValue).toFixed(2));
};

const clear = function () {
  displayOfCurValue.textContent = curValue = 0;
  displayOfPrevValue.textContent = prevValue = 0;
  updateDisplay();
};

Array.from(numberBtns).forEach((btn) => {
  btn.addEventListener("click", displayNumber.bind(this, btn.textContent));
});
Array.from(operatorBtns).forEach((btn) => {
  btn.addEventListener("click", changeOperator.bind(this, btn.textContent));
});
equalsBtn.addEventListener("click", function () {
  operate(prevValue, operator, curValue);
});
clearBtn.addEventListener("click", clear);
oppositeBtn.addEventListener("click", oppositeNumber);
fractionBtn.addEventListener("click", fractionNumber);
