/**
 * bootstrap a simple express.js application
 */
const express = require("express");
const app = express();
const { hydrate } = require("./workers");
const cors = require("cors");

app.use(cors())

app.get("/", (_, res) => {
  res.json({
    firstCall: "http://localhost:3000/hydrate",
    subsequentcall:"http://localhost:3000/hydrate/20/30"
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
