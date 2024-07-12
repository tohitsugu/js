const numbers = [1, 2, 3, 4];

const output = except(numbers, [3, 4]);
const output2 = except2(numbers, [2]);

console.log(output, output2);

function except2(array, excluded) {
   return array.filter(n => n != excluded)   
}

function except(array, excluded) {
   const output = [];
   for (let element of array)
      if (!excluded.includes(element)) output.push(element);
   return output

}
const negative = numbers.filter(n => n < 0);