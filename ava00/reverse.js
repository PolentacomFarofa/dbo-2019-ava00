console.log('-------reverse---------')
// reverse.js // 0.3 pts

// 0.1 pts // easy
let str = 'divaloper';
function reverse (str) {
    let vartemp = str;
    str = '';
    for (i = vartemp.length-1;i>=0;i--){
        str += vartemp[i];
    }
    return str;
}
str = reverse(str)
console.log(str); // repolavid
console.assert(str === 'repolavid');

// 0.2 pts // medium
str = 'programmer';
function reverse2 (str){
    return str.split("").reverse().join("");
}
str = reverse2(str);
// extra variables or constants are not allowed
// except "let i" in the "for"
console.log(str); // remmargorp
console.assert(str === 'remmargorp');