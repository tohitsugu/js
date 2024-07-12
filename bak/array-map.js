const numbers = [1, 2, 3, 4, 5, -1, -2, 0, -3 , -4];

const filtered = numbers
   .filter(n => n >= 0)
   .sort();

const items = numbers
   .filter(n => n >= 0)
   .map(n => ({ value: n }))
   .filter(obj => obj.value > 1 )
   .map(obj => obj.value);

const list = filtered.map(n => '<li>' + n +'</li>');

// const items = filtered.map(n => {
// const obj = { value: n }
// return obj;
// });

// const items = filtered.map(n => {
//    return { value: n }
// });

// const items = filtered.map(n => ({ value: n }));




const html = '<html><ul>' + list.join('') + '</ul></html>';




console.log(html);
// document.write(html);
