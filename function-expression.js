// function Declaration
function walk() {
   console.log(walk);
}

// Annoymous Function Expression
const run = function() {
   console.log('run');
};

// Named Function Expression
let run2 = function walk() {
   console.log('run');
};

run();
let move = run;
move();