// const friends = ["Mango", "Kiwi", "POly", "Ajax"];
// console.log(friends.length);

// console.log(friends[2]); // Poly
// console.log(friends[4]); // undefined

// friends[1] = "qweqwe"; // Kiwi was changed to qweqwe

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

//////////////////////////////////////////////

// Передача по ссылке
//     - Примитивы и сложные типы
// - Ссылочное равенство

// let a = 10;
// let b = a;

// console.log(a); // 10
// console.log(b); // 10

// a = 20;

// console.log(a); // 20
// console.log(b); // 10

////////////

const a = [1, 2, 3];
const b = a;

console.log("a", a); // [1,2,3]
console.log("b", b); // [1,2,3]
console.log(a === b); // false

a[0] = 500;

console.log("a", a); // [500,2,3]
console.log("b", b); // [500,2,3]
console.log(a === b); // true --> be cause its LINK
console.log([1, 2, 3] === [1, 2, 3]); // false

///////////////// Iteration of array

// for and for...of

const friends = ["Mango", "Kiwi", "POly", "Ajax"];

console.log(friends);

const lastIndex = friends.legth - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//   friends[i] += "-1";
//   console.table(friends[i]);
// }

for (const friend of friends) {
  console.log(friend);
}
