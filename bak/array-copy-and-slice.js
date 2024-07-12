// const first = [1, 2, 3];
const first = [{id: 1}];
const second = [4, 5, 6];

// Concat method
const combined = first.concat(second);
first[0].id = 10;

console.log(combined);

// Slice method
const slice = combined.slice(1);
const sliceIndex = combined.slice(2, 3);
const copy = combined.slice();

console.log(slice);
console.log(sliceIndex);
console.log(copy);




