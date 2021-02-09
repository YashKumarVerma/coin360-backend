const axios = require("axios").default;
const { CONFIG } = require("../config");
const { hodor } = require("../logger/logger");

const dataFetcher = async () => {
  hodor(`loading data from ${CONFIG.api}`);
  const { data } = await axios.get(CONFIG.api);
  hodor(`loaded data from ${CONFIG.api}`);
  return data.markets;
};

module.exports = { dataFetcher };
