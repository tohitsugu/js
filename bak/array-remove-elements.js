const numbers = [1, 2, 3, 4]; 

// End 
const last = numbers.pop(); 
console.log(numbers);
console.log(last);

// Beginning 
let first = numbers.shift(); 
console.log(numbers);
console.log(first);

// Middle 
let middle = numbers.splice(1, 1); 
console.log(numbers);
console.log(middle[0]);
