const { setMarketData } = require("../repository/market");

const dataFeeder = (marketData) => {
  marketData.forEach((market) => {
    setMarketData(market.pair, market);
  });
};

module.exports = { dataFeeder };
