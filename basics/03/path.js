// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)


const path = require("path");

// join function
const fullpath = path.join('some', 'work', 'ex.txt');
console.log(fullpath);

// extract only path - dirname
const dir = path.dirname(fullpath);
console.log(dir);

// extract only fine name - basename
const fn1 = path.basename(__filename);
console.log(`the file name is ${fn1}`);

// extract only fine name - basename, except for the extention name
const fn2 = path.basename(__filename, '.js');
console.log(`the pure file name is ${fn2}`);