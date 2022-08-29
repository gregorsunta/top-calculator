const prev = 0;

const add = function (cur) {};

const substract = function (cur) {};

const divide = function (cur) {};

const multiply = function (cur) {};

const operate = function (operator, num1, num2) {
  operator === "+" && add(num1, num2);
  operator === "-" && substract(num1, num2);
  operator === "/" && divide(num1, num2);
  operator === "*" && multiply(num1, num2);
};
