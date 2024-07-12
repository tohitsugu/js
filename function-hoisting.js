// can call before function is defined
walk(); 

// function Declaration
function walk() {
   console.log('walk');
}
//run(); cannot call before expression defined

// Annoymous Function Expression ()
const run = function() {
   console.log('run');
};
