console.log('______leftpad_____')
// padleft.js // 0.4 pts
// String existing pad methods not allowed

// 0.1 pts // easy
let txt = 'pad';
let size = 10;
let char = '-';
function LeftPad (txt,size,char) {
    let size2 = size - txt.length
    for (i=0;i<size2;i++){
        txt = char + txt;
    }
    return txt;
}

txt = LeftPad(txt,size,char);

console.log(txt); // -------pad
console.assert(txt === '-------pad');


//--------------------------------------------------------------


// 0.1 pts // medium
txt = 'medium';
size = 10;
char = 'm';
function Leftpad2 (txt,size,char){
    let size2 = size - txt.length
    for (i=0;i<size2;i++){
        txt = `${char}${txt}`
    }
    return txt;
}
txt = Leftpad2(txt,size,char);
// not allowed operator "+" and string methods, like "concat"
// use string templates (interpolation -i.e. strings between ``)
console.log(txt); // mmmmmedium
console.assert(txt === 'mmmmmedium');

// a = 'asdsad'
// txt = `texto  ${a} masi texto`

//-------------------------------------------------------------

// 0.2 pts // hard
txt = 'hard';
size = 15;
char = '\\o/';
// your algorithm here
console.log(txt); //  \o/\o/\o/\ohard
console.assert(txt === '\\o/\\o/\\o/\\ohard');
// BEGIN PATCH
// char = '_-';
char = '-_';
// END PATCH
// your algorithm here
console.log(txt); //  -_-_-_-_-_-hard
console.assert(txt === '-_-_-_-_-_-hard');