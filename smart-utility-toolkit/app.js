// app.js
// Demonstrates custom module reusability

console.log("app.js started");

const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("app.js execution begins");

const numbers = [4, 7, 10, 15, 22];

log("Checking a list of numbers for even/odd");

numbers.forEach((num) => {
  const result = isEven(num) ? "even" : "odd";
  console.log(`${num} is ${result}`);
});

log("app.js execution finished");

console.log("app.js finished.");