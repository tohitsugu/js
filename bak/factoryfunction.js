

// Factory Function 

function createCircle(radius) {
   return {
      radius,
      draw() { 
         console.log('draw');
      }
   }
}


const circle1 =  createCircle(21);
console.log(circle1);

const circle2 =  createCircle(121);
console.log(circle2);
