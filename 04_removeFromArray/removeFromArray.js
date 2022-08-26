const removeFromArray = function() {
    let arr = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        let index = arr.indexOf(arguments[i]);
        if (index == -1) {
            continue;
        }
        else {
            arr.splice(arr.indexOf(arguments[i]), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;