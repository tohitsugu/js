const numbers = [2, 3, 4, 1];
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.reverse(); 
console.log(numbers);

const courses = [
   {id: 1, name: 'Node.js' },
   {id: 2, name: 'javaScript' },
];


courses.sort(); // this doesn't work for objects

courses.sort(function(a, b) {
   // a < b => -1
   // a > => 1
   // a === b => 0

   if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
   if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
   return 0; 
}); 
 
console.log(courses);