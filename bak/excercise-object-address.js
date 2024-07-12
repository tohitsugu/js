// street 
// city 
// zipCode 
// showAddress(address)

// const myAddress = {
//    street: '',
//    city: '',
//    zip: 0o0000
// };

// myAddress.street = '1550 Almond Ct.';
// myAddress.city = 'Walnut Creek';
// myAddress.zip = 95864;

const address = {
   street: 'av',
   city: 'b', 
   zipCode: 'c'
};


function showAddress(address) {
   for (let key in address)
      console.log(key, address[key]);
}

showAddress(myAddress);