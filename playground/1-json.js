const fs = require('fs');

/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJson = JSON.stringify(book);
fs.writeFileSync('1-json.json',bookJson);
*/

/*
const bookJson = JSON.stringify(book);
console.log(bookJson);


const parseData = JSON.parse(bookJson);
console.log(parseData.title); */

let dataBuffer = fs.readFileSync('1-json.json');
let dataJson = dataBuffer.toString();
let parseData = JSON.parse(dataJson);
console.log(parseData.title);