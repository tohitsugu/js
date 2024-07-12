const output = fizzBuzz(1);
console.log(output);


//My Solution
function fizzBuzz(input) {
   if (input % 15 === 0)
      return 'FizzyBuzz';

   if (input % 3 === 0) 
      return 'Fizz';

   else if (input % 5 === 0)
      return 'Buzz'; 

   // return (typeof input !== 'number') ? NaN : input;
   return (input / 1 === input) ? input : NaN;
}



//Video's Solution: 

// function fizzBuzz(input) {
//    if (typeof input !== 'number')
//       return NaN;
   
//    if ((input % 3 === 0) && (input % 5 === 0))
//       return 'FizzBuzz';

//    if (input % 3 === 0)
//       return 'Fizz';
   
//    if (input % 5 === 0)
//       return 'Buzz'; 


//    return input;
// }




// if number div 3 say Fizz
// if number div 5 say Buzz
// if number div 3 & 5 say FizzBuzz
// else print input



