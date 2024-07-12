
// Constructor Function 
function Circle(radius) {
   this.radius = radius;
   this.draw = function() {
      console.log('draw');
   }    
} 

Circle.call({}, 2);
Circle.apply({}, [2, 3]);

