const circle = {
   radius: 1
};

circle.color = 'yellow';
circle.draw = function () {
   console.log('draw');
}


console.log(circle);

delete circle.color; 
console.log(circle);