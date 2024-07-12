const circle = {
   radius: 10, 
   draw() {
      console.log('draw');
   }
};


for (let key in circle)
   console.log('first:', key) & console.log('second:', circle[key]);

for (let key of Object.keys(circle))
console.log('another:', key);

for (let entry in Object.entries(circle))
console.log('last one:', entry);

const keyArrays = Object.keys(circle);
const count = keyArrays.length;

for (let i = 0; i < count; i++)
   console.log('count:', i);


if ('draw' in circle) console.log(('yes'));