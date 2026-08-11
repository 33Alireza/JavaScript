const currentYear = 2026;

// Math Operators
const ageOne = currentYear - 2006;
const ageTwo = currentYear - 1994;
console.log(ageOne, ageTwo);

console.log(ageOne * 2, ageOne / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Alireza";
const lastName = "Yousefzadeh";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageOne > ageOne); // >, <, >=, <=
console.log(ageTwo >= 18);

const isFullAge = ageTwo >= 18;
console.log(isFullAge);

console.log(currentYear - 1991 > currentYear - 2018);