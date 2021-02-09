/**
 * fast i/o based operations for market data
 */
const { client } = require("./");
const { repository } = require("../logger/logger");

/**
 * @param {string} marketName name of market current operation operates
 */
const getMarketData = (marketName) => {
  repository(`Fetching details for ${marketName}`);
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
};

const updateMarketData = () => {};

module.exports = {
  getMarketData,
};
