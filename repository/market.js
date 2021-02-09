/**
 * fast i/o based operations for market data
 */
const { client } = require("./");
const { repository, error } = require("../logger/logger");

/**
 * @param {string} marketName name of market current operation operates
 */
const getMarketData = (marketName) => {
  repository(`Fetching details for ${marketName}`);
  return new Promise((resolve, reject) => {
    client.get(marketName, (err, data) => {
      if (err) {
        error(`${marketName} blew up`);
        resolve({});
      } else if (data != null) {
        resolve(JSON.parse(data));
      } else {
        repository(`${marketName} miss`);
        resolve({});
      }
    });
  });
};

const setMarketData = (marketName, data) => {
  return new Promise((resolve, reject) => {
    client.set(marketName, JSON.stringify(data), (err, reply) => {
      if (err) {
      }
    });
  });
};

module.exports = {
  getMarketData,
};
