const palindromes = function (string) {
    const brokenString = string.toLowerCase().split("");
    const filteredBrokenString = brokenString.filter((letter) => /[a-z0-9]/.test(letter));
    return filteredBrokenString.join("") === filteredBrokenString.reverse().join("");


};

// Do not edit below this line

module.exports = palindromes;
