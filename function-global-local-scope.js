// function start(){
//    const message = 'hi';

//    if (true) {
//       const another = 'bye';
//    }
//    for (let i = 0; i < 5; i++) {
//       console.log(i);
//    }
//    console.log(i)
// }

// global scope -- BAD PRACTICE! 
const color = 'yellow';

function start() {
   // local scope
   const message = 'hi';
   const color = 'blue';
   console.log(color);
}

function stop() {
   const message = 'bye';
}

start()