const repeatString = function(para1, para2) {
    let foo = "";
    if (para2 < 0) {
        return "ERROR";}
    else {    
    for (let i = 1; i <= para2; i++) {
        foo = foo + para1;
    }
    
    return foo;
};
}

// Do not edit below this line
module.exports = repeatString;
