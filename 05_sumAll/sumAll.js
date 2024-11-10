const sumAll = function(para1, para2) {
  let sum = 0;
  let bigInt=0;
  let smallInt=0;

  if (para1 < 0 || para2 < 0) {return "ERROR"}
    else if (para1 < para2) {smallInt = para1, bigInt = para2}
    else {smallInt = para2, bigInt = para1};
  if (!Number.isInteger(smallInt) || !Number.isInteger(bigInt)) {return "ERROR";} 

    for (let i = smallInt; i <= bigInt; i++) {
        sum += i;
    }
    return sum;



};

// Do not edit below this line
module.exports = sumAll;
