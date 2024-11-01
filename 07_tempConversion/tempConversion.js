const convertToCelsius = function(number) {
  
  let conversion  = (number - 32) * (5/9);

  return Math.round(conversion * 10) / 10 
};

const convertToFahrenheit = function(number) {
  let conversion = (number * (9/5)) + 32;

  return Math.round(conversion * 10) / 10 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
