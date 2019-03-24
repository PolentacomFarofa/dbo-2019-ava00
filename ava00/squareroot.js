console.log('square')
// squareroot.js // 0.4 pts

// 0.1 pts // easy
let n1 = 9;
let sqrt;
function sqrt1 (n){
    let t = Math.sqrt(n);
    console
    return t;
}
sqrt = sqrt1(n1);
// your algorithm here
console.log(sqrt); // 3
console.assert(sqrt === 3);

// 0.1 pts // medium
let n2 = 12;
function sqrt2(n) {
    let t = n**(1/2)
    return t
}
sqrt = sqrt2(n2)
// your algorithm here
// Math.sqrt not allowed
// REPLACE #PATCH
// console.log(sqrt); // aproximadamente 1.0958
// console.assert(sqrt >= 1.0957 && sqrt <= 1.0959);
// BY
console.log(sqrt); // aproximadamente 3.4641
console.assert(sqrt >= 3.4640 && sqrt <= 3.4642);
// END PATCH

// 0.2 pts // hard
let n3 = 55;
// your algorithm here
// Math and operator power (**) are not allowed
// tip: try a well known algorithm like the babylonian method
console.log(sqrt); // aproximadamente 7.4161
console.assert(sqrt >= 7.4160 && sqrt <= 7.4162);