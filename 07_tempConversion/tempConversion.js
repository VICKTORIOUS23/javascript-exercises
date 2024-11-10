const convertToCelsius = function(faren) {
  let para1 = (((faren - 32) * 5) / 9);
  let para2 = para1.toFixed(1);
  return Number(para2);
};

const convertToFahrenheit = function(cels) {
  let para3 = (((cels * 9) / 5) + 32);
  let para4 = para3.toFixed(1);
  return Number(para4);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
