// Speed Limit = 70
// every +5 over --> 1 point
// 12 pointa = suspended
//Math.floor(1.3)


function checkSpeed(speed) {
   const speedLimit = 70; 
   const mphPerPoints = 5;
   
   if (speed < speedLimit + mphPerPoints) {
      console.log('Ok');
      return;
   }

   const points =  Math.floor((speed - speedLimit) / mphPerPoints);
   if (points >= 12) 
      console.log('Suspended');
   else if (points === 1)
      console.log(points + ' point');
   else 
      console.log(points + ' points');   
}

checkSpeed(175);


// function checkSpeed(speed) {
// speed = Math.floor(speed);

// let points = 0; 
// let limit = 130;

// if (speed <= 74) 
//    return 'Ok';

// if (speed >= 75 && speed < limit ) 
//    return '1 point';
// else if (speed >= 80 && speed < limit)
//    return '2 points';
// return 'License suspended';      

// }

