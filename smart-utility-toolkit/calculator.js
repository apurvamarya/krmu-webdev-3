// calculator.js
// CLI-based calculator using process.argv
// Usage: node calculator.js <operation> <num1> <num2>

console.log("Calculator started...");

const args = process.argv.slice(2);
const [operation, a, b] = args;

const num1 = Number(a);
const num2 = Number(b);

console.log(`Operation requested: ${operation}`);
console.log(`Inputs received: ${a}, ${b}`);

if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("Error: Invalid input. Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    if (num2 === 0) {
      console.log("Error: Division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log(`Error: Unknown operation "${operation}". Supported operations: add, sub, mul, div`);
    process.exit(1);
}

console.log(`Result: ${result}`);
console.log("Calculator finished.");