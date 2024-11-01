const sumAll = function(firstNum, secondNum) {
     let min = firstNum;
     let max = secondNum;

     if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return "ERROR";
     }
     if (isNaN(firstNum) || isNaN(secondNum)) {
        return "ERROR";
     }
     if (secondNum < 0 || firstNum < 0) {
        return "ERROR";
     }
     if (secondNum < firstNum) {
        max = firstNum; 
        min = secondNum;
     }



    let total = 0;
    for (i=min; i <= max; i++) {
       total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
