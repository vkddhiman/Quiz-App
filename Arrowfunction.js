const calAge = birthYear => 2022 - birthYear;
const age = calAge(1994);
console.log(age);

// const yearsUntilRetiremnet = birthYear => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// }

// const retirementLeft = yearsUntilRetiremnet(1994);
// console.log(retirementLeft); 

const yearsUntilRetiremnet = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} year`
}

const retirementLeft = yearsUntilRetiremnet(1994, 'Vinod');
console.log(retirementLeft);