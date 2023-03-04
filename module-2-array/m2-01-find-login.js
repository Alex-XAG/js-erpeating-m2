// //  Write a script of find login
// - If login is absend, withdraw message "User [login] is not found"
//     - if we found login, withdraw message 'User [login] found'

//     - 1. by for
//     - 2. By for...of
//     - 3. logic break;
//     - 4. Method includes()

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = `User ${loginToFind} is not found`;

// Iteration by for
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = `User ${loginToFind} found`;
//     break; /// when login is founded, need to use break for stop cycle
//   }
// }

/////////////////////////////////////// for...of
// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `User ${loginToFind} found`;
//     break; /// when login is founded, need to use break for stop cycle
//   }
// }

// console.log(message);

////////////////////// Includes()///////// Declarative code

// const message = logins.includes(loginToFind)
//   ? `User ${loginToFind} found`
//   : `User ${loginToFind} is not found`;

// console.log(message);

////// Decision by func    for///////

// const findLogin = function (allLogins, loginToFind) {
//   // console.log(allLogins);
//   // console.log(loginToFind);

//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `User ${loginToFind} is found`;
//     }
//   }

//   return `User ${loginToFind} is not found`;
// };

/////////////////////////////////////////Decision by Ternarnii operator/////

const findLogin = function (allLogins, loginToFind) {
  // console.log(allLogins);
  // console.log(loginToFind);

  return allLogins.includes(loginToFind)
    ? `User ${loginToFind} is found`
    : `User ${loginToFind} is not found`;
};

console.log(findLogin(logins, "k1widab3st"));
console.log(findLogin(logins, "sleh"));
console.log(findLogin(logins, "poly1scute"));
console.log(findLogin(logins, "alskeyrf"));
