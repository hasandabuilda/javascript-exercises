const ftoc = function(temp) {
  let celsius = (temp - 32) * 5 / 9;
  return Number(celsius.toFixed(1));
};

const ctof = function(temp) {
  let fahrenheit = temp / 5 * 9 + 32;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
