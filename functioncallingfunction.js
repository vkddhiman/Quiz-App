function cutFruitPieces(fruit) {
  return fruit*4;
}


function fruitProcessor(apples, orange) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(orange);

  console.log(apples, orange)
  const juice = `Juice with ${applePieces} pieces of apples, ${orangePieces} pieces of orange`;
  return juice;
}

const juice = fruitProcessor(2,4)
console.log(juice);