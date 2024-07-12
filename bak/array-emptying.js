let numbers = [1, 2, 3, 4]; 
let another = numbers; 
console.log(numbers, another);

// Solution 1 -- only use if single reference to array 
// numbers = [];

// Solution 2 -- BEST 
// numbers.length = 0; 

// Solution 3 
//numbers.splice(0, numbers.length);

// Solution 4 

while (numbers.length > 0)
   numbers.pop();

console.log(numbers, another);
// console.log(another);