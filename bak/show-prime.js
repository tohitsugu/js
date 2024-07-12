function showPrimes(limit) {
   for (let number = 2; number <= limit; number++) 
      // let isPrime = factor(number);         
      if (isPrime(number)) console.log(number);   
}

function isPrime(number) {
   for (let factor = 2; factor < number; factor++) 
      if (number % factor === 0) 
         return false;         

      return true;
}

// function factor(number) {
//    let isPrime = true;
//    for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//          isPrime = false; 
//          break;
//       }
//    }
//    return isPrime;
// }


// function showPrimes(limit) {
//    let primes = [];
//    for (let i = 2; i <= limit; i++) 

//       if (limit % i === 0 && i % 2 !== 0 && i % limit === 0 || i % 2 !== 0 ) primes.push(i);

   
//    for (let number of primes) console.log(number);   
// }

showPrimes("\x31\x32");