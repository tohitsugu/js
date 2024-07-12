const numbers = [1, 2, 3, 1, 4]; 

console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));
console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));


const courses = [
   { id: 1, name: 'a'},
   { id: 2, name: 'b'},
   { id: 3, name: 'c'},
];

console.log(courses.includes({ id: 1})); // DOES NOT WORK! 

const course = courses.find(function(course) {
   return course.name === 'a';
});

const index = courses.findIndex(function(course) {
   return course.name === 'a';
});

console.log(course); 
console.log(index); 

for (let item of courses)
   if (item.name) console.log(item.name,item.id);

const a = courses.find(course => course.id === 2);

console.log(a.name, a.id);