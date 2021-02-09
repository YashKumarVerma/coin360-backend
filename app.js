/**
 * bootstrap a simple express.js application
 */
const express = require("express");
const app = express();
const { hydrate } = require("./workers");
const { getMarketData } = require("./repository/market");
const { startUpdater, stopUpdater } = require("./hodor");
const { user } = require("./logger/logger");
const { CONFIG } = require("./config");
const cors = require("cors");

app.use(cors());

app.get("/", (_, res) => {
  res.json({
    firstCall: `${CONFIG.server}/hydrate`,
    subsequentcall: `${CONFIG.server}/hydrate/20/30`,

    updater: {
      start: `${CONFIG.server}/updater/start`,
      stop: `${CONFIG.server}/updater/stop`,
    },
  });
});

/** routes to send data to clients */
app.get("/hydrate", (req, res) => {
  res.json(hydrate(0, 20));
});

app.get("/hydrate/:start/:end", (req, res) => {
  const { start, end } = req.params;
  res.json(hydrate(start, end));
});

/** to get details about any ongoing pair */
app.get("/market/:pair", async (req, res) => {
  const { pair } = req.params;

  user(`requesting data of ${pair}`);
  const data = await getMarketData(pair);
  res.json(data);
});

/** to control live data update feature */
app.get("/updater/start", (req, res) => {
  res.json({ running: startUpdater() });
});

app.get("/updater/stop", (req, res) => {
  res.json({ running: stopUpdater() });
});

/** listen for connections */
app.listen(3000, () => {
  console.log(`listening on port ${CONFIG.server}`);
});
