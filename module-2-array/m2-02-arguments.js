//  Псевдомассив arguments and Array.from and ...
// Old school

// - Array.from()!!!!!!!!

// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// - Operation ... (rest)!!!!!!!!!!!!!!!!!!!!!!!!
// const fn = function (...args) {
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// write a function add for adding any quantity arguments (numbers)

// const add = function (...args) {
//   console.log(args);

//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

//  Write a function filterNumbers(array[, number1, ...]) witch:

// 1. As first argument take array of numbers
// 2. After first argument may be any quantity of other arguments witch will be numbers
// 3. Function must return a new array, witch will have only arguments, begining from second, who have an analog in original array

const filterNumbers = function (array, ...args) {
  // console.log(array);
  // console.log(args);

  const filteredArray = [];

  for (const element of array) {
    if (args.includes(element)) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2,3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30,15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]
