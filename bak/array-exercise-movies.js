const movies = [
   { title: 'a', year: 2018, rating: 4.8 },
   { title: 'b', year: 2018, rating: 4.7 },
   { title: 'c', year: 2018, rating: 3 },
   { title: 'd', year: 2018, rating: 4.9 },
];

// All the movies in 2018 with rating > 4 
// Sort them by their rating
// Descending order
// Pick their title

const result = movies
   .filter(m => m.year === 2018 && m.rating >= 4)
   .sort((a, b) => a.rating - b.rating)
   .reverse()
   .map(m => m.rating)

console.log(result);