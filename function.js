// function logger () {
//   console.log('My name is vinod');
// }

// // calling/running/ invoking
// logger(); 
// logger(); 
// logger();

// function fruitProcessor(apples, orange) {
//   console.log(apples, orange)
//   const juice = `Juice with ${apples} apples, ${orange} orange`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(4,2);
// console.log(appleOrangeJuice);
// console.log(fruitProcessor(4,2));

// const num = Number('23');
// console.log(num);


function calAge1(birthYear) {
  // const age = 2022 - birthYear;
  // return age;
  return 2022 - birthYear;
}

const age1 = calAge1(1994);
console.log(age1);

const calAge2 = function (birthYear) {
  return 2022 - birthYear;
}

const age2 = calAge2(1994);

console.log(age2);
console.log(calAge2(1994));