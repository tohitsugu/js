// String primitive
const message = '  This is\n my first\t message  ';
console.log(message);
console.log(message.length);
console.log(message[5]);
console.log(message.includes('my'));
console.log(message.startsWith('This'));
console.log(message.endsWith('e'));
console.log(message.indexOf('This'));
console.log(message.toUpperCase());
console.log(message.replace(' is', ' is\n not'));
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());
console.log(message.split(''));

// console.log(message.repeat(4));
console.log(typeof message);

// String object
const another = new String('hi ');
console.log(another);
console.log(another.repeat(3));
console.log(typeof another);

