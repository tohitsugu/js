const numbers = [3, 4]; 

// End 
numbers.push(5, 6); 

// Beginnging 
numbers.unshift(1,2);


// Middle 
numbers.splice(-numbers.length, 0, 9);

console.log(numbers);