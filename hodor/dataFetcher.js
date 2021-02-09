const axios = require("axios").default;

const dataFetcher = async () => {
  const { data } = await axios.get("http://localhost:3000/hydrate/1/2");
  return data;
};

module.exports = { dataFetcher };
