const sumAll = function(begin, end) {
    if ((begin < 0) || (end < 0)) {
        return "ERROR";
    }
    if ((typeof(begin) != "number") || (typeof(end) != "number")) {
        return "ERROR";
    }

    let small, big;
    if (end >= begin) {
        small = begin;
        big = end;
    }
    else {
        small = end;
        big = begin;
    }

    let sum = 0;
    for (let num = small; num <= big; num++) {
        sum += num;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
