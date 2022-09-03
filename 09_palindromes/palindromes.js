const palindromes = function (str) {
    let word = str.replace(/[. ,!?]/g, "");
    let letters = word.toLowerCase();
    for (let i=0; i<letters.length; i++) {
        if (letters[i] != letters[letters.length-i-1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
