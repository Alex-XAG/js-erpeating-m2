// Writ script of search min number in array
//with condition? that numbers is not repeating (unic).

const numbers = [51, 18, 13, 24, 7, 85, 19];

// let biggestNumber = numbers[0];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log("smallestNumber: ", smallestNumber);

// console.log("biggestNumber: ", biggestNumber);

/////// Decision by function /////////

const findSmallestNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
};

const findBiggestNumber = function (numbers) {
  let biggestNumber = numbers[0];

  for (const number of numbers) {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }
  return biggestNumber;
};

console.log("smallestNumber: ", findSmallestNumber(numbers));

console.log("biggestNumber: ", findBiggestNumber(numbers));
