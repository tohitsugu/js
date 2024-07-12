

function showProperies(obj) {
   for (let key in obj) 
      if (typeof obj[key] === 'string')
         console.log(key, obj[key]);
}

// typeof === string 
// for key in obj

const movie = {
   title: 'a',
   releaseYear: 2018, 
   rating: 3.5, 
   director: 's'
};

showProperies(movie);