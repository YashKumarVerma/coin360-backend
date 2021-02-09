const axios = require("axios").default;
const { CONFIG } = require("../config");
const { hodor, error } = require("../logger/logger");

const dataFetcher = async () => {
  try {
    hodor(`loading data from ${CONFIG.api}`);
    const { data } = await axios.get(CONFIG.api);
    hodor(`loaded data from ${CONFIG.api}`);
  } catch (e) {
    error("reading data from server");
    console.log(e);
  }
  return data.markets;
};

module.exports = { dataFetcher };
