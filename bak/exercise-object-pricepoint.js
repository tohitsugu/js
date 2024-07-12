
// function Blogpost(name, cost) {
//    this.name = name;  
//    this.cost = cost;
// }

// const restaurants = [{ 
//       name: 'cheap',  
//    }, 
//    {
//       name: 'medium', 
//    }, 
//    { 
//       name: 'expensive', 
//    }
// ];

// const placeA = { 
//    name: 'a', 
//    cost: 20
// }; 

// const placeB = { 
//    name: 'b', 
//    cost: 50
// }; 

// const placeC = {
//    name: 'c', 
//    cost: 100
// };



function sort(place) { 
   for (let key in place) {
      if (place['averagePerPerson'] <= 10) console.log('Inexpensive:', key, place[key]);
      if (place['averagePerPerson'] <= 20) console.log('Moderate:', key, place[key]);
      if (place['averagePerPerson'] <= 50) console.log('Expensive:', key, place[key]);
   };
}


// sort(placeA); 
// sort(placeB); 
// sort(placeC); 

// console.log(restaurants);

let priceRanges = [
   { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
   { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
   { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

let places = [
   { name: 'a', averagePerPerson: 5, label: '' },
   { name: 'b', averagePerPerson: 14, label: '' },
   { name: 'c', averagePerPerson: 35, label: '' },
];

places.forEach((element) => {
   if (element.averagePerPerson <= 10) {
      element.label = '$';
      console.log('Inexpensive:', element.averagePerPerson, element.label); 
   }
   else if (element.averagePerPerson <= 20) {
      element.label = '$$';
      console.log('Moderate:',  element.averagePerPerson, element.label);
   }
   else {
      element.label = '$$$';
      console.log('Expensive:',  element.averagePerPerson, element.label);
   }

});

console.log(places);