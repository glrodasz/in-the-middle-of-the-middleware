const express = require("express");
const app = express();

// Middlewares
function helloWorldMiddleware(req, res, next) {
  console.log("hello world");
  next();
}

function goodbyeWorldMiddleware(req, res, next) {
  console.log("goodbye world");
  next();
}

app.get("/", helloWorldMiddleware, goodbyeWorldMiddleware, function(
  req,
  res,
  next
) {
  res.json({ resource: { human: { name: "Jhon", lastname: "Doe" } } });
});

app.get("/error", [helloWorldMiddleware, goodbyeWorldMiddleware], function(
  req,
  res,
  next
) {
  res.status(401).json({ error: "Unauthorized" });
});

const server = app.listen(8000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
