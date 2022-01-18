// const friend1 = 'Sanjay';
// const friend2 = 'Anoop';
// const friend3 = 'Rahul';

// const friends = ['Sanjay', 'Anoop', 'Rahul'];
// console.log(friends);

// const year = new Array (1992, 1993, 1996);
// console.log(year);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Sunil';
// console.log(friends);

// // friends = ['alice', 'Mohan']  we can't do like this

// const fisrtName = 'Vinod';
// const vinod = [fisrtName, 'Kumar', 2022 - 1994, 'Student', friends];
// console.log(vinod);
// console.log(vinod.length);

// const calAge = function (birthYear) {
//   return 2022 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[years.length - 1 ]);

// console.log(age1, age2, age3); 

// const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1 ])]
// console.log(ages);


const friends = ['Sanjay', 'Anoop', 'Rahul'];

// Add Elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove Elements
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Anoop'));
console.log(friends.indexOf('John'));

friends.push(23)
console.log(friends.includes('Anoop'));
console.log(friends.includes('John'));
console.log(friends.includes('23'));
console.log(friends.includes(23));


if(friends.includes('Anoop')){
  console.log('You have a friend called Anoop')
}
