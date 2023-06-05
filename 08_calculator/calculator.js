const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

const multiply = function (numb) {
  let result = 1;
  for (let i = 0; i < numb.length; i++) {
    result *= numb[i];

  } return result;
};

const power = function (a, b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result *= a;

  } return result;
};

const factorial = function (a) {
  if (a === 0 || a === 1) {
    return 1;

  }
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
