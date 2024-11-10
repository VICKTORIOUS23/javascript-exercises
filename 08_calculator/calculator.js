const add = function(para1, para2) {
    return para1 + para2;
	
};

const subtract = function(para3, para4) {
    return para3 - para4;
	
};

const sum = function(array) {
    return array.reduce((total, current) => total + current, 0);

};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let result = 1;
  for (let i = a; i > 0; i--) {
    result *= i;
  }
  return result;
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
