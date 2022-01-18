// const vinodArray = [
//   'Vinod', 
//   'Kumar', 
//   2022 - 1994, 
//   'Student', 
//   ['Sanjay', 'Anoop', 'Rahul']
// ];

const vinod = {
  firstName : 'Vinod',
  lastName : 'Kumar',
  age : 2022 - 1994,
  job : 'Student',
  friends : ['Sanjay', 'Anoop', 'Rahul']
}

console.log(vinod);

console.log(vinod.lastName);
console.log(vinod['lastName']);

const nameKey = 'Name';
console.log(vinod['first' + nameKey]);
console.log(vinod['last' + nameKey]);

// console.log(vinod.'last' + nameKey)  we can't use in this way  
const intrestedIn = prompt('What do you want to know about vinod? Choose between firstName, lastName, age, job, friends');
console.log(intrestedIn);
console.log(vinod.intrestedIn);
console.log(vinod[intrestedIn]);

if(vinod[intrestedIn]){
  console.log(vinod[intrestedIn]);
} else{
  console.log('Wrong Request! Choose between firstName, lastName, age, job, friends');
}

vinod.location = 'India';
vinod['twitter'] ='@VinodDh'
console.log(vinod);

// Vinod has 3 best friend and his best friend is Anoop

console.log(`${vinod.firstName} has ${vinod.friends.length} friends, and his best friend name is ${vinod.friends[1]} `)