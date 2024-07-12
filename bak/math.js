function getRandom(min, max) {
   const result = Math.random() * (max - min) + min;
   return Math.round(result); 
}


console.log(getRandom(-100, 100));