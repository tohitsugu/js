function showStars(rows) {
   for (let row = 1; row <= rows; row++ )  {
      let pattern = '';
      for (let i = 0; i < row; i++)
         pattern += '*';
      console.log(pattern);
   }

   for (let row = rows - 1; row >= 1; row--) {
      let pattern = '';
      for (let i = 0; i < row; i++ )
         pattern += '*';
      console.log(pattern);
   }
   
}

// function repeat(word, length) {
//    for (let word = '*'; word.length < length; word += '')
//       return word;
// }


// function showStars(rows) {
//    let star = '*';
//    for (let i=1; i <= rows; i++ )
//       console.log(star.repeat(i));
// }
//

showStars(100);

