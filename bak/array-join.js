const numbers = [1, 2, 3, 4];
const joined = numbers.join(' ');
console.log(joined);

const message = 'This is my first message'; 
const parts = message.split(' ');
console.log(parts);

const combined= parts.join('-');
console.log(combined);

const title = 'Creating arrays in JavaScript'; 
const urlPart = title.toLowerCase().split(' ');
// console.log(urlPart);

// const url = urlPart.join('-');
console.log (urlPart.join('-'));
// console.log(url);