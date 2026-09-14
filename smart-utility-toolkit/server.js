// server.js
// Basic HTTP server using the core http module

const http = require("http");

const PORT = 3000;

console.log("Starting server setup...");

const server = http.createServer((req, res) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/plain");

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end("Welcome to Node Server");
      break;

    case "/about":
      res.statusCode = 200;
      res.end("About Page");
      break;

    case "/contact":
      res.statusCode = 200;
      res.end("Contact Page");
      break;

    default:
      res.statusCode = 404;
      res.end("404 Error: Route Not Found");
      break;
  }

  console.log(`Response sent for: ${req.url}`);
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});