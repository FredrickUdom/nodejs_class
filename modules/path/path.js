const path = require('path');
// console.log(path.sep)
const filePath = path.join('content', 'path.txt');

// console.log(filePath)
const base = path.basename(filePath);
// console.log(base)

const resolve = path.resolve('content', 'path.txt');
console.log(resolve)