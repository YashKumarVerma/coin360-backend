/**
 * fast i/o based operations for market data
 */
const { client } = require("./");

/**
 * @param {string} marketName name of market current operation operates
 */
const getMarketData = (marketName) => {
  return new Promise((resolve, reject) => {
    client.get(marketName, (err, data) => {
      if (err) {
        resolve({});
      } else if (data != null) {
        resolve(JSON.parse(data));
      } else {
        resolve({});
      }
    });
  });
  console.log(data);
};

module.exports = {
  getMarketData,
};
