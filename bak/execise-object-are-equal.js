

function Address(street, city, zipCode) {
   this.street = street, 
   this.city = city,
   this.zipCode = zipCode
}

const a1 = new Address('a', 'b', 80138);
const a2 = new Address('a', 'b', 80138);
const a3 = a1; 

// console.log(address1);


// function areEqual(address1, address2) {
//    for (let key in address1, address2)
//       if (address1[key] !== address2[key])
//          console.log('false'); 
//       console.log('true'); 
// }
// console.log(areEqual(a1, a2));

// function areSame(address1, address2) {
//    if (address1, address2)
//       console.log('same'); 
// }
// console.log(areSame(a1, a2));

// Video Answer 

function areEqual(address1, address2) { 
   return address1.street === address2.street &&
      address1.city === address2.city &&
      address1.zipCode === address2.zipCode;
 }

function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(a1, a2));

console.log(areSame(a1, a2));
console.log(areSame(a1, a3));