const repeatString = function(string, num) {
    if (num >= 0) {
        for (i = 0; i <= num; i++) {
            return string.repeat(num);
        }
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
