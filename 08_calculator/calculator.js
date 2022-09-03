const add = function(x, y) {
  return (x+y);
};

const subtract = function(x, y) {
	return (x-y);
};

const sum = function(numbers) {
	return numbers.reduce((sum, num) => sum += num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, num) => product *= num, 1);
};

const power = function() {
  let power = 1;
	for (let i=0; i<arguments[1]; i++) {
    power *= arguments[0];
  }
  return power;
};

const factorial = function(n) {
  result = 1;
  for (let i=n; i > 0; i--) {
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
