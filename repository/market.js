/**
 * fast i/o based operations for market data
 */
const { client } = require("./");

/**
 * @param {string} marketName name of market current operation operates
 */
const getMarketData = (marketName) => {
  const data = client.get(marketName.pair);
  console.log(data);
};
