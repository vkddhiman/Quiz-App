const vinod = {
  firstName : 'Vinod',
  lastName : 'Kumar',
  age : 1994, //Number value
  job : 'Student', //String value
  friends : ['Sanjay', 'Anoop', 'Rahul'], //Array value
  hasDriversLicense : true, //Boolean value

  // calcAge : function(age) {   //Function value
  //   return  2022 - age
  // }

  // calcAge : function() {   //Function value
  //   console.log(this);
  //   return  2022 - this.age
  // }

  calcAge : function() {   //Function value
    this.age1 = 2022 - this.age
    return this.age1 ;
  },

  getSummary : function(){
    return `${this.firstName} is a ${this.calcAge()} years old ${vinod.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. `
  }
}
console.log(vinod.getSummary())
// Any function that is attached to an object called as method

// const calcAge = function(age) {
//   return  2022 - age
// }

// const vinodAge = vinod.calcAge(1994);
// console.log(vinodAge);
console.log(vinod.calcAge());
// console.log(vinod['calcAge'](1994));
console.log(vinod.age1);
console.log(vinod.age1);
console.log(vinod.age1);
