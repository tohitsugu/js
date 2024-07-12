const numbers = [1, 2, 3, -5, -6, 4];
const second = [];

const allPositive = numbers.every(value => value >= 0 );
const atLeastOnePositive = numbers.some(value => value >= 0 );

if (numbers.every(value => value >= 0 ))
   console.log('yep, all!')
else console.log('nope, not all');

if (numbers.some(value => value >= 0 ))
   console.log('some do!')
else console.log('nope, not even some');


console.log(allPositive);
console.log(atLeastOnePositive);
console.log(second);