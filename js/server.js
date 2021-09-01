const port = 5002;

// const http = require("http");

// const server = http.createServer(function (req, res) {
//   console.log(`user visited ${req.url}`);
//   res.end("Hello! Here is Narciso. Welcome to my Node.js Server");
// });

// server.listen(port);
// console.log("listening on http://localhost:" + port);
// // { server.listen(3000); console.log("listening on http://localhost:3000");}

const express = require("express");

const app = express(); //stands for one server

app.get("/", function (req, res) {
  res.end("Welcome to my site!");
});

app.get("/complement", function (req, res) {
  res.end("You look nice today");
});

app.listen(port);
console.log("listening on http://localhost:" + port);
// console.log("listening on http://localhost:3000");
