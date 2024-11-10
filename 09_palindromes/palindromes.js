const palindromes = function (a) {
    const numLet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    b = a.toLowerCase();
    c = b.split('').filter((character) => numLet.includes(character)).join('');
    rev = c.split('').reverse().join('');

    if (rev === c) {return true;}
    else {return false;}
    


};

// Do not edit below this line
module.exports = palindromes;
