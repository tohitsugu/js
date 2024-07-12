const now = new Date();
const date1 = new Date('May 11, 2018 09:00');
const date2 = new Date(2018, 0, 13, 13, 59, 0o3);

console.log(now.getTimezoneOffset());

now.setFullYear(1832);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());


console.log(`
${now}, 
${date1},
${date2},
`);