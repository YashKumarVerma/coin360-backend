/**
 * bootstrap a simple express.js application
 */
const express = require("express");
const app = express();

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("listening on port http://localhost:3000");
});
