const numbers = [1, 2, 3, 4];

function includes(array, number) {
   for (let n of array)
      if (number === n)
         return true;
      return false;
}

console.log(includes(numbers, 0));