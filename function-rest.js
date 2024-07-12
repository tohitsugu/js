// function sum(...args) {
//    // find largest number
//    // return args.reduce((a, b) => (a > b) ? a : b);
//    return args
//       // .sort((a, b) => b - a)
//       .reduce((a, b) => a + b)
   
// }

function sum(discount, ...prices) {
   const total = prices.reduce((a, b) => a + b);
   // const tax = total * discount; 
   // return total - tax; 
   return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));