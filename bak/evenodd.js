// My Code 
function showNumbers(limit) {
   const oddNum = 'ODD';
   const evenNum = 'EVEN';

   if (limit < 0){
      for (let i=limit; i <= 0; i++) {
         console.log((i),(i % 2 === 0 ) ? evenNum : oddNum);   
      }   
   }
   for (let i=0; i <= limit; i++) {
      console.log((i),(i % 2 === 0 ) ? evenNum : oddNum);   
   }
}



showNumbers(10);

// Video Code 
// function showNumbers(limit) {
//    for (let i=0; i <= limit; i++) {
      
//       const message = ( i % 2 === 0) ? 'EVEN' : 'ODD';
//       console.log(i, message);
//    }
// }



// showNumbers(1);