function start() {
   for (var i = 0; i < 5; i++) {
      if (true) {
         var color = 'red'; 
      }
   }
   console.log(i, color) // 5??
}

start();

var color = 'red'; // attaches to window object!
let age = 30; 

function sayHi() {
   console.log('hi');
}
