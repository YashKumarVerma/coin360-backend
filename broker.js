const data = require("./data.json");

const firstWash = () => {
  return data.markets;
};

module.exports = {
  firstWash,
};

console.log(data.markets);
