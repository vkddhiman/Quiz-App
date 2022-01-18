const calAge = (a,b,c) => (a+b+c)/3;
// console.log(calAge(3,4,5));

// const scoreDolphins = calAge(44,23,71);
// const scoreKoalas = calAge(65,54,49);
// console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas)  {
  if (avgDolphins >= 2* avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
  }else if (avgKoalas >= 2* avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
  }else{
    console.log('No teams wins...')
  }
}

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(234, 20);

let scoreDolphins = calAge(44,23,71);
let scoreKoalas = calAge(65,54,49);

scoreDolphins = calAge(85, 54, 41)
scoreKoalas = calAge(23,34,27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);