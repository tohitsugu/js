

// Factory Function 

function createCircle(radius) {
   return {
      radius,
      draw() { 
         console.log('draw');
      }
   }
}

const myCircle = createCircle(21);
console.log(myCircle);

// Constructor Function 
function Circle(radius) {
   this.radius = radius;
   this.draw = function() {
      console.log('draw');
   }    
} 

const circle = new Circle(34);
console.log(circle);