console.log('--------youtube-------')
// youtube.js // 0.1 pts

let url = 'https://www.youtube.com/watch?v=KMU0tzLwhbE';
function youtube (url) {
    let y = url.split("v=");
    let t = y[1];
    let NewUrl = "http://youtu.be/" + t;
    return NewUrl;
}
url = youtube(url);
console.log(url); // http://youtu.be/KMU0tzLwhbE
console.assert(url === 'http://youtu.be/KMU0tzLwhbE');


url = 'https://www.youtube.com/watch?v=AdFU6l4fL_E'
url = youtube(url);
console.log(url); // http://youtu.be/AdFU6l4fL_E
console.assert(url === 'http://youtu.be/AdFU6l4fL_E');

url = 'https://www.youtube.com/watch?v=coNfzdUOw40';
function youtube2 (url) {
    let y = url.split("v=");
    let t = y[1];
    let NewUrl = "http://y2u.be/" + t;
    return NewUrl;
}
url = youtube2(url);
console.log(url); // http://y2u.be/coNfzdUOw40
console.assert(url === 'http://y2u.be/coNfzdUOw40');

url = 'https://www.youtube.com/watch?v=EhkitMSi-ow';
url = youtube2(url);
console.log(url); // http://y2u.be/EhkitMSi-ow
console.assert(url === 'http://y2u.be/EhkitMSi-ow');