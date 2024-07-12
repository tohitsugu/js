const numbers = [1, 0, -1, -2, 2, 3, -1, 4, -1, 5, 1, 4];

const count = countOccurrencesSum(numbers, -1);
console.log(count);
const count2 = countOccurrences(numbers, -1);
console.log(count2);

function countOccurrencesSum(array, searchElement) {
   let output = [];
   for (let element of array)
      (element === searchElement) ? output.push(searchElement) : output.push(0)
   return output.reduce((accum, curVal) => accum + curVal);
}
 
function countOccurrences(array, searchElement) {
   // let count = 0; 
   // for (let element of array)
   //    if (element === searchElement)
   //       count ++;
   //    return count;
   return array.reduce((accum, curVal) => { 
      const occurrence = (curVal === searchElement) ? 1 : 0;
      console.log(accum, curVal, searchElement, occurrence);
      return accum + occurrence; 

   }, 0);
   
}