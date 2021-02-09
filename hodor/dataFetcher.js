const axios = require("axios").default;

const dataFetcher = async () => {
  const { data } = await axios.get("http://localhost:3000/");
};

module.exports = { dataFetcher };
