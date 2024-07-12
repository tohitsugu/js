const person = {
   name: 'Ian',
   age: '30'
};

for (let key in person) 
   // console.log(key, person.key);
   console.log(key + ':', person[key]);

const colors = ['blue', 'green', 'blue'];

for (let index in colors)
   console.log(index, colors[index]);