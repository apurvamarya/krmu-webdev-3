# Smart Utility Toolkit

## Project structure

```text
smart-utility-toolkit/
├── calculator.js
├── app.js
├── server.js
├── fileManager.js
├── dice.js
├── test.txt
├── modules/
│   ├── isEven.js
│   └── logger.js
└── README.md
```

## Requirements

- Node.js installed
- No external npm packages required

## 1. Calculator CLI (`calculator.js`)

Accepts operation and two numbers via `process.argv`.

Run:

```bash
node calculator.js add 10 5
```

Expected:

```text
Result: 15
```

Other examples:

```bash
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5
```

Supported operations: `add`, `sub`, `mul`, `div`. Invalid operations or non-numeric inputs are caught and print an error instead of crashing.

## 2. Custom modules (`app.js`, `modules/isEven.js`, `modules/logger.js`)

`app.js` demonstrates importing and reusing custom modules.

Run:

```bash
node app.js
```

It loops through a list of numbers, uses `isEven()` to classify each as even/odd, and uses the `logger` module to timestamp key steps.

**`modules/isEven.js`** — exports a single function:

```js
const isEven = require("./modules/isEven");

console.log(isEven(10)); // true
console.log(isEven(7));  // false
```

**`modules/logger.js`** — exports a single `log()` function that prefixes messages with a timestamp:

```js
const log = require("./modules/logger");

log("Application started");
```

## 3. HTTP server (`server.js`)

Run:

```bash
node server.js
```

Open:

- `http://localhost:3000/` → Welcome to Node Server
- `http://localhost:3000/about` → About Page
- `http://localhost:3000/contact` → Contact Page
- any other route → 404 Error: Route Not Found

Stop the server with `Ctrl + C`.

## 4. File manager (`fileManager.js`)

Run:

```bash
node fileManager.js
```

Expected output:

```text
Creating File...
File Created
Reading File
Hello Node.js
File Updated
Hello Node.js
Learning FS Module
File Deleted
Handled gracefully: File no longer exists.
```

The script creates `test.txt`, reads it, appends to it (update), reads it again, then deletes it — using `writeFile()`, `readFile()`, `appendFile()`, and `unlink()`. After a successful run, `test.txt` no longer exists in the directory since it's deleted at the end.

## 5. Dice roller (`dice.js`)

Run:

```bash
node dice.js
```

Uses `crypto.randomInt()` to generate cryptographically random values from 1–6, rolled 5 times in a loop and printed to the terminal. This is a standalone script (not designed to be imported into other files).

## Concepts demonstrated

- Node.js CommonJS modules
- `require()` and `module.exports`
- Command-line arguments via `process.argv`
- Node.js `http` module and basic routing
- `fs` file operations (create, read, update, delete)
- `crypto` module for secure randomness
- Custom, reusable modules
- Basic error handling
- Observing synchronous vs. asynchronous execution via `console.log()`