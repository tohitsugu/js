const circle = {
   radius: 1,
   location: {
      x: 1, 
      y: 1
   },
isVisible: true,
draw: function() { 
   console.log('draw');
   }
};

circle.color = 'yellow';
console.log(circle);

circle.draw(); // method 