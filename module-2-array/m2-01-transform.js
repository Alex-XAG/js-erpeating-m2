//  Write a script witch brings together all elements of array in one string
// quantity of elements may be any
// let the elements of the array in the string be separated by a comma
// to begin by for
// then by join()

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

// let string = "";

// for (const friend of friends) {
//     string += friend + ",";
// }

// string = string.slice(0, string.length - 1);

/////// correct  way

const string = friends.join(",");

console.log(string);
