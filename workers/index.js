const data = require("../data.json");
const _ = require("lodash");

const marketData = data.markets;

/**
 * data to be fed to client side on first wash
 */
const firstWash = () => {
  return hydrate(0, 100);
};

/**
 * Method to return segments of data to user
 * @param {number} start start index of data to send
 * @param {number} end end index of data to send
 */
const hydrate = (start, end) => {
  return marketData.filter((value, index) => {
    return index >= index && index <= end;
  });
};

/**
 * methods exported to be consumed by controllers
 */
module.exports = {
  firstWash,
  hydrate,
};
