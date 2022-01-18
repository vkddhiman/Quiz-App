const calAge = function(birthYear) {
  return 2022 - birthYear;
}

const yearsUntilRetiremnet = function(birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0){
    console.log(`${firstName} retires in ${retirement} year`);
    return retirement;
  } else{
    console.log(`${firstName} has already retired`);
    return -1;
  }

  // return `${firstName} retires in ${retirement} year`
}

// const retire = yearsUntilRetiremnet(1994, 'Vinod');
// console.log(retire);

console.log(yearsUntilRetiremnet(1994, 'Vinod'));
console.log(yearsUntilRetiremnet(1950, 'Sanjay'));