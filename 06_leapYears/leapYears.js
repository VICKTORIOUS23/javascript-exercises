const leapYears = function(para1) {
    byFour = para1 % 4 === 0;
    byCentury = para1 % 100 === 0;
    byFourCent = para1 % 400 === 0;
    
    if (byFour && (!byCentury || byFourCent)) {
        return true;
    } else {
        return false;
    }


};

// Do not edit below this line
module.exports = leapYears;
