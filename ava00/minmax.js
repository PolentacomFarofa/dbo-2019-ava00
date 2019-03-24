console.log('--------min max--------')
// minmax.js // 0.3 pts

// 0.1 pts // easy
let array1 = [5, 4, 6, 8, 4, 10, 8, 3, 2];
let min, max;
function mini (array) {
    min = array[0];
    for(i=0;i<array.length;i++){
        if (min > array[i]) min = array[i];
    }
    return min;
}
function maxi (array) {
    max = array[0]
    for(i=0;i<array.length;i++){
        if (max < array[i]) max = array[i];
    }
    return max;
}
min = mini(array1);
max = maxi(array1);
console.log(min); // 2
console.assert(min === 2);
console.log(max); // 10
console.assert(max === 10);

//-----------------------------------------------------------------------


let array2 = [500, 40, 600, 80, 400, 100, 8000, 30, 2000];
min = array2[0]
max = array2[0]
// 0.2 pts // medium
function mini2 (array){
    for(i=0;i<array.length;i++){
        min = array[i] < min ? array[i] : min;
    };

    return min;
}

function maxi2 (array) {
    for(i=0;i<array.length;i++){
        max = array[i] > max ? array[i] : max;
    };
    return max;
}
min = mini2(array2);
max = maxi2(array2);
// if/else not allowed, Math methods not allowed
// tip: study ternary operator
console.log(min); // 30
console.assert(min === 30);
console.log(max); // 8000
// PATCH
// console.assert(max === 80000);
console.assert(max === 8000);