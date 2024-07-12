const courses = [
   { id: 1, name: 'a'},
   { id: 2, name: 'b'},
   { id: 3, name: 'c'},
];

const course = courses.find(course => course.name === 'a');
const course2 = courses.find(course => course.name === 'b' && course.id === 2);

console.log(course2); 
console.log(course); 