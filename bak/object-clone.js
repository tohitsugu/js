const circle = {
   radius: 1,
   draw() {
      console.log('draw');
   }
};





const another = { ...circle }; 


// const another = Object.assign({
//    color: 'yellow'
// }, circle);

// const another = Object.assign({}, circle);
// const another = {};

// for (let key in circle) 
//    another[key] = circle[key];

// another['radius'] = circle['radius']; 

console.log(another);