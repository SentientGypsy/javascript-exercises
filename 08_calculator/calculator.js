const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
  return numOne - numTwo;
	
};

const sum = function(arr) {
  if (arr.length !== 0 && arr.length > 1) {
	  const sumOfArray = arr.reduce((total, currentItem) => {
      return total + currentItem;
    }, 0);
    return sumOfArray;
} else if(arr.length === 1) {
  return arr[0];
} else {
    return 0;
}
};

const multiply = function(arr) {
  if (arr.length !== 0 && arr.length > 1) {
	  const productOfArray = arr.reduce((total, currentItem) => {
      return total * currentItem;
    }, 1);
    return productOfArray;
} else if(arr.length === 1) {
  return arr[0];
} else {
    return 0;
}
};

const power = function(numberOne, numberTwo) {
  return numberOne ** numberTwo;
	
};

const factorial = function(num) {
  let totalProduct = 1;
	for(i = num; i > 0; i--){
    totalProduct *= i;
  }
  return totalProduct;
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
