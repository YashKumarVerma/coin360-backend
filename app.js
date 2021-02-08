/**
 * bootstrap a simple express.js application
 */
const express = require("express");
const app = express();
const { hydrate } = require("./workers");

app.get("/", (_, res) => {
  res.json({
    navigate: "http://localhost:3000/data",
  });
});

app.get("/hydrate", (req, res) => {
  res.json(hydrate(0, 20));
});

app.get("/hydrate/:start/:end", (req, res) => {
  const { start, end } = req.params;
  res.json(hydrate(start, end));
});

app.listen(3000, () => {
  console.log("listening on port http://localhost:3000");
});
