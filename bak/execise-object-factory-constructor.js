// const address = {
//    street: 'av',
//    city: 'b', 
//    zipCode: 'c'
// };

function createAddress(street, city, zipCode) {
   return {
      street,
      city,
      zipCode
   }
}

function Address(street, city, zipCode) {
   this.street = street, 
   this.city = city,
   this.zipCode = zipCode
}

const address2 = new Address('d', 'e', 80138);
console.log(address2);

const address1 = createAddress('a', 'b', 95864); 
console.log(address1);

