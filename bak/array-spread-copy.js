const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];
console.log(combined);

// const slice = combined.slice(); 

const copy = [...combined, {id: 1}];
console.log(copy);