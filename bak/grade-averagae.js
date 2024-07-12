const array = [60, 70, 60];
// Average = 80 + 80 + 50 / 3 = 70

// 1-59: F 
// 60-69: D 
// 70-79: C 
// 80-89: B
// 90-100: A 



console.log('Final Grade:',calculatedGrade(array));

// function calculatedGrade(marks) {
//    let sum = 0;
//    for (let grade of marks) 
//       sum += grade;

//    console.log('Total points:',sum);
//    let average =  sum / marks.length;
//    console.log('GPA: ', average);

//    if (average >= 60 && average <= 69) return 'D';
//    else if (average >= 70 && average <= 79) eturn 'C';
//    else if (average >= 80 && average <= 89) return 'B';
//    else if (average >= 90) return 'A';
//    return 'F';

// }

function calculatedGrade(marks)  {
   const average = calculateAverage(marks);
   if (average < 60) return 'F';
   if (average < 70) return 'D';
   if (average < 80) return 'C';
   if (average < 90) return 'B';
   return 'A';
}

function calculateAverage(array) {
   let sum = 0;
   for (let value of array)
      sum += value;
   return sum / array.length;
}