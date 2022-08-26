const leapYears = function(year) {
    if (year % 4) {
        return false;
    }
    else {
        if (year % 400) {
            if (year % 100) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
};

// Do not edit below this line
module.exports = leapYears;
