// Write a script who change register every symbol in string to opposite
// for example if string is "JavaScript", then must be string "jAVAsCRIPT".

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";
/////////////////////////////////// old decision
// for (const letter of letters) {
//   //   console.log(letter);

//   if (letter === letter.toLowerCase()) {
//     // console.log("This letter is in lower case!!! - ", letter);
//     invertedString += letter.toUpperCase();
//   } else {
//     // console.log("This letter is in upper case!!! - ", letter);
//     invertedString += letter.toLowerCase();
//   }
// }

////////////// Good decision!!!!!!!!!!!!!!!!!!!

// for (const letter of letters) {
//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }

// console.log(invertedString);

//////////////Decision by Function!!!!!!!!!!!!!!!!!!!

const changeCase = function (string) {
  const letters = string.split("");
  let invertedString = "";

  for (const letter of letters) {
    invertedString +=
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
  }
  return invertedString;
};

console.log(changeCase("JavaScript"));
console.log(changeCase("ljhCXpo"));
console.log(changeCase("Alex_XAG"));
