function sum2(a, b) {
   console.log(arguments)
   return a + b;
}

console.log(sum2(1)); // 1 + undefined
console.log(sum2(1, 2, 3, 4, 5)); // 1 + 2 (rest ignored)




function sum() {
   let total = 0;
   for (let value of arguments)
      total += value;
   return total;
}

console.log(sum(1)); 
console.log(sum(1, 2, 3, 4, 5, 6));
