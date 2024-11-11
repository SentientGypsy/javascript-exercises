const fibonacci = function(index) {
    const fibboArray = [0, 1]; // Start with the first two Fibonacci numbers
    if (index >= 0){
        for (let i = 2; i <= index; i++) {
            const nextNum = fibboArray[i - 1] + fibboArray[i - 2];
            fibboArray.push(nextNum);
        }
    } else {return "OOPS"}
    return fibboArray[index];
};
// Do not edit below this line
module.exports = fibonacci;
