
// let selectedColors = ['red', 'blue'];
// selectedColors[5] = false;

// console.log(selectedColors);

// typeof selectedColors;
// console.log(selectedColors.length);

// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('Tom', 'F');

// //Calculate 

// function square(number) {
//     return number * number;
// }
// let obj = square(3);

// console.log(obj);
// console.log(square(2));

// let x = 10;
// let y = 3;

// // console.log(x + y);
// // console.log(x ** y);
// // console.log(x % y);
// // console.log(x * y);
// // console.log(x / y);
// // console.log(x - y);
// // console.log(x++);
// // console.log(x);
// console.log(--x);
// console.log(x--);
// console.log(x);

// console.log(x *= 3);

// console.log(x !== 1);

// console.log('1' == 1);
// console.log('1' === 1);
// console.log(true === 1);

// let points = 10;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);

// // true if both operands sar true
// console.log(false && true);

// let highIncome = false;
// let goodCreditScore = false;
// let eligbleForLoan = highIncome || goodCreditScore;
// console.log(eligbleForLoan);

// let applicationRefused = !eligbleForLoan;
// console.log(applicationRefused);

// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);
// console.log(1 ^ 2);

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;
// let myPermission = 0;

// myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission);

// let message = 
//     (myPermission & readPermission) ? 'yes' : 'no';

// console.log(message);

// let s = (2 +3) * 4;
// console.log(s);

// let a = 10;
// let b = a++;
// console.log(b);
// console.log(a);

// for (let i = 0; i <= 5; i++) {
//     if (i % 2 !==0) console.log(i);
// }

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// let j = 0;
// do {
//     if (j % 2 !== 1) console.log(j);
//     j++;
// } while (j <= 5);

// const person = {
//     name: 'Ian',
//     age: 30
// };

// for (let key in person)
//     console.log(key, person[key]);

// person.name;
// person['name'];

// const colors = ['red', 'green', 'blue'];

// for (let index in colors)
//     console.log(index, colors[index]);

// for (let color of colors)
//     console.log(color);

// console.log(isLandscape(1109, 299));

// function isLandscape(width, height) {
//     return (width > height);
// }

// // Factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// let v = createCircle(2);
// console.log(v);

// // Constructor Function 
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw2');
//     } 
// }

// const o = new Circle(4);

// console.log(o);

// let obj = { value: 20 };

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for (let key of Object.keys(circle))
//     console.log(key);

// for (let entry of Object.entries(circle))
//     console.log(entry);

// if ('radius' in circle) console.log('yes');

// // const another = {};

// // for (let key in circle)
// //     another[key] = circle[key];


// //     another['radius'] = circle['radius'];
// //     console.log(another);

// // const another = Object.assign({
// //     color: 'yellow'
// // }, circle);

// const another = { ...circle };

// console.log(another);

// // Template Literals ``

// const again = `This is my 
// first message`;

// console.log(again);

// let name = 'Izn';
// const email = 
// `Hi ${name} ${2 + 3},`;
// console.log(email);

// const numbers = [3, 4];

// //end 
// numbers.push(5, 6);
// // console.log(numbers);

// // Beggining 
// numbers.unshift(0,1,2);

// numbers.splice(2, 0, 'a', 'b');
// console.log(numbers.indexOf('a'));
// console.log(numbers);
// console.log(numbers.includes(0));

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// // console.log(courses.includes({ id: 1, name: 'a' }));

// const coursea = courses.find(function(course) {
//     return course.name === 'a';
// });

// const courseb = courses.find(course => course.name === 'b');


// console.log(courseb);


// const array = [1, 2, 3, 4];
// const last = array.pop();

// console.log(last);
// console.log(array);
// const first = array.shift();
// console.log(first);

// array.splice(2,1);
// console.log(array);

// //array.splice(0, array.length);

// array.length = 0;
// console.log(array);

// const one = [{id: 1}];
// const two = [4, 5, 6];
// // const combined = one.concat(two);

// const combined = [...one, 'abc', ...two];


// one[0].id = 10;

// const slice = combined.slice(1); 
// console.log(combined);
// console.log(slice);

// const copy = [0, ...combined, 7, 8, 9];
// console.log(copy);

// for (let number of copy)
//     console.log(copy[number], number);

// copy.forEach((number, index)  => console.log(index, number));

// const joined = copy.join('---->');
// console.log(joined);

// const messages = 'This is my first message';
// const parts = messages.split(' ');
// console.log(parts);

// const combo = parts.join('-');

// console.log(combo);


// console.log(copy.sort());
// console.log(copy.reverse());

// const someCourses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'JavaScript' },
// ];

// someCourses.sort(function(a, b) {
//     // a < b => -1 
//     // a > b => 1 
//     // a === b => 0
//     const nameA = a.name.toUpperCase()
//     const nameB = b.name.toUpperCase()

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });

// console.log(someCourses);

// const numberz = [1, -1, 2, 0, 4];


// // const filtered = numberz.filter(n => n >= 0);
// const items = numberz
//     .filter(n => n >= 0)
//     //.map(n => '<li>' + n + '</li>'  );
//     .map(n => ({ value: n }))
//     .filter(obj => obj.value >=1 )
//     .map(obj => obj.value);

// console.log(numberz);

// // console.log(filtereds = filtered.map(n => {
// //     return { value: n };
// //     // const objj = { value: n };
// //     // return objj;
// // });

// //const items = filtered.map(n => ({ value: n }));

// console.log(items);

// // const html = '<ul>' + items.join(' ') + '</ul>';
// // console.log(html); 

// console.log(someCourses.sort(function(a, b) {
//     // a < b => -1 
//     // a > b => 1 
//     // a === b => 0
//     const nameA = a.name.toUpperCase()
//     const nameB = b.name.toUpperCase()

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// }));
