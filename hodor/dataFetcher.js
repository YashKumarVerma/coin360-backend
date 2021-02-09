const axios = require("axios").default;
const { CONFIG } = require("../config");

const dataFetcher = async () => {
  const { data } = await axios.get(CONFIG.api);
  return data;
};

module.exports = { dataFetcher };
