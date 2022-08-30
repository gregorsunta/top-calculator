"use strict";

let primValue = "";
let tempValue = "";
let operatorValue = "";
let prevBtnValue = "";
let shouldClearTemp = false;
let shouldClearPrim = false;
let shouldClearOperator = false;

let screen = document.getElementById("display");

const sumBtn = document.querySelector(".btn-sum");
const clearBtn = document.querySelector(".btn-clear");
const operatorBtns = document.getElementsByClassName("btn-operator");
const numberBtns = document.getElementsByClassName("btn-num");

screen.textContent = "";
const operate = function () {
  operatorValue === "+" && add(primValue, tempValue);
  operatorValue === "-" && substract(primValue, tempValue);
  operatorValue === "*" && multiply(primValue, tempValue);
  operatorValue === "/" && divide(primValue, tempValue);
  // shouldClearOperator = true;
  shouldClearTemp = true;
  clear();
  updateScreen();
};

const assignNumber = function (btnContent) {
  tempValue += btnContent;
  updateScreen();
  console.log(primValue + ".. this is the primary value");
  console.log(tempValue + ".. this is the temporary value");
  console.log(operatorValue + ".. this is the operatorValue");
};

const assignOperator = function (newOperatorValue) {
  if (newOperatorValue === "-" && !primValue && !tempValue) {
    tempValue = newOperatorValue;
    updateScreen();
  } else if (
    !(primValue || primValue === 0) &&
    (tempValue || tempValue === 0)
  ) {
    primValue = tempValue;
    operatorValue = newOperatorValue;
    shouldClearTemp = true;
    updateScreen();
    clear();
  } else if (((primValue || primValue === 0) && tempValue) || tempValue === 0) {
    operate();
    operatorValue = newOperatorValue;
  } else if (
    (primValue || primValue === 0) &&
    !(tempValue || tempValue === 0)
  ) {
    operatorValue = newOperatorValue;
    console.log("primValue && !tempValue ..happened");
  }
};

const add = function (firParam, secParam) {
  primValue = parseFloat(firParam) + parseFloat(secParam);
};
const substract = function (firParam, secParam) {
  primValue = parseFloat(firParam) - parseFloat(secParam);
};
const multiply = function (firParam, secParam) {
  primValue = parseFloat(firParam) * parseFloat(secParam);
};
const divide = function (firParam, secParam) {
  primValue = parseFloat(firParam) / parseFloat(secParam);
};

const updateScreen = function () {
  if (tempValue) {
    tempValue % 1 === 0 && (screen.textContent = tempValue);
    tempValue % 1 !== 0 &&
      (screen.textContent = parseFloat(tempValue).toFixed(2));
  } else if (tempValue !== "0") {
    primValue % 1 === 0 && (screen.textContent = primValue);
    primValue % 1 !== 0 &&
      (screen.textContent = parseFloat(primValue).toFixed(2));
  }
};

const clear = function () {
  shouldClearTemp && (tempValue = "");
  shouldClearPrim && (primValue = "");
  shouldClearOperator && (operatorValue = "");
  updateScreen();
};

Array.from(operatorBtns).forEach((btn) =>
  btn.addEventListener("click", assignOperator.bind(this, btn.textContent))
);
Array.from(numberBtns).forEach((btn) =>
  btn.addEventListener("click", assignNumber.bind(this, btn.textContent))
);

sumBtn.addEventListener("click", operate.bind(this, sumBtn.textContent));
clearBtn.addEventListener("click", function () {
  shouldClearPrim = true;
  shouldClearTemp = true;
  shouldClearOperator = true;
  clear();
});
