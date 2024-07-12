const numbers = [1, 2, 3, 4, -1, -2, 0];

let sum = 0; 
for (let n of numbers)
   sum += n; 

console.log(sum);

// a = 0, c = 1 => a = 1
// a = 1, c = 2 => a = 3
// a = 3, c = 3 => a = 6
// a = 6, c = 4 => a = 10
// a = 10, c = -1 => a = 9
// a = 9, c = -2 => a = 7 

// const result = numbers.reduce((accumulator, currentValue) => {
//    return accumulator + currentValue;
// }, 0);

// a = 1, c = 1 => a = 2
// a = 2, c = 2 => a = 4
// ... a = 7 

const result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// compare current value with current largest, return larger of the two
const largest = numbers.reduce((a, b) => (a > b) ? a : b)

console.log(result);
console.log(largest);