// My answer 

// function countTruthy(array) {
//    let temp = [];
//    for (let key of array) {
//       if ((typeof key !== undefined) && (key !== null) && ( key !== false) && (key !== NaN) && (key !== 0) && (key !== '')   ) {
//          temp.push(key);
//          console.log(temp.length);
//       } 
//    }

// }


// Video Answer 
function countTruthy(array) {
   let count = 0;
   for (let value of array)
      if (value)
         count++;
   return count;
}



const array = ['or', 'blue', null, true, false, '', 'blue', 'green'];
console.log(countTruthy(array));


// const myName = 'Mosh'; // Truthy 
// const blank = ''; //Falsy
// const isActive = true; // Boolean True

// if (myName) console.log('Hello');
// if (blank) console.log('Never gonna see me');

// Falsy: 
// undefined 
// null 
// '' 
// false 
// 0 
//NaN
