const numbers = [1, 2, 3, 3, 1, 6, 1, 1, 1, 4];

const max = maxReduce(numbers);

console.log(max);

// function getMax(array) {
//    if (array.length === 0) return undefined; 

//    array.sort();
//    return array.slice(-1);

// }

function getMax(array) {
   if (array.length === 0) return undefined;

   let max = array[0];

   for (let key in array)
      if (array[key] > max)
         max = array[key]; 
      return max; 
   // for (let i = 1; i < array.length; i++)
   //    if (array[i] > max)
   //       max = array[i];
   // return max;
}

function maxReduce(array) {
   if (array.length === 0) return undefined;

   return array.reduce((a, b) => (a > b) ? a : b);

   array.reduce((a, b) => {
      console.log(a, b);

   })
   // if (cur > accum) return cur;
   // return accum; 
}
