// const person = {
//    firstName: 'Ian',
//    lastName: 'French',
//    fullName() {
//       return `${person.firstName} ${person.lastName}`;
//    }
// };

// getters => access properties 
// setters => change (mutate them)

const person = {
   firstName: 'Ian',
   lastName: 'French',
   get fullName() {
      return `${person.firstName} ${person.lastName}`;
   },
   set fullName(value) {
     const parts = value.split(' ');
     this.firstName = parts[0];
     this.lastName = parts[0];

   }
};

person.fullName = 'Thom Smith';
console.log(person);
console.log(person.firstName + ' ' + person.lastName);
console.log(`${person.firstName} ${person.lastName}`);
console.log(person.fullName);

