// Count sum of all shoping cart

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// // 2. сделать переменную total  до цикла

// let total = 0;

// // 1. Перебрать массив

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);

//   // 3. На каждой итерации приплюсовать элемент к total

//   total += cart[i];
// }

// //  2. Resolving by for...of

// for (const value of cart) {
//   total += value;
// }

// console.log("Total: ", total);

// // for use when you need to change element in array (arrElement[i]) in this task for...of don't work.

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   cart[i] = Math.round(cart[i] * 1.1);
// }

/////////////////// Decision by function

const calculateTotalPrice = function (items) {
  console.log(items);

  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
};

const result = calculateTotalPrice(cart);

console.log(calculateTotalPrice([1, 2, 5])); // 6
console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice([100, 200, 300])); // 600
console.log(result);
