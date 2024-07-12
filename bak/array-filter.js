const numbers = [1, 2, 3, 0, -4, 5, -1, -2, 4];


const filter = numbers.filter(value => value >= 0 );
console.log(filter);



// positive.push(numbers.filter(value => value >= 0 )); 
const positive = numbers.filter(n => n >= 0 );
const negative = numbers.filter(n => n < 0);

console.log('new arrays:', positive, negative);




const array = [1, 2, 3, -1, 5, -3, 0],
    neg = [],
    pos = array.filter(a => a >= 0 || (neg.push(a), false));

console.log('new arrays:', pos, neg);