// Write code, wich count sum of all even numbers in array

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// 2. Create var totalEven
let totalEven = 0;

// 1. Iterate over the array

for (const number of numbers) {
  // 3. On every iteration check element for parity
  if (number % 2 === 0) {
    // if number is even sum him to totalEven
    totalEven += number;
  }
}

console.log("Total ", totalEven);
